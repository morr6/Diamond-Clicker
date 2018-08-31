import glamorous from 'glamorous';
import InventoryBarImg from '../../assets/images/bottomBar/inventoryBar.png'

export const BottomBar = glamorous.div(props => {
    return {
        position: 'absolute',
        top: '80%', left:'25%',
        width: '50%', 
        height: '30px',
        
        '@media(max-width: 650px)': {
            width: '150%'
        }
    }
})

export const ExpBarImage = glamorous.img(props => {
    return {
        height: '100%', width: '100.75%'
    }
})

export const Level = glamorous.div(props => {
    return {
        height: '20px', width: '40px',
        position: 'relative',
        fontSize:'40',
        color: '#008102',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    }
})

export const LevelPoints = glamorous.div(props => {
    return {
        transition: '.5s',
        position:'relative',
        top: '43.8px', left:'0.375%',
        background: 'rgba(130,210,105,.4)',
        height: '17.9px',
        width: props.expGained * 100 + '%',
        maxWidth: '100%'
    }
})
export const InventoryBar = glamorous.div(props => {
    return {
        height: '90px' , width:'100.75%',
        background: 'url('+ InventoryBarImg +')',
        backgroundSize: '100% 100%',
        
        '@media(max-width: 500px)': {
            height: '50px'
        }
    }
})


export const ItemImage = glamorous.img(props => {
    return {
        width:'100%', 
        height:'100%', 
    }
})

export const ItemWrapper = glamorous.div(props => {
    return {
        width:'11%', 
        height:'97.5%',        
        float:'left',
    }
})

export const ItemAmount = glamorous.span(props => {
    return {
        position:'relative',
        left:'77%',top:'-35%',
        color:'white',
        fontSize: 30
    }
})