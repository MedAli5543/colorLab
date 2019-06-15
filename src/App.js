import React from 'react'; 
import {Route, Switch} from 'react-router-dom';
import "./styles/App.css";
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import PaletteForm from './components/NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends React.Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={() => <PaletteForm />}
        />
        <Route
          exact
          path="/"
          render={routeProps => <PaletteList palettes={seedColors} {...routeProps} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
      </Switch>
    );
  }
}

export default App;
