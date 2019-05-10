import React, { Component } from 'react';
import { Icon, Grid, Header } from 'semantic-ui-react';
import "./../css/App.css"

export default class Cronogram extends Component {
    render() {
        return (
            <div className="App-organizations">
                <Grid stackable columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h2' icon>
                                <Icon name='flag checkered' />
                                Pré-Inscrições
                            <Header.Subheader>
                                    22/04 a 05/05
                            </Header.Subheader>
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2' icon>
                                <Icon name='bullhorn' />
                                Chamada dos selecionados
                            <Header.Subheader>09/05</Header.Subheader>
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2' icon>
                                <Icon name='computer' />
                                Workshops
                            <Header.Subheader>Em breve</Header.Subheader>
                            </Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h2' icon>
                                <Icon name='building' />
                                Evento
                            <Header.Subheader>14/06 a 16/06</Header.Subheader>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
