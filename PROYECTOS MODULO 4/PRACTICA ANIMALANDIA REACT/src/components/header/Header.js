

import logo from './img/logo.jpg';
import './Header.css';

function Header(){
	return(
		
		<header>
			<div className="logo">
					<img src={logo}/>
			</div>	
				<div className="botones">
					<button className="btn-ing"><i class="fas fa-power-off"></i> Ingresar</button>
					<button className="btn-reg"><i class="fas fa-user-plus"></i> Registrarse</button>
				</div>			
			
		</header>

		);
}

export default Header;