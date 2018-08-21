import React, { Component } from 'react';
import {DiamondsNumber,
        MainContainer ,
        DiamondImage,
} from '../Components_Styles/MiddleBox.s.js';

import { connect } from 'react-redux'
import {diamondDig } from '../clicker_api/actions/clickerActions'

export default class MiddleBox extends Component {
    constructor() {
        super();

        this.state = {
            diamonds: 0
        }
    }

    onBlockClick() {
        this.setState({ diamonds: this.state.diamonds + 1  })
    }

    render() {
        console.log(this.props.number_of_diamonds)
        return (
            <MainContainer>      

              <DiamondsNumber> 
                Diamonds: { this.state.diamonds } 
              </DiamondsNumber>

              <DiamondImage src={ require( '../assets/images/Diamond.png' ) } 
                onClick={ () => this.props.diamondDig } />

            </MainContainer>
        )
    }
}

const mapStateToProps = state => ({
    number_of_diamonds: state.number_of_diamonds    
})

const mapDispatchToProps = dispatch => ({
    diamondDig: number_of_diamonds => dispatch(diamondDig(number_of_diamonds))
})

export const VisibleMiddleBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(MiddleBox)