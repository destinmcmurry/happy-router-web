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
        container: 'map',
        center: userLocation,
        zoom: 14,
        style: 'mapbox://styles/mapbox/streets-v10'
      });
      
      map.on('load', () => {
        map.loadImage('/images/marker.png', (error, image) => {
            if (error) throw error;
            map.addImage('you-are-here', image);
            map.addLayer({
              id: ''+userLocation+'-marker',
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
                'icon-image': 'you-are-here',
              }
            });
          });
          
          const coordsArr = [];
          barsToMap.forEach(bar => {
            coordsArr.push(bar.location)
          });
          coordsArr.forEach(coords => makeBarMarker(map, coords))

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
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                  'line-color': '#72ccb5',
                  'line-width': {
                  'base': 1.5,
                  'stops': [
                      [14, 5],
                      [18, 20],
                  ],
              },
                  'line-dasharray': [0.5, 1.5]
              }
            });

        });
      
    } else {
      history.push('/results-list')
    }

  }

  render() {
    return (
      <div>
        <div id='map'></div>
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
