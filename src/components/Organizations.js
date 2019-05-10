import React, { Component } from 'react';
import { Divider, Image, Grid, Container } from 'semantic-ui-react';
import logoCesar from "./../logos/logo_cesar.png";
import logoCesarSchool from "./../logos/logo_cesar_school.png";
import logoCintia from "./../logos/logo_cintia.png";
import logoCIn from "./../logos/logo_cin.png";
import logoShawee from "./../logos/logo_shawee.png";
import logoMinas from "./../logos/logo_minas.png";
import logoVinta from "./../logos/logo_vinta.png";
import logoHack from "./../logos/logo_hacknjoy.png";
import logoFablab from "./../logos/logo_fablab.png";
import logoConcrete from "./../logos/Concrete-Loop.gif";
import logoGithub from "./../logos/GitHub_Logo.png";
import "./../css/App.css"

export default class Organizations extends Component {
    render() {
        return (
            <React.Fragment>
                <Divider horizontal>
                    Realização
                </Divider>
                <div className="App-organizations">
                    <Grid stackable columns='equal'>
                    <Grid.Column>
                            <Image src={logoCintia} href='http://www.cin.ufpe.br/~cintia/' size='small' />
                        </Grid.Column>
                    </Grid>
                </div>
                <Divider horizontal>
                    Co-Realização
                </Divider>
                <div className="App-organizations">
                    <Grid stackable columns='equal'>
                    <Grid.Column>
                            <Image src={logoMinas} href='http://www.portodigital.org/119/37847-porto-digital-lanca-as-minas-programa-de-equidade-de-genero' size='small' />
                    </Grid.Column>
                    </Grid>
                </div>
                <Divider horizontal>Patrocínio</Divider>
                <div className="App-organizations">
                    <Grid stackable columns='equal'>
                    <Grid.Column>
                            <Image src={logoCesar} href='https://www.cesar.org.br' size='small' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logoCesarSchool} href='https://www.cesar.school' size='small' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logoGithub} href='https://github.com/' size='small' />
                        </Grid.Column>
                    <Grid.Column>
                            <Image src={logoVinta} href='https://www.vinta.com.br' size='small' />
                        </Grid.Column>
                    </Grid>
                </div>
                <Divider horizontal>Apoio</Divider>
                <div className="App-organizations">
                    <Grid stackable columns='equal'>
                        <Grid.Column>
                            <Image src={logoCIn} href='http://www.cin.ufpe.br/' size='small' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logoShawee} href='https://shawee.io/' size='small' />
                        </Grid.Column>
                        
                        <Grid.Column>
                            <Image src={logoHack} href='http://cin.ufpe.br/~sciot/hacknjoy/' size='small' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logoConcrete} href='https://www.concrete.com.br/' size='small' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logoFablab} href='https://www.fablabrecife.com/' size='small' />
                        </Grid.Column>
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}