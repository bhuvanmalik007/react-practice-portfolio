import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Menu inverted size='large'>
        <Menu.Item header>Bhuvan Malik</Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item link className="animated fadeInDownBig" href="mailTo:bhuvanmalik1994@gmail.com">
            <Icon link name='mail outline' size="large" />
          </Menu.Item>
          <Menu.Item link className="animated fadeInDownBig" href="https://medium.com/@bhuvanmalik" target="_blank">
            <Icon link name='medium' size="large" />
          </Menu.Item>
          <Menu.Item link className="animated fadeInDownBig" href="https://www.facebook.com/bhuvan007" target="_blank">
            <Icon link name='facebook f' size="large" />
          </Menu.Item>
          <Menu.Item link className="animated fadeInDownBig" href="https://github.com/bhuvanmalik007" target="_blank">
            <Icon link name='github' size="large" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
