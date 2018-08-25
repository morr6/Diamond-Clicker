import {
    ON_DIAMOND_CLICK,
    LEVEL_UP,
    INCREASE_DIAMOND_NEEDED,
    INCREASE_EXP_NEEDED,
    RESET_EXP_GAINED,
    UNLOCK_ACHIEVEMENT,
} from '../actions/clickerActions'
import { PAY } from '../actions/shopActions';

import { achievementList } from '../achievementList';

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

export const level = (state = { level: 1, diamondsNeededToLvlUp: 10, expGained: 0 }, action) => {
    switch ( action.type ) {
        case LEVEL_UP: 
           return { ...state, level: state.level + 1 }
        case INCREASE_DIAMOND_NEEDED: 
            return { ...state, diamondsNeededToLvlUp: state.diamondsNeededToLvlUp * 2 }
        case INCREASE_EXP_NEEDED:
            return { ...state, expGained: state.expGained + action.expGained }
        case RESET_EXP_GAINED:
            return { ...state, expGained: state.expGained - state.diamondsNeededToLvlUp }
        default: 
            return state
    }
}

export const achievements = (state = achievementList, action) => {
    switch ( action.type ) {
        case UNLOCK_ACHIEVEMENT:
            return state.map(
                achievement => 
                achievement.id === action.achievementId ? 
                { ...achievement, unlocked: true } :
                achievement
            )
        default:
            return state
    }
}