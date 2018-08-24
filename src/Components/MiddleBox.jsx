import React, { Component } from 'react';
import {DiamondsNumber,
        MainContainer ,
        DiamondImage,
} from '../Components_Styles/MiddleBox.s.js';
import * as BigDiamond from '../assets/images/Diamond.png'

import { connect } from 'react-redux'
import {diamondDig, 
        levelUp, 
        increaseDiamondNeeded, 
        increaseExpGained, 
        resetExpGained,
        digPerSecond
} from '../clicker_api/actions/clickerActions'

export default class MiddleBox extends Component {   

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.diamondDig(this.props.diamondsPerSecond)   
            this.props.increaseExpGained(this.props.diamondsPerSecond)

            if (this.props.expGained >= this.props.diamondsNeededToLvlUp) {
                this.props.levelUp()
                this.props.increaseDiamondNeeded()
                this.props.resetExpGained()
            }
        }, 1000);
      } 

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onBlockClick() {
      
        this.props.diamondDig(1)   
        this.props.increaseExpGained(2)

        if (this.props.expGained === this.props.diamondsNeededToLvlUp) {
            this.props.levelUp()
            this.props.increaseDiamondNeeded()
            this.props.resetExpGained() 
        }

    }

    render() {      
        return (
            <MainContainer>      

              <DiamondsNumber> 
                Diamonds { this.props.numberOfDiamonds } 
              </DiamondsNumber> 
              <div style={{color:'white'}}> Diamonds per second: { this.props.diamondsPerSecond } </div>
              <DiamondImage src={ BigDiamond } 
                onClick={ () => this.onBlockClick() } />

            </MainContainer> 
        )
    }
}

const mapStateToProps = state => ({
    numberOfDiamonds: state.numberOfDiamonds,
    level: state.level.level,
    expGained: state.level.expGained,
    diamondsNeededToLvlUp: state.level.diamondsNeededToLvlUp,
    diamondsPerSecond: state.diamondsPerSecond
        
});

const mapDispatchToProps = dispatch => ({
    diamondDig: numberOfDiamonds => dispatch(diamondDig(numberOfDiamonds)),
    levelUp: level => dispatch(levelUp(level)),
    increaseDiamondNeeded: diamondsNeededToLvlUp => dispatch(increaseDiamondNeeded(diamondsNeededToLvlUp)),
    increaseExpGained: expGained => dispatch(increaseExpGained(expGained)),
    resetExpGained: resetExp => dispatch(resetExpGained(resetExp)),
});

export const VisibleMiddleBox = connect(
    mapStateToProps,
    mapDispatchToProps
  )(MiddleBox)