"use strict";
import React from 'react'
import Select from 'react-select';

const inputField = ({ input, label, required, options, meta: { touched, error, warning } }) => (
  <div className={`form-group ${required} ${touched && error ? 'has-error' : '' }`}>
    <label className="control-label">{label}</label>
        <Select
            name={input.name}
            value={input.value}
            options={options}
            onChange={(option) => input.onChange(option.value)}
            onBlur={(option) => input.onBlur(option.value)}
        />
      {touched && error && <span className="help-block">{error}</span>}
  </div>
)

export default inputField;
