"use client";

import type { CountryPaymentData } from "@/data/payments";

function AdoptionBar({ pct }: { pct: number }) {
  return (
    <div className="w-full bg-[#1a1a2e] rounded-full h-3 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{
          width: `${pct}%`,
          background: pct >= 75
            ? "linear-gradient(90deg, #6366f1, #818cf8)"
            : pct >= 45
            ? "linear-gradient(90deg, #818cf8, #a5b4fc)"
            : "linear-gradient(90deg, #a5b4fc, #c7d2fe)",
        }}
      />
    </div>
  );
}

interface Props {
  country: CountryPaymentData | null;
  hoveredCountry: CountryPaymentData | null;
  onClose: () => void;
}

export default function CountryPanel({ country, hoveredCountry, onClose }: Props) {
  const display = country || hoveredCountry;

  if (!display) {
    return (
      <aside className="w-full lg:w-[360px] border-l border-[var(--card-border)] p-6 flex items-center justify-center">
        <p className="text-gray-500 text-center">
          Click or hover on a country<br />to see payment details
        </p>
      </aside>
    );
  }

  return (
    <aside className="w-full lg:w-[360px] border-l border-[var(--card-border)] p-6 overflow-y-auto">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">{display.country}</h2>
          <span className="text-sm text-gray-400">{display.region}</span>
        </div>
        {country && (
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white text-xl leading-none"
          >
            &times;
          </button>
        )}
      </div>

      {/* Adoption */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-400">Digital Payment Adoption</span>
          <span className="font-semibold text-[var(--accent-light)]">
            {display.digitalAdoptionPct}%
          </span>
        </div>
        <AdoptionBar pct={display.digitalAdoptionPct} />
      </div>

      {/* Payment Methods */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-3">
          Top Payment Methods
        </h3>
        <div className="space-y-2">
          {display.topPaymentMethods.map((method, i) => (
            <div
              key={method}
              className="flex items-center gap-3 bg-[#1a1a2e] rounded-lg px-4 py-3"
            >
              <span className="text-[var(--accent-light)] font-bold text-sm w-6">
                #{i + 1}
              </span>
              <span className="text-sm">{method}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Notable */}
      <div>
        <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-2">
          Notable
        </h3>
        <p className="text-sm leading-relaxed text-gray-300">
          {display.notable}
        </p>
      </div>
    </aside>
  );
}
