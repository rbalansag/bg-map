import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { MapContainer, TileLayer, LayersControl, useMap, useMapEvent, Rectangle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './leaflet-custom.css'
import { LatLngExpression, LeafletMouseEvent } from 'leaflet';

export interface MapProps {
    position: LatLngExpression;
    children?: React.ReactNode;
    hasLayers?: boolean;
    hasMinimap?: boolean;
    minimapSize?: { height: number; width: number };
}

const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
}

const BOUNDS_STYLE = { weight: 1 }

type PositionClass = 'bottomleft' | 'bottomright' | 'topleft' | 'topright';

function MinimapBounds({ parentMap, zoom }: any) {
    const minimap = useMap()

    // Clicking a point on the minimap sets the parent's map center
    const onClick = useCallback(
        (e: LeafletMouseEvent) => {
            parentMap.setView(e.latlng, parentMap.getZoom())
        },
        [parentMap],
    )
    useMapEvent('click', onClick)

    // Keep track of bounds in state to trigger renders
    const [bounds, setBounds] = useState(parentMap.getBounds())
    const onChange = useCallback(() => {
        setBounds(parentMap.getBounds())
        // Update the minimap's view to match the parent map's center and zoom
        minimap.setView(parentMap.getCenter(), zoom)
    }, [minimap, parentMap, zoom])

    // Listen to events on the parent map
    const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [])
    useEffect(() => {
        parentMap.on('move', onChange)
        parentMap.on('zoom', onChange)

        return () => {
            parentMap.off('move', onChange)
            parentMap.off('zoom', onChange)
        }
    }, [parentMap, onChange])

    return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />
}

function MinimapControl({ position, size }: { position: PositionClass, size: any }) {
    const parentMap = useMap()
    const mapZoom = 0

    // Memoize the minimap so it's not affected by position changes
    const minimap = useMemo(
        () => (
            <MapContainer
                style={size}
                center={parentMap.getCenter()}
                zoom={mapZoom}
                dragging={false}
                doubleClickZoom={false}
                scrollWheelZoom={false}
                attributionControl={false}
                zoomControl={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
            </MapContainer>
        ),
        [],
    )

    const positionClass = (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;
    return (
        <div className={positionClass}>
            <div className="leaflet-control leaflet-bar">{minimap}</div>
        </div>
    )
}

export const Map: React.FC<MapProps> = ({ 
    position, 
    children, 
    hasLayers, 
    hasMinimap = false, 
    minimapSize = { height: 100, width: 100 } 
}: MapProps) => {
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}
            style={{ width: "100%", height: "100vh" }}
            attributionControl={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {hasMinimap && (
                <MinimapControl position="bottomright" size={minimapSize} />
            )}
            {hasLayers ? (
                <LayersControl position="topright">
                    {children}
                </LayersControl>
            ) : children}
        </MapContainer>
    )
};
