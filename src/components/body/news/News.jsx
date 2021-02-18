import React, { useEffect } from 'react';
import NewItem from './NewItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../../app/store/slice/newsSlice';
const News = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const config = {
          tournament: '/',
        };
        await dispatch(fetchNews(config));
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewsData();
  }, [dispatch]);
  const { data, isLoading } = news;
  console.log(data);
  const renderNewItem = () => {
    if (isLoading) {
      return <h1>Loading...</h1>;
    } else {
      if (Array.isArray(data)) return data.map((item, index) => <NewItem key={item._id} dataNews={item} />);
    }
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    // return arr.map((item, index) => <NewItem key={index} />);
  };
  return (
    <div className="news-card">
      <h3 className="news-card__heading">News</h3>
      <div className="row">{renderNewItem()}</div>
    </div>
  );
};

export default News;
