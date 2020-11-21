import React from 'react';
import JobTimeline from './JobTimeline/JobTimeline.js';
import './WorkExperience.css';

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const jobList=[
  		{
  			name: 'MSK Anshin Station, Mistui Sumitomo Insurance Company, Inc',
  			year: 'Dec, 2017 - Sep, 2020',
  			place: 'Osaka, Japan',
  			status: 'Customer Operator',
  			contents:[
  				{text: 'text text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text text'},
  			],
  			specials:[
  				{spec: 'text text'},
  				{spec: 'text text'},
  				{spec: 'text text'},
  				{spec: 'text text'},
  			],	
  		},
  		{
  			name: 'Daintree Manor',
  			year: 'Feb, 2019 - Mar, 2019',
  			place: 'Forest Creek, Australia',
  			status: 'Concierge',
  			contents:[
  				{text: 'text text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text text'},
  			],
  			specials:[
  				{spec: 'text text'},
  				{spec: 'text text'},
  				{spec: 'text text'},
  				{spec: 'text text'},
  			],		
  		},
  		{
  			name: 'Star Form, Inc',
  			year: 'May, 2019 - Sep, 2019',
  			place: 'Osaka, Japan',
  			status: 'Web App Engineer',
  			contents:[
  				{text: 'text text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text text'},
  			],
  			specials:[
  				{spec: 'text text'},
  				{spec: 'text text'},
  				{spec: 'text text'},
  				{spec: 'text text'},
  			],	
  		},
  		{
  			name: 'Fenrir co., LTD',
  			year: 'Feb, 2020 - May, 2020',
  			place: 'Osaka, Japan',
  			status: 'Web App Engineer',
  			contents:[
  				{text: 'text text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text text'},
  			],
  			specials:[
  				{spec: 'text text'},
  				{spec: 'text text'},
  				{spec: 'text text'},
  				{spec: 'text text'},
  			],	
  		},
  		{
  			name: 'Liberty Fish co., LTD',
  			year: 'Oct, 2020 -',
  			place: 'Osaka, Japan',
  			status: 'System Engineer',
  			contents:[
  				{text: 'text text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text text'},
  				{text: 'text text text text text text text text text text text text'},
  			],
  			specials:[
  				{spec: 'text text'},
  				{spec: 'text text'},
  				{spec: 'text text'},
  				{spec: 'text text'},
  			],	
  		},
  	];
    return (
    	<div className="workexperience-container">
    		<div className="tctfl main-title">
  				Work Experience
  			</div>
  			{ jobList.map((jobItem) => {
              return (
                <JobTimeline
                  name={ jobItem.name }
                  year={ jobItem.year }
                  place={ jobItem.place }
                  status={ jobItem.status }
                  contents={ jobItem.contents }
                  specials={ jobItem.specials }
                />
              );
            }) }
  		</div>
    );
  }
}

export default WorkExperience;



{/*
<div className="main-timeline-container">
	  				<div className="main-timeline-line-container">
	  					<div className="main-timeline-round"></div>
	  					<div className="main-timeline-line"></div>
	  				</div>
	  				<div className="main-timeline-wrap">
	  					<div className="main-timeline-year-container">
	  						<div className="main-timeline-year">
	  							2017 - 2021 (expected)
	  						</div>
	  						<div className="tctfl main-timeline-place">
	  							Osaka, Japan
	  						</div>
	  					</div>
	  					<div className="tctfl ttf">
	  						Osaka University
	  					</div>
	  					<div className="tctfl tts">
	  						Bachelor of Engineering Science ( Department of Intelligent Systems )
	  					</div>
	  					<ul className="timeline-content-container">
	    					<li><div className="tctfl timeline-content">
	    							text text text text text text text text text text text text text text text text text text text text text text text 
	    					</div></li>
	    					<li><div className="tctfl timeline-content">
	                 				 text text text text text text text text text text text text text text text text text text text text text text text 
	    					</div></li>
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



*/}