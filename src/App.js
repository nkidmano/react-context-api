import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: 'Eias Dương',
    age: 22,
    cool: true
  };
  growAYearOlder = () => this.setState((prevState, props) => {
    return {
      ...prevState,
      age: prevState.age + 1
    }
  });
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: this.growAYearOlder
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = (props) => (
  <div className="family">
    <Person />
  </div>
);


const Person = (props) => (
  <div className="person">
    <MyContext.Consumer>
      {(context) => (
        <React.Fragment>
          <p>Name: {context.state.name}</p>
          <p>Age: {context.state.age}</p>
          <button className="btn btn-primary" onClick={context.growAYearOlder}>Increment Age</button>
          <Button color="ghost-success">Primary</Button>
        </React.Fragment>
      )}
    </MyContext.Consumer>
  </div>
);

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
