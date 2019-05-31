import React, { Component } from 'react';
import { Container, Grid, List, Image, Button } from "semantic-ui-react";
import { Parallax } from 'react-parallax';
import Navbar from './../components/Navbar.js';
import Organizations from './../components/Organizations.js';
import Copyright from './../components/Copyright.js';
import Cronogram from './../components/Cronogram.js';
import Workshops from './../components/Workshops.js';
import FAQ from './../components/FAQ.js';
import Inscricoes from './../components/Inscricoes.js';
import Banner from './../logos/banner_site_hack_girrrl.png';
import laptopBanner from './../logos/LaptopImage.jpg';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Image src={Banner} fluid />
        <Container style={{ margin: 20 }}>
          <div id={"About"} className="App-text">
            <div className="App-header">Sobre</div>
            A Hack Grrrl é um Hackathon com maioria feminina organizado pelo Grupo Cíntia da UFPE, evento que reunirá, na forma de maratona, programadores, profissionais ligados ao desenvolvimento de software, designers, empreendedores com o objetivo de desenvolver soluções tecnológicas inovadoras e aplicáveis. O objetivo do evento é incentivar mulheres a participarem de eventos desse tipo, criar um ambiente mais inclusivo e criar confiança nas habilidades na sua área de atuação.
          </div>
          <Workshops />
          <Inscricoes/>
          <div className="App-header">Cronograma</div>
          <div id={"Cronograma"} className="App-text">
            <Cronogram />
          </div>
          <div id={"FAQ"} className="App-text">
            <FAQ />
          </div>
          <Parallax
            style={{
              marginTop: "100px",
              marginBottom: "100px",
            }}
            bgImage={laptopBanner}
            bgImageAlt=""
            strength={400}
            renderLayer={percentage => (
              <div
                style={{
                  position: 'absolute',
                  background: `rgba(0, 41, 102, ${percentage * 1})`,
                  left: '0%',
                  top: '0%',
                  width: 3000,
                  height: 400,
                }}
              />
            )}>
            <div className="App-banner-text">
              <Container><p>Siga-nos nas redes sociais e entre em contato!<br />
                <Button circular icon='facebook' size='large' href="https://fb.me/hackgrrrl" />
                <Button circular icon='instagram' size='large' href="https://www.instagram.com/hackgrrrl/" />
                <Button circular icon='mail' size='large' href="mailto: hackgrrrl@gmail.com" /></p></Container></div>
            <div style={{ height: '300px' }} />
          </Parallax>
          <div id={"Organizations"} style={{
            marginTop: "100px",
            marginBottom: "100px",
          }}>
            <Organizations />
          </div>
        </Container>
        <Copyright />
      </React.Fragment>
    );
  }
}


export default App;
