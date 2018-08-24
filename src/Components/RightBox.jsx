import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as ClosedShop from '../assets/images/shop/closedShop.png'
import * as MiniDiamondImage from '../assets/images/shop/Diamond.png'

import  {MainContainer, 
        BuyButton,
        SellButton,
        ButtonsWrapper,
        ShopContainer,
        ItemImage,
        ItemsWrapper,
        SingleItemWrapper,
        MiniDiamond,
        CostWrapper
} from '../Components_Styles/RightBox.s';

import { buyItem, pay, shakeCost, increaseDiamondsPerSecond } from '../clicker_api/actions/shopActions';


export default class RightBox extends Component {
    constructor() {
        super();

        this.state = {
            buyPressed: true,
            sellPressed: false,
        }
    }

    onSellPress() {
        this.setState({ sellPressed: true })
        this.setState({ buyPressed: false })
    }

    onBuyPress() {
        this.setState({ buyPressed: true })
        this.setState({ sellPressed: false })
    }

    buyItem(item) {
        if (item.cost <= this.props.numberOfDiamonds && item.lvlNeeded <= this.props.level ) {
            this.props.buyItem(item)
            this.props.pay(item)
            this.props.increaseDiamondsPerSecond(item.diamondsPerSecond)
            
            return;
        }
       
        this.props.shakeCost(item.name)
        setTimeout( () => this.props.shakeCost(''), 200 )
    }

    showItemCost(item) {
        if (item.lvlNeeded <= this.props.level) {
            return  <div> - {item.cost} <MiniDiamond src={ MiniDiamondImage } /> </div>
        }
        else { 
            return <span style={{color:'white'}}> { item.lvlNeeded + ' lvl' } </span> 
        }
            
            
    }

    render() {
        return (
            <MainContainer>
              <ButtonsWrapper>
                <BuyButton onClick={ () => this.onBuyPress() }
                    pressed={ this.state.buyPressed }>
                    BUY
                </BuyButton>

                <SellButton onClick={ () => this.onSellPress() }
                    pressed={ this.state.sellPressed }>
                    SELL
                </SellButton>
              </ButtonsWrapper>

              <ShopContainer>
                  <ItemsWrapper>
                    { this.props.items.map( (item,key) =>
                      <SingleItemWrapper key={key}>

                        <CostWrapper afford={ item.cost <= this.props.numberOfDiamonds }
                            animate={ this.props.itemToShake === item.name }> 
                            { this.showItemCost(item) }    
                        </CostWrapper>
                        <ItemImage src={ item.lvlNeeded <= this.props.level ? 
                                require('../assets/images/shop/shop'+ item.name +'.png') :
                                ClosedShop
                            }                             
                            onClick={ () => this.buyItem(item) }                                
                        />    
                    
                      </SingleItemWrapper>
                    )}

                  </ItemsWrapper> 
              </ShopContainer>
            
            </MainContainer>
        )
    }
}

const mapStateToProps = state => ({
    level: state.level.level,
    items: state.items,
    numberOfDiamonds: state.numberOfDiamonds,
    itemToShake: state.itemToShake
})
const mapDispatchToProps = dispatch => ({
    buyItem: item => dispatch(buyItem(item)),
    pay: diamondsToPay => dispatch(pay(diamondsToPay)),
    shakeCost: itemName => dispatch(shakeCost(itemName)),
    increaseDiamondsPerSecond: increaseAmount => dispatch(increaseDiamondsPerSecond(increaseAmount))
})

export const VisibleRightBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(RightBox)