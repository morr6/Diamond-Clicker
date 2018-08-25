import React, { Component } from 'react';
import './App.css';
import { BigDiamondBox } from './Components/BigDiamond/BigDiamondBox';
import { ExpBar} from './Components/BottomBar/BottomBarContainer';
import { ShopBox } from './Components/Shop/ShopBox';
import { AchievementsBox } from './Components/Achievements/AchievementsBox'


class App extends Component {
  render() {  
    return (
      <div>
        <AchievementsBox />

        <BigDiamondBox />

        <ShopBox />  

        <ExpBar />

      </div>
    );
  }
}

export default App;