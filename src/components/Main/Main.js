import React from 'react';
import Lesson from './Lesson/Lesson.js';
import ContactForm from './ContactForm/ContactForm.js';
import myicon from './image/myicon.png';

import './Main.css';

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
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Hi!!</h1>
            <h2>I'm Yuga </h2>
          </div>
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
