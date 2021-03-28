import React, { useState, useEffect } from "react";
import { CardColumns, Jumbotron, Image} from "react-bootstrap";
import { Container } from "../components/Grid"

/*Phone: 6441460506
Email: aantonio_94@hotmail.com
LinkedIn Antonio Ramos
Location: Monterrey, NL*/

function Contact() {
  // Setting our component's initial state
  /*const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})*/

  // Load all books and store them with setBooks

    return (
      <Container fluid>
      <Jumbotron>
		  <ul>

		  	<li>
			  	<h1>
			  	Phone: 6441460506
			  	</h1>
		  	</li>

		  	<li>
			  	<h1>
			  	LinkedIn: 
			  	<a href="https://www.linkedin.com/in/antonio-ramos-46204bb5/">
			  	Antonio Ramos
			  	</a>
			  	</h1>
		  	</li>

		  	<li>
			  	<h1>
			  	Email: aantonio_94@hotmail.com
			  	</h1>
		  	</li>

		  	<li>
			  	<h1>
			  	Location: Monterrey, NL
			  	</h1>
		  	</li>

		  </ul>
      </Jumbotron>
      </Container>
    );
  }


export default Contact;
