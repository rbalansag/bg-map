import React from 'react';
import 'leaflet/dist/leaflet.css';
import './leaflet-custom.css';
import { LatLngExpression, PathOptions } from 'leaflet';
export interface PolygonProps {
    positions: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][];
    pathOptions?: PathOptions;
    children?: React.ReactNode;
    inLayer?: boolean;
    layerName?: string;
}
export declare const Polygon: React.FC<PolygonProps>;
