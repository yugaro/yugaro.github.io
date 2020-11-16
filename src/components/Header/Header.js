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

  getWindowSize() {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    w = w.innerWidth || e.clientWidth || g.clientWidth,
    h = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return {
      width: w,
      height: h
    }
  }

  componentWillMount () {
    window.addEventListener('resize', () => {
      var size = this.getWindowSize()
    })
  }

  render() {
    let topTex;
    if(this.state.currentPosition>this.getWindowSize().height * 0.8){
      topTex=(
        <Top />
      );
    }

    let topTex2;
    if(this.state.currentPosition<=this.getWindowSize().height * 0.8){
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
          Hello!<br />I'm Yuga!
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
