"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Globe from "react-globe.gl";
import { paymentDataByIso, type CountryPaymentData } from "@/data/payments";

// ISO alpha-3 to alpha-2 mapping for countries we have data for
const alpha3ToAlpha2: Record<string, string> = {
  CHN: "CN", JPN: "JP", KOR: "KR", TWN: "TW", HKG: "HK", MNG: "MN",
  IDN: "ID", THA: "TH", VNM: "VN", PHL: "PH", MYS: "MY", SGP: "SG",
  MMR: "MM", KHM: "KH", IND: "IN", PAK: "PK", BGD: "BD", LKA: "LK",
  NPL: "NP", ARE: "AE", SAU: "SA", ISR: "IL", TUR: "TR", IRN: "IR",
  KEN: "KE", NGA: "NG", ZAF: "ZA", GHA: "GH", TZA: "TZ", UGA: "UG",
  RWA: "RW", ETH: "ET", SEN: "SN", CIV: "CI", EGY: "EG", MAR: "MA",
  GBR: "GB", DEU: "DE", FRA: "FR", NLD: "NL", BEL: "BE", CHE: "CH",
  IRL: "IE", ESP: "ES", ITA: "IT", PRT: "PT", SWE: "SE", NOR: "NO",
  DNK: "DK", FIN: "FI", EST: "EE", LTU: "LT", POL: "PL", CZE: "CZ",
  ROU: "RO", HUN: "HU", RUS: "RU", UKR: "UA", USA: "US", CAN: "CA",
  MEX: "MX", SLV: "SV", JAM: "JM", BRA: "BR", ARG: "AR", COL: "CO",
  CHL: "CL", PER: "PE", AUS: "AU", NZL: "NZ", KAZ: "KZ", UZB: "UZ",
};

function getAdoptionColor(pct: number): string {
  if (pct >= 90) return "#4f46e5";
  if (pct >= 75) return "#6366f1";
  if (pct >= 60) return "#818cf8";
  if (pct >= 45) return "#a5b4fc";
  if (pct >= 30) return "#c7d2fe";
  return "#e0e7ff";
}

function getCountryData(feat: any): CountryPaymentData | undefined {
  const a3 = feat.properties?.ISO_A3 || feat.properties?.iso_a3;
  const a2 = alpha3ToAlpha2[a3];
  return a2 ? paymentDataByIso[a2] : undefined;
}

interface Props {
  filteredIsos: Set<string>;
  onSelect: (iso: string) => void;
  onHover: (iso: string | null) => void;
  selectedIso: string | null;
}

export default function GlobeMap({ filteredIsos, onSelect, onHover, selectedIso }: Props) {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [countries, setCountries] = useState<any[]>([]);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Load country polygons
  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json")
      .then((r) => r.json())
      .then((topoData) => {
        // @ts-expect-error topojson types
        import("topojson-client").then(({ feature }) => {
          const feat = feature(topoData, topoData.objects.countries);
          setCountries(feat.features);
        });
      });
  }, []);

  // Resize handler
  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.4;
        controls.enableZoom = true;
        controls.minDistance = 150;
        controls.maxDistance = 500;
      }
    }
  }, [countries]);

  const handlePolygonClick = useCallback(
    (polygon: any) => {
      if (!polygon) return;
      const a3 = polygon.properties?.ISO_A3 || polygon.properties?.iso_a3;
      const a2 = alpha3ToAlpha2[a3];
      if (a2 && paymentDataByIso[a2]) {
        onSelect(a2);
        // Fly to country
        const coords = polygon.properties;
        if (globeRef.current && coords) {
          // Stop auto-rotate briefly
          const controls = globeRef.current.controls();
          if (controls) controls.autoRotate = false;
          setTimeout(() => {
            if (controls) controls.autoRotate = true;
          }, 5000);
        }
      }
    },
    [onSelect]
  );

  const handlePolygonHover = useCallback(
    (polygon: any) => {
      if (!polygon) {
        setHoveredId(null);
        onHover(null);
        return;
      }
      const a3 = polygon.properties?.ISO_A3 || polygon.properties?.iso_a3;
      const a2 = alpha3ToAlpha2[a3];
      setHoveredId(a3);
      onHover(a2 || null);
    },
    [onHover]
  );

  return (
    <div ref={containerRef} className="w-full h-full min-h-[500px]">
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#6366f1"
        atmosphereAltitude={0.15}
        polygonsData={countries}
        polygonAltitude={(d: any) => {
          const a3 = d.properties?.ISO_A3 || d.properties?.iso_a3;
          const a2 = alpha3ToAlpha2[a3];
          const isSelected = a2 === selectedIso;
          const isHovered = a3 === hoveredId;
          return isSelected ? 0.06 : isHovered ? 0.03 : 0.01;
        }}
        polygonCapColor={(d: any) => {
          const data = getCountryData(d);
          const a3 = d.properties?.ISO_A3 || d.properties?.iso_a3;
          const a2 = alpha3ToAlpha2[a3];
          const isSelected = a2 === selectedIso;
          const isFiltered = a2 ? filteredIsos.has(a2) : false;

          if (isSelected) return "#f59e0b";
          if (!data || !isFiltered) return "#1a1a2e";
          if (a3 === hoveredId) return "#f59e0b";
          return getAdoptionColor(data.digitalAdoptionPct);
        }}
        polygonSideColor={(d: any) => {
          const a3 = d.properties?.ISO_A3 || d.properties?.iso_a3;
          const a2 = alpha3ToAlpha2[a3];
          if (a2 === selectedIso) return "#d97706";
          if (a3 === hoveredId) return "#d97706";
          return "rgba(20, 20, 32, 0.8)";
        }}
        polygonStrokeColor={() => "#0a0a0f"}
        polygonLabel={(d: any) => {
          const data = getCountryData(d);
          if (!data) return `<div style="padding:8px;background:rgba(20,20,32,0.95);border-radius:8px;border:1px solid #2a2a3a;color:#e5e5e5;font-family:system-ui">
            <b>${d.properties?.name || "Unknown"}</b><br/><span style="color:#666">No data</span></div>`;
          return `<div style="padding:12px;background:rgba(20,20,32,0.95);border-radius:8px;border:1px solid #2a2a3a;color:#e5e5e5;font-family:system-ui;min-width:200px">
            <b style="font-size:14px">${data.country}</b>
            <div style="color:#818cf8;font-size:12px;margin:4px 0">${data.region}</div>
            <div style="margin:8px 0;background:#1a1a2e;border-radius:4px;height:6px;overflow:hidden">
              <div style="width:${data.digitalAdoptionPct}%;height:100%;background:linear-gradient(90deg,#6366f1,#818cf8);border-radius:4px"></div>
            </div>
            <div style="font-size:11px;color:#a5b4fc;margin-bottom:6px">${data.digitalAdoptionPct}% digital adoption</div>
            <div style="font-size:11px;color:#999">${data.topPaymentMethods.join(" · ")}</div>
          </div>`;
        }}
        onPolygonClick={handlePolygonClick}
        onPolygonHover={handlePolygonHover}
        polygonsTransitionDuration={300}
        animateIn={true}
      />
    </div>
  );
}
