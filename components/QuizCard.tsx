"use client";

import type { AnswerValue, Question } from "@/types/quiz";

type QuizCardProps = {
  question: Question;
  currentIndex: number;
  total: number;
  selectedAnswer: AnswerValue | null;
  hasAnswered: boolean;
  isCorrect: boolean | null;
  onSelect: (answer: AnswerValue) => void;
  onSubmit: () => void;
  onNext: () => void;
  onExit: () => void;
  canSubmit: boolean;
};

export function QuizCard({
  question,
  currentIndex,
  total,
  selectedAnswer,
  hasAnswered,
  isCorrect,
  onSelect,
  onSubmit,
  onNext,
  onExit,
  canSubmit
}: QuizCardProps) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-4 py-6 sm:px-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onExit}
          className="focus-ring rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 font-black text-slate-700 hover:border-slate-400"
        >
          Inicio
        </button>
        <p className="rounded-full bg-white px-4 py-2 text-base font-black text-blue-900 shadow-sm">
          Pregunta {currentIndex + 1} de {total}
        </p>
      </div>

      <section className="rounded-[2rem] border-2 border-white bg-white p-5 shadow-soft sm:p-8">
        <div className="mb-6 h-4 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
          <div
            className="h-full rounded-full bg-blue-600 transition-all"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>

        <p className="mb-6 text-2xl font-black leading-snug text-ink sm:text-3xl">{question.prompt}</p>

        {question.type === "match" ? (
          <MatchAnswer question={question} selectedAnswer={selectedAnswer} disabled={hasAnswered} onSelect={onSelect} />
        ) : question.type === "classify" ? (
          <ClassifyAnswer question={question} selectedAnswer={selectedAnswer} disabled={hasAnswered} onSelect={onSelect} />
        ) : (
          <SimpleAnswer question={question} selectedAnswer={selectedAnswer} disabled={hasAnswered} onSelect={onSelect} />
        )}

        {hasAnswered && (
          <div
            className={`mt-6 rounded-2xl border-2 p-4 ${
              isCorrect ? "border-green-300 bg-green-50" : "border-amber-300 bg-amber-50"
            }`}
            role="status"
          >
            <p className="text-xl font-black text-ink">{isCorrect ? "¡Muy bien!" : "¡Casi!"}</p>
            {!isCorrect && <p className="mt-2 font-bold text-slate-800">Respuesta correcta: {getCorrectText(question)}</p>}
            <p className="mt-2 text-lg font-semibold text-slate-700">{question.explanation}</p>
          </div>
        )}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
          {!hasAnswered ? (
            <button
              type="button"
              onClick={onSubmit}
              disabled={!canSubmit}
              className="focus-ring min-h-14 rounded-2xl bg-blue-700 px-7 py-4 text-xl font-black text-white shadow-lg shadow-blue-100 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"
            >
              Comprobar
            </button>
          ) : (
            <button
              type="button"
              onClick={onNext}
              className="focus-ring min-h-14 rounded-2xl bg-blue-700 px-7 py-4 text-xl font-black text-white shadow-lg shadow-blue-100 transition hover:bg-blue-800"
            >
              Siguiente
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

function SimpleAnswer({
  question,
  selectedAnswer,
  disabled,
  onSelect
}: {
  question: Extract<Question, { type: "multiple" | "trueFalse" | "fillBlank" }>;
  selectedAnswer: AnswerValue | null;
  disabled: boolean;
  onSelect: (answer: AnswerValue) => void;
}) {
  return (
    <div className="grid gap-3">
      {question.options.map((option) => {
        const selected = selectedAnswer === option;
        return (
          <button
            key={option}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(option)}
            className={`focus-ring min-h-16 rounded-2xl border-2 px-5 py-4 text-left text-xl font-black transition ${
              selected ? "border-blue-700 bg-skysoft text-blue-950" : "border-slate-200 bg-white text-ink hover:border-blue-300"
            } disabled:cursor-default`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function MatchAnswer({
  question,
  selectedAnswer,
  disabled,
  onSelect
}: {
  question: Extract<Question, { type: "match" }>;
  selectedAnswer: AnswerValue | null;
  disabled: boolean;
  onSelect: (answer: AnswerValue) => void;
}) {
  const value = asRecord(selectedAnswer);

  return (
    <div className="grid gap-4">
      {question.pairs.map((pair) => (
        <label key={pair.left} className="grid gap-2 rounded-2xl border-2 border-slate-100 bg-slate-50 p-4 sm:grid-cols-[11rem_1fr] sm:items-center">
          <span className="text-xl font-black text-ink">{pair.left}</span>
          <select
            disabled={disabled}
            value={value[pair.left] ?? ""}
            onChange={(event) => onSelect({ ...value, [pair.left]: event.target.value })}
            className="focus-ring min-h-14 rounded-xl border-2 border-slate-200 bg-white px-3 text-lg font-bold text-ink"
          >
            <option value="">Elige una opción</option>
            {question.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}

function ClassifyAnswer({
  question,
  selectedAnswer,
  disabled,
  onSelect
}: {
  question: Extract<Question, { type: "classify" }>;
  selectedAnswer: AnswerValue | null;
  disabled: boolean;
  onSelect: (answer: AnswerValue) => void;
}) {
  const value = asRecord(selectedAnswer);

  return (
    <div className="grid gap-4">
      {question.items.map((item) => (
        <div key={item} className="rounded-2xl border-2 border-slate-100 bg-slate-50 p-4">
          <p className="mb-3 text-xl font-black text-ink">{item}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {question.categories.map((category) => {
              const selected = value[item] === category;
              return (
                <button
                  key={category}
                  type="button"
                  disabled={disabled}
                  onClick={() => onSelect({ ...value, [item]: category })}
                  className={`focus-ring min-h-12 rounded-xl border-2 px-4 py-3 text-left font-black transition ${
                    selected ? "border-blue-700 bg-skysoft text-blue-950" : "border-slate-200 bg-white text-ink hover:border-blue-300"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function asRecord(answer: AnswerValue | null): Record<string, string> {
  return answer && typeof answer === "object" ? answer : {};
}

function getCorrectText(question: Question) {
  if (question.type === "match") {
    return question.pairs.map((pair) => `${pair.left}: ${pair.right}`).join("; ");
  }

  if (question.type === "classify") {
    return Object.entries(question.correct)
      .map(([item, category]) => `${item}: ${category}`)
      .join("; ");
  }

  return question.correctAnswer;
}
