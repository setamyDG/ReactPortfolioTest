import React, { Component } from 'react';
import {Button, Card, CardActions, CardTitle, IconButton} from "react-mdl";
import {CardMenu, CardText} from "react-mdl/lib/Card/index";

class CsharpProjectCard extends Component {

    render() {
        return (
            <div className="card-style">
            <Card shadow={7} style={{minWidth: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '235px' , background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVS3fApIJvLsqW8_x9C029J_U4FX-LuOHvGJrlbrGgncTMnc7p) center / cover'}} >{this.props.title}</CardTitle>
                <CardText className="single-text-black">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions>
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

export default CsharpProjectCard;