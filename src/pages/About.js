import React, { useState, useEffect } from "react";
import { Card, CardColumns, Jumbotron, Image } from "react-bootstrap";
import { Container } from "../components/Grid";




function About() {
  

    return (
      <Container fluid>
      <Jumbotron>
		  <h1>Antonio Ramos</h1>
            <ul>
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
          Github:  
          <a href="https://github.com/ANTONVAN">
          ANTONVAN
          </a>
          </h1>
        </li>
      </ul>
		  <Image src="./1566005589169.jpg" fluid />
		  <h1>
		    I am a Project manager in the medical laboratory industry. Currently preparing to become a Full Stack Web Developer. I like to create, innovate and always be learning.
		  </h1>
		  
      </Jumbotron>

                    
      </Container>
    );
  }


export default About;
