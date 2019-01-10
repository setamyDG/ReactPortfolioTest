import React, { Component } from 'react';
import { ListItem, ListItemContent, Cell} from 'react-mdl'
import {List} from "react-mdl/lib/List/index";

class RightSide extends Component {
    render() {
        return (
            <div className="contact-leftSide" style={{marginLeft: '67%'}}>
                <h2 className="single-text">Contact Me</h2>
                <div className="contact-list">
                    <List>
                        <ListItem >
                            <ListItemContent style={{fontSize: '35px', fontFamily: 'Orbitron', color: 'white'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                725-151-351
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '35px', fontFamily: 'Orbitron', color: 'white'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                setamy.dg@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '35px', fontFamily: 'Orbitron', color: 'white'}}>
                                <i className="fa fa-skype" aria-hidden="true"/>
                                setamyDG
                            </ListItemContent>
                        </ListItem>
                    </List>
                </div>
            </div>
        );
    }
}

export default RightSide;