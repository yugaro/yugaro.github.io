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
	           I'm a bachelor of Engineering Science who majors in Intelligent Systems, which are designed by mathematics, computation, computer hardware, and software engineering behind artificial intelligence, machine learning, and big data. The unique knowledge and interdisciplinary experienced skill sets as an engineer allow me to merge multidisciplinary resources, from the theoretical developments to the applications.
	           I hope to develop further my skills in a company, manage the team and provide directions that align with the overall goals of the company.
	           </div>
	        </div>
	    </div>
  	);
  }
}
export default AboutMe;
