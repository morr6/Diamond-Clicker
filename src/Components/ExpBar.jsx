import React, {Component} from 'react';
import { ExpBar, ExpBarImage, Level, LevelPoints } from '../Components_Styles/ExpBar.s';

export default class ExpBarContainer extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
          <ExpBar>

            <Level> 1 </Level>
            
            <LevelPoints />
            <ExpBarImage src={ require( '../assets/images/ExpBar.png' ) } />

          </ExpBar>
        )
    }
}
