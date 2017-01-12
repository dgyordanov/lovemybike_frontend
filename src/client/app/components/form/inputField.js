"use strict";
import React from 'react'

const inputField = ({ input, label, type, required, meta: { touched, error, warning } }) => (
  <div className={`form-group ${required} ${touched && error ? 'has-error' : '' }`}>
    <label className="control-label">{label}</label>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched && error && <span className="help-block">{error}</span>}
  </div>
)

export default inputField;
