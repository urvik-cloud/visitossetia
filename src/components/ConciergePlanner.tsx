'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';

type PlannerCopy = {
  inputLabel: string;
  inputPlaceholder: string;
  chips: readonly string[];
  createButton: string;
  prototypeNote: string;
  resultTitle: string;
  dayLabel: string;
  bestForLabel: string;
  practicalLabel: string;
  supportLabel: string;
  requestCta: string;
  days: readonly string[];
  bestFor: string;
  practical: readonly string[];
  support: string;
};

export function ConciergePlanner({ copy }: { copy: PlannerCopy }) {
  const [prompt, setPrompt] = useState(copy.inputPlaceholder);
  const [selected, setSelected] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const generatedTitle = useMemo(() => {
    if (prompt.trim().length < 8) {
      return copy.resultTitle;
    }

    const compactPrompt = prompt.trim().slice(0, 65);
    return `${copy.resultTitle}: ${compactPrompt}`;
  }, [copy.resultTitle, prompt]);

  const toggleChip = (chip: string) => {
    setSelected((prev) => (prev.includes(chip) ? prev.filter((item) => item !== chip) : [...prev, chip]));
  };

  return (
    <section className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[2rem] border border-white/45 bg-white/55 p-6 shadow-[0_24px_56px_rgba(16,33,52,0.18)] backdrop-blur-xl md:p-8">
        <label className="text-sm font-semibold text-slate-700" htmlFor="concierge-input">
          {copy.inputLabel}
        </label>
        <textarea
          id="concierge-input"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder={copy.inputPlaceholder}
          className="mt-3 min-h-32 w-full rounded-2xl border border-slate-300 bg-white/90 px-4 py-3 text-slate-900 outline-none transition focus:border-stoneSky"
        />

        <div className="mt-5 flex flex-wrap gap-2">
          {copy.chips.map((chip) => {
            const active = selected.includes(chip);
            return (
              <button
                key={chip}
                type="button"
                onClick={() => toggleChip(chip)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active ? 'border-stoneSky bg-stoneSky text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'}`}
              >
                {chip}
              </button>
            );
          })}
        </div>

        <button type="button" onClick={() => setShowResult(true)} className="btn-primary mt-6 inline-flex">
          {copy.createButton}
        </button>

        <p className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/80 p-3 text-sm text-slate-700">{copy.prototypeNote}</p>
      </div>

      {showResult ? (
        <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_56px_rgba(16,33,52,0.2)]">
          <div className="relative h-56 w-full">
            <Image src="/images/03_hero_caucasus_peaks.jpg" alt={generatedTitle} fill sizes="(max-width: 1280px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2438cc] via-[#1938537f] to-[#2b516932]" />
            <h2 className="absolute bottom-4 left-4 right-4 text-2xl font-semibold leading-tight text-white">{generatedTitle}</h2>
          </div>

          <div className="space-y-4 p-6">
            <div>
              <p className="text-sm font-semibold text-slate-500">{copy.dayLabel}</p>
              <ul className="mt-2 space-y-2 text-slate-700">
                {copy.days.map((item) => (
                  <li key={item} className="rounded-xl bg-slate-100 px-3 py-2">{item}</li>
                ))}
              </ul>
            </div>
            <p><span className="font-semibold text-slate-900">{copy.bestForLabel}:</span> {copy.bestFor}</p>
            <p><span className="font-semibold text-slate-900">{copy.practicalLabel}:</span> {copy.practical.join(' · ')}</p>
            <p><span className="font-semibold text-slate-900">{copy.supportLabel}:</span> {copy.support}</p>
            <button type="button" className="btn-primary inline-flex">{copy.requestCta}</button>
          </div>
        </article>
      ) : (
        <article className="rounded-[2rem] border border-dashed border-slate-300 bg-white/60 p-8 text-slate-600">
          {copy.createButton}
        </article>
      )}
    </section>
  );
}
