import React, { useState, useEffect } from "react";
import { CardColumns } from "react-bootstrap";
import { Container } from "../components/Grid"
import Project from "../components/Project";

const projects = [
{
title: "API FOOD TEMPLATE",
description:"This API Food template is built for a party host who wants to surprise his guests.It uses 2 APIs to provide the user with 3 dishes alternatives based on ingredient and a random cocktail.", 
deployed: "https://pegasus-1982.github.io/Project-1-Team-ALR-3/",
github:"https://github.com/pegasus-1982/Project-1-Team-ALR-3", 
image:"./Captura.PNG",

},
{
title: "Weather APP",
description:"This website will tell you the current weather conditions for the city you type in the search box. It will also provide you with a 3 day forcast.", 
deployed: "https://antonvan.github.io/hwk6/",
github:"https://github.com/ANTONVAN/hwk6.git", 
image:"./APIFOOD.jpg"
},
{
title: "Password Generator",
description: "This app will help you generate a random passord! Just enter how many characters long you need your password to be",
deployed: "https://antonvan.github.io/homework-3-JS/Develop/index.html",
github:"https://github.com/ANTONVAN/homework-3-JS.git",
image:"./password.png"
},
{
title: "Work Day Scheduler",
description: "This app will help you plan your day and be more productive! Work Day Scheduler",
deployed: "https://antonvan.github.io/homework-5/Develop/index.html",
github: " https://github.com/ANTONVAN/homework-5.git",
image: "scheduler.png"
},
{
title:"Laboratory Information System",
description: "This app will help you manage your clinical laboratory operations",
deployed: "",
github: "https://github.com/rafialmadrid/Project2.git",
image: ""

}
]

function Projects() {
  // Setting our component's initial state
  /*const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})*/

  // Load all books and store them with setBooks

    return (
      <Container fluid>
            {projects.length ? (
              <CardColumns>
                {projects.map(project => (
                  <Project>
                  {project}
                  </Project>
                ))}
              </CardColumns>
            ) : (
              <h3>No Results to Display</h3>
            )}
          
      </Container>
    );
  }


export default Projects;
