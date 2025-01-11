import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './leaflet-custom.css'
import L, { LatLngExpression } from 'leaflet';

export interface MarkerProps {
    position: LatLngExpression;
    children?: React.ReactNode;
}


const iconSrc = require('../assets/PinLocation.webp')
const iconShadowSrc = require('../assets/PinLocationShadow.webp')

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


export const Marker: React.FC<MarkerProps> = ({ position, children }: MarkerProps) => {
    return (
        <LeafletMarker position={position} icon={PinLocation}>
            {children}
        </LeafletMarker>
    )
};
