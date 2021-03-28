import React from "react";
import { Card, CardColumns, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Project({ fluid, children }) {
  return <Card style={{ width: '18rem' }}>

            <Card.Img variant="top" src={children.image} />
            <Card.Body>

              <Card.Title>{children.title}</Card.Title>

              <Card.Text>
                {children.description}
              </Card.Text>

              <Button variant="warning">
                <a href={children.github}>
                Github
                </a>  
              </Button>

              <Button variant="warning">
                <a href={children.deployed}>
                Deployed App
                </a>  
              </Button>

            </Card.Body>
          </Card>;
}








