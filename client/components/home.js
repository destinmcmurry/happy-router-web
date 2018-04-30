import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNewLocation, setWindow } from '../store';
import history from '../history';

class Home extends Component {

  state = {
    coords: '',
    displayFirst: true,
    start: 1500,
    end: 2200,
    // priceCap: 4,
    // types: [],
    disabledForLocation: true,
    disabledForTime: false
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVzdGlubWNtdXJycnkiLCJhIjoiY2plenRxaGw3MGdsNTJ3b2htMGRydWc3aiJ9.ycslnjgv2J9VZGZHT8EoIw';
    new mapboxgl.Map({
      container: 'map',
      center: this.props.userLocation || [-73.963, 40.688],
      zoom: 12.25,
      style: 'mapbox://styles/mapbox/streets-v10'
    });
  }

  handleChange = event => {
    this.setState({ 
      [event.target.name] : event.target.value
    })
    // make functions that will verify if valid coords / time
    // and use here instead (or better yet just fix the input to take an address and regular time) ----------------------
    if (+this.state.coords.includes(', ')) {
      this.state.disabledForLocation = false;
    }
    if (this.state.start < 0 || this.state.start > 2400 
        || this.state.end < 0 || this.state.end > 2400) 
    {
      this.state.disabledForTime = true;
    } else {
      this.state.disabledForTime = false;
    }
    //-----------------------------------------------
  }

  handleSubmitLocation = event => {
    this.setState({ 
      displayFirst : false
    })
    this.props.submitCoords(this.state.coords);
  }

  // placeholder handler (use fullstack) until I can use geolocating
  // just so i don't have to input every time -------
  handleAllow = event => {
    this.setState({ 
      displayFirst : false
    })
    this.props.submitCoords('40.705, -74.009');
  }
  // -------------------------------------------------

  handleSubmitTime = event => {
    this.props.submitWindow(this.state.start, this.state.end);
    history.push('/searching');
  }

  handleGoBack = event => {
    this.setState({ 
      displayFirst : true
    })
  }

  render() {
    return (
      <div>
        <div id='map'></div>
        {
        this.state.displayFirst 
        ? 
        (
        <div className='options-container'>
        <h2>Choose your location!</h2>
        <label>Use current location</label>
        <button onClick={this.handleAllow}>allow</button>
        <small>OR</small>
        <label>Use coordinates:</label>
        <input type='text' name='coords' placeholder='ex: 40.6782, -73.9442' value={this.state.coords} onChange={this.handleChange}></input>
        <button disabled={this.state.disabledForLocation} onClick={this.handleSubmitLocation}>continue</button>
        </div>
        )
        : 
        (
        <div className='options-container'>
        <h2>Choose your happy hour window!</h2>
        <small>military style</small>
        <p>Begin: <input id='num-input' type='number' name='start' value={this.state.start} onChange={this.handleChange} min='0' max='2400' step='100' /></p>
        <p>End: <input id='num-input' type='number' name='end' value={this.state.end} onChange={this.handleChange} min='0' max='2400' step='100' /></p>
        <button disabled={this.state.disabledForTime} onClick={this.handleSubmitTime}>continue</button>
        <button onClick={this.handleGoBack}>back</button>
        </div>
        )
        }
      </div>
    )
  }
  
}

const mapState = state => {
  return {
    userLocation: state.userLocation
  }
}

const mapDispatch = dispatch => {
  return {
    submitCoords (coords) {
      coords = coords.split(', ');
      coords = [Number(coords[0]), Number(coords[1])]
      let x = coords.shift();
      coords.push(x);

      dispatch(setNewLocation(coords))
    },
    submitWindow(start, end) {
      dispatch(setWindow(start, end))
    }
  }
}

export default connect(mapState, mapDispatch)(Home);