import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import logoHack from "./../logos/logotipo_hacka.png"

export default class Navbar extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu size='massive' stackable>
          <Menu.Item>
            <img src={logoHack} />
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              Home
        </Menu.Item>
        <Menu.Item
              name='workshops'
              active={activeItem === 'workshops'}
              onClick={() => 
              scroller.scrollTo('Workshops', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
              })}
            >
             Workshops
        </Menu.Item>
        <Menu.Item
              name='inscricoes'
              active={activeItem === 'inscricoes'}
              onClick={() => 
              scroller.scrollTo('Inscricoes', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
              })}
            >
             Inscrições
        </Menu.Item>
            <Menu.Item
              name='cronograma'
              active={activeItem === 'cronograma'}
              onClick={() => 
              scroller.scrollTo('Cronograma', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
              })}
            >
             Cronograma
        </Menu.Item>
        <Menu.Item name='FAQ' active={activeItem === 'reviews'} onClick={() => {
              scroller.scrollTo('FAQ', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
              })
            }}>
              FAQ
        </Menu.Item>
        <Menu.Item
              name='sponsors'
              active={activeItem === 'sponsors'}
              onClick={() => 
              scroller.scrollTo('Organizations', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
              })}
            >
             Organizações
        </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
