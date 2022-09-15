import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navs.css"
const Navs = () => {
  return (
    <div>
       <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src='http://demo.tutsflow.com/foodera/images/logo.png' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">who are we</Nav.Link>
            <Nav.Link href="#home">explore food</Nav.Link>
            <Nav.Link href="#link">Review</Nav.Link>
            <Nav.Link href="#link">Faq</Nav.Link>
            <Nav.Link href="#link" id="lastnav">0597033916</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navs
