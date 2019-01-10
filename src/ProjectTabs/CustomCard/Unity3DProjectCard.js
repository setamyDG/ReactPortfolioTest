import React, { Component } from 'react';
import {Button, Card, CardActions, CardTitle, IconButton} from "react-mdl";
import {CardMenu, CardText} from "react-mdl/lib/Card/index";

class Unity3DProjectCard extends Component {
    render() {
        return (
            <div className="card-style">
            <Card shadow={7} style={{minWidth: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '235px', background: 'url(http://s5.ifotos.pl/img/2wjpg_qwpxpne.jpg) center / cover'}} >{this.props.title}</CardTitle>
                <CardText className="single-text-black">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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

export default Unity3DProjectCard;