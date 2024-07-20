import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
  render() {
    const { resumeData } = this.props;
    return (
      <footer id="footer">
        <div className="row">
          <div className="twelve columns">
            <h2 className="text-white">Find me on:</h2>
            <ul className="social-links">
              {
              resumeData.socialLinks && resumeData.socialLinks.map((item) => (
                <li key={item.url}>
                  <a href={item.url} aria-label="Social Link">
                    <FontAwesomeIcon icon={['fab', item.iconClass]} />
                  </a>
                </li>
              ))
            }
            </ul>

          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home" aria-label="Back to Top">
              <FontAwesomeIcon icon={['fas', 'chevron-up']} />
            </a>
          </div>
          <em className="text-white">Made with React and fully deployed using robots 🧡</em>
        </div>
      </footer>
    );
  }
}
