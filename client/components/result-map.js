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

    
    // map.on("load", function () {
    //   /* Image: An image is loaded and added to the map. */
    //   map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
    //       if (error) throw error;
    //       map.addImage("custom-marker", image);
    //       /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
    //       map.addLayer({
    //         id: "markers",
    //         type: "symbol",
    //         /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
    //         source: {
    //           type: "geojson",
    //           data: {
    //             type: "FeatureCollection",
    //             features:[{"type":"Feature","geometry":{"type":"Point","coordinates":[-73.94531101906043,40.82003451451456]}}]}
    //         },
    //         layout: {
    //           "icon-image": "custom-marker",
    //         }
    //       });
    //     });
    // });
    
    
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
