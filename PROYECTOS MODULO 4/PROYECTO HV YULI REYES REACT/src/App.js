import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Habilidades from './Habilidades';
import Portafolio from './Portafolio';
import Formacion from './Formacion';
import Experiencia from './Experiencia';
import Footer from './components/footer/Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Nav />
          <Switch>
            <Route path="/portafolio">
            <Portafolio />
            </Route>
            <Route path="/formacion">
            <Formacion />
            </Route>
            <Route path="/habilidades">
            <Habilidades />             
            </Route>
            <Route path="/experiencia">
            <Experiencia />             
            </Route>
            <Route path="/">
            <Habilidades />             
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
