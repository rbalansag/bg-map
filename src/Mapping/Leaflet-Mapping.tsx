import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './leaflet-custom.css'
import L from 'leaflet';
export interface LeafletMappingProps {
    position: Array<number>;
    location: Array<number>;
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

export const LeafletMapping: React.FC<LeafletMappingProps> = ({ position, location }: any) => {
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}
            style={{ width: "100%", height: "100vh" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />
            {location.map((pin: any) => {
                return (
                    <Marker position={pin} icon={PinLocation}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    )
};
