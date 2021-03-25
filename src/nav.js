import React from 'react';
import { Navbar, Container } from 'react-bootstrap'

class NavHeader extends React.Component {
  render () {
    return (
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">City Explorer</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Created by: <a href="#login">Mason Aviles</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavHeader;
