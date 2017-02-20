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
                    type="text" label="Title" required="required" />

              <Field name="price" component={inputField}
                    type="text" label="Price" required="required" />

                // TODO: error message
              <div className="form-group required" >
                  <label className="control-label">Gender</label>
                  <Field name="gender" className="form-control" component="select">
                    {genderOpts.map(option => <option value={option.value}>{option.label}</option>)}
                  </Field>
              </div>

              <Field name="description" component={textareaField}
                    required="required" label="Description" />

              <Field name="images" component={dropzoneInput} label="Images" required="required" />

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

  if (!formProps.title) {
    errors.title = 'Please enter a title';
  }

  if (!formProps.price) {
    errors.price = 'Please enter a price';
  } else if (! (/^\d*(?:\.\d{0,2})?$/.test(formProps.price))) {
    errors.price = 'Invalid price';
  }

  if (!formProps.description) {
    errors.description = 'Please enter a description';
  }

  if (!formProps.gender) {
      errors.gender = 'Please enter a gender';
    }

  if (!formProps.images || Object.keys(formProps.images).length == 0) {
    errors.images = 'Please attach at least one image';
  }

  return errors;

}

export default reduxForm({
  form: 'postOffer',
  validate
})(PostOffer);