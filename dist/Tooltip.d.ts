import React from 'react';
import 'leaflet/dist/leaflet.css';
import './leaflet-custom.css';
export interface TooltipProps {
    children?: React.ReactNode;
}
export declare const Tooltip: React.FC<TooltipProps>;
