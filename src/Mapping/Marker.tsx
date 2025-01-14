import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './leaflet-custom.css'
import L, { LatLngExpression } from 'leaflet';
import { LayersControl } from 'react-leaflet'
import iconSrc from '../assets/PinLocation.webp';
import iconShadowSrc from '../assets/PinLocationShadow.webp';

export interface MarkerProps {
    position: LatLngExpression;
    children?: React.ReactNode;
    inLayer?: boolean;
    layerName?: string;
    iconUrl?: string;
    iconShadowUrl?: string;
}


const PinLocation = new L.Icon({
    iconUrl: iconSrc,
    iconRetinaUrl: iconSrc,
    shadowUrl: iconShadowSrc,

    shadowAnchor: [24, 40],
    shadowSize: [50, 64],
    popupAnchor: [-3, -76],
    iconSize: new L.Point(75, 75),
    className: 'leaflet-div-icon',
    iconAnchor: [37, 75]
});


export const Marker: React.FC<MarkerProps> = ({
    position,
    children,
    inLayer = false,
    layerName = "Marker Layer",
    iconUrl = iconSrc,
    iconShadowUrl = iconShadowSrc
}: MarkerProps) => {
    const customIcon = new L.Icon({
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

    const marker = (
        <LeafletMarker position={position} icon={customIcon}>
            <>
                {children}
            </>
        </LeafletMarker>
    );

    return inLayer ? (
        <LayersControl.Overlay checked name={layerName}>
            <>
                {marker}
            </>
        </LayersControl.Overlay>
    ) : marker;
};
