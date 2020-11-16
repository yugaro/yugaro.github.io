import React from 'react';
import './Specialty-Skill.css';


class AboutMe extends React.Component {
	constructor(props) {
    super(props);
  }
  render(){
  	const s_s_list=[
  		{
  			"name":"Networked Control",
  			"level":"88%",
  			"label":1,

  		},
  		{
  			"name":"Machine Learning",
  			"level":"86%",
  			"label":0,
  		},
  		{
  			"name":"Network Science",
  			"level":"82%",
  			"label":1,
  		},
  		{
  			"name":"Embedded System",
  			"level":"80%",
  			"label":0,
  		},
  		{
  			"name":"Hybrid System",
  			"level":"76%",
  			"label":1,
  		},
  		{
  			"name":"Stochastic System",
  			"level":"72%",
  			"label":0,
  		},
  		{
  			"name":"Epidemiology",
  			"level":"75%",
  			"label":1,
  		},
  		{
  			"name":"Python, Flask",
  			"level":"88%",
  			"label":0,
  		},
  		{
  			"name":"C, C++",
  			"level":"82%",
  			"label":1,
  		},
  		{
  			"name":"React, Node.js", 
  			"level":"80%",
  			"label":0,
  		},
  		{
  			"name":"AWS",
  			"level":"68%",
  			"label":1,
  		},
  		{
  			"name":"Docker",
  			"level":"76%",
  			"label":0,
  		},
  		{
  			"name":"Communication",
  			"level":"90%",
  			"label":1,
  		},
  	];

  	return(
  		<div className="s-s-container">
  			<div className="main-title">
  			Specialty & Skill
  			</div>
  			<div className="s-s-main">
			{s_s_list.map((s_s_item)=>{
				if(s_s_item.label){
					return(
					<div className="s-s-wrap">
  						<div className="s-s-title">
  							{s_s_item.name}
  						</div>
  						<div className="s-s-level-wrap">
  							<div style={{width:s_s_item.level}} className="s-s-level"> </div>
  						</div>
  					</div>
				);
				}else{
					return(
					<div className="s-s-wrap s-s-wrap-r">
  						<div className="s-s-title">
  							{s_s_item.name}
  						</div>
  						<div className="s-s-level-wrap">
  							<div style={{width:s_s_item.level}} className="s-s-level"> </div>
  						</div>
  					</div>
				);
				}
			})}
  			</div>
  		</div>
  	);
  }
}


export default AboutMe;