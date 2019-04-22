import React, { Component } from 'react';
import { Grid, Button } from "semantic-ui-react";

export default class Copyright extends Component {
    render() {
        return (
            <React.Fragment>
                <div id={"About"} className="App-text">
                    <div className="App-header">Inscrições</div>
                    Leia nosso edital e se inscreva no Hack Grrrl!</div>
                    <div className="App-buttons">
                        <Button size='big' color='violet' href='https://forms.gle/DUQzhFEHCbjvu3fG8'>
                            Inscrições</Button>
                    </div>
                    <div className="App-buttons">
                        <Button size='large' href='https://drive.google.com/file/d/1K_J4j6WAAy9urjx6IxJ6xKgVJ7sAef0Z/view?usp=sharing'>Edital</Button>
                    </div>
            </React.Fragment>
        )
    }
}