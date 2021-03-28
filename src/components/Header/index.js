import React from "react";
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
	  <Navbar bg="primary" variant="dark">
	    <Navbar.Brand href="">Portfolio</Navbar.Brand>
	    <Nav className="mr-auto">
	      <Nav.Link href="about">About</Nav.Link>
	      <Nav.Link href="projects">Projects</Nav.Link>
	      <Nav.Link href="contact">Contact</Nav.Link>
	    </Nav>

	  </Navbar>
  );
}

export default Header;
