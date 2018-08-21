import React, { Component } from 'react';
import './App.css';
import VisibleMiddleBox from './Components/MiddleBox';
import ExpBarContainer from './Components/ExpBar'

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ width: '33.3%',height:'100vh',float:'left' }}>
        
        </div>

        <VisibleMiddleBox>
        </VisibleMiddleBox>

        <div style={{ 
          width: '33.3%',height:'100vh',float:'left' }}>
        </div>

        <ExpBarContainer>
        </ExpBarContainer>

      </div>
    );
  }
}

export default App;