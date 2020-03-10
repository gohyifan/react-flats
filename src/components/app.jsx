import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from './flats';
import SimpleMap from './simple_map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 48.884211,
        lng: 2.34689
      },
      zoom: 12
    };
  }

  selectFlat = (id) => {
    this.setState({
      center: {
        lat: flats[id].lat,
        lng: flats[id].lng
      }
    });
  };

  render() {
    const { center, zoom } = this.state;
    return (
      <div>
        <FlatList selectFlat={this.selectFlat} />
        <SimpleMap center={center} zoom={zoom} />
      </div>
    );
  }
}

export default App;
