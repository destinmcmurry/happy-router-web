import React, { Component } from 'react'
import { connect } from 'react-redux'
import GifPlayer from 'react-gif-player'
import history from '../history'
import { setNewRoute } from '../store'
import generateRoute from './utils/generator'

class Searching extends Component {

  componentDidMount() {
    const { bars } = this.props.bars;
    const { loc, start, end, setRoute } = this.props;
    const selectedBars = generateRoute(bars, loc, start, end);
    setRoute(selectedBars);
  }
  
  render() {
    const { loc, start, end, setRoute } = this.props;
    return (
      <div>
        {
        (loc && start && end)
        ? 
        (
        <div className='searching-page'>
          {
          setTimeout(()=>history.push('/results-map'), 3000) &&
            <div>
              <GifPlayer id='wheel' gif='https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif' autoplay={true}/>
              <p>{`Searching for happy hours near coordinates [${loc[1]}, ${loc[0]}] and between the window of ${start} and ${end}`}</p>
            </div>
          }
        </div>
        )
        : 
        (
        <div className='searching-page'>
          {
            setTimeout(()=>history.push('/home'), 5000) &&
            <div>
              <img src='/images/sad-face.png'/>
              <p>sorry, something went wrong</p>
            </div>
          }
        </div>
        )
        }
      </div>
    )
  }
}

const mapState = state => {
  return {
    bars: state.bars || [],
    loc: state.userOptions.userLocation,
    start: state.userOptions.userStart,
    end: state.userOptions.userEnd
  }
}

const mapDispatch = dispatch => {
  return {
    setRoute(bars) {
      dispatch(setNewRoute(bars))
    }
  }
}

export default connect(mapState, mapDispatch)(Searching);