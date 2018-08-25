import glamorous from 'glamorous';
import BackgroundUrl from '../../assets/images/achievements/achievement.jpg';
import ButtonBackgroudnd from '../../assets/images/buttons/btn1.png';
import HoveredButtonBackground from '../../assets/images/buttons/btn2.png';
import achievementImg from '../../assets/images/achievements/lockedAchievement.png'

const mediaQueries = {
    buttonFont: '@media only screen and (max-width: 1250px)',
    achievementsOverflow: '@media only screen and (max-width: 1900px)'
}


export const MainContainer = glamorous.div(props => {
    return {
        width: '33.3%',height:'100vh',
        float:'left'
    }
})

export const OpenAchievementsButton = glamorous.button(props => {
    return {
        transition: '.3s',   
        opacity: props.isAchievementsOpen === true ? '0' : '1',
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

        [mediaQueries.buttonFont]: {
            fontSize: '20'
        }
    }
})

export const AchievementsContainer = glamorous.div(props => {
    return {
        transition: '.3s',   
        opacity: props.isOpen === true ? '1' : '0',
        margin: '20% 0 0 10%',
        width: '80%', height:'50%',
        background: 'url('+ BackgroundUrl +')',
        backgroundSize: '100% 100%',

        [mediaQueries.achievementsOverflow]: {
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
    }
})

export const AchievementsWrapper = glamorous.div(props => {
    return {
        margin: '5% 0 0 7.5%',
        height:'66%', width:'85%',
    }
})

export const SingleAchievement = glamorous.div(props => {
    return {    
        color: 'black   ',
        height: '54px', width:'54px',
        background: props.achievement.unlocked ? '#55aa11' : 'url('+ achievementImg +')',
        float:'left',
        cursor: 'pointer',

        ':hover': {
            transition: '.5s',
            transform: 'scale(1.1)',
            overflow: 'hidden'
        }
    }
})