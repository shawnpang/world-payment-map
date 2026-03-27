"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search country or payment method..."
      className="w-full sm:w-72 bg-[var(--card)] border border-[var(--card-border)] rounded-lg px-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
    />
  );
}
