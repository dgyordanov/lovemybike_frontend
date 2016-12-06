"use strict";
import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

// TODOs validate and submit
const LoginPage = ({ handleSubmit }) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>

              <div className='form-group'>
                <label className="control-label">"Username / Email"</label>
                <Field name="identifier" component="input" type="text" className="form-control" />
              </div>

              <div className='form-group'>
                <label className="control-label">"Password"</label>
                <Field name="password" component="input" type="password" className="form-control" />
              </div>
              <div className="form-group"><button className="btn btn-primary btn-lg" type="submit">Login</button></div>
            </form>
          </div>
        </div>
      </div>
    );
}

function validate(values) {
  // TODO Validation
  console.log("Validating values: " + values);
  return {};

}

export default reduxForm({
  form: 'login',
  validate
})(LoginPage);

