import {BUY_ITEM, 
        SHAKE_COST,
        INCREASE_DIAMONDS_PER_SECOND,
    } from "../actions/shopActions";

const shopItems = [ 
    { name: 'hand', amount: 0, cost: 10, lvlNeeded: 1, diamondsPerSecond: 1}, 
    { name: 'stick', amount: 0, cost: 30, lvlNeeded: 1, diamondsPerSecond: 122}, 
    { name: 'woodenPick', amount: 0, cost: 1, lvlNeeded: 3, diamondsPerSecond: 3},
    { name: 'stonePick', amount: 0, cost: 100, lvlNeeded: 4, diamondsPerSecond: 4}, 
    { name: 'ironPick', amount: 0, cost: 150, lvlNeeded: 5, diamondsPerSecond: 5}, 
    { name: 'goldenPick', amount: 0, cost: 250, lvlNeeded: 6, diamondsPerSecond: 6},
    { name: 'diamondPick', amount: 0, cost: 350, lvlNeeded: 7, diamondsPerSecond: 7}, 
    { name: 'tnt', amount: 0, cost: 500, lvlNeeded: 8, diamondsPerSecond: 8}, 
    { name: 'creeper', amount: 0, cost: 1000, lvlNeeded: 9, diamondsPerSecond: 9},
];


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

export const diamondsPerSecond = ( state = 1, action ) => {
    switch ( action.type ) {
        case INCREASE_DIAMONDS_PER_SECOND:
            return state + action.increaseAmount
        default:
            return state
    }
}

