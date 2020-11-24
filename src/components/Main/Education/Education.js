import React from 'react';
import './Education.css';

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  	return(
  		<div className="education-container">
  			<div className="tctfl main-title">
  				Education
  			</div>
  			<div className="main-timeline-container">
  				<div className="main-timeline-line-container">
  					<div className="main-timeline-round"></div>
  					<div className="main-timeline-line"></div>
  				</div>
  				<div className="main-timeline-wrap">
  					<div className="main-timeline-year-container">
  						<div className="main-timeline-year">
  							Apr. 2017 - Mar. 2021 (expected)
  						</div>
  						<div className="tctfl main-timeline-place">
  							Osaka, Japan
  						</div>
  					</div>
  					<div className="tctfl ttf">
  						Osaka University
  					</div>
  					<div className="tctfl tts">
  						Bachelor of Engineering Science ( Major in Intelligent System )
  					</div>
  					<ul className="timeline-content-container">
    					<li>
    						<div className="tctfl timeline-content">
                 I authored a paper on computer-controlled engineering, applying event-triggered control over the Deterministic SIS Network Model, which is one of the mathematical epidemic model.
    						</div>
    					</li>
    					<li>
    						<div className="tctfl timeline-content">
                 My research area focuses on the basic theory and its application for the analysis and design of increasingly large and complex systems, such as networked control systems that exchange information via communication networks, as well as software development for computer control.
    						</div>
    					</li>
  					</ul>
            <div className="timeline-special-container">
              <div className="timeline-special">
                Networked Control System
              </div>
              <div className="timeline-special">
                Machine Learning
              </div>
              <div className="timeline-special">
                Computer Science
              </div>
              <div className="timeline-special">
                Network Science
              </div>
              <div className="timeline-special">
                Embedded System
              </div>
              <div className="timeline-special">
                Hybrid System
              </div>
              <div className="timeline-special">
                Epidemiology
              </div>
              <div className="timeline-special">
                Statistics
              </div>
              <div className="timeline-special">
                C, C++
              </div>
              <div className="timeline-special">
                Python
              </div>
            </div>
  				</div>
  			</div>
  		</div>
  	);
  }
}

export default Education;