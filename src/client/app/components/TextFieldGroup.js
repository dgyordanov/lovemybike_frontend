import React from 'react';

const TextFieldGroup = ({ field, value, label, type, onChange, checkUserExists }) => {
  return (
    <div className='form-group'>
      <label className="control-label">{label}</label>
      <input
          
      
        type={type}
        name={field}
        className="form-control"
      />
    </div>  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  checkUserExists: React.PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
