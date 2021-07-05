import React from 'react'
import './App.css';
import Header from "../Header/Header";
import Counter from '../Counter/Counter';

class App extends React.Component {
  render() {
    return <div className="App" >
      <Header></Header>
      <Counter value={1} type="btn-success"></Counter>
    </div>
  }
}

export default App;
