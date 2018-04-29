import React, { Component } from 'react'
import { connect } from 'react-redux'
import GifPlayer from 'react-gif-player'

const Searching = (props) => {

  const { userLocation, userStart, userEnd } = props;
  
  return (
    <div>
      {
      (userLocation && userStart && userEnd)
      ? 
      (
      <div className='searching-page'>
        <GifPlayer id='wheel' gif='https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif' autoplay={true}/>
        <p>{`Searching for happy hours near coordinates [${userLocation[1]}, ${userLocation[0]}] and between the hours of ${userStart} and ${userEnd}`}</p>
      </div>
      )
      : 
      (
      <div className='searching-page'>
        <p>Sorry, something went wrong :/</p>
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