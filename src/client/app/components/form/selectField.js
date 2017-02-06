"use strict";
import React from 'react'

const selectField = ({ options, name, label, required, meta: { touched, error, warning } }) => (
  <div className={`form-group required ${touched && error ? 'has-error' : '' }`}>
    <label className="control-label">{label}</label>
      <select className="form-control" name={name}>
        {options.map(option => <option value={option.value}>{option.label}</option>)}
      </select>
      {touched && error && <span className="help-block">{error}</span>}
  </div>
);

export default selectField;
