import React, {Component} from 'react';
import {MainContainer,
        AchievementsContainer,
        CloseAchievementsButton,
        AchievementTitleWrapper,
        AchievementsWrapper,
        OpenAchievementsButton,
} from './AchievementsBox.s'
import {SingleAchievement} from './SingleAchievement'

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

    render() {
        return(
            <MainContainer>                
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
    achievements: state.achievements
})

export const AchievementsBox = connect(
    mapStateToProps,
)(PureAchievementsBox)