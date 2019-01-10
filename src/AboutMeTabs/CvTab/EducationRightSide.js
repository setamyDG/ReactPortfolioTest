import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl'

class EducationRightSide extends Component{
    render(){
        return(
            <Grid>
                <Cell col = {4}>
                    <p className="single-text">{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col = {8}>
                    <h2 className="single-text" style={{marginTop: '0px'}}>{this.props.schoolName}</h2>
                    <p className="single-text">{this.props.schoolDescription}</p>
                </Cell>
            </Grid>

        )
    }
}
export default EducationRightSide;