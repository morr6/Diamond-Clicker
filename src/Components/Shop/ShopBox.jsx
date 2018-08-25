import React, { Component } from 'react';
import { connect } from 'react-redux';

import  {
        MainContainer, 
        ShopContainer,
        ItemsWrapper,
} from './ShopBox.s';
import { ShopItem }  from './ShopItem.jsx';

export default class PureShopBox extends Component {
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
    
    handleMouseMove(event) {
        this.setState({ clientX: event.clientX, clientY: event.clientY })
    }

    render() {
        return (
            <MainContainer>
                <ShopContainer>
                  <ItemsWrapper>
                    { this.props.items.map( (item,key) =>
                      <ShopItem key={key} item={item} 
                        onMouseMove={ (event) => this.handleMouseMove(event) } 
                        onMouseOver={ () => this.setItemInfo(item) }
                        onMouseOut={ () => this.setItemInfo(null) } >
                      </ShopItem>
                    )}

                  </ItemsWrapper> 
                </ShopContainer>
            </MainContainer>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items,
})

export const ShopBox = connect(
    mapStateToProps,
)(PureShopBox)