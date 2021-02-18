import React from 'react';
import PropTypes from 'prop-types';

const SelectGroup = (props) => {
  const { name, onChange, message } = props;
  return (
    <>
      <label htmlFor="" className="select-label">
        Chọn giải đấu
      </label>
      <select onChange={onChange} name={name} id="" className="select-field">
        <option value="">--- Giải đấu ---</option>
        <option value="premier-league">Premier League</option>
        <option value="la-liga">La Liga</option>
        <option value="serie-a">Serie A</option>
        <option value="bundesliga">Bundesliga</option>
        <option value="ligue-1">Ligue 1</option>
      </select>
      {message && (
        <span className="form-message">
          <span>(*)</span>&nbsp;
        </span>
      )}
    </>
  );
};

SelectGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  message: PropTypes.string,
};
SelectGroup.defaultProps = {
  message: '',
};

export default SelectGroup;
