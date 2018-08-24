import React, {Component} from 'react';
import {MainContainer,
        AchievementsContainer,
        CloseAchievementsButton,
        AchievementTitleWrapper,
        AchievementsWrapper,
        AchievementBox,
        OpenAchievementsButton        
} from '../Components_Styles/LeftBox.s'


import { connect } from 'react-redux'

export default class LeftBox extends Component {
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

                <AchievementsContainer isOpen={ this.state.isAchievementsOpen }>

                    <CloseAchievementsButton onClick={ () => this.closeAchievements() } >
                       CLOSE
                    </CloseAchievementsButton>

                    <AchievementTitleWrapper>
                        <span> ACHIEVEMENTS </span>
                    </AchievementTitleWrapper>

                    <AchievementsWrapper>
                        { this.props.achievements.map((achievement, key) => 
                            <AchievementBox key={key} achievement={achievement}>
                                { achievement.id }
                            </AchievementBox>
                        )}
                    </AchievementsWrapper>

                </AchievementsContainer>

            </MainContainer>
        )
    }
}

const mapStateToProps = state => ({
    achievements: state.achievements
})

const mapDispatchToProps = dispatch => ({

})

export const VisibleLeftBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftBox)