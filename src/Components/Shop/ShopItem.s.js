import glamorous from 'glamorous';
import {css} from 'glamor';
import * as InfoBg from '../../assets/images/shop/infobg.png'

const costShake = css.keyframes({
    '0%': { left: `5px` },
    '25%': { left: `-5px` },
    '50%': { left: `5px` },
    '75%': { left: `-5px` },
    '100%': { left: `10px` },
})


export const MainContainer = glamorous.div(props => {
    return { 
        height:'22.5%',
        width:'23%',
        margin: '8.5% 2% 10% 5%',
        fontSize: 25,
        float:'left',

        '@media(max-width: 1400px)': {
            marginTop: '15%'
        },
        '@media(max-width: 900px)': {
            marginTop: '25%'
        }
    }
})

export const CostWrapper = glamorous.span(props => {
    return {
        position: 'relative',
        transition: '.2s',
        color: props.afford ? '#66aa22' : '#dd3322',
        animation: props.animate && `${costShake} .2s ease-in-out alternate`,

        '@media(max-width: 650px)': {
            height: '5%',
            width: '5%',
            fontSize: '10px'
        }
    }
})

export const ItemImage = glamorous.img(props => {
    return {
        marginTop:'5%',
        float:'left',
        width:'100%', 
        height: '100%',
        cursor: 'pointer',

        ':active' : {
            transition: '.05s',
            transform: 'scale(1.1)'
        }
    }
})

export const MiniDiamond = glamorous.img(props => {
    return {
        width:'30%',
        float:'right'
    }
})


export const ItemInfo = glamorous.div(props => {
    return {
        color: 'white',
        padding: '20px',
        fontFamily: 'Minecraft',
        fontSize: '30',
        height: '150px', 
        width: '350px',
        background: 'url('+ InfoBg +')',
        backgroundSize: '100% 100%',
        display: 'block',
        position: 'absolute',
        zIndex: 9999,
        top: props.clientY ? props.clientY - 90: 0,
        left: props.clientX ? props.clientX - 425 : 0,

        '@media(max-width: 650px)': {
            fontSize: 10,
            height: '50px',
            width: '116px',
            top: props.clientY ? props.clientY : 0,
            left: props.clientX ? props.clientX : 0,
        }
    }
})

export const ItemNameWrapper = glamorous.div(props => {
    return {
        fontSize: '35px',
        '@media(max-width: 650px)': {
            fontSize: '10px'
        }
    }
})
export const ItemInfoText = glamorous.span(props => {
    return {
        fontSize: '35px',
        '@media(max-width: 650px)': {
            fontSize: '10px'
        }
    }
})
export const ItemAmountOwned = glamorous.div(props => {
    return {
        fontSize: 15, 
        margin: '2% 0 5% 0',
        '@media(max-width: 650px)': {
            fontSize: '5px'
        }
    }
})


