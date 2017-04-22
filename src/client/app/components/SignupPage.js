"use strict";
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validEmail } from '../util/formValidators'
import inputField from './form/inputField'

const SignupPage = ({ signUpInProgress, signUpError, handleSubmit }) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form onSubmit={handleSubmit}>
              <h1>Sign Up</h1>

              {signUpError && <div className="alert alert-danger">{signUpError}</div>}

              <Field name="email" component={inputField}
                    type="text" label="Email" required="required" />

              <Field name="name" component={inputField}
                    type="text" label="Name" required="required" />

              <Field name="password" component={inputField}
                    type="password" label="Password" required="required" />

              <div className="form-group"><button className={`btn btn-primary btn-lg ${signUpInProgress && 'disabled'}`} type="submit">Sign Up</button></div>

            </form>
          </div>
        </div>
      </div>
    );
}


function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!validEmail(formProps.email)) {
    errors.email = 'Invalid email';
  }

  if (!formProps.name) {
      errors.name = 'Please enter a name';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  validate
})(SignupPage);

