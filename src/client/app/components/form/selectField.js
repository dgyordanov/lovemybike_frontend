"use strict";
import React from 'react'

const selectField = ({ options, label, required, meta: { touched, error, warning } }) => {
  var optionElements = options.map(option =>
    <option value={option.value}>{option.label}</option>);
  return (
  <div className={`form-group required ${touched && error ? 'has-error' : '' }`}>
    <label className="control-label">{label}</label>
      <select>
        {optionElements}
      </select>
      {touched && error && <span className="help-block">{error}</span>}
  </div>
    );
}

export default selectField;
