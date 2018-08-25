import React, {Component} from 'react';
import {BottomBar, 
        ExpBarImage, 
        Level, 
        LevelPoints,
        InventoryBar,
        ItemImage,
        ItemWrapper,
        ItemAmount
    } from './BottomBarContainer.s';

import { connect } from 'react-redux'
import { diamondDig, levelUp } from '../../clickerApi/actions/clickerActions'

import * as ExpBarImg from '../../assets/images/bottomBar/ExpBar.png';

export default class PureExpBar extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    expBarWidth() {
        return this.props.numberOfDiamonds / this.props.diamondsNeededToLvlUp   
    }

    getItemImage(name) {
        return require('../../assets/images/bottomBar/'+name+'.png')
    }

    render() {
        return (
          <BottomBar>

            <LevelPoints expGained={ this.props.expGained / this.props.diamondsNeededToLvlUp } />
            <Level> { this.props.level } </Level>
            <ExpBarImage src={ ExpBarImg } />
            <InventoryBar>
                {
                    this.props.items.map( (item,key) =>  
                        item.amount !== 0 &&
                        <ItemWrapper key={key}>

                            <ItemImage key={key}
                                    src={ this.getItemImage(item.name) } 
                            />
                            <ItemAmount> { item.amount } </ItemAmount>

                        </ItemWrapper>
                    )
                }
                
            </InventoryBar> 

          </BottomBar>
        )
    }
}

const mapStateToProps = state => ({
    numberOfDiamonds: state.numberOfDiamonds,
    level: state.level.level,
    diamondsNeededToLvlUp: state.level.diamondsNeededToLvlUp,
    expGained: state.level.expGained,
    items: state.items
    
});

const mapDispatchToProps = dispatch => ({
    diamondDig: numberOfDiamonds => dispatch(diamondDig(numberOfDiamonds)),
    levelUp: level => dispatch(levelUp(level))
});

export const ExpBar = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PureExpBar)