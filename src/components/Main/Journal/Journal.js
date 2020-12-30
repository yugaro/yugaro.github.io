import React from 'react';
import './Journal.css';

class Journal extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  	return(
  		<div className="journal-container">
  			<div className="tctfl main-title">
  				Journal
  			</div>
        <ul className="timeline-content-container">
          <li>
            <div className="tctfl qualification-content">
            Yuga Onoue, (2021). Event-Triggered Control for Mitigating SIS Spreading Processes. Annual Reviews in Control.
            (to appear).
            </div>
          </li>
        </ul>
  		</div>
  	);
  }
}

export default Journal;