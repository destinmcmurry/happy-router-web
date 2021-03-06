import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AddNew from './addNewHH'


export const Account = (props) => {
  const {email} = props

  return (
    <div className='account-container'>
      <h3>Saved Routes</h3>
      {/* Once users can save routes, saved routes will render here, and if none, then the following message will render */}
      <small>no saved routes yet</small>
      <AddNew />
    </div>
  )
}

const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Account)

Account.propTypes = {
  email: PropTypes.string
}