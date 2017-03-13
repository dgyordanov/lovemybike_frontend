"use strict";
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { validEmail } from '../util/formValidators'
import inputField from './form/inputField'
import textareaField from './form/textareaField'
import selectField from './form/selectField'
import dropzoneInput from './form/dropzone'

const PostOffer = ({ postOfferInProgress, handleSubmit }) => {
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

              <Field name="gender" className="form-control" required="required"
                    component={selectField} label="Gender" options={genderOpts} />

              <Field name="street" component={inputField}
                    type="text" label="Street" required="required" />

              <Field name="number" component={inputField}
                    type="text" label="Street number" required="required" />

              <Field name="postcode" component={inputField}
                    type="text" label="Postcode" required="required" />

              <Field name="city" component={inputField}
                    type="text" label="City" required="required" />

              <Field name="description" component={textareaField}
                    required="required" label="Description" />

              <Field name="images" component={dropzoneInput} label="Images" required="required" />

              <div className="form-group">
                <button className={`btn btn-primary btn-lg ${postOfferInProgress && 'disabled'}`} type="submit">Create Offer</button>
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

  if (!formProps.street) {
    errors.street = 'Please enter a street';
  }

  if (!formProps.number) {
    errors.number = 'Please enter a number';
  }

  if (!formProps.city) {
    errors.city = 'Please enter a city';
  }

  if (!formProps.postcode) {
    errors.postcode = 'Please enter a postcode';
  }

  if (!formProps.gender) {
      errors.gender = 'Please enter a gender';
    }

  if (!formProps.images || Object.keys(formProps.images).length == 0) {
    errors.images = 'Please attach at least one image';
  }

  if (formProps.images && formProps.images.length > 6) {
    errors.images = 'Maximum 6 images are allowed';
  }

  formProps.images && formProps.images.some(function(image) {
    if (image.size > (6 * 1024 * 1024)) {
      errors.images = 'Maximum file image size is 6MB';
      return true;
    }
    return false;
  });

  return errors;

}

export default reduxForm({
  form: 'postOffer',
  validate
})(PostOffer);