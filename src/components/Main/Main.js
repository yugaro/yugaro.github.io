import React from 'react';
import AboutMe from './AboutMe/AboutMe.js';
import SpecialtySkill from './SpecialtySkill/SpecialtySkill.js';
import Education from './Education/Education.js';
import WorkExperience from './WorkExperience/WorkExperience.js';
import Article from './Article/Article.js';
import Journal from './Journal/Journal.js';
import Prize from './Prize/Prize.js';
import Qualification from './Qualification/Qualification.js';
import './Main.css';
import myicon from './image/myicon.png';
//import Lesson from './Lesson/Lesson.js';
//import ContactForm from './ContactForm/ContactForm.js';

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className='main-wrapper'>
         <AboutMe />
         <SpecialtySkill />
         <Education />
         <WorkExperience />
         <Article />
         <Qualification />
         <Journal />
         <Prize />
        </div>
      </div>
    );
  }
}

export default Main;