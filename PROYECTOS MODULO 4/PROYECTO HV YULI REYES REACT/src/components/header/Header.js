import foto from '../assets/fotoyuli.jpg';
import './header.css';

function Header(){
	return(

		<header>
			<div className="foto">
				<img src={foto} />
			</div>
			<div className="info">
			<h1>Yuli Viviana Reyes Muñoz</h1>
			<h3>TÉCNICA EN DESARROLLO WEB - PUBLICISTA</h3>
			<h4>Acerca de mi</h4>
			<p>Técnica en desarrollo web frontend y profesional en publicidad 
			con experiencia en administración de sitios web, producción de piezas
			 gráficas, en el desarrollo de labores en el área de marketing digital. 
			 Poseo gran sentido del compromiso frente a mis labores, 
			 siempre estoy con toda la disposición para el aprendizaje y el 
			 conocimiento, valorando y apoyando el trabajo en equipo.
			</p>
			</div>
		</header>
		);

}

export default Header;