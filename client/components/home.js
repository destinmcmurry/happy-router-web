import React, { Component } from 'react';

export default class Home extends Component {

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVzdGlubWNtdXJycnkiLCJhIjoiY2plenRxaGw3MGdsNTJ3b2htMGRydWc3aiJ9.ycslnjgv2J9VZGZHT8EoIw';
    new mapboxgl.Map({
      container: 'map',
      center: [-73.963, 40.688,],
      zoom: 12.25,
      style: 'mapbox://styles/mapbox/streets-v10'
    });
  }

  render() {
    return (
      <div id='map'></div>
    )
  }
  
}
