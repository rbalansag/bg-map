import React from 'react';
import { LatLngBoundsExpression, PathOptions } from 'leaflet';
interface BoundaryParameterItem {
    outerBounds?: LatLngBoundsExpression;
    innerBounds?: LatLngBoundsExpression;
}
interface BoundaryProps {
    BoundaryParameter: BoundaryParameterItem[];
    pathOptions?: {
        active: PathOptions;
        inactive: PathOptions;
    };
}
export declare const Boundary: React.FC<BoundaryProps>;
export {};
