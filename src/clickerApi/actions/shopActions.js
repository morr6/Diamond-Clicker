export const BUY_ITEM = 'BUY_ITEM';
export const PAY = 'PAY';
export const SHAKE_COST = 'SHAKE_COST';
export const INCREASE_DIAMONDS_PER_SECOND = 'INCREASE_DIAMONDS_PER_SECOND';

export const buyItem = item => ({
    type: BUY_ITEM,
    item
})

export const pay = diamondsToPay => ({
    type: PAY,
    diamondsToPay
})

export const shakeCost = itemName => ({
    type: SHAKE_COST,
    itemName
})

export const increaseDiamondsPerSecond = increaseAmount => ({
    type: INCREASE_DIAMONDS_PER_SECOND,
    increaseAmount
})
