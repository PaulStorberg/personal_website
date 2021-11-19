import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class Body extends React.Component {
  displayContactForm() {
    var form = document.getElementById("contactForm");
    var jumbotron = document.getElementById("jumbotronSlide");
    form.classList.toggle("active-form");
    jumbotron.classList.toggle("jumbotron-slide");
  }

  render() {

    return (
      <div className="background-image">
        <div className="container no-gutter scroll-container">

          <div className="row no-gutter top-links-container">
            <div className="col col-xs-3 no-gutter link-top">
              <a className="linkedin-top link" href="https://www.linkedin.com/in/PaulStorberg">LinkedIn</a>
            </div>
            
            <div className="col col-xs-3 no-gutter link-top">
              <a className="github-top link" href="https://www.upwork.com/o/profiles/users/_~010d7a419385669325/">UpWork</a>
            </div>

            <div className="col col-xs-3 no-gutter link-top">
              <a className="github-top link" href="https://github.com/PaulStorberg">GitHub</a>
            </div>

            <div className="col col-xs-3 no-gutter link-top">
              <a className="github-top link" onClick={this.displayContactForm}>Contact</a>
            </div>
          </div>

          <div className="container no-gutter jumbotron jumbotron-slide" id="jumbotronSlide">
            <div className="jumbotron-name"> Paul J. Storberg </div>
            <div className="jumbotron-title"> Software Engineer </div>
          </div>

          <div className="contact-container active-form" id="contactForm">
            <form className="form-layout" action="https://formspree.io/paul@storberg.net" method="POST" >
              <div className="form-title">Project Inquiries</div>
              <input className="form-text" type="text" name="name" placeholder="Name" />
              <input className="form-text" type="text" name="email" placeholder="Email" />
              <textarea className="form-text" type="text" rows="3" name="outline" placeholder="Project Outline" />
              <button className="form-submit" action="submit">SUBMIT</button>
            </form>
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
