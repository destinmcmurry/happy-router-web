import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import makeBarMarker from './utils/marker';

class ResultMap extends Component {

  componentDidMount() {

    const { userLocation, barsToMap } = this.props;

    if (barsToMap) { 

      mapboxgl.accessToken = 'pk.eyJ1IjoiZGVzdGlubWNtdXJycnkiLCJhIjoiY2plenRxaGw3MGdsNTJ3b2htMGRydWc3aiJ9.ycslnjgv2J9VZGZHT8EoIw';
      const map = new mapboxgl.Map({
        container: 'result-map',
        center: userLocation,
        zoom: 15,
        style: 'mapbox://styles/destinmcmurrry/cjgodot9800002rmlmvlbs0s0'
      });
      
      map.on('load', () => {
        map.loadImage('/images/marker.png', (error, image) => {
            if (error) throw error;
            map.addImage('start', image);
            map.addLayer({
              id: 'Markers',
              type: 'symbol',
              source: {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features:[{
                    'type':'Feature',
                    'geometry':{'type':'Point',
                    'coordinates': userLocation }}]}
              },
              layout: {
                'icon-image': 'start',
                'icon-size': .1
              }
            });
          });
          
          const coordsArr = [];
          const nameArr = [];
          barsToMap.forEach(bar => {
            coordsArr.push(bar.location)
            nameArr.push(bar.name)
          });
          map.loadImage('/images/bar-icon.png', (error, image) => {
            if (error) throw error;
            map.addImage('bar', image);
          for (let i = 0; i < coordsArr.length; i++) {
            makeBarMarker(map, coordsArr[i], nameArr[i]);
          }
        
          })

          map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [userLocation, ...coordsArr]
                      }
                    }
                },
                'paint': {
                  'line-color': '#79cfee',
                  'line-width': 1.5
              }
            });

        });
      
    } else {
      history.push('/results-list')
    }

  }

  render() {

    const { barsToMap } = this.props;

    return (
      <div className='map-container'>
        <div id='result-map'></div>
        <div className='result-container'>
          <button id='toggle-view' onClick={()=> history.push('/results-list')}><img src='/images/list-view.png'/></button>
        </div>
        <button className='back-to-start' id='in-map' onClick={()=> history.push('/home')}>back</button>
      </div>
    )
  }

}

const mapState = (state) => {
  return {
    userLocation: state.userOptions.userLocation,
    barsToMap: state.userOptions.route
  }
}

export default connect(mapState)(ResultMap)
