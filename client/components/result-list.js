import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import generateRoute from './utils/generator';

const ResultList = (props) => {
  
  const { bars } = props.bars;
  const { loc, start, end } = props;

  if (!bars) return (<div></div>);

  const selectedBars = generateRoute(bars, loc, start, end);

  return (
    <div>
      <div className='result-container'>
        <h2>Route Details</h2>
        <button id='toggle-view' onClick={()=> history.push('/results-map')}><img src='/images/map-view.png'/></button>
        {
          selectedBars.map(bar =>
            <div key={bar.id} className='list-item'>
              <img src={bar.image}/>
              <div>
                <h4>{bar.name}</h4>
                <p>rating: {bar.rating}</p>
                <p>reviews: {bar.reviews}</p>
                <Link to={`/results-list/single-result/${bar.id}`}><small>see more</small></Link>
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
    loc: state.userOptions.userLocation,
    start: state.userOptions.start,
    end: state.userOptions.end,
    isLoggedIn: !!state.user.id
  }
}

export default withRouter(connect(mapState)(ResultList))
