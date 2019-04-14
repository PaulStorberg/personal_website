import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import portfolio from "./portfolio"
import './index.css';

class Body extends React.Component {
  render() {

    const portfolioArray = this.props.data;

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
              <a className="linkedin-top link" href="https://www.linkedin.com/in/PaulStorberg"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="link-top">
              <a className="github-top link" href="https://github.com/PaulStorberg"><i className="fab fa-github-square"></i></a>
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
            <form className="form-layout" action="https://formspree.io/paul@storberg.net" method="POST" >
              <div className="form-title">Project inquiries</div>
              <input className="form-text" type="text" name="name" placeholder="Name" />
              <input className="form-text" type="text" name="email" placeholder="Email" />
              <input className="form-text" type="text" name="budget" placeholder="Budget" />
              <textarea className="form-text" type="text" rows="3" name="outline" placeholder="Project Outline" />
              <button className="form-submit" action="submit">submit</button>
            </form>
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
  <Body data={portfolio} />,
  document.getElementById('root')
);
