import React from 'react';
import InitContainer from './../containers/InitContainer.js';
import ReviewsListContainer from './../containers/ReviewsContainer.js';


class App extends React.Component {
  
  render() {

    return (
      <div className="App">
        <InitContainer />
        <ReviewsListContainer/>
      </div>
    );
  }
}

export default App;