import React, { JSX, useMemo, useState } from 'react';
import { Rectangle, useMap } from 'react-leaflet';
import { LatLngBoundsExpression, PathOptions } from 'leaflet';

interface BoundaryParameterItem {
    outerBounds?: LatLngBoundsExpression;
    innerBounds?: LatLngBoundsExpression;
}

interface BoundaryProps {
    BoundaryParameter: BoundaryParameterItem[];
    pathOptions?: {
        active: PathOptions;
        inactive: PathOptions;
    };
}

export const Boundary: React.FC<BoundaryProps> = ({
    BoundaryParameter,
    pathOptions = {
        active: { color: 'red' },
        inactive: { color: 'white' }
    }
}) => {
    const [activeBounds, setActiveBounds] = useState<LatLngBoundsExpression | null>(null);
    const map = useMap();

    const createHandlers = useMemo(
        () => (bounds: LatLngBoundsExpression) => ({
            click() {
                setActiveBounds(bounds);
                map.fitBounds(bounds);
            },
        }),
        [map],
    );

    const renderBoundaries = () => {
        const boundaries: JSX.Element[] = [];

        BoundaryParameter.forEach((param, index) => {
            if (param.outerBounds) {
                boundaries.push(
                    <Rectangle
                        key={`outer-${index}`}
                        bounds={param.outerBounds}
                        eventHandlers={createHandlers(param.outerBounds)}
                        pathOptions={activeBounds === param.outerBounds ? pathOptions.active : pathOptions.inactive}
                    />
                );
            }
            if (param.innerBounds) {
                boundaries.push(
                    <Rectangle
                        key={`inner-${index}`}
                        bounds={param.innerBounds}
                        eventHandlers={createHandlers(param.innerBounds)}
                        pathOptions={activeBounds === param.innerBounds ? pathOptions.active : pathOptions.inactive}
                    />
                );
            }
        });

        return boundaries;
    };

    return <>{renderBoundaries()}</>;
};
