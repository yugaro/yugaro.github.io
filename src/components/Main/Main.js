import React from 'react';
import AboutMe from './AboutMe/AboutMe.js';
import SpecialtySkill from './Specialty-Skill/Specialty-Skill.js'
import Lesson from './Lesson/Lesson.js';
import ContactForm from './ContactForm/ContactForm.js';
import './Main.css';
import myicon from './image/myicon.png';

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: 'u-l',
        image: myicon,
        introduction: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
      },
      {
        name: 'u-r',
        image: myicon,
        introduction: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
      },
      {
        name: 'b-l',
        image: myicon,
        introduction: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
      },
      {
        name: 'b-r',
        image: myicon,
        introduction: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
      },
    ];

    return (
      <div className='main'>
        <div className='main-wrapper'>
         <AboutMe />
         <SpecialtySkill />
          <div className='lesson-container'>
            <h3>bio</h3>
            <div className='lesson-containers'>
            { lessonList.map((lessonItem) => {
              return (
                <Lesson
                  name={ lessonItem.name }
                  image={ lessonItem.image }
                  introduction={ lessonItem.introduction }
                />
              );
            }) }
            </div>
          </div>
          <div className='contact-container'>
            <h3>Contact</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
