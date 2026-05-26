declare module "react-simple-maps" {
  import type { ComponentType, ReactNode, SVGProps } from "react";

  type Coordinates = [number, number];

  type GeographyShape = {
    rsmKey: string;
    [key: string]: unknown;
  };

  export type ComposableMapProps = SVGProps<SVGSVGElement> & {
    children?: ReactNode;
    projection?: string;
    projectionConfig?: Record<string, unknown>;
  };

  export type GeographiesProps = {
    geography: string | Record<string, unknown>;
    children: (props: { geographies: GeographyShape[] }) => ReactNode;
  };

  export type GeographyProps = SVGProps<SVGPathElement> & {
    geography: GeographyShape;
    style?: Record<string, Record<string, string>>;
  };

  export type MarkerProps = SVGProps<SVGGElement> & {
    children?: ReactNode;
    coordinates: Coordinates;
  };

  export type LineProps = Omit<SVGProps<SVGPathElement>, "from" | "to"> & {
    from: Coordinates;
    to: Coordinates;
  };

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Line: ComponentType<LineProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const Sphere: ComponentType<SVGProps<SVGPathElement>>;
}
