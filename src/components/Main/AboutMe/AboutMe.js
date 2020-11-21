import React from 'react';
import './AboutMe.css'
import yuga01 from '../image/yuga01.png';


class AboutMe extends React.Component {
	constructor(props) {
    super(props);
  }
  render(){
  	return(
  		<div className='about-me-container'>
	        <img src={yuga01} class='about-me-icon'/>
	        <div className='about-me-main'>
	          <div className='tctfl main-title'>
	          About Me
	          </div>
	          <div className='tctfl about-me-contents'>
	           text text text text text text text text text text text text text text text text text text text text text text text
	           text text text text text text text text text text text text text text text text text text text text text text text
	           text text text text text text text text text text text text text text text text text text text text text text text
	           text text text text text text text text text text text text text text text text text text text text text text text
	           text text text text text text text text text text text text text text text text text text text text text text text
	           text text text text text text text text text text text text text text text text text text text text text text text
	          </div>
	        </div>
	    </div>
  	);
  }
}


export default AboutMe;