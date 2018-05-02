import React, { Component } from 'react';
import history from '../history';

class AddNew extends Component {

  state = {
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

  render() {
    return (
      <div className='hhform'>
        <h4>Want to submit a happy hour?</h4>
        <p>fill out this form!</p>
        <label>name</label><input/>
        <label>location</label><input/>
        <label>details</label><input/>
        <br />
        <small>(just a placeholder for now)</small>
      </div>
    )
  }

}

export default AddNew;