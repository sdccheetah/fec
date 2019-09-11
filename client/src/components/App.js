import React from 'react';
import InitContainer from './../containers/InitContainer.js';
import QAContainer from './../containers/QAContainer.js';
import Reviews from './reviews/Reviews';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <InitContainer props="propStringTestingToSeeIfThisWorks.jpeg"/>
        <QAContainer />
        <Reviews />
      </div>
    );
  }
}

export default App;
