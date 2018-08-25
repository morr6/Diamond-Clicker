import React, {Component} from 'react';
import {MainContainer,
        AchievementsContainer,
        CloseAchievementsButton,
        AchievementTitleWrapper,
        AchievementsWrapper,
        OpenAchievementsButton,
        LastAchievementBox,
        LastAchievementNameWrapper
} from './AchievementsBox.s'
import {SingleAchievement} from './SingleAchievement'
import {hideAchievementUnlocked} from '../../clickerApi/actions/clickerActions'

import { connect } from 'react-redux'

export default class PureAchievementsBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAchievementsOpen: false
        }
    }

    closeAchievements() {
        this.setState({ isAchievementsOpen: false })
    }

    openAchievementsButton() {
        this.setState({ isAchievementsOpen: true })
    }

    renderLastAchievementUnlockedInfo() {
        if (this.props.lastAchievementUnlocked.name) {
            return <LastAchievementBox>
                <LastAchievementNameWrapper>  
                    { this.props.lastAchievementUnlocked.name } 
                </LastAchievementNameWrapper>
            </LastAchievementBox>
        }
    }

    hideUnlockInfo() {
        if (this.props.lastAchievementUnlocked.name) {
            setTimeout( () => {this.props.hideAchievementUnlocked()}, 6000)
        }
    }

    render() {
        return(
            <MainContainer> 
                
                { this.renderLastAchievementUnlockedInfo() }
                { this.hideUnlockInfo() }

                <OpenAchievementsButton isAchievementsOpen={ this.state.isAchievementsOpen }
                    onClick={ () => this.openAchievementsButton() }>
                    ACHIEVEMENTS
                </OpenAchievementsButton>

                {  this.state.isAchievementsOpen && 
                  <AchievementsContainer isOpen={ this.state.isAchievementsOpen }>

                    <CloseAchievementsButton onClick={ () => this.closeAchievements() } >
                       CLOSE
                    </CloseAchievementsButton>

                    <AchievementTitleWrapper>
                        <span> ACHIEVEMENTS </span>
                    </AchievementTitleWrapper>

                    <AchievementsWrapper>
                        { this.props.achievements.map((achievement, key) => 
                            <SingleAchievement key={key} achievement={achievement} />
                        )}
                    </AchievementsWrapper>

                  </AchievementsContainer>
                }

            </MainContainer>
        )
    }
}

const mapStateToProps = state => ({
    achievements: state.achievements,
    lastAchievementUnlocked: state.lastAchievementUnlocked
})
const mapDispatchToProps = dispatch => ({
    hideAchievementUnlocked: achievementUnlocked => dispatch(hideAchievementUnlocked(achievementUnlocked))
})

export const AchievementsBox = connect(
    mapStateToProps,
    mapDispatchToProps 
)(PureAchievementsBox)