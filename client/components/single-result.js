import React from 'react';
import { connect } from 'react-redux';
import history from '../history';

const SingleResult = (props) => {

  const { bar } = props;

  if (!bar) return (<div></div>);

  return (
    <div>
      <div className='result-container'>
        <h2>Details</h2>
        <div key={bar.id} className='list-item'>
          <img src={bar.image} />
          <div>
            <h4>{bar.name}</h4>
            <p>price: {bar.price}</p>
            <p>rating: {bar.rating}</p>
            <p>reviews: {bar.reviews}</p>
            <p>type: {bar.type[0]}</p>
            <small>website: <a href={bar.website}>{bar.website}</a></small>
          </div>
        </div>
      </div>
      <button id='back-button' onClick={()=>history.push('/results-list')}>back</button>
    </div>
  )
}

const mapState = (state, ownProps) => {

  const barId = Number(ownProps.match.params.barId);

  return {
    bar: state.bars.bars.find(bar => bar.id === barId)
  }
}

export default connect(mapState)(SingleResult)
