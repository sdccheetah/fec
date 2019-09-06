import React from 'react';
import InitContainer from './../containers/InitContainer.js';
import Reviews from './reviews/Reviews';
import axios from 'axios';

class App extends React.Component {
  
  render() {

    return (
      <div className="App">
        <InitContainer />
        <Reviews/>
      </div>
    );
  }
}

export default App;