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
	           I'm a bachelor at Osaka University majoring in intelligent systems, which are synthesized by mathematics, hardware, and software engineering, etc. The areas of my particular concerns are cyber-physical systems (CPS), where physical and software components are densely intertwined with each other, and I develop their analysis and synthesis toward safe, stable, and low cost, based on machine learning, control theory, and computer science.
	          The unique knowledge and interdisciplinary experienced skill sets as an engineer allow me to merge multidisciplinary resources, from the theoretical developments to the applications.
	           I hope to develop further my skills, manage a team, and provide directions that align with the overall goals of the company.
	           </div>
	        </div>
	    </div>
  	);
  }
}
export default AboutMe;
