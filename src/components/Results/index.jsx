import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Results = () => {
  return (
    <div className="results">
      <Link to="results/create" className="news-link">
        <Button variant="contained" color="primary" className="btn btn--add">
          <i className="fas fa-plus-square icon-left"></i>
          Thêm kết quả
        </Button>
      </Link>
    </div>
  );
};

export default Results;
