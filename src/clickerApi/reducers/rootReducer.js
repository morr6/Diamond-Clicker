import { combineReducers } from 'redux';
import { numberOfDiamonds } from './clickerReducers';
import { items, itemToShake, diamondsPerSecond } from '../reducers/shopReducers'
import { level } from './levelReducer';
import { achievements, lastAchievementUnlocked } from './achievementsReducer'

export const rootReducer = combineReducers({
    numberOfDiamonds,
    level,
    achievements,
    items,
    itemToShake,
    diamondsPerSecond,
    lastAchievementUnlocked
})