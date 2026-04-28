import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export interface GradeResult {
  score: number; // 0 to 100
  feedback: string;
  isCorrect: boolean;
}

export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

export async function gradeAnswer(
  question: string, 
  expectedAnswer: string, 
  studentAnswer: string,
  difficulty: Difficulty = 'MEDIUM'
): Promise<GradeResult> {
  if (!process.env.GEMINI_API_KEY) {
    // Fallback if no API key
    return {
      score: studentAnswer.toLowerCase().includes(expectedAnswer.toLowerCase().split(' ')[0]) ? 100 : 0,
      feedback: "API Key missing. Doing a simple check!",
      isCorrect: studentAnswer.toLowerCase().includes(expectedAnswer.toLowerCase().split(' ')[0])
    };
  }

  const difficultyContext = {
    'EASY': 'The student is a beginner. Be very encouraging and lenient. Minor spelling errors or missing one or two points is fine. isCorrect should be true if they get at least 60% of concepts.',
    'MEDIUM': 'Standard grading. Look for key scientific terms and clear explanation of core concepts. isCorrect should be true if they get at least 80% of concepts.',
    'HARD': 'Strict grading. Expect precise scientific terminology and complete explanations. do not accept vague answers. isCorrect should be true if they get at least 95% of concepts.'
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
