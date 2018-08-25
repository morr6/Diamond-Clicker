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
import { buyItem, pay, shakeCost, increaseDiamondsPerSecond } from '../../clickerApi/actions/shopActions'

const itemInfoTextStyle = {
    fontSize: 15, 
    margin: '2% 0 5% 0'
}

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
            return  <div> {item.cost + item.amount * item.cost * item.increaseCostValue } 
                <MiniDiamond src={ MiniDiamondImage } /> 
            </div>
        }
        else { 
            return <div style={{color:'white'}}> { item.lvlNeeded + ' lvl' } </div> 
        }
    }
    
    afford() {
        return this.props.item.cost + this.props.item.amount * 
            this.props.item.cost * this.props.item.increaseCostValue <= this.props.numberOfDiamonds
    }

    buyItem(item) {
        if (item.cost + item.amount * item.cost * item.increaseCostValue <= this.props.numberOfDiamonds && 
                item.lvlNeeded <= this.props.level ) {
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

    renderItemInfoContent() {
        return  <div style={itemInfoTextStyle}>
            { this.props.item.name === 'hand' ? 
                <div> 
                    <div style={{fontSize:'35px'}}> { this.props.item.name } </div>
                    each give you 
                    <span style={{fontSize:'35px'}}> { this.props.item.diamondsPerClick } </span> 
                    diamonds per click 
                    <div style={itemInfoTextStyle}> Owned: { this.props.item.amount } </div>
                    <div> { this.props.item.note } </div>
                </div> :
                <div> 
                    <div style={{fontSize:'35px'}}> { this.props.item.name } </div>
                    each give you 
                    <span style={{fontSize:'35px'}}> { this.props.item.diamondsPerSecond } </span> 
                    Diamonds per second
                    <div style={itemInfoTextStyle}> Owned: { this.props.item.amount }</div>
                    <div> { this.props.item.note } </div>
                </div>                                
            }
        </div>
    }

    render() {
        return (
            <MainContainer 
                hovered={ this.props.hovered }
                onMouseOver={ () => this.onItemHover() }
                onMouseLeave={ () => this.onItemLeave() }
                onMouseMove={ (event) => this.setMousePosition(event) }
            >
                 
                <CostWrapper 
                    afford={ this.afford() }
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
                        { this.renderItemInfoContent() }
                        
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