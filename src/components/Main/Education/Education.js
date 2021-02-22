import React from 'react';
import './Education.css';

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const skill_list=[
      {name: 'Networked Control System'},
      {name: 'Machine Learning'},
      {name: 'Computer Science'},
      {name: 'Network Science'},
      {name: 'Embedded System'},
      {name: 'Hybrid System'},
      {name: 'Epidemiology'},
      {name: 'Statistics'},
      {name: 'C, C++'},
      {name: 'Python'},
    ];
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
                 I authored a paper on event-triggered control for mitigating deterministic SIS spreading processes, which is the novel research area for computer control.
    						</div>
    					</li>
    					<li>
    						<div className="tctfl timeline-content">
                 My research area focuses on the the analysis and design of cyber physical systems, such as networked control systems that exchange information via communication networks, as well as software development for computer control.
    						</div>
    					</li>
  					</ul>
            <div className="timeline-special-container">
              {skill_list.map((skill_item)=>{
                return(<div className="timeline-special">
                 {skill_item.name}
                </div>
              );
            })}
            </div>
          </div>
  			</div>
  		</div>
  	);
  }
}

export default Education;
