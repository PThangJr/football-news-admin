import React from 'react';
import './styles.scss';
const Clubs = () => {
  return (
    <>
      <div className="results">
        <div className="times mr-8">23/04/2021</div>
        <div className="clubs">
          <p className="home mr-8">
            <span className="name mr-8">Manchester United</span>
            <span className="logo"></span>
          </p>
          <p className="scores mr-8">
            <span className="scores__home">3</span>
            <span className="">-</span>
            <span className="scores__away">4</span>
          </p>
          <p className="away">
            <span className="logo mr-8"></span>
            <span className="name">Manchester City</span>
          </p>
        </div>
      </div>
      <div className="results">
        <div className="times mr-8">23/04/2021</div>
        <div className="clubs">
          <p className="home mr-8">
            <span className="name mr-8">Leeds</span>
            <span className="logo"></span>
          </p>
          <p className="scores mr-8">
            <span className="scores__home">3</span>
            <span className="">-</span>
            <span className="scores__away">4</span>
          </p>
          <p className="away">
            <span className="logo mr-8"></span>
            <span className="name">Everton</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Clubs;
