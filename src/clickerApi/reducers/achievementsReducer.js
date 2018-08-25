import { UNLOCK_ACHIEVEMENT } from '../actions/clickerActions'

import { achievementList } from '../achievementList';

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

export const lastAchievementUnlocked = (state = {}, action) => {
    switch( action.type ) {
        case 'SET_UNLOCKED_ACHIEVEMENT':
            return state = action.achievement 
        case 'HIDE_ACHIEVEMENT_UNLOCKED':
            return {}
        default:
            return state
    }
}