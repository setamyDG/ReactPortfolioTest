import React, { Component } from 'react';
import CsharpProjectCard from "./CustomCard/CsharpProjectCard";

class CsharpProjectsTab extends Component {
    render() {
        return (
            <div>
            <div className="projects-grid">
                {/* Project 1 */}
              <CsharpProjectCard
              title="C# PROJECT #1"/>
                {/* Project 2 */}
               <CsharpProjectCard
                   title="C# PROJECT #2"
               />
                {/* Project 3 */}
               <CsharpProjectCard
                title="C# PROJECT #3"
            />
            </div>
            </div>





                )
    }
}

export default CsharpProjectsTab;