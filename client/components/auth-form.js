import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = (props) => {

  const {name, displayName, handleSubmit, error} = props

  return (
    <div className='login-container'>
      <h2>{displayName}</h2>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          { displayName === 'Login'
            ? <Link to='/signup'><small>Don't have an account? Sign up!</small></Link>
            : <Link to='/login'><small>Already have an account? Log in!</small></Link>
          }
          <br/>
          <button type="submit">{displayName}</button>
          <br/>
          <Link to='/home'><button>Continue as Guest</button></Link>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}