import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './leaflet-custom.css'
import L, { LatLngExpression } from 'leaflet';
import { LayersControl } from 'react-leaflet'

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

const iconSrc = `${process.env.PUBLIC_URL}/assets/PinLocation.webp`;
const iconShadowSrc = `${process.env.PUBLIC_URL}/assets/PinLocationShadow.webp`;

export const PIN_LOCATION_ICON = iconSrc;
export const PIN_LOCATION_SHADOW = iconShadowSrc;

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
    iconShadowUrl = iconShadowSrc,
    draggable = false,
    eventHandlers,
    ref
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
        <LeafletMarker 
            position={position} 
            icon={customIcon}
            draggable={draggable}
            eventHandlers={eventHandlers}
            ref={ref}
        >
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
