import glamorous from 'glamorous';

export const MainContainer = glamorous.div(props => {
    return {
        textAlign: 'center',
        height: '100vh', width:'33.4%',
        float:'left'
    }
}) 

export const DiamondsNumber = glamorous.div(props => {
    return {
        margin: '50% 0 10% 0',
        fontSize: '70',
        color: 'white'
    }
})

export const DiamondImage = glamorous.img(props => {
    return {
        cursor:'pointer',
    }
})
