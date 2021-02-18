import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import SelectGroup from '../groups/SelectGroup';

const SelectControl = (props) => {
  const { form, name } = props;
  const { control, errors } = form;

  return (
    <Controller
      control={control}
      name={name}
      render={({ onChange, onBlur, value, name, ref }, { invalid, isTouched, isDirty }) => (
        <SelectGroup name={name} onBlur={onBlur} onChange={onChange} checked={value} inputRef={ref} />
      )}
    />
  );
};
SelectControl.propTypes = {};

export default SelectControl;
