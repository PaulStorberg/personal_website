import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Body extends React.Component {
  render() {

    return (
      <div className="background-image">
        <div className="scroll-container">

          <div className="overlay-container jumbotron">
            <div className="jumbotron-name"> Paul J Storberg </div>
            <div className="jumbotron-title"> Front-end Web Developer </div>
          </div>

          <div className="overlay-container portfolio-container">
            <div className="">
            </div>

            <div className="">
            </div>
          </div>

          <div className="overlay-container contact-container">
          </div>

          <div className="overlay-container links-container">
            <div className="link">
              <a className="linkedin" href="https://www.linkedin.com/in/PaulStorberg">LinkedIn</a>
            </div>
            <div className="link">
              <a className="github" href="https://github.com/PaulStorberg">GitHub</a>
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
