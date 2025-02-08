import React from 'react';
import 'leaflet/dist/leaflet.css';
import './leaflet-custom.css';
import { LatLngExpression } from 'leaflet';
export interface MarkerProps {
    position: LatLngExpression;
    children?: React.ReactNode;
    inLayer?: boolean;
    layerName?: string;
    iconUrl?: string;
    iconShadowUrl?: string;
    draggable?: boolean;
    eventHandlers?: any;
    ref?: any;
}
export declare const PIN_LOCATION_ICON: string;
export declare const PIN_LOCATION_SHADOW: string;
export declare const Marker: React.FC<MarkerProps>;
