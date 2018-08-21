import glamorous from 'glamorous';

export const ExpBar = glamorous.div(props => {
    return {
        position: 'absolute',
        top: '92%', left:'10%',
        width: '80%', height: '30px'
    }
})

export const ExpBarImage = glamorous.img(props => {
    return {
        height: '100%', width: '100%'
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
        position:'relative',
        top: '25px', left:'0.375%',
        background: 'rgba(130,210,105,.4)',
        height: '20px', width: '25%'
    }
})