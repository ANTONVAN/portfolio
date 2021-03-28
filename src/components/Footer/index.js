import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
	 

function Footer() {
  return (
	<nav className="navbar fixed-bottom  bg-light text-center text-lg-start">
	  <Navbar bg="primary" variant="dark">
	    <Navbar.Brand href="">Portfolio</Navbar.Brand>
	    <Nav className="mr-auto">
	    For contact, call 6441460506 or send an email to aantonio_94@hotmail.com
	    </Nav>
	  </Navbar>
	</nav>
  );
}

export default Footer;
