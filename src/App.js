import React, { Component } from 'react';
import './App.css';
import CountDownClock from './Components/CountdownClock/CountDownClock';
import 'tachyons';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 900
            }
        }
    }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
              params={particlesOptions}
              
            />
        );
        <CountDownClock />
      </div>
    );
  }
}

export default App;
