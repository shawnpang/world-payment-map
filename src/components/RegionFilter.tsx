"use client";

interface Props {
  regions: string[];
  active: string | null;
  onSelect: (region: string | null) => void;
}

export default function RegionFilter({ regions, active, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
          active === null
            ? "bg-[var(--accent)] text-white"
            : "bg-[var(--card)] text-gray-400 hover:text-white border border-[var(--card-border)]"
        }`}
      >
        All Regions
      </button>
      {regions.map((region) => (
        <button
          key={region}
          onClick={() => onSelect(active === region ? null : region)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            active === region
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--card)] text-gray-400 hover:text-white border border-[var(--card-border)]"
          }`}
        >
          {region}
        </button>
      ))}
    </div>
  );
}
