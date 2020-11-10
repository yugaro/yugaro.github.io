import React from 'react';
import './Header.css';
import Top from './Top/Top.js';
import Top2 from './Top/Top2.js';
import top_img from './image/top.jpg';
import logo from './image/logo.svg';


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
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <div className="header-text ht1">
          Hello!<br />I'm Yuga Onoue!
        </div>
        <div className="header-text ht2">
          Osaka University stutent
        </div>
        <div className="header-text ht3">
          scroll
        </div>
        <span className="header-guid hg1"></span>
        <span className="header-guid hg2"></span>
        <span className="header-guid hg3"></span>
      </header>
    </div>
    );
  }
}

export default Header;
