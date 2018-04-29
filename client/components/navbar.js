import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ handleClick, isLoggedIn, user }) => (
  <div className='navbar'>
    <Link to='/home'>
      <img id='logo' src='/images/logo-nowords.png'/>
    </Link>
    <Link to='/home'>
      <img id='logo-name' src='/images/logo-words.png'/>   
    </Link>
    {isLoggedIn ? (
    <nav className='login'>
      <small id='welcome'>Welcome, {user}!</small>
      <Link to="/account">Account</Link>
      <span className="straight-bar"> | </span>
      <a href="#" onClick={handleClick}>
        Logout
      </a>
    </nav>
    ) : (
    <nav className='login'>
      <Link to="/login">Login</Link>
      <span className="straight-bar"> | </span>
      <Link to="/signup">Sign Up</Link>
    </nav>
    )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user.email
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}