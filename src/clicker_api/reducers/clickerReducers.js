import {
    ON_DIAMOND_CLICK,
} from '../actions/clickerActions'

export const number_of_diamonds = ( state = 1, action ) => {
    switch ( action.type ) {
        case ON_DIAMOND_CLICK:
            return state + 1 
        default:
            return state    
    }
}