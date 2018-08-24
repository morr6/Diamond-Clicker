import React, {Component} from 'react';
import {BottomBar, 
        ExpBarImage, 
        Level, 
        LevelPoints,
        InventoryBar,
        ItemImage,
        ItemWrapper,
        ItemAmount
    } from '../Components_Styles/ExpBarContainer.s';

import { connect } from 'react-redux'
import { diamondDig, levelUp } from '../clicker_api/actions/clickerActions'

import * as ExpBarImg from '../assets/images/bottomBar/ExpBar.png';

export default class ExpBarContainer extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    expBarWidth() {
        return this.props.numberOfDiamonds / this.props.diamondsNeededToLvlUp   
    }

    getItemImage(name) {
        return require('../assets/images/bottomBar/'+name+'.png')
    }

    render() {
        return (
          <BottomBar>

            <LevelPoints diamonds={ this.props.expGained / this.props.diamondsNeededToLvlUp } />
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

export const VisibleExpBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ExpBarContainer)