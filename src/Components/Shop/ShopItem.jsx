import React,{ Component } from 'react'
import { 
        MainContainer, 
        CostWrapper, 
        ItemImage, 
        MiniDiamond,
        ItemInfo
    } from './ShopItem.s.js'
import { connect } from 'react-redux'
import * as ClosedShop from '../../assets/images/shop/closedShop.png';
import * as MiniDiamondImage from '../../assets/images/shop/Diamond.png';
import { buyItem, pay, shakeCost, increaseDiamondsPerSecond } from '../../clicker_api/actions/shopActions'

export class ShopItemPure extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            itemHovered: false,
            mousePosition: {}
        }
    }
    
    onItemHover() {
        this.setState({ itemHovered: true })
    }
    
    onItemLeave() {
        this.setState({ itemHovered: false })
    }

    showItemCost(item) {
        if (item.lvlNeeded <= this.props.level) {
            return  <div> - {item.cost} <MiniDiamond src={ MiniDiamondImage } /> </div>
        }
        else { 
            return <span style={{color:'white'}}> { item.lvlNeeded + ' lvl' } </span> 
        }
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

    setMousePosition(event) {
        this.setState({ mousePosition: { x: event.clientX, y: event.clientY } })
    }

    setItemImage() {
        return this.props.item.lvlNeeded <= this.props.level ? 
            require('../../assets/images/shop/shop'+ this.props.item.name +'.png') :
            ClosedShop
    }

    render() {
        return (
            <MainContainer 
                hovered={ this.props.hovered }
                onMouseOver={ () => this.onItemHover() }
                onMouseLeave={ () => this.onItemLeave() }
                onMouseMove={ (event) => this.setMousePosition(event) }
            >
                 
                <CostWrapper afford={ this.props.item.cost <= this.props.numberOfDiamonds }
                    animate={ this.props.itemToShake === this.props.item.name }> 
                    { this.showItemCost(this.props.item) }    
                </CostWrapper>

                <ItemImage src={ this.setItemImage() }                             
                    onClick={ () => this.buyItem(this.props.item) }                                
                />  

                { this.state.itemHovered && this.props.level >= this.props.item.lvlNeeded &&
                    <ItemInfo 
                        itemHovered={ this.state.itemHovered }
                        clientY={ this.state.mousePosition.y }
                        clientX={ this.state.mousePosition.x }
                    >
                        { this.props.item.name }
                        <div style={{fontSize: 15, marginTop:'2%'}}>
                            Diamonds per second: 
                            { this.props.item.diamondsPerSecond }
                        </div>
                    </ItemInfo>
                }
            
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

export const ShopItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopItemPure)