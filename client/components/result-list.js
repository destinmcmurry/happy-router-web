import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
// import { shuffle } from './utils/shuffle';

const ResultList = (props) => {
  
  const { bars } = props.bars;

  return (
    <div>
      <div className='result-container'>
        <h2>Route Details</h2>
        <button id='map-view' onClick={()=> history.push('/results-map')}><img src='/images/map-view.png'/></button>
        {
          bars.map(bar =>
            <div key={bar.id} className='list-item'>
              <img src={bar.image}/>
              <div>
                <h4>{bar.name}</h4>
                <p>price: {bar.price}</p>
                <p>rating: {bar.rating}</p>
                <p>reviews: {bar.reviews}</p>
                <small>see more</small>
              </div>
            </div>
          )
        }
      </div>
      <div className='bottom-right-button'>
        {
          props.isLoggedIn && <button><img src='/images/star.png'/></button>
        }
        <button><img src='/images/share.png'/></button>
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    bars: state.bars || [],
    isLoggedIn: !!state.user.id
  }
}

export default connect(mapState)(ResultList)
