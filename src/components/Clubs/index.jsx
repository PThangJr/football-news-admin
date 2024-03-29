import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
const Clubs = () => {
  return (
    <div className="clubs">
      <Link to="clubs/create" className="news-link">
        <Button variant="contained" color="primary" className="btn btn--add">
          <i className="fas fa-plus-square icon-left"></i>
          Thêm Clubs
        </Button>
      </Link>
    </div>
  );
};

export default Clubs;
