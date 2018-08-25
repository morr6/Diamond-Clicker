import glamorous from 'glamorous'
import * as achievementInfoBg from '../../assets/images/achievements/achievementInfo.png'
import achievementImg from '../../assets/images/achievements/lockedAchievement.png'

export const Achievement = glamorous.div(props => {
    return {    
        color: 'black',
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

export const AchievementInfo = glamorous.div(props => {
    return {
        textAlign:'center',
        padding: '5px',
        position: 'absolute',
        top: props.mousePosition.y ? props.mousePosition.y - 35 : 0 ,
        left: props.mousePosition.x ? props.mousePosition.x + 25 : 0 ,
        height:'100px',
        width:'300px',
        background: 'url('+ achievementInfoBg +')',
        backgroundSize: '100% 100%',
        display: props.hovered ? 'block' : 'none'
    }
})

export const AchievementName = glamorous.div(props => {
    return {
        fontFamily: 'Minecraft',
        fontSize: 25,
        color:'white',

    }
})

export const AchievementNote = glamorous.div(props => {
    return {
        marginTop: '5%',
        color: 'white',
        fontFamily: 'Minecraft',
        fontSize: '20'
    }
})