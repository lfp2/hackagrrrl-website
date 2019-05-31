import React, { Component } from 'react';
import {Button } from "semantic-ui-react";

export default class Inscricoes extends Component {
    render() {
        return (
            <React.Fragment>
                <div id={"Inscricoes"} className="App-text">
                    <div className="App-header">Inscrições</div>
                    As inscrições para o Hack Grrrl se encerraram, muito obrigada pelo interesse!</div>
                    <div className="App-buttons">
                        <Button size='big' color='violet' href='https://forms.gle/DUQzhFEHCbjvu3fG8' disabled>
                            Inscrições</Button>
                    </div>
                    <div className="App-buttons">
                        <Button size='large' href='https://drive.google.com/file/d/1K_J4j6WAAy9urjx6IxJ6xKgVJ7sAef0Z/view?usp=sharing'>Edital</Button>
                    </div>
                    <div className="App-buttons">
                        <Button size='large' href='https://drive.google.com/open?id=1-Cal1C-NoBCNoFKvad52zYvgL71kdO4R'>Código de Conduta</Button>
                    </div>
            </React.Fragment>
        )
    }
}