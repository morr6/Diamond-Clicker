import {BUY_ITEM, 
        SHAKE_COST,
        INCREASE_DIAMONDS_PER_SECOND,
    } from "../actions/shopActions";
import { shopItems } from "../ShopItemList";

export const items = (state = shopItems, action) => {
    switch ( action.type ) {
        case BUY_ITEM:
            return state.map(
                item => 
                item.name === action.item.name ?
                { ...item, amount: item.amount + 1 } :
                item
            )
        default: 
            return state
    }
}

export const itemToShake = ( state = '', action ) => {
    switch ( action.type )  {
        case SHAKE_COST:
            return state = action.itemName
        default:
            return state
    }
}

export const diamondsPerSecond = ( state = 0, action ) => {
    switch ( action.type ) {
        case INCREASE_DIAMONDS_PER_SECOND:
            return state + action.increaseAmount
        default:
            return state
    }
}

