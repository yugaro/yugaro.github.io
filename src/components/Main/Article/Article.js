import React from 'react';
import './Article.css'


class Article extends React.Component {
	constructor(props) {
    super(props);
  }
  render(){
  	return(
  		<div className="article-container">
  			<div className="tctfl main-title">
  				Article
  			</div>
  			<div className="article-wrapper">
  				<a href="https://qiita.com/yugaro/items/998750fa78b5efc79a9c" className="article-link">
  					<div className="btn article-image arti1"></div>
            <div className="tctfl artt1">Reactive Computer and Communication Technologies</div>
            <div className="tctfl artt2">For Network Control System Leaners</div>
  				</a>
  				<a href="https://qiita.com/yugaro/items/998750fa78b5efc79a9c" className="article-link">
  					<div className="btn article-image arti2"></div>
            <div className="tctfl artt1">Reactive Computer and Communication Technologies</div>
            <div className="tctfl artt2">For Network Control System Leaners</div>
  				</a>
  				<a href="https://qiita.com/yugaro/items/998750fa78b5efc79a9c" className="article-link">
  					<div className="btn article-image arti3"></div>
            <div className="tctfl artt1">Proactive Computer and Communication Technologies</div>
            <div className="tctfl artt2">For Network Control System Leaners</div>
  				</a>
  				<a href="https://qiita.com/yugaro/items/998750fa78b5efc79a9c" className="article-link">
  					<div className="btn article-image arti4"></div>
            <div className="tctfl artt1">Joint Design Approach of Controllers by BMI</div>
            <div className="tctfl artt2">For Bilinear System Leaners</div>
  				</a>
  			</div>
  		</div>
  	);
  }
}


export default Article;