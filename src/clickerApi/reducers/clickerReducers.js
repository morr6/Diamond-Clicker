import {
    ON_DIAMOND_CLICK,
} from '../actions/clickerActions'
import { PAY } from '../actions/shopActions';

export const numberOfDiamonds = (state = 0, action) => {
    switch ( action.type ) {
        case ON_DIAMOND_CLICK:
            return state + action.diamonds
        case PAY:
            return state - action.diamondsToPay.cost -
                action.diamondsToPay.increaseCostValue * action.diamondsToPay.amount * 
                action.diamondsToPay.cost
        default:
            return state        
    }
}