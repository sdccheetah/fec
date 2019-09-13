import React from 'react';
import InitContainer from './../containers/InitContainer.js';
import QAContainer from './../containers/QAContainer.js';
import Reviews from './reviews/Reviews';
import SocialMedia from './overview/SocialMedia.js';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <InitContainer props="propStringTestingToSeeIfThisWorks.jpeg"/>
        <QAContainer />
        <Reviews />
        <SocialMedia />
      </div>
    );
  }
}

export default App;
