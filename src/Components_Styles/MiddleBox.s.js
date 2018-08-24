import glamorous from 'glamorous';
import {css} from 'glamor'

const rotate = css.keyframes({
    '0%': { transform: `scale(1)` },
    '100%': { transform: `scale(1.15)` }
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
        marginTop: '30%',
        fontSize: '70',
        color: 'white'
    }
})

export const DiamondImage = glamorous.img(props => {
    return {    
        cursor:'pointer',
        marginTop: '10%',

        ':hover' : {
            animation: `${rotate} 1s infinite ease-in-out alternate`
        }
    }
})
