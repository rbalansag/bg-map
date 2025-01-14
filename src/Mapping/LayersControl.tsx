import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './leaflet-custom.css'
import L, { LatLngExpression } from 'leaflet';

export interface MarkerProps {
    position: LatLngExpression;
    children?: React.ReactNode;
    iconUrl?: string;
    iconShadowUrl?: string;
}

const createIcon = (iconUrl?: string, iconShadowUrl?: string) => {
    if (!iconUrl) return undefined;
    
    return new L.Icon({
        iconUrl: iconUrl,
        iconRetinaUrl: iconUrl,
        shadowUrl: iconShadowUrl,
        shadowAnchor: [24, 40],
        shadowSize: [50, 64],
        popupAnchor: [-3, -76],
        iconSize: new L.Point(75, 75),
        className: 'leaflet-div-icon',
        iconAnchor: [37, 75]
    });
};

export const Marker: React.FC<MarkerProps> = ({ position, children, iconUrl, iconShadowUrl }: MarkerProps) => {
    const icon = iconUrl ? createIcon(iconUrl, iconShadowUrl) : undefined;
    
    return (
        <LeafletMarker position={position} icon={icon}>
            {children}
        </LeafletMarker>
    )
};
