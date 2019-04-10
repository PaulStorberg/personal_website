import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Body extends React.Component {
  render() {

    return (
      <div>
        <div className="background-image">
        </div>

        Paul J Storberg

        <div className="footer">
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
