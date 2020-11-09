import React from 'react';
import './Header.css';
import Top from './Top/Top.js';
import Top2 from './Top/Top2.js';
import top_img from './image/top.jpg';
import logo from './image/logo.svg';
import github_icon from './image/github-logo.png';
import instagram_icon from './image/instagram.png'
import twitter_icon from './image/twitter.png'
import linkedin_icon from './image/linkedin.png'
import mail_icon from './image/mail.png'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPosition: 0};
  }

  componentDidMount() {
    window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  watchCurrentPosition() {
    this.setState({currentPosition: this.scrollTop()});
  }

 scrollTop() {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
  }

  render() {
    let topTex;
    if(this.state.currentPosition>800){
      topTex=(
        <Top />
      );
    }

    let topTex2;
    if(this.state.currentPosition<=800){
      topTex2=(
        <Top2 />
      );
    }


    return (
     <div className="header">
      <header className="App-header">
        {topTex}
        {topTex2}
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello!</p>
        <p>I'm Yuga Onoue!</p>
      </header>
    </div>
    );
  }
}

export default Header;
