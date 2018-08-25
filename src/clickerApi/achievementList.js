export const achievementList = [ 
    { id: 1, unlocked: false, shouldBeUnlcoked: (state) => state.numberOfDiamonds >= 1,
        name: 'Your first diamond!', note: 'dig 1 diamond'}, 
    { id: 2, unlocked: false, shouldBeUnlcoked: (state) => state.numberOfDiamonds >= 100 ,
        name: 'Getting better!', note: 'dig 10 diamond'},
    { id: 3, unlocked: false, shouldBeUnlcoked: (state) => state.numberOfDiamonds >= 500 ,
        name: 'Preety nice!', note: 'dig 100 diamond'}, 
    { id: 4, unlocked: false, shouldBeUnlcoked: (state) => state.numberOfDiamonds >= 2500 ,
        name: 'DIAMOND DIGGER!', note: 'dig 1000 diamond'}, 
    { id: 5, unlocked: false, shouldBeUnlcoked: (state) => state.numberOfDiamonds >= 5000 ,
        name: 'WOW!', note: 'dig 5000 diamond'},
    { id: 6, unlocked: false, shouldBeUnlcoked: (state) => state.items[0].amount === 1 ,
        name: 'Helpful hand!', note: 'buy 1 hand'}, 
    { id: 7, unlocked: false, shouldBeUnlcoked: (state) => state.items[0].amount === 10 ,
        name: 'Even more hands!', note: 'buy 5 hands'}, 
    { id: 8, unlocked: false, shouldBeUnlcoked: (state) => state.items[0].amount === 25 ,
        name: 'Alien?', note: 'buy 50 hands'},
    { id: 9, unlocked: false, shouldBeUnlcoked: (state) => state.items[1].amount === 1 ,
        name: 'Better than hand!', note: 'buy 1 stick'}, 
    { id: 10, unlocked: false, shouldBeUnlcoked: (state) => state.items[1].amount === 10 ,
        name: 'Making bonefire?', note: 'buy 5 sticks'}, 
    { id: 11, unlocked: false, shouldBeUnlcoked: (state) => state.items[1].amount === 25,
        name: 'Wooden Guy!', note: 'buy 50 sticks'},
    { id: 12, unlocked: false, shouldBeUnlcoked: (state) => state.items[2].amount === 1 ,
        name: 'First pickaxe!', note: 'buy 1 wooden pickaxe'}, 
    { id: 13, unlocked: false, shouldBeUnlcoked: (state) => state.items[2].amount === 10 ,
        name: 'actually these are weak!', note: 'buy 5 wooden pickaxes'}, 
    { id: 14, unlocked: false, shouldBeUnlcoked: (state) => state.items[2].amount === 25 ,
        name: 'Really like wood?', note: 'buy 50 wooden pickaxes'},
    { id: 15, unlocked: false, shouldBeUnlcoked: (state) => state.items[3].amount === 1 ,
        name: 'better version of the previous one!', note: 'buy 1 stone pickaxe'}, 
    { id: 16, unlocked: false, shouldBeUnlcoked: (state) => state.items[3].amount === 10 ,
        name: 'go go digger!', note: 'buy 5 stone pickaxes'}, 
    { id: 17, unlocked: false, shouldBeUnlcoked: (state) => state.items[3].amount === 25 ,
        name: 'Stone stone stone!', note: 'buy 50 stone pickaxes'},
    { id: 18, unlocked: false, shouldBeUnlcoked: (state) => state.items[4].amount === 10 ,
        name: 'Finally iron!', note: 'buy 1 iron pickaxe'}, 
    { id: 19, unlocked: false, shouldBeUnlcoked: (state) => state.items[4].amount === 5 ,
        name: 'Iron looks nice!', note: 'buy 5 iron pickaxes'}, 
    { id: 20, unlocked: false, shouldBeUnlcoked: (state) => state.items[4].amount === 25 ,
        name: 'are they heavy?', note: 'buy 50 iron pickaxes'},
    { id: 21, unlocked: false, shouldBeUnlcoked: (state) => state.items[5].amount === 10 ,
        name: 'Why did you buy it?', note: 'buy 1 golden pickaxe'}, 
    { id: 22, unlocked: false, shouldBeUnlcoked: (state) => state.items[5].amount === 5 ,
        name: 'iron is better acutally!', note: 'buy 5 golden pickaxes'}, 
    { id: 23, unlocked: false, shouldBeUnlcoked: (state) => state.items[5].amount === 25 ,
        name: 'STOP IT!', note: 'buy 50 golden pickaxes'},
    { id: 24, unlocked: false, shouldBeUnlcoked: (state) => state.items[6].amount === 10 ,
        name: 'shiny *.*', note: 'buy 1 diamond pickaxes'}, 
    { id: 25, unlocked: false, shouldBeUnlcoked: (state) => state.items[6].amount === 5 ,
        name: 'these are good!', note: 'buy 5 diamond pickaxes'}, 
    { id: 26, unlocked: false, shouldBeUnlcoked: (state) => state.items[6].amount === 25 ,
        name: 'Nice collection!', note: 'buy 50 diamond pickaxes'},
    { id: 27, unlocked: false, shouldBeUnlcoked: (state) => state.items[7].amount === 1 ,
        name: 'BOOOOM!', note: 'buy 1 tnt'}, 
    { id: 28, unlocked: false, shouldBeUnlcoked: (state) => state.items[7].amount === 5 ,
        name: 'can you deal with them?', note: 'buy 5 tnt'}, 
    { id: 29, unlocked: false, shouldBeUnlcoked: (state) => state.items[7].amount === 25 ,
        name: 'it\'s probably dangerous', note: 'buy 50 tnt'},
    { id: 30, unlocked: false, shouldBeUnlcoked: (state) => state.items[8].amount === 10 ,
        name: 'the best way to dig!', note: 'buy 1 creeper'}, 
    { id: 31, unlocked: false, shouldBeUnlcoked: (state) => state.items[8].amount === 5 ,
        name: 'SSSSssssss...', note: 'buy 5 creepers'}, 
    { id: 32, unlocked: false, shouldBeUnlcoked: (state) => state.items[8].amount === 25 ,
        name: 'gg!', note: 'buy 50 creepers'}
]
