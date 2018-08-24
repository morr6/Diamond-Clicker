import { combineReducers } from 'redux';
import { numberOfDiamonds, level, achievements} from './clickerReducers';
import { items, itemToShake, diamondsPerSecond } from '../reducers/shopReducers'

export const rootReducer = combineReducers({
    numberOfDiamonds,
    level,
    achievements,
    items,
    itemToShake,
    diamondsPerSecond
})