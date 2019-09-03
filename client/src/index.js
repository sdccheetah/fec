import React from "react";
import ReactDOM from "react-dom";
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    console.log("App mounted successfully!");
    this.getData();
  }

  getData() {
    axios.get('http://18.217.220.129/products/list')
      .then(data => {
        this.setState({
          list: data.data
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Project Greenfield</h1>
        <div>
          {this.state.list.map((item) => {
            return (
            <ul key={item.name}>
            <li>Name: {item.name}</li>
            <li>Slogan: {item.slogan}</li>
            <li>Description: {item.description}</li>
            <li>Category: {item.category}</li>
            </ul>
            )
          })}
        </div>
      </div>
    )
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);