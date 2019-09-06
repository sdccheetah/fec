import React from 'react';
import InitContainer from './../containers/InitContainer.js';
import QAContainer from './../containers/QAContainer.js';
import axios from 'axios';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <InitContainer />
        <QAContainer />
      </div>
    );
  }
}

export default App;
