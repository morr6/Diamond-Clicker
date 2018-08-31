import glamorous from 'glamorous';
import {css} from 'glamor'

const rotate = css.keyframes({
    '0%': { transform: `scale(1)` },
    '25%': { transform: `scale(.95)` },
    '50%': { transform: `scale(1.05)` },
    '100%': { transform: `scale(.95)` }
})
    
export const MainContainer = glamorous.div(props => {
    return {
        textAlign: 'center',
        height: '100vh', width:'33.4%',
        float:'left'
    }
}) 

export const DiamondsNumber = glamorous.div(props => {
    return {
        transition:'.5s',
        marginTop: '35%',
        fontSize: 60,
        color: 'white',

        '@media(max-width: 1150px)': {
            fontSize: 50
        },
        '@media(max-width: 840px)': {
            fontSize: 20
        }
    }
})

export const DiamondImage = glamorous.img(props => {
    return {    
        transition: '.5s',
        height: '20%',
        width: '30%',
        cursor:'pointer',
        marginTop: '10%',

        ':hover' : {
            animation: `${rotate} .5s infinite ease-in-out alternate`
        },
        
        '@media(max-width: 1500px)': {
            width:'70%'
        } ,
        '@media(max-width: 750px)': {
            width:'100%'
        }
    }
})
