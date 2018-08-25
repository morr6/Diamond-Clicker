export const ON_DIAMOND_CLICK = 'ON_DIAMOND_CLICK';
export const LEVEL_UP = 'LEVEL_UP';
export const INCREASE_DIAMOND_NEEDED = 'INCREASE_DIAMOND_NEEDED';
export const INCREASE_EXP_NEEDED = 'INCREASE_EXP_NEEDED';
export const RESET_EXP_GAINED = 'RESET_EXP_GAINED';
export const UNLOCK_ACHIEVEMENT = 'UNLOCK_ACHIEVEMENT';
export const HIDE_ACHIEVEMENT_UNLOCKED = 'HIDE_ACHIEVEMENT_UNLOCKED';

export const diamondDig = diamonds => ({
    type: ON_DIAMOND_CLICK,
    diamonds
})  

export const levelUp = level => ({
    type: LEVEL_UP,
    level
}) 

export const increaseDiamondNeeded = diamondsNeededToLvlUp => ({
    type: INCREASE_DIAMOND_NEEDED,
    diamondsNeededToLvlUp
})

export const increaseExpGained = expGained => ({
    type: INCREASE_EXP_NEEDED,
    expGained
})

export const resetExpGained = resetExp => ({ 
    type: RESET_EXP_GAINED, 
    resetExp
})

export const hideAchievementUnlocked = achievementUnlocked => ({
    type: HIDE_ACHIEVEMENT_UNLOCKED,
    achievementUnlocked
})