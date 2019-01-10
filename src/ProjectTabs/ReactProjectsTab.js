import React, { Component } from 'react';
import ReactProjectCard from "./CustomCard/ReactProjectCard";

class ReactProjectsTab extends Component {
    render() {
        return (
            <div className="projects-grid" >
                {/* Project 1 */}
                <ReactProjectCard
                title="REACT PROJECT #1"
                text="Hello1"
                />
                {/* Project 2 */}
              <ReactProjectCard
                  title="REACT PROJECT #2"
                  text="Hello2"
              />
                {/* Project 3 */}
                <ReactProjectCard
                    title="REACT PROJECT #3"
                    text="Hello3"
                />
            </div>

        )
    }
}

export default ReactProjectsTab;