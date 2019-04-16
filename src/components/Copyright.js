import React, { Component } from 'react';
import {Segment} from "semantic-ui-react";

export default class Copyright extends Component {
    render(){
        return(
                <Segment textAlign="center" >
                Copyright ©  Hack Grrrl! 2019
                </Segment>
        )
    }
}