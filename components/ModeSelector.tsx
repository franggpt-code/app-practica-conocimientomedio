"use client";

import { blockLabels } from "@/data/questions";
import type { PracticeMode, QuizBlock, StoredResult } from "@/types/quiz";

type ModeSelectorProps = {
  lastResult: StoredResult | null;
  bestResult: StoredResult | null;
  onStart: (mode: PracticeMode, block?: QuizBlock) => void;
};

const blocks = Object.entries(blockLabels) as [QuizBlock, string][];

export function ModeSelector({ lastResult, bestResult, onStart }: ModeSelectorProps) {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-stretch">
        <div className="rounded-[2rem] border-2 border-white bg-white/88 p-6 shadow-soft sm:p-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-skysoft px-4 py-2 text-sm font-bold text-blue-900">
            <span aria-hidden="true">⚡</span>
            Unidad: La energía
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-normal text-ink sm:text-5xl">
            Repasa Conocimiento: La energía
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-semibold text-slate-700">
            Practica materia, estados, calor, temperatura y energía.
          </p>
          <button
            type="button"
            onClick={() => onStart("quick")}
            className="focus-ring mt-7 min-h-14 rounded-2xl bg-blue-700 px-7 py-4 text-xl font-black text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800"
          >
            Empezar
          </button>
        </div>

        <div className="rounded-[2rem] border-2 border-white bg-white/88 p-6 shadow-soft">
          <h2 className="text-2xl font-black text-ink">Tus marcas</h2>
          <div className="mt-5 grid gap-4">
            <ScorePill label="Último intento" result={lastResult} />
            <ScorePill label="Mejor puntuación" result={bestResult} />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <ModeButton
          title="Test rápido"
          text="10 preguntas aleatorias."
          icon="🚀"
          onClick={() => onStart("quick")}
        />
        <ModeButton
          title="Practicar por bloques"
          text="Elige un tema concreto."
          icon="🧩"
          onClick={() => document.getElementById("bloques")?.scrollIntoView({ behavior: "smooth" })}
        />
        <ModeButton
          title="Repaso final"
          text="Mezcla larga de todas las categorías."
          icon="🏅"
          onClick={() => onStart("final")}
        />
      </div>

      <section id="bloques" aria-labelledby="bloques-title" className="py-2">
        <h2 id="bloques-title" className="mb-4 text-2xl font-black text-ink">
          Practicar por bloques
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => onStart("block", key)}
              className="focus-ring min-h-24 rounded-2xl border-2 border-blue-100 bg-white p-4 text-left text-lg font-black text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md"
            >
              {label}
            </button>
          ))}
        </div>
      </section>
    </section>
  );
}

function ScorePill({ label, result }: { label: string; result: StoredResult | null }) {
  const score = result ? Math.round((result.score / result.total) * 10) : null;

  return (
    <div className="rounded-2xl border-2 border-slate-100 bg-slate-50 p-4">
      <p className="text-sm font-bold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-black text-ink">
        {score !== null ? `${score}/10` : "Sin intentos"}
      </p>
    </div>
  );
}

function ModeButton({
  title,
  text,
  icon,
  onClick
}: {
  title: string;
  text: string;
  icon: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="focus-ring min-h-40 rounded-[1.75rem] border-2 border-white bg-white p-5 text-left shadow-soft transition hover:-translate-y-1 hover:border-blue-300"
    >
      <span className="text-4xl" aria-hidden="true">
        {icon}
      </span>
      <span className="mt-4 block text-2xl font-black text-ink">{title}</span>
      <span className="mt-2 block text-lg font-semibold text-slate-600">{text}</span>
    </button>
  );
}
