import React from 'react';
import './GetStarted.css';

function GetStarted() {
  return (
    <section className="g-wrapper">
      <div className="padding innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residance soon
          </span>
          <button className="button">
            <a href="mailto:barcaboysakar@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
