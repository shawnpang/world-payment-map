declare module "react-simple-maps" {
  import { ComponentType, CSSProperties } from "react";

  interface ComposableMapProps {
    projectionConfig?: Record<string, unknown>;
    style?: CSSProperties;
    children?: React.ReactNode;
  }

  interface ZoomableGroupProps {
    children?: React.ReactNode;
    center?: [number, number];
    zoom?: number;
  }

  interface GeographiesProps {
    geography: string | Record<string, unknown>;
    children: (data: { geographies: GeographyData[] }) => React.ReactNode;
  }

  interface GeographyData {
    rsmKey: string;
    id: string;
    properties: Record<string, unknown>;
  }

  interface GeographyStyleState {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    outline?: string;
    cursor?: string;
    transition?: string;
  }

  interface GeographyProps {
    geography: GeographyData;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    style?: {
      default?: GeographyStyleState;
      hover?: GeographyStyleState;
      pressed?: GeographyStyleState;
    };
    key?: string;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
}
