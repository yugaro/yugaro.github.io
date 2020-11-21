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
  		</div>
  	);
  }
}

export default Journal;