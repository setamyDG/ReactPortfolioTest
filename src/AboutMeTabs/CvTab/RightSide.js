import React, { Component } from 'react';
import EducationRightSide from "./EducationRightSide";
import ExperienceRightSide from "./ExperienceRightSide";
import SkillsRightSide from "./SkillsRightSide";

class RightSide extends Component {
    render() {
        return (

            <div>
                <h1 className="single-text"> Education</h1>

                <EducationRightSide
                    startYear={2012}
                    endYear={2018}
                    schoolName="UniwersytetZG"
                    schoolDescription="ekstra"
                />
                <EducationRightSide
                    startYear={2012}
                    endYear={2018}
                    schoolName="UniwersytetZG"
                    schoolDescription="ekstra"
                />
                <hr style={{borderTop: '3px solid #e22947'}}/>
                <h2 className="single-text"> Experience</h2>

                <ExperienceRightSide
                    startYear={2013}
                    endYear={2015}
                    JobName="ASTEC"
                    JobDescription="myJOB"
                />

                <ExperienceRightSide
                    startYear={2016}
                    endYear={2019}
                    JobName="Global Logic"
                    JobDescription="myJOB 2"
                />
                <hr style={{borderTop: '3px solid #e22947'}}/>

                <h3 className="single-text">Skills</h3>
                <SkillsRightSide
                skill="javascript"
                progress={100}
                />
                <SkillsRightSide
                    skill="java"
                    progress={100}
                />
                <SkillsRightSide
                    skill="C#"
                    progress={100}
                />

            </div>


        );
    }
}

export default RightSide;