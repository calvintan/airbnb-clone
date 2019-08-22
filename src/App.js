import React, { Component } from 'react';
import './App.css';

import Flat from './components/flat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          flats: data
        });
      })
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">

          </div>

          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} key={flat.id} />
            })}
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
