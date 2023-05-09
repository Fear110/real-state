import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter padding innerWidth h-container">
        <img
          src="./logo.png"
          alt="Logo"
          width={100}
        />
        <div className="flexCenter h-menu">
          <Link
            to="r-wrapper"
            spy={true}
            duration={500}
            smooth={true}>
            Residencies
          </Link>{' '}
          <Link
            to="v-wrapper"
            duration={500}
            spy={true}
            smooth={true}>
            Our Values
          </Link>
          <Link
            to="cc-wrapper"
            duration={500}
            spy={true}
            smooth={true}>
            Contact Us{' '}
          </Link>{' '}
          <Link
            to="g-wrapper"
            duration={500}
            spy={true}
            smooth={true}>
            Get Started{' '}
          </Link>{' '}
          <button className="button">
            <a href=""> Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
