import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import makeBarMarker from './utils/marker';

class ResultMap extends Component {

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVzdGlubWNtdXJycnkiLCJhIjoiY2plenRxaGw3MGdsNTJ3b2htMGRydWc3aiJ9.ycslnjgv2J9VZGZHT8EoIw';
    const map = new mapboxgl.Map({
      container: 'map',
      center: this.props.userLocation || [-74.009, 40.705],
      zoom: 14.75,
      style: 'mapbox://styles/mapbox/streets-v10'
    });
    
    map.on('load', () => {
      map.loadImage('/images/marker.png', (error, image) => {
          if (error) throw error;
          map.addImage('you-are-here', image);
          map.addLayer({
            id: ''+this.props.userLocation+'-marker',
            type: 'symbol',
            source: {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features:[{
                  'type':'Feature',
                  'geometry':{'type':'Point',
                  'coordinates': this.props.userLocation }}]}
            },
            layout: {
              'icon-image': 'you-are-here',
            }
          });
        });
        // hard coded coords for now, 
        // will replace with actual results
        [(this.props.userLocation || [-74.009, 40.705]), [-74.010425, 40.705345], [-74.011075, 40.703261], [-74.006976, 40.706262]].forEach(coords => makeBarMarker(map, coords))
      });
    
  }

  render() {
    const { bars } = this.props.bars;
    return (
      <div>
        <div id='map'></div>
        <div className='result-container'>
          <button id='toggle-view' onClick={()=> history.push('/results-list')}><img src='/images/list-view.png'/></button>
        </div>
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
