import React, {Component} from 'react'
import { Achievement, AchievementInfo, AchievementName,AchievementNote } from './SingleAchievement.s';

export class SingleAchievement extends Component {
    constructor() {
        super();

        this.state = {
            achievementHovered: false,
            mousePosition: {}
        }
    }

    onAchievementOver() {
        this.setState({ achievementHovered: true })
    }
    onAchievementLeave() {
        this.setState({ achievementHovered: false })
    }

    setMousePosition(event) {
        this.setState({ mousePosition: { x: event.clientX, y: event.clientY } })
    }

    render() {
        return (
          <div>
            <Achievement
                onMouseMove={ (event) => this.setMousePosition(event) } 
                achievement={ this.props.achievement }
                onMouseOver={ () => this.onAchievementOver() }
                onMouseLeave={ () => this.onAchievementLeave() } 
            >
                { this.props.achievement.id }


            </Achievement>

            { this.props.achievement.unlocked &&
                <AchievementInfo 
                    hovered={ this.state.achievementHovered } 
                    mousePosition={ { x: this.state.mousePosition.x, 
                        y: this.state.mousePosition.y} }
                >   
                    <AchievementName> { this.props.achievement.name } </AchievementName>
                    <AchievementNote> note: { this.props.achievement.note } </AchievementNote>
                </AchievementInfo>
            }

          </div>
        )
    }
}