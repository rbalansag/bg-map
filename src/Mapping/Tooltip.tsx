import React from 'react';
import { Tooltip as LeafletTooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './leaflet-custom.css'

export interface TooltipProps {
    children?: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ children }: TooltipProps) => {
    return (
        <LeafletTooltip>
            {children}
        </LeafletTooltip>
    )
};
