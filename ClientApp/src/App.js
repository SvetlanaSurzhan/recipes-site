import React, { Component } from 'react';
import Create from './components/createRecipe/Create';
import Update from './components/updateRecipe/Update';
import Shell from './components/shell/Shell';
import Gallery from './components/gallery/Gallery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  static displayName = App.name;
  render() {
    return (
      <Shell>
        <Router>
          <div>
            <Route path='/create' component={Create} />
            <Route path='/update/:id' component={Update} />
            <Route exact path='/' component={Gallery} />
          </div>
        </Router>
      </Shell>
    );
  }
}
