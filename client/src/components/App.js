import React from 'react';
import InitContainer from './../containers/InitContainer.js';
import axios from 'axios';


class App extends React.Component {
  
  render() {

    return (
      <div className="App">
        <InitContainer />
      </div>
    );
  }
}

export default App;