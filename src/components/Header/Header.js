import React from 'react';
import './Header.css';
import myicon from './image/myicon.png';
import top_img from './image/top.jpg';
import github_icon from './image/github-logo2.png';
import logo from './image/logo.svg';
import instagram_icon from './image/instagram.png'
import twitter_icon from './image/twitter.png'
import linkedin_icon from './image/linkedin.png'
import mail_icon from './image/mail.png'

class Header extends React.Component {
  render() {
    return (
     <div className="header">
      <header className="App-header">
        <div className="App-header-top-containter">
          <div className="App-header-top-containter-right">
            <img src={mail_icon} className="App-logo-header mail_icon_img" alt="logo" />
            <p className="mail_fukidashi">Click to copy my email address to your clipboard</p>
            <p className="mail_fukidashi2">Copied!!</p>
           <a href = "https://github.com/yugaro" className = "btn btn-head2"> <img src={github_icon} className="App-logo-header" alt="logo" /> </a>
           <a href = "https://www.instagram.com/garoyugaro/" className = "btn btn-head2" > <img src={instagram_icon} className="App-logo-header" alt="logo"/></a>
           <a href = "https://twitter.com/garoyugaro/" className = "btn btn-head2" > <img src={twitter_icon} className="App-logo-header" alt="logo" /> </a>
           <a href = "https://www.linkedin.com/in/yuga-onoue-8934531a8/" className = "btn btn-head2" > <img src={linkedin_icon} className="App-logo-header" alt="logo" /></a>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello!
        </p>
        <p>
          I'm Yuga Onoue!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default Header;
