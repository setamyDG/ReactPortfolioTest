import React, { Component } from 'react';
import {Button, Card, CardActions, CardTitle, IconButton} from "react-mdl";
import {CardMenu, CardText} from "react-mdl/lib/Card/index";

class ReactProjectCard extends Component {
    render() {
        return (
            <div className="card-style">
            <Card shadow={7} style={{minWidth: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '235px', background: 'url(http://s6.ifotos.pl/img/react2jpg_qwpxpqh.jpg) center / cover'}} >{this.props.title}</CardTitle>
                <CardText className="single-text-black">
                    {this.props.text}
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            </div>
        );
    }
}

export default ReactProjectCard;