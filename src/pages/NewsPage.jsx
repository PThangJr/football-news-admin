import React from 'react';
import Controls from '../components/body/Controls';
import News from '../components/body/news/News';

const NewsPage = () => {
  return (
    <>
      <Controls />
      <section className="card">
        <News />
      </section>
    </>
  );
};

export default NewsPage;
