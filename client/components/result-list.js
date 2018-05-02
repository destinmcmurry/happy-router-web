import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import convertFromMilitary from './utils/convert';
import getToday from './utils/day';
const dayOfWeek = getToday();

const ResultList = (props) => {

  const { route } = props;

  return (
    <div>
    { route 
      ?
      (
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
                  <p>{bar.happyHours[dayOfWeek].details}</p>
                  <p>from {convertFromMilitary(bar.happyHours[dayOfWeek].start)} until {convertFromMilitary(bar.happyHours[dayOfWeek].end)}</p>
                  <Link to={`/results-list/single-result/${bar.id}`}><small>see more</small></Link>
                </div>
              </div>)
            }
          </div>
          <div className='bottom-right-button'>
            <div><button id='in-list' className='back-to-start' onClick={()=> history.push('/home')}>create new route</button></div>
            {
              props.isLoggedIn && <button onClick={()=>alert('Your route has been starred! ...(but not actually, lol)')}><img src='/images/star.png'/></button>
            }
            <button onClick={()=>alert('ideally when clicked, the share button would text a restful link to a phone number that the user would input 💁🏼‍♀️')}><img src='/images/share.png'/></button>
          </div>
        </div>
      )
      :
      (
        <div className='searching-page'>
          <p>Sorry, there weren't any happy hours that matched your search :/</p>
          <div className='bottom-right-button'>
            <button id='in-list' className='back-to-start' onClick={()=> history.push('/home')}>back</button>
          </div>
        </div>
      )
    }
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
