import React, { Component } from 'react'
import { connect } from 'react-redux'
import GifPlayer from 'react-gif-player'
import history from '../history'

const Searching = (props) => {

  const { userLocation, userStart, userEnd } = props;
  
  return (
    <div>
      {
      (userLocation && userStart && userEnd)
      ? 
      (
      <div className='searching-page'>
        {
        setTimeout(()=>history.push('/results-list'), 3000) &&
          <div>
            <GifPlayer id='wheel' gif='https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif' autoplay={true}/>
            <p>{`Searching for happy hours near coordinates [${userLocation[1]}, ${userLocation[0]}] and between the window of ${userStart} and ${userEnd}`}</p>
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

const mapState = state => {
  return {
    userLocation: state.userOptions.userLocation,
    userStart: state.userOptions.userStart,
    userEnd: state.userOptions.userEnd
  }
}

export default connect(mapState)(Searching);