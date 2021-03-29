import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (

    <div className="App">
	    <Router>
		    <Header />
		   		<Switch>
		          <Route exact path={["/https://antonvan.github.io/portfolio/", "/about"]}>
		            <About />
		          </Route>
		          <Route exact path={["/https://antonvan.github.io/portfolio/","/projects"]}>
		            <Projects />
		          </Route>
		          <Route exact path={["/https://antonvan.github.io/portfolio/", "/contact"]}>
		            <Contact />
		          </Route>
		        </Switch>
		    <Footer />
	    </Router>
    </div>
  );
}

export default App;
