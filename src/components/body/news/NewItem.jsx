import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { fetchDeleteNew } from '../../../app/store/slice/deleteNewSlice';
import { deleteNew } from '../../../app/store/slice/newsSlice';
import Swal from 'sweetalert2';
const NewItem = (props) => {
  const { dataNews } = props;
  const { _id, slug, content, created_at, description, likes, thumbnail, title, topic, views } = dataNews;
  const fallbackImage = (e) => {
    e.target.src = 'http://placehold.it/220x125';
  };
  const location = useLocation();
  const dispatch = useDispatch();
  const handleDeleteNew = async (slug) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          // dispatch(deleteNew(slug));
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
      await dispatch(fetchDeleteNew(slug));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="news">
        <input type="checkbox" className="checkbox" />
        <NavLink to={`${location.pathname}/detail-page/${_id}`} href="#" className="news-link">
          <div className="news-top">
            <img
              className="news-top__thumbnail"
              onError={fallbackImage}
              src={thumbnail || 'http://placehold.it/220x125'}
              alt=""
            />
            <span className="news-top__topic">{topic}</span>
          </div>
          <div className="news-main">
            <p className="news-main__title">{title}</p>
            <div className="news-main__info">
              <div className="info-counting">
                <p className="views">
                  <span className="icon icon--view">
                    <i className="fas fa-eye"></i>
                  </span>
                  {views}
                </p>
                <p className="likes">
                  <span className="icon icon--like">
                    <i className="fas fa-thumbs-up"></i>
                  </span>
                  {likes.length}
                </p>
              </div>
              <div className=" info-date">13/1/2020</div>
            </div>
          </div>
        </NavLink>
        <div className="news-action">
          <Link to={`${location.pathname}/store/update/${slug}`}>
            <button className="btn btn--green">Sửa</button>
          </Link>
          <button onClick={() => handleDeleteNew(slug)} className="btn btn--orange">
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

NewItem.propTypes = {
  dataNews: PropTypes.object,
};
NewItem.defaultProps = {
  dataNews: {},
};

export default NewItem;
