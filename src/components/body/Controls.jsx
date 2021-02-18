import React from 'react';
import { Link } from 'react-router-dom';

const Controls = () => {
  return (
    <div className="controls">
      <div className="controls-add">
        <Link to="/admin/store/create" className="controls-add__link">
          <button className="btn btn--add">
            <span className=" icon-add">
              <i className="fas fa-plus-circle"></i>
            </span>
            Tạo bài viết
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Controls;
