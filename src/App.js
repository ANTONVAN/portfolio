import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (

    <div className="App">
	    <HashRouter basename="/">
		    <Header />
		   		<Switch>

		   		  <Route exact path = "/" component={About}/>
		   		
		   		  	
		          <Route path="/about" component={About}/>
		            
		          
		          <Route path="/projects" component={Projects}/>
		            
		          
		          <Route path="/contact" component={Contact}>
		          
		          
		        </Switch>
		    <Footer />
	    </HashRouter>
    </div>
  );
}

export default App;
