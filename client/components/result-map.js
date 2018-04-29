import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';

class ResultMap extends Component {

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVzdGlubWNtdXJycnkiLCJhIjoiY2plenRxaGw3MGdsNTJ3b2htMGRydWc3aiJ9.ycslnjgv2J9VZGZHT8EoIw';
    new mapboxgl.Map({
      container: 'map',
      center: this.props.userLocation,
      zoom: 14.75,
      style: 'mapbox://styles/mapbox/streets-v10'
    });
  }

  render() {
    const { bars } = this.props.bars;
    return (
      <div>
        <div id='map'></div>
      </div>
    )
  }

}

const mapState = (state) => {
  return {
    bars: state.bars || [],
    userLocation: state.userOptions.userLocation
  }
}

export default connect(mapState)(ResultMap)
