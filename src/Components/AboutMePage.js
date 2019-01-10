import React, {Component} from 'react'
import {Tab, Tabs, Grid, Cell } from "react-mdl";
import LeftSide from "../AboutMeTabs/CvTab/LeftsSide";
import RightSide from "../AboutMeTabs/CvTab/RightSide";

class AboutMePage extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div>
                    <Grid>
                        <Cell col={4}>
                            <LeftSide/>
                        </Cell>
                        <Cell className="about-me-right-col" col={8}>

                        <RightSide/>
                        </Cell>

                    </Grid>
                </div>

            )
        } else if (this.state.activeTab === 1) {
            return (
                <div></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div></div>
            )
        }
    }
    render(){
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Curriculum vitae</Tab>
                    <Tab>Hobbys</Tab>
                    <Tab>Learning</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default AboutMePage