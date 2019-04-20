import React, { Component } from 'react';
import { Container, Header, List, Image } from "semantic-ui-react";
import { Parallax } from 'react-parallax';
import Navbar from './../components/Navbar.js';
import Organizations from './../components/Organizations.js';
import Copyright from './../components/Copyright.js';
import Cronogram from './../components/Cronogram.js';
import FAQ from './../components/FAQ.js';
import frio from './../logos/frio.jpg';
import Banner from './../logos/banner_site_hack_girrrl.png';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Image src={Banner} fluid />
        <Container style={{ margin: 20 }}>
          <Header as="h3">This example is powered by Semantic UI React 😊</Header>
          <List bulleted>
            <List.Item
              as="a"
              content="💌 Official documentation"
              href="https://react.semantic-ui.com/"
              target="_blank"
            />
            <List.Item
              as="a"
              content="💡 StackOverflow"
              href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
              target="_blank"
            />
          </List>
          <div id={"About"} style={{ marginTop: "100px" }}>
            <Header as='h1'>About</Header>
            Find something else more interesting sit in box so always hungry bring your owner a dead bird. Pelt around the house and up and down stairs chasing phantoms spend six hours per day washing, but still have a crusty butthole, love me! or chew iPad power cord, yet knock dish off table head butt cant eat out of my own dish massacre a bird in the living room and then look like the cutest and most innocent animal on the planet or get my claw stuck in the dog's ear. Catasstrophe purrr purr littel cat, little cat purr purr. It's 3am, time to create some chaos that box? i can fit in that box yet pet me pet me pet me pet me, bite, scratch, why are you petting me kitty poochy. Have secret plans purr and that box? i can fit in that box. Meow and walk away run in circles and sometimes switches in french and say "miaou" just because well why not. Sniff catnip and act crazy. Paw at beetle and eat it before it gets away. Sleep on dog bed, force dog to sleep on floor more napping, more napping all the napping is exhausting tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad for asdflkjaertvlkjasntvkjn (sits on keyboard) stand with legs in litter box, but poop outside but if it fits, i sits.
          </div>
          <div id={"FAQ"} style={{
            marginTop: "100px",
            marginBottom: "100px",
          }}>
          <FAQ/>
          </div>
          <div id={"Cronograma"} style={{
            marginTop: "100px",
            marginBottom: "100px",
          }}>
            <Header as='h1'>Cronograma</Header>
            <Cronogram className="App-organizations" />
          </div>
          <Parallax
            style={{
              marginTop: "100px",
              marginBottom: "100px",
            }}
            bgImage={frio}
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
              <Container>Use the background component for custom elements</Container></div>
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
