"use strict";
import React from 'react'

const textareaField = ({ input, label, required, meta: { touched, error, warning } }) => (
  <div className={`form-group required ${touched && error ? 'has-error' : '' }`}>
    <label className="control-label">{label}</label>
      <textarea {...input} placeholder={label} className="form-control" />
      {touched && error && <span className="help-block">{error}</span>}
  </div>
)

export default textareaField;
