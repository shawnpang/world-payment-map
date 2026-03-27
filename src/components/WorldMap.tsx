"use client";

import { memo, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { paymentDataByIso } from "@/data/payments";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO numeric to ISO alpha-2 mapping for the countries we have data for
const numericToAlpha2: Record<string, string> = {
  "156": "CN", "392": "JP", "410": "KR", "158": "TW", "344": "HK", "496": "MN",
  "360": "ID", "764": "TH", "704": "VN", "608": "PH", "458": "MY", "702": "SG",
  "104": "MM", "116": "KH", "356": "IN", "586": "PK", "050": "BD", "144": "LK",
  "524": "NP", "784": "AE", "682": "SA", "376": "IL", "792": "TR", "364": "IR",
  "404": "KE", "566": "NG", "710": "ZA", "288": "GH", "834": "TZ", "800": "UG",
  "646": "RW", "231": "ET", "686": "SN", "384": "CI", "818": "EG", "504": "MA",
  "826": "GB", "276": "DE", "250": "FR", "528": "NL", "056": "BE", "756": "CH",
  "372": "IE", "724": "ES", "380": "IT", "620": "PT", "752": "SE", "578": "NO",
  "208": "DK", "246": "FI", "233": "EE", "440": "LT", "616": "PL", "203": "CZ",
  "642": "RO", "348": "HU", "643": "RU", "804": "UA", "840": "US", "124": "CA",
  "484": "MX", "222": "SV", "388": "JM", "076": "BR", "032": "AR", "170": "CO",
  "152": "CL", "604": "PE", "036": "AU", "554": "NZ", "398": "KZ", "860": "UZ",
};

function getAdoptionColor(pct: number | undefined, isFiltered: boolean): string {
  if (!isFiltered || pct === undefined) return "#1a1a2e";
  if (pct >= 90) return "#4f46e5";
  if (pct >= 75) return "#6366f1";
  if (pct >= 60) return "#818cf8";
  if (pct >= 45) return "#a5b4fc";
  if (pct >= 30) return "#c7d2fe";
  return "#e0e7ff";
}

interface Props {
  filteredIsos: Set<string>;
  hoveredIso: string | null;
  selectedIso: string | null;
  onHover: (iso: string | null) => void;
  onSelect: (iso: string) => void;
}

function WorldMap({ filteredIsos, hoveredIso, selectedIso, onHover, onSelect }: Props) {
  const handleMouseEnter = useCallback(
    (iso: string) => () => onHover(iso),
    [onHover]
  );
  const handleMouseLeave = useCallback(() => onHover(null), [onHover]);
  const handleClick = useCallback(
    (iso: string) => () => onSelect(iso),
    [onSelect]
  );

  return (
    <ComposableMap
      projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ZoomableGroup>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const numericId = geo.id;
              const iso = numericToAlpha2[numericId];
              const data = iso ? paymentDataByIso[iso] : undefined;
              const isFiltered = iso ? filteredIsos.has(iso) : false;
              const isHovered = iso === hoveredIso;
              const isSelected = iso === selectedIso;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={iso ? handleMouseEnter(iso) : undefined}
                  onMouseLeave={handleMouseLeave}
                  onClick={iso && data ? handleClick(iso) : undefined}
                  style={{
                    default: {
                      fill: isSelected
                        ? "#f59e0b"
                        : getAdoptionColor(data?.digitalAdoptionPct, isFiltered),
                      stroke: "#0a0a0f",
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: data ? "pointer" : "default",
                      transition: "fill 0.2s",
                    },
                    hover: {
                      fill: data && isFiltered
                        ? isSelected ? "#fbbf24" : "#f59e0b"
                        : "#1a1a2e",
                      stroke: "#0a0a0f",
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: data ? "pointer" : "default",
                    },
                    pressed: {
                      fill: "#d97706",
                      stroke: "#0a0a0f",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
}

export default memo(WorldMap);
