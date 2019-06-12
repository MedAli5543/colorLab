import React from 'react';
import "./styles/App.css";
import Palette from './components/Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
