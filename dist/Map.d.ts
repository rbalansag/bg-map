import React from 'react';
import 'leaflet/dist/leaflet.css';
import './leaflet-custom.css';
import { LatLngExpression } from 'leaflet';
export interface MapProps {
    position: LatLngExpression;
    children?: React.ReactNode;
    hasLayers?: boolean;
    hasMinimap?: boolean;
    minimapSize?: {
        height: number;
        width: number;
    };
}
export declare const Map: React.FC<MapProps>;
