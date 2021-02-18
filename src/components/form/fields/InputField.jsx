import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const InputField = (props) => {
  const { type, placeholder, name, onChange, value } = props;

  return (
    <>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
        className="input-field"
      />
    </>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  label: '',
};
export default InputField;
