import React from 'react';
import { Polygon as LeafletPolygon } from 'react-leaflet'
import { LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './leaflet-custom.css'
import { LatLngExpression, PathOptions } from 'leaflet';

export interface PolygonProps {
    positions: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][];
    pathOptions?: PathOptions;
    children?: React.ReactNode;
    inLayer?: boolean;
    layerName?: string;
}

export const Polygon: React.FC<PolygonProps> = ({
    positions,
    pathOptions,
    children,
    inLayer = false,
    layerName = "Polygon Layer"
}: PolygonProps) => {
    const polygon = (
        <LeafletPolygon positions={positions} pathOptions={pathOptions}>
            <>
                {children}
            </>
        </LeafletPolygon>
    );

    return inLayer ? (
        <LayersControl.Overlay checked name={layerName}>
            <>
                {polygon}
            </>
        </LayersControl.Overlay>
    ) : polygon;
};
