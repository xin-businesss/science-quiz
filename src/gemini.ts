import { GoogleGenAI, Type } from "@google/genai";

export interface GradeResult {
  score: number; // 0 to 100
  feedback: string;
  isCorrect: boolean;
}

export type Difficulty = 'RECITATION_TABLE' | 'MCQS' | 'OPEN_ENDED';

export async function gradeAnswer(
  question: string, 
  expectedAnswer: string, 
  studentAnswer: string,
  difficulty: Difficulty = 'MCQS',
  customApiKey?: string
): Promise<GradeResult> {
  const apiKey = customApiKey || process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    // Fallback if no API key
    return {
      score: studentAnswer.toLowerCase().includes(expectedAnswer.toLowerCase().split(' ')[0]) ? 100 : 0,
      feedback: "API Key missing. Please insert your API key at the homepage to unlock full AI capabilities!",
      isCorrect: studentAnswer.toLowerCase().includes(expectedAnswer.toLowerCase().split(' ')[0])
    };
  }

  const ai = new GoogleGenAI({ apiKey });

  const difficultyContext = {
    'RECITATION_TABLE': 'The student is reciting core concepts. Be encouraging and look for understanding of the basic definition.',
    'MCQS': 'Standard Multiple Choice grading. The student should provide the option number or the text.',
    'OPEN_ENDED': 'Strict grading for scientific answers. Expect precise scientific terminology (e.g., photosynthesis, chloroplast, compression) and complete explanations.'
  };

  const prompt = `
    You are a friendly and encouraging Science teacher for Primary school students.
    Grade the student's answer against the expected recitation answer.
    
    Difficulty Level: ${difficulty}
    Context: ${difficultyContext[difficulty]}
    
    Question: ${question}
    Expected Answer: ${expectedAnswer}
    Student Answer: ${studentAnswer}
    
    Guidelines:
    1. Be mindful of the difficulty level. Adjust leniency accordingly.
    2. Primary school students use specific terms. If they use the right keywords, they should get marks.
    3. Provide "feedback" that is positive and cute (use emojis!).
    4. "isCorrect" must be true only if they meet the threshold for ${difficulty} level.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            feedback: { type: Type.STRING },
            isCorrect: { type: Type.BOOLEAN }
          },
          required: ["score", "feedback", "isCorrect"]
        }
      }
    });

    const result = JSON.parse(response.text);
    return result;
  } catch (error) {
    console.error("Grading error:", error);
    return {
      score: 0,
      feedback: "Oh no! My robot brain got a bit confused. Let's try again! 🤖",
      isCorrect: false
    };
  }
}
