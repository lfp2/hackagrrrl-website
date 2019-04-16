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

            <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={() => {
              scroller.scrollTo('Help', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
              })
            }}>
              Reviews
        </Menu.Item>

            <Menu.Item
              name='upcomingEvents'
              active={activeItem === 'upcomingEvents'}
              onClick={this.handleItemClick}
            >
              Upcoming Events
        </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
