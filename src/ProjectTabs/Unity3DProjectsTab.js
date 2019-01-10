import React, { Component } from 'react';
import Unity3DProjectCard from "./CustomCard/Unity3DProjectCard";

class Unity3DProjectsTab extends Component {
    render() {
        return (
            <div className="projects-grid">
                {/* Project 1 */}
               <Unity3DProjectCard
               title="UNITY 3D PROJECT #1"
               />
                {/* Project 2 */}
                <Unity3DProjectCard
                title="UNITY 3D PROJECT #2"/>
                {/* Project 3 */}
                <Unity3DProjectCard
                title="UNITY 3D PROJECT #3"
                />
            </div>

        )
    }
}
export default Unity3DProjectsTab;