declare module "react-globe.gl" {
  import { Component } from "react";

  interface GlobeMethods {
    pointOfView: (pov: { lat: number; lng: number; altitude: number }, transitionMs?: number) => void;
    controls: () => Record<string, unknown>;
  }

  interface GlobeProps {
    ref?: React.Ref<GlobeMethods>;
    width?: number;
    height?: number;
    globeImageUrl?: string;
    backgroundImageUrl?: string;
    backgroundColor?: string;
    showAtmosphere?: boolean;
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    polygonsData?: object[];
    polygonAltitude?: number | ((d: any) => number);
    polygonCapColor?: ((d: any) => string);
    polygonSideColor?: ((d: any) => string);
    polygonStrokeColor?: ((d: any) => string);
    polygonLabel?: ((d: any) => string);
    onPolygonClick?: ((d: any, event: MouseEvent) => void);
    onPolygonHover?: ((d: any | null) => void);
    polygonsTransitionDuration?: number;
    hexPolygonsData?: object[];
    hexPolygonResolution?: number;
    hexPolygonMargin?: number;
    hexPolygonColor?: ((d: any) => string);
    animateIn?: boolean;
    waitForGlobeReady?: boolean;
  }

  export default class Globe extends Component<GlobeProps> {
    pointOfView(pov: { lat: number; lng: number; altitude: number }, transitionMs?: number): void;
    controls(): Record<string, unknown>;
  }
}
