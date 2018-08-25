import React, { Component } from 'react';
import {DiamondsNumber,
        MainContainer ,
        DiamondImage,
} from './BigDiamondBox.s';
import * as BigDiamondImage from '../../assets/images/Diamond.png'

import { connect } from 'react-redux'
import {diamondDig, 
        levelUp, 
        increaseDiamondNeeded, 
        increaseExpGained, 
        resetExpGained,
} from '../../clicker_api/actions/clickerActions'

export default class PureBigDiamond extends Component {   

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.diamondDig(this.props.diamondsPerSecond)   
            this.props.increaseExpGained(this.props.diamondsPerSecond)

            if (this.props.expGained >= this.props.diamondsNeededToLvlUp) {
                this.props.levelUp()
                this.props.resetExpGained()
                this.props.increaseDiamondNeeded()
            }
        }, 1000);
      } 

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onBlockClick() {
      
        this.props.diamondDig(1)   
        this.props.increaseExpGained( this.props.level === 1 ? 1 : 2)

        if (this.props.expGained === this.props.diamondsNeededToLvlUp) {
            this.props.levelUp()
            this.props.resetExpGained()
            this.props.increaseDiamondNeeded()
        }

    }

    render() {      
        return (
            <MainContainer>      

              <DiamondsNumber> 
                Diamonds { this.props.numberOfDiamonds } 
              </DiamondsNumber> 
              <div style={{color:'white'}}> Diamonds per second: { this.props.diamondsPerSecond } </div>
              <DiamondImage src={ BigDiamondImage } 
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

export const BigDiamondBox   = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PureBigDiamond)