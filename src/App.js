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
    const flat = {
      "id": 148,
      "name": "Trendy Apt in Buttes Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
      "price": 200,
      "priceCurrency": "EUR",
      "lat": 48.885707,
      "lng": 2.343543
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">

          </div>

          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} />
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
