import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Error from './components/error/Error';
import Equipo from './Equipo';
import Servicios from './Servicios';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
           <Header />
            <Nav />      

          <Switch>
            <Route exact path="/">
                Home
            </Route>
            <Route exact path="/equipo">
            <Equipo />
            </Route>
            <Route exact path="/servicios">
            <Servicios />
            </Route>
            <Route path="/agendatucita">
              Agenda tu cita
            </Route>
            <Route path="/contactanos">
              Contáctanos
            </Route>
            <Route path="*">
            <Error />
            </Route>
          </Switch>
          <Footer />

      </Router>
    </div>
  );
}
export default App;
