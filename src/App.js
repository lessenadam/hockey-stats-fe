import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DatePage from './DatePage';
import ResultsPage from './ResultsPage';

class App extends Component {
  render() {
    return (
      <div>
        <div>Hockey-stats application</div>
        <Switch>
          <Route exact path='/' component={DatePage} />
          <Route path='/results' component={ResultsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
