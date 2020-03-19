import React, { Component } from 'react';
import { Route } from 'react-router';
import { ReactDOM } from 'react-dom';
import  Create from './components/createRecipe/Create';
import  Recipe  from './components/gallery/Recipe';
import  Update  from './components/updateRecipe/Update';
import  Shell  from './components/shell/Shell';
import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div>
        <Shell>
            <Create />
            <Recipe />
            <Update />
        </Shell>
      </div>
    );
  }
}
