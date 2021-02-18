import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import InputGroup from '../groups/InputGroup';

const InputControl = (props) => {
  const { form, name, type, placeholder, message, label, valueUpdate } = props;
  const { control, errors, setValue } = form;
  // console.log(message?.[name]);
  // console.log(valueUpdate);
  return (
    <Controller
      control={control}
      name={name}
      // defaultValue={valueUpdate ? valueUpdate : ''}
      render={({ onChange, onBlur, value, name, ref }, { invalid, isTouched, isDirty }) => {
        return (
          <InputGroup
            value={value}
            label={label}
            onBlur={onBlur}
            onChange={onChange}
            type={type}
            name={name}
            placeholder={placeholder}
            message={errors?.[name]?.message || message?.[name]}
          />
        );
      }}
    />
  );
};

InputControl.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  message: PropTypes.object,
  label: PropTypes.string,
};

InputControl.defaultProps = {
  placeholder: '',
  form: {},
  message: {},
  label: '',
};

export default InputControl;
