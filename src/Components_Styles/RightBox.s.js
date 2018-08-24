import glamorous from 'glamorous';
import ButtonImage from '../assets/images/buttons/btn1.png'
import PressedButtonImage from '../assets/images/buttons/pressedButton.png'
import HoveredButton from '../assets/images/buttons/btn2.png'
import ShopBg from '../assets/images/shop/shopBg.jpg'
import {css} from 'glamor'

const costShake = css.keyframes({
    '0%': { left: `5px` },
    '25%': { left: `-5px` },
    '50%': { left: `5px` },
    '75%': { left: `-5px` },
    '100%': { left: `q10px` },
})


const mediaQueries = {
	buttonFont: '@media only screen and (max-width: 900px)',
}


export const MainContainer = glamorous.div(props => {
    return {
        textAlign: 'center',
        width: '33.3%',
        height:'100vh',
        float:'left' 
    }
})

export const ButtonsWrapper = glamorous.div(props => {
    return {
        margin: '3% 0 0 10%',
        width: '80%', height:'7%',
    }
})

export const BuyButton = glamorous.button(props => {
    return {
        transition: '.1s',
        cursor: 'pointer',
        fontSize:'40',
        border:'none', outline: 'none',
        height:'100%', width:'50%',
        background: props.pressed === true ? 
            'url('+ PressedButtonImage +')' : 'url('+ ButtonImage +')' ,
        backgroundSize: '100% 100%',
        float: 'left',

        ':hover' : {
            background: props.pressed === true ?
                'url('+ PressedButtonImage +')' : 'url('+ HoveredButton +')',
            backgroundSize: '100% 100%'
        },

        [mediaQueries.buttonFont]: {
            fontSize: '20'
        }

    }
})

export const SellButton = glamorous.button(props => {
    return {
        transition: '.1s',
        cursor: 'pointer',
        fontSize:'40',
        border:'none', outline: 'none',
        height:'100%', width:'50%',
        background: props.pressed === true ? 
            'url('+ PressedButtonImage +')' : 'url('+ ButtonImage +')' ,
        backgroundSize: '100% 100%',
        float:'left',

        ':hover' : {
            background: props.pressed === true ?
                'url('+ PressedButtonImage +')' : 'url('+ HoveredButton +')',
            backgroundSize: '100% 100%'
        },

        [mediaQueries.buttonFont]: {
            fontSize: '20'
        }
    }
})

export const ShopContainer = glamorous.div(props => {
    return {
        transition: '.5s',
        background: 'url('+ ShopBg +')',
        backgroundSize: '100% 100%',
        height: '70%', width:'80%',
        margin: '0 0 0 10%',
    }
})

export const ItemsWrapper = glamorous.div(props => {
    return {
        height: '90%', width:'90%',
        marginLeft: '7.5%',
    }
})

export const SingleItemWrapper = glamorous.div(props => {
    return {
        height:'25%', width:'28%',
        color: 'white',
        margin: '4% 5% 10% 0',
        fontSize: 25,
        float:'left'
    }
})

export const ItemImage = glamorous.img(props => {
    return {
        marginTop:'5%',
        float:'left',
        width:'100%', height: '100%',
        cursor: 'pointer',

        ':active' : {
            transition: '.05s',
            transform: 'scale(1.1)'
        }
    }
})

export const CostWrapper = glamorous.span(props => {
    return {
        position: 'relative',
        transition: '.2s',
        color: props.afford ? '#66aa22' : '#dd3322',
        animation: props.animate && `${costShake} .2s ease-in-out alternate`
    }
})

export const MiniDiamond = glamorous.img(props => {
    return {
        height: '30px', width:'30px',
        position:'relative',
        top: 6  
    }
})