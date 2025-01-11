import logo from './logo.svg';
import './App.css';
import { Mapping, LeafletMapping } from './Mapping'

function App() {
  const currentLocation = [51.505, -0.09]
  const multipleLocation = [
    [51.505, -0.09],  // London
    [48.8566, 2.3522], // Paris
    [40.7128, -74.0060], // New York
    [35.6762, 139.6503], // Tokyo
  ];

  return (
    <div className="App">
      <header className="App-header">
        <LeafletMapping position={currentLocation} location={multipleLocation} />
      </header>
    </div>
  );
}

export default App;
