import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavbarCustom() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">All</Nav.Link>
            <Nav.Link href="/top">Top</Nav.Link>
            <Nav.Link href="/trending">Trending</Nav.Link>
            <Nav.Link href="/science">Science</Nav.Link>
            <Nav.Link href="/entertainment">Entertainment</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarCustom