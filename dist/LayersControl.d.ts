import React from 'react';
import 'leaflet/dist/leaflet.css';
import './leaflet-custom.css';
import { LatLngExpression } from 'leaflet';
export interface MarkerProps {
    position: LatLngExpression;
    children?: React.ReactNode;
    iconUrl?: string;
    iconShadowUrl?: string;
}
export declare const Marker: React.FC<MarkerProps>;
