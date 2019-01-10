import React, {Component} from 'react'
import {Cell, Grid} from "react-mdl";

class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell className="separator" style={{width: '100%'}}>
                    </Cell>
                    <Cell col={12}>
                        <div style={{marginTop: '4em'}}>
                        <img
                            src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.0-9/35247255_1715612061840788_5513627063233282048_n.jpg?_nc_cat=0&oh=7e8c2e6ad5e5df0d55202f1dcc0bc7e6&oe=5C387E53"
                            alt="avatar"
                            className="circle"
                        />
                        </div>
                        <div>
                            <Grid>
                            <h1 className="single-text" style={{ margin: 'auto'}}>
                                DANIEL GOLA
                            </h1>
                            </Grid>
                        </div>
                        <div className="banner-text">
                        <h1>Junior Developer</h1>
                            <hr/>
                            <p>Java | React | JavaScript | Unity3D | C#</p>
                            <div className="social-links">

                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/daniel--gola" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/*GitHub*/}
                                <a href="https://github.com/setamyDG" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/*facebook*/}
                                <a href="https://www.facebook.com/daniel.gola1?ref=bookmarks" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>
                                {/*instagram*/}
                                <a href="https://www.instagram.com/makeyoouwish/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                        <h2 className="example-text">
                            More in future.
                        </h2>
                    </Cell>
                </Grid>
            </div>

        )
    }
}
export default LandingPage