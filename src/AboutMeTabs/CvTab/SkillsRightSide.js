import React, { Component } from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl'

class SkillsRightSide extends Component {
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <p style={{display: 'flex'}}>
                        {this.props.skill}
                        <ProgressBar style={{margin: '5px', width: '75%'}} progress={this.props.progress} />
                    </p>

                </Cell>
            </Grid>
        )
    }
}
export default SkillsRightSide