import React from 'react';
import './Prize.css';

class Prize extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  	return(
  		<div className="prize-container">
  			<div className="tctfl main-title">
  				Prize
  			</div>
  		</div>
  	);
  }
}

export default Prize;