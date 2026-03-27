"use client";

const levels = [
  { color: "#e0e7ff", label: "<30%" },
  { color: "#c7d2fe", label: "30-44%" },
  { color: "#a5b4fc", label: "45-59%" },
  { color: "#818cf8", label: "60-74%" },
  { color: "#6366f1", label: "75-89%" },
  { color: "#4f46e5", label: "90%+" },
];

export default function Legend() {
  return (
    <div className="absolute bottom-4 left-4 bg-[var(--card)]/90 backdrop-blur border border-[var(--card-border)] rounded-lg px-4 py-3">
      <p className="text-xs text-gray-400 mb-2">Digital Payment Adoption</p>
      <div className="flex gap-1">
        {levels.map((l) => (
          <div key={l.label} className="flex flex-col items-center gap-1">
            <div
              className="w-8 h-3 rounded-sm"
              style={{ background: l.color }}
            />
            <span className="text-[10px] text-gray-500">{l.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[var(--card-border)]">
        <div className="w-3 h-3 rounded-sm bg-[#1a1a2e]" />
        <span className="text-[10px] text-gray-500">No data</span>
        <div className="w-3 h-3 rounded-sm bg-[#f59e0b] ml-2" />
        <span className="text-[10px] text-gray-500">Selected</span>
      </div>
    </div>
  );
}
