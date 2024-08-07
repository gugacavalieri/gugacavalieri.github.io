/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Header extends Component {
  render() {
    const { resumeData } = this.props;
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#footer">Contact</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              I am {resumeData.name}
            </h1>
            <h3>{resumeData.role}</h3>
            <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
              {resumeData.roleDescription}
            </h3>
            <hr />
            <ul className="social">
              {
                  resumeData.socialLinks && resumeData.socialLinks.map((item) => (
                    <li key={item.name}>
                      <a href={item.url} target="_blank" rel="noreferrer" aria-label="Social Link">
                        <FontAwesomeIcon icon={['fab', item.iconClass]} />
                      </a>
                    </li>
                  ))
                }
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about" aria-label="About">
            <FontAwesomeIcon icon={['fas', 'chevron-circle-down']} />
          </a>
        </p>

      </header>
    );
  }
}
