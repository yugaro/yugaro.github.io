import React from 'react';
import './Footer.css';
import myicon_icon from './image/myicon.png';
import github_icon from './image/github-logo.png';
import instagram_icon from './image/instagram.png';
import linkedin_icon from './image/linkedin.png';
import mail_icon from './image/mail.png';
import twitter_icon from './image/twitter.png';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isMouseOver_mail: false};
    this.state = {isMouseClick_mail: false};
    this.state = {currentPosition: 0};
  }

  handleMailOver(){
    this.setState({isMouseOver_mail: true});
  }

  handleMailOut(){
    this.setState({isMouseOver_mail: false});
    this.setState({isMouseClick_mail: false});
  }

  handleClickMail(){
    this.setState({isMouseClick_mail :true});
    this.setState({isMouseOver_mail: false});
    var textField = document.createElement('textarea')
    textField.innerText = 'onoue@hopf.sys.es.osaka-u.ac.jp'
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy');
    textField.remove()
  }

  render() {
    let mailIconText;
    if (this.state.isMouseOver_mail){
      mailIconText=(
        <p className="fmf fmf_c1">Click to copy my email address to your clipboard</p>
      );
    }

    let mailIconText2;
    if (this.state.isMouseClick_mail){
      mailIconText2=(
        <p className="fmf fmf_c2">Copied!!</p>
      );
    }

    return (
      <div className='footer'>
        <div className='footer-wrapper'>
          <div className='tctfl footer-title'>
           Contact
          </div>
          <div className='footer-container'>
            <botton className = "btn icon-wrap">
              <img src={mail_icon} alt="logo"
                onMouseOver={()=> this.handleMailOver()}
                onMouseOut={()=>this.handleMailOut()}
                onClick={()=>this.handleClickMail()}
              />
            </botton>
            {mailIconText}
            {mailIconText2}
            <a href = "https://github.com/yugaro" className = "btn icon-wrap">
              <img src={github_icon} alt="logo"/> 
            </a>
            <a href = "https://www.instagram.com/garoyugaro/" className = "btn icon-wrap" > 
              <img src={instagram_icon} alt="logo"/>
            </a>
            <a href = "https://twitter.com/garoyugaro/" className = "btn icon-wrap" > 
              <img src={twitter_icon} alt="logo"/> 
            </a>
            <a href = "https://www.linkedin.com/in/yuga-onoue-8934531a8/" className = "btn icon-wrap" >
              <img src={linkedin_icon} alt="logo"/>
            </a>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
