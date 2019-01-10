import React, { Component } from 'react';
import JavaProjectCard from "./CustomCard/JavaProjectCard";

class JavaProjectsTab extends Component {
    render() {
        return (
            <div className="projects-grid">
                {/* Project 1 */}
                <JavaProjectCard
                title="JAVA PROJECT #1"/>
                {/* Project 2 */}
                <JavaProjectCard
                    title="JAVA PROJECT #2"/>
                {/* Project 3 */}
               <JavaProjectCard
                   title="JAVA PROJECT #3"/>
            </div>
        )
    }
}

export default JavaProjectsTab;