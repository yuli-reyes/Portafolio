import './nav.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";


function Nav(){
	return(

		<div>
			<nav>
				<ul className="menu" type="none">

				<li className="item">
				<NavLink to="/habilidades" activeClassName="active">Habilidades</NavLink>
				</li>

				<li className="item">
				<NavLink to="/portafolio" activeClassName="active">Portafolio</NavLink>
				</li>

				<li className="item">
				<NavLink to="/formacion" activeClassName="active">Formación</NavLink>
				</li>

				<li className="item">
				<NavLink to="/experiencia" activeClassName="active">Experiencia</NavLink>
				</li>

				</ul>
			</nav>
		</div>


		);
}

export default Nav;