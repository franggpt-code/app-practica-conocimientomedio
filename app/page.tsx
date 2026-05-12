"use client";

import { useEffect, useMemo, useState } from "react";
import { ModeSelector } from "@/components/ModeSelector";
import { QuizCard } from "@/components/QuizCard";
import { ResultSummary } from "@/components/ResultSummary";
import { questions } from "@/data/questions";
import type { AnswerRecord, AnswerValue, PracticeMode, Question, QuizBlock, StoredResult } from "@/types/quiz";

const LAST_RESULT_KEY = "energia-quiz-last-result";
const BEST_RESULT_KEY = "energia-quiz-best-result";

type Screen = "home" | "quiz" | "result";

type SessionConfig = {
  mode: PracticeMode;
  block?: QuizBlock;
};

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [sessionConfig, setSessionConfig] = useState<SessionConfig>({ mode: "quick" });
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerValue | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [currentCorrect, setCurrentCorrect] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [lastResult, setLastResult] = useState<StoredResult | null>(null);
  const [bestResult, setBestResult] = useState<StoredResult | null>(null);

  useEffect(() => {
    setLastResult(readStoredResult(LAST_RESULT_KEY));
    setBestResult(readStoredResult(BEST_RESULT_KEY));
  }, []);

  const currentQuestion = quizQuestions[currentIndex];
  const complete = useMemo(
    () => (currentQuestion ? isAnswerComplete(currentQuestion, selectedAnswer) : false),
    [currentQuestion, selectedAnswer]
  );

  function startQuiz(mode: PracticeMode, block?: QuizBlock) {
    const pool = block ? questions.filter((question) => question.block === block) : questions;
    const count = mode === "final" ? 20 : 10;
    const nextQuestions = shuffle(pool).slice(0, Math.min(count, pool.length));

    setSessionConfig({ mode, block });
    setQuizQuestions(nextQuestions);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setCurrentCorrect(null);
    setAnswers([]);
    setScreen("quiz");
  }

  function submitAnswer() {
    if (!currentQuestion || !complete) {
      return;
    }

    const isCorrect = checkAnswer(currentQuestion, selectedAnswer);
    setCurrentCorrect(isCorrect);
    setHasAnswered(true);
    setAnswers((current) => [
      ...current,
      {
        question: currentQuestion,
        answer: selectedAnswer,
        isCorrect
      }
    ]);
  }

  function goNext() {
    if (currentIndex === quizQuestions.length - 1) {
      finishQuiz();
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setCurrentCorrect(null);
  }

  function finishQuiz() {
    const score = answers.filter((answer) => answer.isCorrect).length;
    const total = answers.length;
    const result: StoredResult = {
      score,
      total,
      date: new Date().toISOString()
    };

    localStorage.setItem(LAST_RESULT_KEY, JSON.stringify(result));
    setLastResult(result);

    const best = readStoredResult(BEST_RESULT_KEY);
    if (!best || score / total > best.score / best.total) {
      localStorage.setItem(BEST_RESULT_KEY, JSON.stringify(result));
      setBestResult(result);
    }

    setScreen("result");
  }

  function restartSamePractice() {
    startQuiz(sessionConfig.mode, sessionConfig.block);
  }

  function goHome() {
    setScreen("home");
    setSelectedAnswer(null);
    setHasAnswered(false);
    setCurrentCorrect(null);
  }

  if (screen === "quiz" && currentQuestion) {
    return (
      <QuizCard
        question={currentQuestion}
        currentIndex={currentIndex}
        total={quizQuestions.length}
        selectedAnswer={selectedAnswer}
        hasAnswered={hasAnswered}
        isCorrect={currentCorrect}
        onSelect={setSelectedAnswer}
        onSubmit={submitAnswer}
        onNext={goNext}
        onExit={goHome}
        canSubmit={complete}
      />
    );
  }

  if (screen === "result") {
    return <ResultSummary answers={answers} onRestart={restartSamePractice} onHome={goHome} />;
  }

  return <ModeSelector lastResult={lastResult} bestResult={bestResult} onStart={startQuiz} />;
}

function shuffle<T>(items: T[]) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function checkAnswer(question: Question, answer: AnswerValue | null) {
  if (!answer) {
    return false;
  }

  if (question.type === "match") {
    const record = asRecord(answer);
    return question.pairs.every((pair) => record[pair.left] === pair.right);
  }

  if (question.type === "classify") {
    const record = asRecord(answer);
    return Object.entries(question.correct).every(([item, category]) => record[item] === category);
  }

  return answer === question.correctAnswer;
}

function isAnswerComplete(question: Question, answer: AnswerValue | null) {
  if (!answer) {
    return false;
  }

  if (question.type === "match") {
    const record = asRecord(answer);
    return question.pairs.every((pair) => Boolean(record[pair.left]));
  }

  if (question.type === "classify") {
    const record = asRecord(answer);
    return question.items.every((item) => Boolean(record[item]));
  }

  return typeof answer === "string" && answer.length > 0;
}

function asRecord(answer: AnswerValue): Record<string, string> {
  return typeof answer === "object" ? answer : {};
}

function readStoredResult(key: string): StoredResult | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = localStorage.getItem(key);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as StoredResult;
    return typeof parsed.score === "number" && typeof parsed.total === "number" ? parsed : null;
  } catch {
    return null;
  }
}
