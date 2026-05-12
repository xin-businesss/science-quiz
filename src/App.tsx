import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Atom, 
  BookOpen, 
  ChevronRight, 
  Star, 
  Trophy, 
  RefreshCw, 
  CheckCircle2, 
  XCircle,
  Lightbulb,
  ArrowLeft,
  Key,
  GraduationCap,
  HelpCircle,
  Award,
  Users,
  LogIn,
  LogOut,
  User as UserIcon
} from 'lucide-react';
import { QUIZ_DATA, YearLevel, Chapter, Question } from './data';
import { gradeAnswer, GradeResult, Difficulty } from './gemini';
import Diagram from './components/Diagrams';


type Screen = 'WELCOME' | 'SELECT_LEVEL' | 'SELECT_CHAPTER' | 'SELECT_DIFFICULTY' | 'QUIZ' | 'RESULTS' | 'PROGRESS' | 'LEADERBOARD';

interface ProgressData {
  [chapterId: string]: {
    completed: boolean;
    bestScore: number;
    attempts: number;
    lastUpdated: number;
    difficulty?: Difficulty;
  };
}

interface LeaderboardEntry {
  name: string;
  totalScore: number;
  chaptersCompleted: number;
  lastActive: any;
  rank?: number;
}

const SOUNDS = {
  CORRECT: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
  INCORRECT: 'https://assets.mixkit.co/active_storage/sfx/2020/2020-preview.mp3',
  COMPLETE: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3',
  CLICK: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'
};

const getEncouragement = (avgScore: number, chapters: number) => {
  if (chapters === 0) return "Ready to start your first adventure? 🚀";
  if (avgScore >= 90) return "Absolute Genius! You're a Science Master! 🌟";
  if (avgScore >= 75) return "Great learner! Your science skills are strong! 💪";
  if (avgScore >= 50) return "Consistent progress! Keep exploring! 🌿";
  return "Keep practicing, every explorer starts somewhere! 🌱";
};

const shakeVariants = {
  initial: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  shake: {
    x: [0, -10, 10, -10, 10, -2, 2, 0],
    border: ['2px solid #E5E0D8', '2px solid #D46C6C', '2px solid #D46C6C', '2px solid #E5E0D8'],
    transition: { duration: 0.4 }
  }
};

