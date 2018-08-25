import {
    LEVEL_UP,
    INCREASE_DIAMOND_NEEDED,
    INCREASE_EXP_NEEDED,
    RESET_EXP_GAINED,
} from '../actions/clickerActions'

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
