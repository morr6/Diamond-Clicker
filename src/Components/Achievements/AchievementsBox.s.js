import glamorous from 'glamorous';
import BackgroundUrl from '../../assets/images/achievements/achievement.jpg';
import ButtonBackgroudnd from '../../assets/images/buttons/btn1.png';
import HoveredButtonBackground from '../../assets/images/buttons/btn2.png';
import LastAchievementImage from '../../assets/images/achievements/achievementGet.png';
import {css} from 'glamor'

const unlockInfoAnimation = css.keyframes({
    '0%': { left: `-500px` },
    '100%': { left: `10px` }
})

export const MainContainer = glamorous.div(props => {
    return {
        width: '33.3%',height:'100vh',
        float:'left'
    }
})

export const OpenAchievementsButton = glamorous.button(props => {
    return {
        transition: '.3s',   
        display: props.isAchievementsOpen ? 'none' : 'block',
        fontSize: '40',
        margin: '3% 0 0 10%',
        width: '80%', height: '7%',
        background: 'url('+ ButtonBackgroudnd +')',
        backgroundSize: '100% 100%',
        border: 'none',
        outline: 'none',

        ':hover' : {
            background: 'url('+ HoveredButtonBackground +')',
            backgroundSize: '100% 100%',
            cursor: 'pointer'
        },

        '@media(max-width: 1250px)': {
            fontSize: 20
        },
        '@media(max-width: 650px)': {
            fontSize: 15
        }
    }
})

export const AchievementsContainer = glamorous.div(props => {
    return {
        transition: '.3s',
        margin: '35% 0 0 10%',
        width: '80%', height:'50%',
        background: 'url('+ BackgroundUrl +')',
        backgroundSize: '100% 100%',

        '@media(max-width: 1900px)': {
            overflowY:'scroll',
            overflowX: 'hidden'
        }
    }
})

export const CloseAchievementsButton = glamorous.button(props => {
    return {
        fontSize: '30',
        margin: '3% 0 0 10%',
        width: '80%', height: '10%',
        background: 'url('+ ButtonBackgroudnd +')',
        backgroundSize: '100% 100%',
        border: 'none',
        outline: 'none',

        ':hover' : {
            transition: '.3s',
            background: 'url('+ HoveredButtonBackground +')',
            backgroundSize: '100% 100%',
            cursor: 'pointer'
        }
    }
})

export const AchievementTitleWrapper = glamorous.div(props => {
    return {
        textAlign: 'center',
        fontSize: '40',
        margin: '7.5% 0 0 0',
        
        '@media(max-width: 1900px)': {
            fontSize: '20px'
        }
    }
})

export const AchievementsWrapper = glamorous.div(props => {
    return {
        margin: '5% 0 0 7.5%',
        height:'66%', width:'85%',
    }
})

export const LastAchievementBox = glamorous.div(prosp => {
    return {
        position: 'absolute',
        top: '9.5%',
        left: '1%',
        height: '12.5%',
        width:'35%',
        background:'url('+ LastAchievementImage +')',
        backgroundSize: '100% 100%',
        animation: `${unlockInfoAnimation} .5s `
    }
})

export const LastAchievementNameWrapper = glamorous.div(props => {
    return {
        transition: '.5s',
        position:'relative',
        top: '55%',
        left: '14.5%',
        color: 'white',
        fontSize: 40,
        fontFamily: 'Minecraft',

        '@media(max-width:1650px)': {
          fontSize: 30
        },
        '@media(max-width:1250px)': {
            fontSize: 20
        }
    }
})