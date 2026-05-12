"use client";

import type { AnswerRecord } from "@/types/quiz";

type ResultSummaryProps = {
  answers: AnswerRecord[];
  onRestart: () => void;
  onHome: () => void;
};

export function ResultSummary({ answers, onRestart, onHome }: ResultSummaryProps) {
  const total = answers.length;
  const score = answers.filter((answer) => answer.isCorrect).length;
  const errors = total - score;
  const missed = answers.filter((answer) => !answer.isCorrect);
  const score10 = Math.round((score / total) * 10);
  const message =
    score10 <= 4 ? "Necesitas repasar un poco más." : score10 <= 7 ? "Vas por buen camino." : "¡Genial, lo dominas!";
  const badge = score10 >= 8 ? "Exploradora de la energía" : score10 >= 5 ? "Experta en materia" : "Maestra del calor";

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-4 py-8 sm:px-6">
      <section className="rounded-[2rem] border-2 border-white bg-white p-5 shadow-soft sm:p-8">
        <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="rounded-[1.75rem] bg-peachsoft p-6 text-center">
            <p className="text-lg font-black text-slate-700">Puntuación</p>
            <p className="mt-2 text-6xl font-black text-ink">{score10}/10</p>
            <p className="mt-4 rounded-full bg-white px-4 py-3 text-xl font-black text-blue-900">{badge}</p>
          </div>

          <div>
            <h1 className="text-4xl font-black text-ink">Resultado final</h1>
            <p className="mt-3 text-2xl font-black text-blue-900">{message}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <ResultBox label="Aciertos" value={`${score}/${total}`} />
              <ResultBox label="Errores" value={`${errors}/${total}`} />
            </div>
          </div>
        </div>

        {missed.length > 0 ? (
          <section className="mt-8" aria-labelledby="fallos-title">
            <h2 id="fallos-title" className="text-2xl font-black text-ink">
              Preguntas para repasar
            </h2>
            <div className="mt-4 grid gap-3">
              {missed.map(({ question }) => (
                <article key={question.id} className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-4">
                  <h3 className="text-lg font-black text-ink">{question.prompt}</h3>
                  <p className="mt-2 font-semibold text-slate-700">{question.explanation}</p>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <p className="mt-8 rounded-2xl bg-mintsoft p-5 text-xl font-black text-green-900">¡Has mejorado mucho! No has fallado ninguna.</p>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onHome}
            className="focus-ring min-h-14 rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 text-lg font-black text-slate-700 hover:border-slate-400"
          >
            Inicio
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="focus-ring min-h-14 rounded-2xl bg-blue-700 px-6 py-4 text-lg font-black text-white hover:bg-blue-800"
          >
            Volver a practicar
          </button>
        </div>
      </section>
    </main>
  );
}

function ResultBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border-2 border-slate-100 bg-slate-50 p-4">
      <p className="text-sm font-bold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-black text-ink">{value}</p>
    </div>
  );
}
