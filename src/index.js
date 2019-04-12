import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

class Body extends React.Component {
  render() {

    const portfolioArray = [
      {src: require("../src/pokersprout-image.png"),
       href: "https://www.pokersprout.com",
       title: "PokerSprout",
       text: "PokerSprout is a learning management system which provides a range of courses for aspiring poker players. The courses range in difficulty level and are taught through interactive videos and follow-up tests."},

      {src: require("../src/retalent-image.png"),
       href: "https://www.retalent.io",
       title: "Retalent",
       text: "Retalent uses realistic simulations to measure behavioral traits of employees to build high performer profiles. Incoming candidates will take the same simulation right after applying, and their results will be compared to the high performer profiles to get their 'fit score.' Recruiters use the fit score to prioritize candidates and screen more efficiently and effectively before bringing candidates on-site."}
    ];

    const portfolioCards = portfolioArray.map(card => {
      return (
        <div className="card" key={card.title}>
          <img className="card-img-top" src={card.src} alt="Image Not Working at This Time" />
          <div className="card-body">
            <h5 className="card-title"><a className="portfolio-link link" href={card.href}>{card.title}</a></h5>
            <p className="card-text">{card.text}</p>
          </div>
        </div>
      )
    });

    return (
      <div className="background-image">
        <div className="scroll-container">

          <div className="overlay-container top-links-container">
            <div className="link-top">
              <a className="linkedin-top link" href="https://www.linkedin.com/in/PaulStorberg"><i class="fab fa-linkedin"></i></a>
            </div>
            <div className="link-top">
              <a className="github-top link" href="https://github.com/PaulStorberg"><i class="fab fa-github-square"></i></a>
            </div>
          </div>

          <div className="overlay-container jumbotron">
            <div className="jumbotron-name"> Paul J Storberg </div>
            <div className="jumbotron-title"> Front-end Web Developer </div>
          </div>

          <div className="overlay-container portfolio-container container">
            <div className="section-title">Portfolio</div>
            <div className="card-columns">
              {portfolioCards}
            </div>
          </div>

          <div className="overlay-container contact-container">
            <div>
              <div className="contact-info">Please email for any inquiries:</div>
              <a className="contact-info email-link link" href="mailto:paul@storberg.net?Subject=Inquire">Paul@Storberg.net</a>
            </div>
          </div>

          <div className="overlay-container links-container">
            <div className="link-bottom">
              <a className="linkedin-bottom link" href="https://www.linkedin.com/in/PaulStorberg">LinkedIn</a>
            </div>
            <div className="link-bottom">
              <a className="upwork-bottom link" href="https://www.upwork.com/o/profiles/users/_~010d7a419385669325/">UpWork</a>
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
