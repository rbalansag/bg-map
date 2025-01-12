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
}


const iconSrc = require('@balansag.group/bg-map/src/assets/PinLocation.webp')
const iconShadowSrc = require('@balansag.group/bg-map/src/assets/PinLocationShadow.webp')

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
    layerName = "Marker Layer"
}: MarkerProps) => {
    const marker = (
        <LeafletMarker position={position} icon={PinLocation}>
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
