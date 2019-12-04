import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer id="footer">
      <div className="row">
        <div className="twelve columns">
          <h2 className="text-white">Find me on:</h2>
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li key={item.url}>
                    <a href={item.url}>
                    <FontAwesomeIcon icon={['fab', item.iconClass]} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <FontAwesomeIcon icon={['fas', 'chevron-up']}/>
          </a>
        </div>
        <em className="text-white small-text">no animals were harmed while making this website (:</em>
      </div>
    </footer>
    );
  }
}