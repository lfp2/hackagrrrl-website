import React, { Component } from 'react';
import { Divider, Image, Grid, Container } from 'semantic-ui-react';
import logoCesar from "./../logos/logo_cesar.png";
import logoCIn from "./../logos/logo_cin.png";
import logoShawee from "./../logos/logo_shawee.png";
import "./../css/App.css"

const kiev = "https://pbs.twimg.com/profile_images/820205779395506177/jJftOcd5.jpg"
export default class Organizations extends Component {
    render() {
        return (
            <React.Fragment>
                <Divider horizontal>Organização</Divider>
                <Divider horizontal>Patrocínio</Divider>
                <Divider horizontal>Apoio</Divider>
                <div className="App-organizations">
                    <Grid stackable columns='equal'>
                        <Grid.Column>
                            <Image src={logoCIn} size='small' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logoCesar} size='small' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logoShawee} size='small' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={kiev} size='small' />
                        </Grid.Column>
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}