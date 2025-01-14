import React from 'react';
import 'leaflet/dist/leaflet.css';
import './leaflet-custom.css';
export interface LeafletMappingProps {
    position: Array<number>;
    location: Array<number>;
}
export declare const LeafletMapping: React.FC<LeafletMappingProps>;
