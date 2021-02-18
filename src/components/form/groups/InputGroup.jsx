import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../fields/InputField';
const InputGroup = (props) => {
  const { type, placeholder, message, name, onChange, label, value } = props;
  return (
    <div className="input-group mt-20">
      {label && <label className="input-label">{label}</label>}

      <InputField value={value} label={label} onChange={onChange} type={type} placeholder={placeholder} name={name} />
      {message && <span className="form-message mt-5">(*)&nbsp; {message}</span>}
    </div>
  );
};

InputGroup.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  message: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

InputGroup.defaultProps = {
  placeholder: '',
  message: '',
  label: '',
};
export default InputGroup;
