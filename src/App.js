import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './FilmListing'
import Detail from './FilmDetails'


class App extends Component {
  render() {


    return (
      <div className="film-library">
        <List />
        <Detail />
      </div>
    );
  }
}

export default App;
