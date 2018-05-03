import React, { Component } from 'react';
import history from '../history';

class AddNew extends Component {

  state = {
    showForm: false,
    img: '',
    coords: '',
    Mstart: '',
    Mend: '',
    TUstart: '',
    TUend: '',
    Wstart: '',
    Wend: '',
    THstart: '',
    THend: '',
    Fstart: '',
    Fend: '',
    SAstart: '',
    SAend: '',
    SUstart: '',
    SUend: ''
  }

  // form, once set up, would on submit add hh to database, once set up

  render() {
    return (
      <div>
        <h4>Want to tell us about a happy hour?</h4>
        <button onClick={() => this.setState({ showForm: true })}>yes!</button>
        {
          this.state.showForm &&
          (
            <div className='hhform'>
              <button onClick={() => this.setState({ showForm: false })}>nevermind</button>
              <label>name</label><input/>
              <label>location</label><input/>
              <label>details</label><input/>
              <br />
              <small>(just a placeholder for now)</small>
              <br/>
              <button>submit</button>
            </div>
          )
        }
      </div>
    )
  }
}

export default AddNew;