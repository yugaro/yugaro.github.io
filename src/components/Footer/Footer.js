import React from 'react';
import './Footer.css';
import myicon from './image/myicon.png';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
            <img src={myicon} />
            <p>testtesttest</p>
          </div>
          <ul className='footer-list'>
            <li>abstract</li>
            <li>apply</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
