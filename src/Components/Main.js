import React from 'react';
import LandingPage from "./LandingPage";
import AboutMePage from "./AboutMePage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import {Route, Switch} from "react-router-dom";

const Main=() => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/AboutMePage" component={AboutMePage}/>
        <Route exact path="/ContactPage" component={ContactPage}/>
        <Route exact path="/HomePage" component={HomePage}/>
        <Route exact path="/ProjectsPage" component={ProjectsPage}/>
    </Switch>
);
export default Main;