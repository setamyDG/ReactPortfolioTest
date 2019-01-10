import React, { Component } from 'react';
import { Layout, Navigation, Drawer, Content, Header } from 'react-mdl'
import {Link} from 'react-router-dom'
import './App.css';
import Main from "./Components/Main";

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="My portfolio" scroll>
                    <Navigation>
                        <Link to="/HomePage">Home</Link>
                        <Link to="/AboutMePage">About Me</Link>
                        <Link to="/ProjectsPage">Projects</Link>
                        <Link to="/ContactPage">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Daniel Gola">
                    <Navigation>
                        <Link to="/HomePage">Home</Link>
                        <Link to="/AboutMePage">About Me</Link>
                        <Link to="/ProjectsPage">Projects</Link>
                        <Link to="/ContactPage">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
