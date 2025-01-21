import logo from './logo.svg';
import './App.css';
import { Map, Marker, Popup, Tooltip, Polygon, Boundary } from './Mapping'
import { useState, useRef, useMemo, useCallback } from 'react';

function App() {
  const currentLocation = [51.505, -0.09];
  const draggableLocation = [51.505, -1.09];
  const [draggablePosition, setDraggablePosition] = useState(draggableLocation);
  const markerRef = useRef(null);
  
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setDraggablePosition(marker.getLatLng());
        }
      },
    }),
    [],
  );

  const multipleLocation = [
    [51.505, -0.09],  // London
    [48.8566, 2.3522], // Paris
    [40.7128, -74.0060], // New York
    [35.6762, 139.6503], // Tokyo
  ];

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.14],
      [51.52, -0.15],
      [51.52, -0.16],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ]

  const BoundaryParameter = [
    {
      outerBounds: [[50.505, -29.09], [52.505, 29.09]],
      innerBounds: [[49.505, -2.09], [53.505, 2.09]]
    },
    {
      outerBounds: [[50.505, -29.09], [52.505, 29.09]],
      innerBounds: [[46.505, -1.09], [47.505, 1.09]]
    },
  ];

  const layered = true;

  return (
    <div className="App">
      <header className="App-header">
        <Map position={currentLocation} hasLayers={layered} hasMinimap={false} minimapSize={{ height: 150, width: 150 }}>
          <Boundary BoundaryParameter={BoundaryParameter} />

          {/* Add draggable marker */}
          <Marker
            position={draggablePosition}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
          >
            <Popup>
              Drag me around!
            </Popup>
          </Marker>

          {/* Add markers with popups and tooltips */}
          {multipleLocation.map((location, index) => (
            <>
              <Marker
                key={index}
                inLayer={layered}
                layerName={index}
                position={location}
              >
                <Tooltip>Location {index + 1}</Tooltip>
                <Popup>This is location {index + 1}</Popup>
              </Marker>
            </>
          ))}

          {/* Add polygons */}
          {multiPolygon.map((polygon, index) => (
            <Polygon key={index} positions={polygon} />
          ))}
        </Map>
      </header>
    </div>
  );
}

export default App;
