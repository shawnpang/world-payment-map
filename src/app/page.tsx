"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { paymentData, regions, type CountryPaymentData } from "@/data/payments";
import CountryPanel from "@/components/CountryPanel";
import Legend from "@/components/Legend";
import RegionFilter from "@/components/RegionFilter";
import SearchBar from "@/components/SearchBar";

const GlobeMap = dynamic(() => import("@/components/GlobeMap"), { ssr: false });

export default function Home() {
  const [selected, setSelected] = useState<CountryPaymentData | null>(null);
  const [hoveredIso, setHoveredIso] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    let data = paymentData;
    if (activeRegion) {
      data = data.filter(d => d.region === activeRegion);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      data = data.filter(d =>
        d.country.toLowerCase().includes(q) ||
        d.topPaymentMethods.some(m => m.toLowerCase().includes(q)) ||
        d.region.toLowerCase().includes(q)
      );
    }
    return data;
  }, [activeRegion, searchQuery]);

  const filteredIsos = new Set(filteredData.map(d => d.iso));

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 border-b border-[var(--card-border)]">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              <span className="text-[var(--accent-light)]">World</span> Payment Map
            </h1>
            <p className="text-sm text-gray-400">How people pay in every country</p>
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </header>

      {/* Filters */}
      <div className="px-6 py-3 border-b border-[var(--card-border)]">
        <div className="max-w-[1400px] mx-auto">
          <RegionFilter
            regions={regions}
            active={activeRegion}
            onSelect={setActiveRegion}
          />
        </div>
      </div>

      {/* Map + Panel */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 relative min-h-[500px]">
          <GlobeMap
            filteredIsos={filteredIsos}
            selectedIso={selected?.iso ?? null}
            onHover={(iso) => setHoveredIso(iso)}
            onSelect={(iso) => {
              const country = paymentData.find(d => d.iso === iso);
              setSelected(country ?? null);
            }}
          />
          <Legend />
        </div>

        <CountryPanel
          country={selected}
          hoveredCountry={hoveredIso ? paymentData.find(d => d.iso === hoveredIso) ?? null : null}
          onClose={() => setSelected(null)}
        />
      </div>

      {/* Stats bar */}
      <footer className="px-6 py-3 border-t border-[var(--card-border)] text-sm text-gray-500">
        <div className="max-w-[1400px] mx-auto flex justify-between">
          <span>{filteredData.length} countries</span>
          <span>Data sourced from World Bank, McKinsey, BIS, local central banks</span>
        </div>
      </footer>
    </main>
  );
}
