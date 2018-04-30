import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const ResultList = (props) => {

  const { route } = props;

  return (
    <div>
      <div className='result-container'>
        <h2>Route Details</h2>
        <button id='toggle-view' onClick={()=> history.push('/results-map')}><img src='/images/map-view.png'/></button>
        {
          route.map(bar =>
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
        <div><button id='in-list' className='back-to-start' onClick={()=> history.push('/home')}>create new route</button></div>
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
    route: state.userOptions.route,
    isLoggedIn: !!state.user.id
  }
}

export default withRouter(connect(mapState)(ResultList))
