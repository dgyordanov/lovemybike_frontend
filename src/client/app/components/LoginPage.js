"use strict";
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validEmail } from '../util/formValidators'
import inputField from './form/inputField'

// TODOs validate and submit
const LoginPage = ({ loginInProgress, authError, handleSubmit }) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>

              {authError && <div className="alert alert-danger">{authError}</div>}

              <Field name="identifier" component={inputField}
                    type="text" label="Email" />

              <Field name="password" component={inputField}
                    type="password" label="Password" required="required" />

              <div className="form-group"><button className={`btn btn-primary btn-lg ${loginInProgress && 'disabled'}`} type="submit">Login</button></div>

            </form>
          </div>
        </div>
      </div>
    );
}


function validate(formProps) {
  const errors = {};

  if (!formProps.identifier) {
    errors.identifier = 'Please enter an email';
  }

  if (!validEmail(formProps.identifier)) {
    errors.identifier = 'Invalid email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}

export default reduxForm({
  form: 'login',
  validate
})(LoginPage);

