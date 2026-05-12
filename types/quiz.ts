export type QuizBlock =
  | "materia"
  | "estados"
  | "materiales"
  | "calor"
  | "cambios"
  | "dilatacion"
  | "energia"
  | "ahorro";

export type QuestionType =
  | "multiple"
  | "trueFalse"
  | "fillBlank"
  | "match"
  | "classify";

export type SimpleQuestion = {
  id: string;
  block: QuizBlock;
  type: "multiple" | "trueFalse" | "fillBlank";
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type MatchQuestion = {
  id: string;
  block: QuizBlock;
  type: "match";
  prompt: string;
  pairs: { left: string; right: string }[];
  options: string[];
  explanation: string;
};

export type ClassifyQuestion = {
  id: string;
  block: QuizBlock;
  type: "classify";
  prompt: string;
  items: string[];
  categories: string[];
  correct: Record<string, string>;
  explanation: string;
};

export type Question = SimpleQuestion | MatchQuestion | ClassifyQuestion;

export type AnswerValue = string | Record<string, string>;

export type AnswerRecord = {
  question: Question;
  answer: AnswerValue | null;
  isCorrect: boolean;
};

export type StoredResult = {
  score: number;
  total: number;
  date: string;
};

export type PracticeMode = "quick" | "block" | "final";
