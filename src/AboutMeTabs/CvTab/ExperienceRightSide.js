import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl'

class ExperienceRightSide extends Component{
    render(){
        return(
            <Grid>
                <Cell col = {4}>
                    <p className="single-text">{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col = {8}>
                    <h2 className="single-text" style={{marginTop: '2px'}}>{this.props.JobName}</h2>
                    <p className="single-text">{this.props.JobDescription}</p>
                </Cell>
            </Grid>

        )
    }
}
export default ExperienceRightSide;