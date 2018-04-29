import React from 'react';
import { connect } from 'react-redux';
// import { shuffle } from './utils/shuffle';

const ResultList = (props) => {
  
  console.log(props);
  const { bars } = props.bars;

  return (
    <div>
      {
        bars.map(bar =>
          <div key={bar.id} className='result-container'>
            <div><img src={bar.image}/></div>
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
  )
}

const mapState = (state) => {
  return {
    bars: state.bars || []
  }
}

export default connect(mapState)(ResultList)
