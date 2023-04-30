import React from 'react';
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most Suitable
              <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>Find a variety of properties that suits you very easily</span>
            <span>Forgot all difficulties in finding a residance for you</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker
              color="var(--blue)"
              size={25}
            />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColsStart stat">
              <span></span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img
              src="./hero-image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
