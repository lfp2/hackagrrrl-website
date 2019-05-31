import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, Divider } from 'react-responsive-carousel';
import {Button } from "semantic-ui-react";

export default class Workshops extends Component {
    render() {
        return (
            <React.Fragment>
            <div id={"Workshops"} className="App-text">
            <div className="App-header">Workshops</div>
            <div className="App-buttons">
            Workshops de temas diversos voltados a dar base para os participantes do evento principal, a Hack Grrrl. Porém, quem não conseguiu se classificar para o evento, também poderá assistir aos workshops! Vocês podem escolher quantos quiserem, dos temas que se interessarem. 
            <Button size='big' color='violet' href='https://www.sympla.com.br/workshop-hackagrrrl-2019__540203'>
                            Inscrições</Button>
            </div>
            </div>
            <div className="App-header"></div>
            <Carousel showThumbs={false} showStatus={false}>
                <div className="App-carroussel">
                <h1>
            <p>WEB+ANDROID</p>
</h1>
No workshop, você vai aprender a desenvolver um simples aplicativo com Ionic que cria uma lista de tarefas usando o Firebase, utiliza login com email e depois vamos tornar ele em um PWA realizando deploy com o Firebase.
                </div>
                <div className="App-carroussel">
                    <h1><p>GIT</p></h1>
                    Aprender a como utilizar o git corretamente da melhor forma possível para auxiliar na organização do seu projeto.
                </div>
                <div className="App-carroussel">
                <h1><p>SCRUM</p></h1>
                Nesse workshop iremos mostrar como aplicar na prática os princípios do Scrum e seu conjunto de papéis, cerimônias e artefatos para ajudar você e sua equipe a se tornarem sinônimos de alta permanece e entrega de alto valor agregado.
                </div>
                <div className="App-carroussel">
                <h1><p>SERVICE DESIGN E VALIDAÇÃO</p></h1>
                Que problemas a minha abordagem resolve? Qual problemas eu preciso resolver? Essa é a melhor abordagem que eu poderia usar? No workshop você vai aprender onde focar e que perguntas fazer para fazer o seu projeto decolar!
                </div>
                <div className="App-carroussel">
                <h1><p>PROTOTIPAGEM E WAREFRAMING</p></h1>
                Uma ideia precisa ser bem construída desde o inicio para evoluir bem. Nesse workshop vocês aprenderão o básico de técnicas para fazer um bom protótipo do seu projeto.
                </div>
                <div className="App-carroussel">
                <h1><p>UI E CRIAÇÃO DE ÍCONES</p></h1>
                Um bom projeto precisa ter uma interface de usuário agradável e fácil de usar. No workshop vocês verão as principais dicas para deixar sua UI adequada. Além disso, mostraremos a parte de criação de ícone, que faz parte de qualquer aplicação.
                </div>
                <div className="App-carroussel">
                <h1><p>MVP</p></h1>
                MVP: o famoso Mínimo Produto Viável que vai te ajudar a economizar esforço de desenvolvimento e a validar mais rápido seu produto/ideia. O que podemos aprender com os MVPs de empresas como Spotify, Facebook, Netflix? ;)
                </div>
            </Carousel>
            </React.Fragment>
        )
    }
}