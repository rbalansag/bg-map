import React from 'react';
import { Popup as LeafletPopup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './leaflet-custom.css'

export interface PopupProps {
    children?: React.ReactNode;
}

export const Popup: React.FC<PopupProps> = ({ children }: PopupProps) => {
    return (
        <LeafletPopup>
            {children}
        </LeafletPopup>
    )
};
