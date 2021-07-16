import React from 'react'
import './App.css';
import Header from "../../components/Header/Header";
import Clock from '../../components/Clock';
import Loading from '../../components/Loading';

class App extends React.Component {
  state = { showClock: false };

  toggleClock = () => {
    this.setState((state) => {
      return { showClock: !state.showClock }
    })
  }

  render() {
    return <div className="App" >
      <Header></Header>

      <div className="text-center pt-5">
        <button className="btn btn-dark mb-3" onClick={this.toggleClock}>
          {this.state.showClock && "Hide" || "Show"}
        </button>
        <br />
        {this.state.showClock && <Clock />}
      </div>
      <div className="text-center mt-4">
        <Loading />
      </div>
    </div>
  }
}

export default App;