export default function App() {
  const [screen, setScreen] = useState<Screen>('WELCOME');
  const [prevScreen, setPrevScreen] = useState<Screen | null>(null);
  
  const [userProfile, setUserProfile] = useState<LeaderboardEntry | null>(() => {
    const saved = localStorage.getItem('sparky_profile');
    return saved ? JSON.parse(saved) : null;
  });
  
  const [selectedYear, setSelectedYear] = useState<YearLevel | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>('RECITATION_TABLE');
  const [showDiagram, setShowDiagram] = useState<'photosynthesis' | 'energy-conversion' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Get active questions for selected difficulty
  const activeQuestions = selectedChapter?.questions.filter(q => q.type === difficulty) || [];

  const [studentAnswer, setStudentAnswer] = useState('');
  const [isGrading, setIsGrading] = useState(false);
  const [lastGrade, setLastGrade] = useState<GradeResult | null>(null);
  const [quizResults, setQuizResults] = useState<{ question: Question; grade: GradeResult; answer: string }[]>([]);
  const [showHint, setShowHint] = useState(false);
  
  const [progress, setProgress] = useState<ProgressData>(() => {
    const saved = localStorage.getItem('sparky_progress');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [geminiApiKey, setGeminiApiKey] = useState<string>(() => localStorage.getItem('gemini_api_key') || '');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);

  // Sync API Key to local storage
  useEffect(() => {
    localStorage.setItem('gemini_api_key', geminiApiKey);
  }, [geminiApiKey]);

  // Save Profile and Progress
  useEffect(() => {
    if (userProfile) {
      localStorage.setItem('sparky_profile', JSON.stringify(userProfile));
    } else {
      localStorage.removeItem('sparky_profile');
    }
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('sparky_progress', JSON.stringify(progress));
  }, [progress]);

  // Local Leaderboard
  useEffect(() => {
    if (screen !== 'LEADERBOARD') return;
    if (userProfile) {
      setLeaderboard([{ ...userProfile, rank: 1 }]);
    } else {
      setLeaderboard([]);
    }
  }, [screen, userProfile]);

  const login = async () => {
    setAuthError(null);
    const name = window.prompt("Enter your username to save your score:");
    if (!name || !name.trim()) return;
    
    setUserProfile({
      name: name.trim(),
      totalScore: 0,
      chaptersCompleted: 0,
      lastActive: Date.now()
    });
    setProgress({});
    playSound(SOUNDS.CLICK);
  };

  const logout = () => {
    setUserProfile(null);
    setProgress({});
    resetQuiz();
  };

  const openScreen = (newScreen: Screen) => {
    playSound(SOUNDS.CLICK);
    if (newScreen === 'PROGRESS' || newScreen === 'LEADERBOARD') {
      setPrevScreen(screen);
    } else {
      setPrevScreen(null);
    }
    setScreen(newScreen);
  };

  const goBack = () => {
    playSound(SOUNDS.CLICK);
    if (prevScreen) {
      setScreen(prevScreen);
      setPrevScreen(null);
    } else {
      setScreen('WELCOME');
    }
  };

  const resetQuiz = () => {
    playSound(SOUNDS.CLICK);
    setScreen('WELCOME');
    setPrevScreen(null);
    setSelectedYear(null);
    setSelectedChapter(null);
    setCurrentQuestionIndex(0);
    setStudentAnswer('');
    setLastGrade(null);
    setQuizResults([]);
    setShowHint(false);
  };

  const playSound = (url: string) => {
    try {
      const audio = new Audio(url);
      audio.volume = 0.3;
      audio.play().catch(() => {});
    } catch (e) {
      console.error("Audio error", e);
    }
  };

  const handleNextQuestion = async () => {
    if (selectedChapter && currentQuestionIndex < activeQuestions.length - 1) {
      playSound(SOUNDS.CLICK);
      setCurrentQuestionIndex(prev => prev + 1);
      setStudentAnswer('');
      setLastGrade(null);
      setShowHint(false);
    } else {
      playSound(SOUNDS.COMPLETE);
      
      // Calculate final score and sync locally
      if (selectedChapter && userProfile) {
        const correctCount = quizResults.filter(r => r.grade.isCorrect).length;
        const totalCount = activeQuestions.length;
        const finalScore = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

        const prevBest = progress[selectedChapter.id]?.bestScore || 0;
        const isNewChapter = !progress[selectedChapter.id];
        const scoreDiff = Math.max(0, finalScore - prevBest);

        // Update chapter progress
        setProgress(prev => ({
          ...prev,
          [selectedChapter.id]: {
            ...prev[selectedChapter.id],
            completed: true,
            bestScore: Math.max(prevBest, finalScore),
            attempts: (prev[selectedChapter.id]?.attempts || 0) + 1,
            lastUpdated: Date.now(),
            difficulty: difficulty
          }
        }));

        // Update overall profile
        setUserProfile(prev => prev ? {
          ...prev,
          totalScore: prev.totalScore + scoreDiff,
          chaptersCompleted: prev.chaptersCompleted + (isNewChapter ? 1 : 0),
          lastActive: Date.now()
        } : null);
      }
      setScreen('RESULTS');
    }
  };

  const handleSubmitAnswer = async () => {
    if (!selectedChapter) return;
    
    setIsGrading(true);
    const question = activeQuestions[currentQuestionIndex];
    const grade = await gradeAnswer(question.question, question.answer, studentAnswer, difficulty, geminiApiKey);
    
    if (grade.isCorrect) {
      playSound(SOUNDS.CORRECT);
    } else {
      playSound(SOUNDS.INCORRECT);
    }

    setLastGrade(grade);
    setQuizResults(prev => [...prev, { question, grade, answer: studentAnswer }]);
    setIsGrading(false);
  };

  const currentQuestion = activeQuestions[currentQuestionIndex];

  // Calculate overall stats
  const totalChapters = QUIZ_DATA.reduce((acc, year) => acc + year.chapters.length, 0);
  const progressValues = Object.values(progress) as any[];
  const completedChapters = progressValues.filter(p => p.completed).length;
  const averageScore = progressValues.length > 0 
    ? Math.round(progressValues.reduce((acc, p) => acc + p.bestScore, 0) / progressValues.length)
    : 0;
  const userProgressMsg = userProfile ? getEncouragement(averageScore, completedChapters) : null;

  return (
    <div className="min-h-screen bg-[#F7F3EE] flex flex-col font-sans overflow-hidden">
      <AnimatePresence>
        {showDiagram && (
          <Diagram 
            type={showDiagram} 
            onClose={() => setShowDiagram(null)} 
          />
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <nav className="h-20 bg-white border-b-2 border-[#E5E0D8] px-8 flex items-center justify-between shadow-sm z-10 shrink-0">
        {/* Auth Error Toast */}
        <AnimatePresence>
          {authError && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-2xl shadow-xl z-50 flex items-center gap-3 font-bold"
            >
              <XCircle size={20} />
              {authError}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-4">
          <button onClick={() => setScreen('WELCOME')} className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-[#8BA888] rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-black/10 group-hover:scale-110 transition-transform">
              🌱
            </div>
            <div className="hidden sm:block text-left">
              <h1 className="text-[#4A453F] font-bold text-xl">Science Explorer</h1>
              <p className="text-[#A39E93] text-[10px] uppercase tracking-widest font-semibold">Primary Education Portal</p>
            </div>
          </button>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          {userProfile && (
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#F1EDE7] rounded-full border border-[#DED9D2]">
              <div className="w-6 h-6 bg-[#8BA888] rounded-full flex items-center justify-center text-[10px] text-white">
                <UserIcon size={12} />
              </div>
              <span className="text-[#6B665F] font-bold text-xs max-w-[100px] truncate">{userProfile.name}</span>
            </div>
          )}

          {selectedYear && (
            <div className="hidden sm:flex gap-3">
              <div className="px-4 py-2 bg-[#F1EDE7] rounded-full border border-[#DED9D2] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#8BA888] rounded-full"></span>
                <span className="text-[#6B665F] font-medium text-sm">Year {selectedYear.label.split(' ')[1]}</span>
              </div>
            </div>
          )}
          
          {screen !== 'WELCOME' && screen !== 'RESULTS' && (
            <div className="flex gap-2">
              <button 
                onClick={() => openScreen('PROGRESS')}
                className="flex items-center gap-2 px-4 py-2 bg-[#E3EDD8] rounded-full border border-[#8BA888] text-[#4A453F] font-bold text-sm shadow-sm hover:bg-[#D8E6CC] transition-colors"
              >
                <Award size={18} /> Stats
              </button>
              <button 
                onClick={() => openScreen('LEADERBOARD')}
                className="flex items-center gap-2 px-4 py-2 bg-[#F9F1F1] rounded-full border border-[#D48D6C] text-[#4A453F] font-bold text-sm shadow-sm hover:bg-[#F2E4E4] transition-colors"
              >
                <Users size={18} /> Leaders
              </button>
            </div>
          )}

          {selectedChapter && screen === 'QUIZ' && (
            <div className="flex items-center gap-4">
              <div className="w-24 sm:w-32 h-3 bg-[#E5E0D8] rounded-full relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex) / activeQuestions.length) * 100}%` }}
                  className="absolute left-0 top-0 h-full bg-[#8BA888] rounded-full" 
                />
              </div>
              <span className="text-[#4A453F] font-bold text-sm hidden sm:inline">
                {currentQuestionIndex + 1} / {activeQuestions.length}
              </span>
            </div>
          )}
          {userProfile ? (
            <button 
              onClick={logout}
              className="text-[#A39E93] hover:text-red-400 transition-colors p-2"
              title="Logout"
            >
              <LogOut size={24} />
            </button>
          ) : (
            <button 
              onClick={login}
              className="px-4 py-2 bg-[#8BA888] text-white rounded-xl font-bold text-sm shadow-sm hover:bg-[#7a9677] transition-colors flex items-center gap-2"
            >
              <LogIn size={18} /> Login
            </button>
          )}

          {screen !== 'WELCOME' && (
            <button onClick={resetQuiz} className="text-[#A39E93] hover:text-[#4A453F] transition-colors p-2">
              <XCircle size={24} />
            </button>
          )}
        </div>
      </nav>

      <main className="flex-1 p-4 md:p-10 relative overflow-y-auto">
        {isLoading ? (
          <div className="h-full flex flex-col items-center justify-center gap-4 text-[#A39E93]">
            <RefreshCw className="animate-spin" size={48} />
            <p className="font-bold uppercase tracking-widest text-xs">Loading sparky science...</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
          {screen === 'WELCOME' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center text-center"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative mb-8"
              >
                <div className="w-48 h-48 bg-[#E3EDD8] rounded-[60px] flex items-center justify-center border-4 border-white shadow-lg transform -rotate-3">
                   <span className="text-7xl transform rotate-3">🦉</span>
                </div>
                <div className="absolute -right-8 top-1/2 bg-[#D48D6C] text-white px-6 py-2 rounded-2xl font-bold shadow-md transform rotate-12">
                   Hello! 
                </div>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-[#4A453F] mb-6 leading-tight">
                Sparky Science Quiz
              </h2>
              <p className="text-xl text-[#6B665F] mb-10 max-w-lg leading-relaxed">
                Unlock the secrets of nature! Track your progress and unlock badges as you learn.
              </p>

              {/* Gemini API Key Section */}
              <div className="mb-10 w-full max-w-md">
                {!showApiKeyInput ? (
                  <button 
                    onClick={() => setShowApiKeyInput(true)}
                    className="flex items-center gap-2 text-sm font-bold text-[#8BA888] hover:text-[#7a9677] transition-colors mx-auto"
                  >
                    <Key size={16} /> {geminiApiKey ? 'Update Gemini API Key' : 'Insert Gemini API Key to enable AI'}
                  </button>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-6 rounded-3xl border-2 border-[#E5E0D8] shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-sm font-bold text-[#4A453F] flex items-center gap-2">
                        <Key size={16} className="text-[#8BA888]" /> Gemini API Key
                      </label>
                      <button 
                        onClick={() => setShowApiKeyInput(false)}
                        className="text-xs font-bold text-[#A39E93] hover:text-[#4A453F]"
                      >
                        Hide
                      </button>
                    </div>
                    <input 
                      type="password"
                      value={geminiApiKey}
                      onChange={(e) => setGeminiApiKey(e.target.value)}
                      placeholder="Paste your API key here..."
                      className="w-full px-4 py-3 bg-[#F9F7F5] border-2 border-[#E5E0D8] rounded-xl text-sm focus:border-[#8BA888] outline-none transition-colors"
                    />
                    <p className="mt-3 text-[10px] text-[#A39E93] leading-relaxed uppercase tracking-widest font-semibold text-center">
                      Your key is saved locally in your browser.
                    </p>
                  </motion.div>
                )}
              </div>

              {!userProfile && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-6 bg-yellow-50 rounded-3xl border-2 border-yellow-200 text-yellow-800 flex items-center gap-4"
                >
                  <div className="text-2xl">🔒</div>
                  <p className="text-sm font-medium">Set a username to save your score and track your progress!</p>
                  <button 
                    onClick={login}
                    className="ml-auto px-4 py-2 bg-yellow-400 text-yellow-900 rounded-xl font-bold text-xs"
                  >
                    Create Profile
                  </button>
                </motion.div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    playSound(SOUNDS.CLICK);
                    setScreen('SELECT_LEVEL');
                  }}
                  className="cute-button cute-button-green px-12 py-5 text-xl flex items-center gap-3"
                >
                  Start Exploring <ChevronRight size={24} />
                </button>
                <button
                  onClick={() => openScreen('PROGRESS')}
                  className="cute-button cute-button-outline px-12 py-5 text-xl flex items-center gap-3"
                >
                  My Progress <Award size={24} />
                </button>
              </div>
            </motion.div>
          )}

          {screen === 'PROGRESS' && (
            <motion.div
              key="progress"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-6 mb-10">
                <button 
                  onClick={goBack} 
                  className="w-12 h-12 flex items-center justify-center bg-white border-2 border-[#E5E0D8] rounded-2xl text-[#6B665F] hover:bg-[#F9F7F5] transition-colors"
                >
                  <ArrowLeft size={24} />
                </button>
                <h2 className="text-4xl font-display font-bold text-[#4A453F]">Your Explorer Stats</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-8 rounded-[40px] border-4 border-[#8BA888] shadow-lg text-center">
                  <div className="w-16 h-16 bg-[#E3EDD8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="text-[#8BA888]" />
                  </div>
                  <p className="text-sm font-bold text-[#A39E93] uppercase mb-1">Chapters</p>
                  <p className="text-4xl font-display font-bold text-[#4A453F]">{completedChapters} / {totalChapters}</p>
                </div>
                <div className="bg-white p-8 rounded-[40px] border-4 border-[#D48D6C] shadow-lg text-center">
                  <div className="w-16 h-16 bg-[#F9F1F1] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="text-[#D48D6C]" />
                  </div>
                  <p className="text-sm font-bold text-[#A39E93] uppercase mb-1">Avg Score</p>
                  <p className="text-4xl font-display font-bold text-[#4A453F]">{averageScore}%</p>
                </div>
                <div className="bg-white p-8 rounded-[40px] border-4 border-[#FFD93D] shadow-lg text-center">
                  <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Trophy className="text-yellow-600" />
                  </div>
                  <p className="text-sm font-bold text-[#A39E93] uppercase mb-1">Badges</p>
                  <p className="text-4xl font-display font-bold text-[#4A453F]">{Math.floor(completedChapters / 2)}</p>
                </div>
              </div>

              {/* Encouragement Section */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-r from-[#D48D6C] to-[#E5A384] p-8 rounded-[40px] mb-12 shadow-xl text-white flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="text-5xl">✨</div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-1">Explorer's Message</h3>
                  <p className="text-lg opacity-90 font-medium italic">"{getEncouragement(averageScore, completedChapters)}"</p>
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold mb-6 text-[#4A453F]">Recent Adventures</h3>
              <div className="grid gap-4">
                {progressValues.length === 0 ? (
                  <p className="text-center py-12 text-[#A39E93] bg-white rounded-3xl border-2 border-dashed border-[#E5E0D8]">
                    No adventures recorded yet. Go start one! 🚀
                  </p>
                ) : (
                  Object.entries(progress).sort((a, b) => (b[1] as any).lastUpdated - (a[1] as any).lastUpdated).map(([id, data]) => {
                    const typedData = data as any;
                    // Find chapter name
                    let chapterTitle = "Unknown Chapter";
                    QUIZ_DATA.forEach(year => {
                      const chapter = year.chapters.find(c => c.id === id);
                      if (chapter) chapterTitle = chapter.title;
                    });

                    return (
                      <div key={id} className="bg-white p-6 rounded-3xl border-2 border-[#E5E0D8] flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <CheckCircle2 className="text-[#8BA888]" />
                          <div>
                            <p className="font-bold text-[#4A453F]">{chapterTitle}</p>
                            <p className="text-xs text-[#A39E93] uppercase">Best Score: {typedData.bestScore}% • {typedData.attempts} attempts</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-[#A39E93]">{new Date(typedData.lastUpdated).toLocaleDateString()}</p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </motion.div>
          )}

          {screen === 'SELECT_LEVEL' && (
            <motion.div
              key="select_level"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-4xl font-display font-bold text-center mb-12 text-[#4A453F]">What year are you in?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {QUIZ_DATA.map((year) => (
                  <motion.button
                    key={year.id}
                    whileHover={{ y: -8, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                    onClick={() => {
                      setSelectedYear(year);
                      setScreen('SELECT_CHAPTER');
                    }}
                    className="bg-white rounded-[40px] p-10 border-4 border-[#E5E0D8] transition-all flex flex-col items-center group shadow-md"
                  >
                    <div className="w-20 h-20 bg-[#F1EDE7] rounded-3xl flex items-center justify-center mb-6 group-hover:bg-[#E3EDD8] transition-colors border border-[#E5E0D8]">
                      <GraduationCap size={40} className="text-[#8BA888]" />
                    </div>
                    <span className="text-2xl font-display font-bold text-[#4A453F]">{year.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {screen === 'SELECT_CHAPTER' && selectedYear && (
            <motion.div
              key="select_chapter"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-6 mb-10">
                <button 
                  onClick={() => setScreen('SELECT_LEVEL')} 
                  className="w-12 h-12 flex items-center justify-center bg-white border-2 border-[#E5E0D8] rounded-2xl text-[#6B665F] hover:bg-[#F9F7F5] transition-colors"
                >
                  <ArrowLeft size={24} />
                </button>
                <h2 className="text-4xl font-display font-bold text-[#4A453F]">Pick a Chapter!</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {selectedYear.chapters.map((chapter) => {
                  const chapterProgress = progress[chapter.id];
                  const hasDiagram = chapter.id === 'energy-in-food' || chapter.id === '8-forms-of-energy';
                  return (
                    <motion.div
                      key={chapter.id}
                      whileHover={{ scale: 1.01 }}
                      className={`bg-white p-6 rounded-3xl border-2 transition-all shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group ${
                        chapterProgress?.completed ? 'border-[#8BA888] bg-[#F7FAF5]' : 'border-[#E5E0D8]'
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          chapterProgress?.completed ? 'bg-[#8BA888] text-white' : 'bg-[#F1EDE7] text-[#8BA888]'
                        }`}>
                          {chapterProgress?.completed ? <CheckCircle2 size={24} /> : <BookOpen size={24} />}
                        </div>
                        <div>
                          <span className="text-xl font-bold text-[#4A453F]">{chapter.title}</span>
                          {chapterProgress?.completed && (
                            <p className="text-xs text-[#8BA888] font-bold uppercase tracking-widest mt-1">
                              Best: {chapterProgress.bestScore}% • COMPLETED
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            playSound(SOUNDS.CLICK);
                            setSelectedChapter(chapter);
                            setScreen('SELECT_DIFFICULTY');
                          }}
                          className="flex-1 sm:flex-none px-6 py-3 bg-[#8BA888] text-white rounded-xl font-bold text-sm hover:bg-[#7a9677] transition-colors"
                        >
                          Start Quiz
                        </button>
                        {hasDiagram && (
                          <button
                            onClick={() => {
                              playSound(SOUNDS.CLICK);
                              setShowDiagram(chapter.id === 'energy-in-food' ? 'photosynthesis' : 'energy-conversion');
                            }}
                            className="px-4 py-3 bg-white border-2 border-[#8BA888] text-[#8BA888] rounded-xl font-bold text-sm hover:bg-[#F7FAF5] transition-colors flex items-center gap-2"
                          >
                            <Atom size={16} /> Diagram
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {screen === 'SELECT_DIFFICULTY' && selectedChapter && (
            <motion.div 
              key="difficulty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-6 mb-10">
                <button 
                  onClick={() => setScreen('SELECT_CHAPTER')} 
                  className="w-12 h-12 flex items-center justify-center bg-white border-2 border-[#E5E0D8] rounded-2xl text-[#6B665F] hover:bg-[#F9F7F5] transition-colors"
                >
                  <ArrowLeft size={24} />
                </button>
                <div className="text-left">
                  <h2 className="text-4xl font-display font-bold text-[#4A453F]">Choose Challenge Level</h2>
                  <p className="text-[#A39E93] text-sm uppercase tracking-widest font-bold mt-1">Chapter: {selectedChapter.title}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 'RECITATION_TABLE', label: 'Recitation Table', desc: 'Core concept definitions', color: '#8BA888', bg: '#F7FAF5', emoji: '📋' },
                  { id: 'MCQS', label: 'Multiple Choice', desc: 'Choose the correct option (1-4)', color: '#D48D6C', bg: '#FFF9F4', emoji: '📝' },
                  { id: 'OPEN_ENDED', label: 'Open-ended', desc: 'Explain your answers with scientific terms', color: '#D46C6C', bg: '#FFF4F4', emoji: '🧠' }
                ].map((level) => (
                  <motion.button
                    key={level.id}
                    whileHover={{ y: -8, borderColor: level.color }}
                    onClick={() => {
                      playSound(SOUNDS.CLICK);
                      setDifficulty(level.id as Difficulty);
                      const filtered = selectedChapter.questions.filter(q => q.type === level.id);
                      if (filtered.length > 0) {
                        setScreen('QUIZ');
                      } else {
                        alert("No questions found for this mode in this chapter yet!");
                      }
                    }}
                    className="p-8 rounded-[40px] border-4 text-center cursor-pointer transition-all shadow-lg flex flex-col items-center bg-white border-[#E5E0D8]"
                  >
                    <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-inner border border-black/5">
                      {level.emoji}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-[#4A453F]">{level.label}</h3>
                    <p className="text-xs text-[#A39E93] px-2">{level.desc}</p>
                    <div className="mt-8 flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]" style={{ color: level.color }}>
                      Choose Level <ChevronRight size={12} />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {screen === 'LEADERBOARD' && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-6 mb-10">
                <button 
                  onClick={goBack} 
                  className="w-12 h-12 flex items-center justify-center bg-white border-2 border-[#E5E0D8] rounded-2xl text-[#6B665F] hover:bg-[#F9F7F5] transition-colors"
                >
                  <ArrowLeft size={24} />
                </button>
                <h2 className="text-4xl font-display font-bold text-[#4A453F]">Global Explorers</h2>
              </div>

              <div className="bg-white rounded-[40px] border-4 border-[#D48D6C] shadow-xl overflow-hidden p-8">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F1EDE7]">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#F9F1F1] rounded-xl flex items-center justify-center text-xl">🏆</div>
                      <span className="font-bold text-[#4A453F]">Hall of Fame</span>
                   </div>
                   <span className="text-xs font-bold text-[#A39E93] uppercase tracking-widest">Top 10 Global</span>
                </div>

                {userProgressMsg && (
                  <div className="mb-6 px-6 py-3 bg-[#E3EDD8] rounded-2xl border border-[#8BA888] text-[#4A453F] text-sm font-medium italic flex items-center gap-3">
                    <Star className="text-[#8BA888] shrink-0" size={16} />
                    <span>Your Status: {userProgressMsg}</span>
                  </div>
                )}

                <div className="space-y-3">
                  {leaderboard.length > 0 ? (
                    leaderboard.map((u) => (
                      <div key={u.name} className="flex items-center justify-between p-4 bg-[#F9F7F5] rounded-2xl border border-[#E5E0D8]">
                        <div className="flex items-center gap-4">
                          <span className={`w-8 h-8 flex items-center justify-center font-display font-bold rounded-lg ${
                            u.rank === 1 ? 'bg-yellow-400 text-white' : 
                            u.rank === 2 ? 'bg-slate-300 text-white' : 
                            u.rank === 3 ? 'bg-amber-600 text-white' : 'text-[#A39E93]'
                          }`}>
                            {u.rank}
                          </span>
                          <div>
                            <p className="font-bold text-[#4A453F]">{u.name}</p>
                            <p className="text-[10px] text-[#A39E93] uppercase">{u.chaptersCompleted} chapters</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-display font-bold text-[#8BA888]">{u.totalScore}</p>
                          <p className="text-[8px] text-[#A39E93] uppercase">Points</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-12 text-center text-[#A39E93]">
                      <Users className="mx-auto mb-4 opacity-20" size={48} />
                      <p>Becoming a legend takes time... Start playing to appear here!</p>
                    </div>
                  )}
                  <div className="p-4 bg-white border-2 border-dashed border-[#E5E0D8] rounded-2xl text-center">
                    <p className="text-sm font-bold text-[#A39E93]">Syncing with global servers... 🛰️</p>
                    <p className="text-[10px] uppercase text-[#A39E93] mt-1 italic">Real-time scores powered by Sparky Servers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {screen === 'QUIZ' && selectedChapter && currentQuestion && (
            <div className="max-w-6xl mx-auto h-full flex flex-col gap-6">
              {/* Quiz Progress Header */}
              <div className="bg-white p-6 rounded-3xl border-2 border-[#E5E0D8] shadow-sm">
                <div className="flex justify-between items-end mb-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#A39E93] uppercase tracking-[0.2em] mb-1">Quest Level: {difficulty}</span>
                    <h3 className="text-xl font-bold text-[#4A453F]">{selectedChapter.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-display font-bold text-[#8BA888] leading-none">{currentQuestionIndex + 1}</span>
                    <span className="text-[#A39E93] font-bold text-sm"> / {activeQuestions.length}</span>
                  </div>
                </div>
                <div className="h-4 w-full bg-[#F1EDE7] rounded-full overflow-hidden border border-[#E5E0D8] relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
                    className="h-full bg-gradient-to-r from-[#8BA888] to-[#A0C49D] rounded-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </motion.div>
                </div>
              </div>

              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-12 gap-8 flex-1"
              >
              {/* Sidebar Hints */}
              <div className="hidden lg:col-span-4 lg:flex flex-col items-center">
                <motion.div 
                  className="relative mb-12"
                  animate={{ 
                    scale: lastGrade ? (lastGrade.isCorrect ? 1.1 : 0.9) : 1,
                    rotate: lastGrade ? (lastGrade.isCorrect ? 5 : -5) : 0
                  }}
                >
                  <div className="w-64 h-64 bg-[#E3EDD8] rounded-[60px] flex items-center justify-center border-4 border-white shadow-lg">
                     <span className="text-8xl">
                       {lastGrade ? (lastGrade.isCorrect ? "🥳" : "🧐") : isGrading ? "🤖" : "🦉"}
                     </span>
                  </div>
                  <AnimatePresence>
                    {(lastGrade || isGrading) && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute -bottom-4 -right-4 bg-[#D48D6C] text-white px-6 py-3 rounded-2xl font-bold shadow-md transform rotate-6"
                      >
                        {isGrading ? "Processing..." : lastGrade?.isCorrect ? "Brilliant!" : "Don't give up!"}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <AnimatePresence>
                  {lastGrade && (
                    <motion.div
                      initial="initial"
                      animate={!lastGrade.isCorrect ? "shake" : "visible"}
                      variants={shakeVariants}
                      className={`w-full p-6 rounded-3xl border-4 shadow-lg mb-6 ${
                        lastGrade.isCorrect ? 'bg-[#F7FAF5] border-[#8BA888]' : 'bg-[#FFF4F4] border-[#D46C6C]'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {lastGrade.isCorrect ? (
                          <CheckCircle2 className="text-[#8BA888]" />
                        ) : (
                          <XCircle className="text-[#D46C6C]" />
                        )}
                        <h4 className="font-bold text-lg text-[#4A453F]">
                          {lastGrade.isCorrect ? "Spot On!" : "Not Quite"}
                        </h4>
                      </div>
                      <p className="text-sm text-[#6B665F] leading-relaxed mb-4">
                        {lastGrade.feedback}
                      </p>
                      {!lastGrade.isCorrect && (
                        <div className="p-4 bg-white/50 rounded-xl border border-[#D46C6C]/20">
                          <p className="text-[10px] uppercase font-bold text-[#D46C6C] mb-1">Expected Key Points:</p>
                          <p className="text-xs text-[#6B665F]">{currentQuestion.answer}</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="w-full space-y-4">
                  <div className="p-5 bg-white rounded-2xl border-2 border-[#E5E0D8] flex gap-4 items-center shadow-sm">
                    <div className="w-10 h-10 bg-[#F1EDE7] rounded-full flex items-center justify-center text-xl shrink-0">💡</div>
                    <p className="text-sm text-[#6B665F] italic leading-relaxed">
                      Make sure to use the key scientific terms we learned!
                    </p>
                  </div>
                  
                  {showHint ? (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-5 bg-yellow-50 rounded-2xl border-2 border-yellow-200 flex gap-4 items-center shadow-sm"
                    >
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl shrink-0">✨</div>
                      <p className="text-sm text-yellow-800 font-medium italic italic">
                        Hint: {currentQuestion.hint}
                      </p>
                    </motion.div>
                  ) : (
                    <button 
                      onClick={() => setShowHint(true)}
                      className="w-full p-4 bg-white rounded-2xl border-2 border-[#E5E0D8] border-dashed text-[#A39E93] font-bold text-sm hover:border-[#8BA888] hover:text-[#8BA888] transition-all flex items-center justify-center gap-2"
                    >
                      <HelpCircle size={18} /> Stuck? Get a hint!
                    </button>
                  )}
                </div>
              </div>

              {/* Quiz content */}
              <div className="col-span-12 lg:col-span-8 flex flex-col">
                <div className="natural-card p-8 md:p-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                     <div className="flex flex-col gap-1">
                        <span className="hint-badge">Question {String(currentQuestionIndex + 1).padStart(2, '0')}</span>
                        <div className="lg:hidden flex items-center gap-2 mt-2">
                          <button 
                            onClick={() => setShowHint(!showHint)}
                            className="text-[#8BA888] text-xs font-bold uppercase tracking-wider underline border-none bg-transparent"
                          >
                            {showHint ? "Hide Hint" : "Need a Hint?"}
                          </button>
                        </div>
                     </div>
                     <div className="flex gap-1.5 overflow-hidden max-w-[150px] sm:max-w-none">
                       {activeQuestions.map((_, i) => (
                         <div 
                           key={i} 
                           className={`w-3 h-3 rounded-full border transition-all shrink-0 ${
                             i <= currentQuestionIndex ? 'bg-[#8BA888] border-[#8BA888]' : 'bg-[#F1EDE7] border-[#DED9D2]'
                           }`} 
                         />
                       ))}
                     </div>
                  </div>

                  {showHint && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="lg:hidden mb-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200 text-sm text-yellow-800 italic"
                    >
                      Hint: {currentQuestion.hint}
                    </motion.div>
                  )}

                  <motion.div 
                    key={currentQuestion.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex-1 flex flex-col"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4A453F] leading-snug mb-4">
                      {currentQuestion.question}
                    </h2>

                  {currentQuestion.imageUrl && (
                    <div className="mb-8 w-full flex justify-center bg-white p-4 rounded-2xl border border-[#E5E0D8]">
                      <img 
                        src={currentQuestion.imageUrl} 
                        alt="Question Diagram" 
                        className="max-h-[300px] object-contain"
                      />
                    </div>
                  )}

                  <div className="flex-1 flex flex-col">
                    <label className="text-xs font-bold text-[#A39E93] uppercase mb-2 ml-2 tracking-wider italic">
                      {difficulty === 'MCQS' ? 'Select an Option' : 'Your Explanation'}
                    </label>

                    {difficulty === 'MCQS' && currentQuestion.options && (
                      <div className="grid gap-3 mb-8">
                        {currentQuestion.options.map((option, i) => (
                          <motion.button
                            key={i}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                            whileHover={!lastGrade ? { scale: 1.02 } : {}}
                            whileTap={!lastGrade ? { scale: 0.98 } : {}}
                            onClick={() => setStudentAnswer((i + 1).toString())}
                            disabled={!!lastGrade}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all font-bold ${
                              studentAnswer === (i + 1).toString()
                                ? 'border-[#8BA888] bg-[#F7FAF5] text-[#4A453F] shadow-inner'
                                : 'border-[#E5E0D8] hover:border-[#DED9D2] text-[#6B665F] bg-white'
                            } ${lastGrade ? 'opacity-80 cursor-default' : ''}`}
                          >
                            {option}
                          </motion.button>
                        ))}
                      </div>
                    )}
                    
                    {!lastGrade ? (
                      <>
                        {difficulty !== 'MCQS' && (
                          <textarea 
                            value={studentAnswer}
                            onChange={(e) => setStudentAnswer(e.target.value)}
                            className="flex-1 w-full p-6 bg-[#F9F7F5] rounded-3xl border-2 border-[#E5E0D8] focus:border-[#8BA888] focus:ring-0 text-[#4A453F] text-lg leading-relaxed placeholder-[#C7C2B8] resize-none outline-none transition-colors min-h-[150px]"
                            placeholder="Write your answer here..."
                          />
                        )}
                        <div className="mt-8 flex justify-end gap-4">
                           <motion.button 
                            whileHover={!((difficulty === 'MCQS' ? !studentAnswer : !studentAnswer.trim()) || isGrading) ? { scale: 1.05 } : {}}
                            whileTap={!((difficulty === 'MCQS' ? !studentAnswer : !studentAnswer.trim()) || isGrading) ? { scale: 0.95 } : {}}
                            disabled={(difficulty === 'MCQS' ? !studentAnswer : !studentAnswer.trim()) || isGrading}
                            onClick={handleSubmitAnswer}
                            className={`cute-button cute-button-green min-w-[200px] flex items-center justify-center gap-2 ${
                              ((difficulty === 'MCQS' ? !studentAnswer : !studentAnswer.trim()) || isGrading) ? 'opacity-50 grayscale' : ''
                            }`}
                           >
                             {isGrading ? (
                               <motion.div 
                                 initial={{ opacity: 0, scale: 0.8 }} 
                                 animate={{ opacity: 1, scale: 1 }} 
                                 className="flex items-center gap-2"
                               >
                                 Checking... <RefreshCw size={20} className="animate-spin" />
                               </motion.div>
                             ) : (
                               <>Check Answer <ChevronRight size={20} /></>
                             )}
                           </motion.button>
                        </div>
                      </>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="flex-1 flex flex-col gap-6"
                      >
                        <div className={`p-6 rounded-3xl border-2 ${
                          lastGrade.isCorrect ? 'bg-[#E3EDD8] border-[#8BA888]/30' : 'bg-[#F9F1F1] border-[#D48D6C]/30'
                        }`}>
                          <div className="flex gap-4">
                            <div className="shrink-0 pt-1">
                              {lastGrade.isCorrect ? <CheckCircle2 className="text-[#8BA888]" size={28} /> : <XCircle className="text-[#D48D6C]" size={28} />}
                            </div>
                            <div>
                               <p className="text-xl font-bold mb-1">{lastGrade.isCorrect ? 'Excellent!' : 'Nice try!'}</p>
                               <p className="text-[#6B665F] italic leading-relaxed">"{lastGrade.feedback}"</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-[#F1EDE7] rounded-3xl border border-[#E5E0D8]">
                          <p className="text-xs font-bold text-[#A39E93] uppercase mb-3 tracking-widest flex items-center gap-2">
                             <Lightbulb size={14} className="text-[#D48D6C]" /> Recommended Recitation
                          </p>
                          <p className="text-lg font-medium text-[#4A453F] leading-relaxed italic">{currentQuestion.answer}</p>
                        </div>

                        <div className="mt-auto pt-6 flex justify-end">
                           <motion.button 
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleNextQuestion}
                            className="cute-button cute-button-clay px-12"
                           >
                             {currentQuestionIndex < activeQuestions.length - 1 ? 'Next Step →' : 'Complete Adventure →'}
                           </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {screen === 'RESULTS' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl mx-auto w-full pb-20"
            >
              <div className="natural-card p-12 text-center mb-10 overflow-hidden relative">
                <motion.div 
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-24 h-24 bg-[#E3EDD8] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-black/10 relative z-10"
                >
                  <Trophy size={48} className="text-[#8BA888]" />
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-5xl font-display font-bold mb-4">Adventure Complete!</h2>
                </motion.div>
                
                <p className="text-xl text-[#6B665F] mb-12">
                  Excellent work exploring <span className="font-bold text-[#4A453F]">{selectedChapter?.title}</span>!
                </p>
                
                <div className="flex flex-wrap gap-6 justify-center mb-12">
                  <div className="bg-[#F9F7F5] p-6 rounded-3xl border-2 border-[#E5E0D8] min-w-[140px]">
                    <p className="text-xs font-bold text-[#A39E93] uppercase tracking-widest mb-1 italic">Correct</p>
                    <p className="text-4xl font-display font-extrabold text-[#8BA888]">
                      {quizResults.filter(r => r.grade.isCorrect).length}
                    </p>
                  </div>
                  <div className="bg-[#F9F7F5] p-6 rounded-3xl border-2 border-[#E5E0D8] min-w-[140px]">
                    <p className="text-xs font-bold text-[#A39E93] uppercase tracking-widest mb-1 italic">Total</p>
                    <p className="text-4xl font-display font-extrabold text-[#4A453F]">{quizResults.length}</p>
                  </div>
                  <div className="bg-[#F9F7F5] p-6 rounded-3xl border-2 border-[#E5E0D8] min-w-[140px]">
                    <p className="text-xs font-bold text-[#A39E93] uppercase tracking-widest mb-1 italic">Best Score</p>
                    <p className="text-4xl font-display font-extrabold text-[#D48D6C]">
                      {selectedChapter ? progress[selectedChapter.id]?.bestScore : 0}%
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={resetQuiz}
                    className="cute-button cute-button-green px-12 flex items-center gap-3"
                  >
                    Select New Path <RefreshCw size={20} />
                  </button>
                  <button
                    onClick={() => setScreen('PROGRESS')}
                    className="cute-button cute-button-outline px-8 flex items-center gap-3"
                  >
                    View Overall Stats <Award size={20} />
                  </button>
                </div>

                {/* Decorative background stars */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute top-10 left-10 text-yellow-300 opacity-20"><Star size={64} fill="currentColor" /></motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute bottom-10 right-10 text-pink-300 opacity-20"><Star size={48} fill="currentColor" /></motion.div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-[#4A453F] px-4">Recap Your Journey</h3>
                {quizResults.map((result, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border-2 border-[#E5E0D8] shadow-sm">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="mt-1 shrink-0">
                        {result.grade.isCorrect ? <CheckCircle2 className="text-[#8BA888]" size={24} /> : <XCircle className="text-[#D48D6C]" size={24} />}
                      </div>
                      <h4 className="text-xl font-bold leading-tight">{result.question.question}</h4>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 pl-10 border-l-2 border-[#F1EDE7]">
                      <div>
                        <p className="text-xs font-bold text-[#A39E93] uppercase tracking-widest mb-2">My Answer</p>
                        <p className="text-[#6B665F] italic mb-1 text-sm leading-relaxed">"{result.answer}"</p>
                        <p className={`text-xs font-bold mt-2 flex items-center gap-1 ${result.grade.isCorrect ? 'text-[#8BA888]' : 'text-[#D48D6C]'}`}>
                          Score: {result.grade.score}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#A39E93] uppercase tracking-widest mb-2">Key Recitation</p>
                        <p className="text-[#4A453F] font-medium text-sm leading-relaxed">{result.question.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      </main>

      {/* Footer */}
      <footer className="h-12 bg-[#F1EDE7] px-10 flex items-center justify-center border-t border-[#E5E0D8] shrink-0 text-center">
        <p className="text-[10px] sm:text-xs text-[#A39E93] font-medium tracking-wide uppercase italic">
          Interactive Science Curriculum • {selectedYear?.label || 'General Knowledge'} • Unit: AL1 Recitation
        </p>
      </footer>
    </div>
  );
}
