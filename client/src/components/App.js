import React from 'react';
import InitContainer from './../containers/InitContainer.js';
import ReviewsListContainer from '../containers/ReviewsListContainer.js';
import ReviewsMetaContainer from '../containers/ReviewsMetaContainer.js';



class App extends React.Component {
  
  render() {

    return (
      <div className="App">
        <InitContainer />
        <ReviewsMetaContainer/>
        <ReviewsListContainer/>
      </div>
    );
  }
}

export default App;