import React from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

class App extends React.Component {
  render() {
    return (
      <div> 
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
