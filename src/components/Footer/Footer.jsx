import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left-sdie */}
        <div className="flexColStart f-left">
          <img
            src="./logo2.png"
            alt="Logo"
            width={120}
          />
          <span className="secondayText">
            Our vision is to make all people <br />
            the the best place to live for them
          </span>
        </div>

        {/* Right Side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Balaju, Nepal</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
