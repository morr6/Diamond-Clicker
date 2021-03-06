import glamorous from 'glamorous'; 
import * as ShopBg from '../../assets/images/shop/shopBg.png'
 

export const MainContainer = glamorous.div(props => {
    return {
        textAlign: 'center',
        width: '33.3%',
        height:'100vh',
        float:'left',

        '@media(max-width: 1000px)': {
            transition: '.5s',
            height: '80vh'
        }
    }
})

export const ShopContainer = glamorous.div(props => {
    return {
        transition: '.5s',
        background: 'url('+ ShopBg +')',
        backgroundSize: '100% 100%',
        height: '80%', width:'95%',
        margin: '3% 0 0 1%',

    }
})

export const ItemsWrapper = glamorous.div(props => {
    return {
        height: '85%', width:'90%',
        marginLeft: '7.5%',
    }
})