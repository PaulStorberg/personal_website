import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-solid-svg-icons';
import './index.css';

class Body extends React.Component {
  render() {

    return (
      <div className="background-image">
        <div className="scroll-container">

          <div className="overlay-container top-links-container">
            <div className="link-top">
              <a className="linkedin-top link" href="https://www.linkedin.com/in/PaulStorberg">LinkedIn</a>
            </div>
            <div className="link-top">
              <a className="github-top link" href="https://github.com/PaulStorberg">GitHub</a>
            </div>
          </div>

          <div className="overlay-container jumbotron">
            <div className="jumbotron-name"> Paul J Storberg </div>
            <div className="jumbotron-title"> Front-end Web Developer </div>
          </div>

          <div className="overlay-container portfolio-container">
            <div className="retalent card">
              <a className="retalent-link link" href="https://www.retalent.io">Retalent</a>
              <img src={require("../src/retalent-image.png")} height="200" width="100%"/>
              <div>Retalent uses realistic simulations to measure behavioral traits of employees to build high performer profiles. Incoming candidates will take the same simulation right after applying, and their results will be compared to the high performer profiles to get their "fit score." Recruiters use the fit score to prioritize candidates and screen more efficiently and effectively before bringing candidates on-site.</div>
            </div>

            <div className="pokersprout card">
              <a className="pokersprout-link link" href="https://www.pokersprout.com">PokerSprout</a>
              <img src={require("../src/pokersprout-image.png")} height="200" width="100%"/>
              <div>PokerSprout is a learning management system which provides a range of courses for aspiring poker players. The courses range in difficulty level and are taught through interactive videos and follow-up tests.</div>
            </div>
          </div>

          <div className="overlay-container contact-container">
            <div>
              <div className="contact-info">Please email me for any inquires:</div>
              <a className="contact-info email-link link" href="mailto:paul@storberg.net?Subject=Inquire">Paul@Storberg.net</a>
            </div>
          </div>

          <div className="overlay-container links-container">
            <div className="link-bottom">
              <a className="linkedin-bottom link" href="https://www.linkedin.com/in/PaulStorberg">LinkedIn</a>
            </div>
            <div className="link-bottom">
              <a className="github-bottom link" href="https://github.com/PaulStorberg">GitHub</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

// =============================================================================

ReactDOM.render(
  <Body />,
  document.getElementById('root')
);
