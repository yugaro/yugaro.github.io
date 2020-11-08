import React from 'react';
import './Header.css';
import myicon from './image/myicon.png';
import top_img from './image/top.png';
import github_icon from './image/github-logo_icon.png';
import logo from './image/logo.svg';

class Header extends React.Component {
  render() {
    return (
     <div className="header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
