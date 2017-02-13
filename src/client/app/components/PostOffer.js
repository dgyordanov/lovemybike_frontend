"use strict";
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validEmail } from '../util/formValidators'
import inputField from './form/inputField'
import textareaField from './form/textareaField'
import dropzoneInput from './form/dropzone'

const PostOffer = ({ handleSubmit }) => {
    const genderOpts = [
        {label: "", value: ""},
        {label: "Male", value: "m"},
        {label: "Female", value: "f"},
        {label: "Child", value: "c"}
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form onSubmit={handleSubmit}>
              <h1>Post an Offer</h1>

              <Field name="title" component={inputField}
                    type="text" label="Title" />

              //decimal validation
              <Field name="price" component={inputField}
                    type="text" label="Price"/>

              <label className="control-label">Gender</label>
              <Field name="gender" className="form-control" component="select">
                {genderOpts.map(option => <option value={option.value}>{option.label}</option>)}
              </Field>

              <Field name="description" component={textareaField} label="Description" />

              <Field name="images" component={dropzoneInput} label="Images" />

              <div className="form-group">
                <button className="btn btn-primary btn-lg" type="submit">Create Offer</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
}


function validate(formProps) {
  const errors = {};

//  if (!formProps.identifier) {
//    errors.identifier = 'Please enter an email';
//  }
//
//  if (!validEmail(formProps.identifier)) {
//    errors.identifier = 'Invalid email';
//  }
//
//  if (!formProps.password) {
//    errors.password = 'Please enter a password';
//  }

  return errors;
}

export default reduxForm({
  form: 'postOffer',
  validate
})(PostOffer);