import React, {Component} from 'react'
import {Tab, Tabs, Grid, Cell } from "react-mdl";
import ReactProjectsTab from "../ProjectTabs/ReactProjectsTab";
import JavaProjectsTab from "../ProjectTabs/JavaProjectsTab";
import Unity3DProjectsTab from "../ProjectTabs/Unity3DProjectsTab";
import CsharpProjectsTab from "../ProjectTabs/CsharpProjectsTab";

class ProjectsPage extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <div className="background-projects-react">
                    <div>
                        <ReactProjectsTab/>
                    </div>

                </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div className="background-projects-java">
                    <div>
                        <JavaProjectsTab/>
                    </div>

                </div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div className="background-projects-csharp">
                    <div>
                        <CsharpProjectsTab/>
                    </div>

                </div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div className="background-projects-unity">
                    <div>
                        <Unity3DProjectsTab/>
                    </div>

                </div>
            )
        }
    }
    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>C#</Tab>
                    <Tab>Unity3D</Tab>
                </Tabs>
                        <div>{this.toggleCategories()}</div>
            </div>
        )
    }
}
export default ProjectsPage