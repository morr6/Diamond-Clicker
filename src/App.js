import React, { Component } from 'react';
import './App.css';
import { VisibleMiddleBox } from './Components/MiddleBox';
import { VisibleExpBarContainer} from './Components/ExpBarContainer';
import { VisibleRightBox } from './Components/RightBox';
import { VisibleLeftBox } from './Components/LeftBox'

class App extends Component {
  render() {  
    return (
      <div>
        <VisibleLeftBox />

        <VisibleMiddleBox />

        <VisibleRightBox />  

        <VisibleExpBarContainer />

      </div>
    );
  }
}

export default App;