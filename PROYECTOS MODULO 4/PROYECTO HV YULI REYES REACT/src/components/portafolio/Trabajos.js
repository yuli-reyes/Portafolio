import './trabajos.css';
import proyecto1 from './Proyecto1logotipo.PNG';
import proyecto2 from './Proyecto2ejercicios.PNG';
import proyecto3 from './Proyecto3signos.PNG';
import proyecto4 from './Proyecto4figuras.PNG';
import proyecto5 from './Proyecto5acertijos.PNG';
import proyecto6 from './Proyecto6cocteles.PNG';

function Trabajos(){
return(


	<div id="contenedor">
			<article className="titulocaja">
				<h2>Mi Portafolio</h2>
				<hr></hr>
			</article>

			<section className="cajacards">
				<article className="card">
						<div className="img-card">
					        <img src={proyecto1} alt="imagen proyecto corporativo" />
					     </div>
					    <div className="card-body">			      
					      <h4>Maquetación de Pagina Web Corporativa</h4>
					      <p>Página Web corporativa básica realizada con HTML5 y CSS.</p>
					       	<div className="boton-card">
					        	<a href="https://github.com/yuli-reyes/proyectomaquetacion.git" target="_blank">Ver el Sitio</a>
					        </div>
					    </div>
					    
				</article>
				<article className="card">
						<div className="img-card">
					        <img src={proyecto2} alt="imagen proyecto resolucion de problemas" />
					     </div>
					    <div className="card-body">			      
					      <h4>Página Interactiva para la Resolución de Problemas</h4>
					      <p>En esta página encontrarás 5 ejercicios diferentes de interacción.</p>
					       	<div className="boton-card">
					        	<a href="https://programaejerciciosvarios.000webhostapp.com/" target="_blank">Ver el Sitio</a>
					        </div>
					    </div>
					    
				</article>
				<article className="card">
						<div className="img-card">
					        <img src={proyecto3} alt="imagen proyecto signos zodiacales" />
					     </div>
					    <div className="card-body">			      
					      <h4>Sitio Web sobre Signos Zodiacales</h4>
					      <p>En este sitio podrá interactuar y descubrir todo lo referente a los signos.</p>
					       	<div className="boton-card">
					        	<a href="https://programadesignoszodiacales.000webhostapp.com/" target="_blank">Ver el Sitio</a>
					        </div>
					    </div>
					    
				</article>

				<article className="card">
						<div className="img-card">
					        <img src={proyecto4} alt="imagen proyecto área de figuras" />
					     </div>
					    <div className="card-body">			      
					      <h4>Pagina Web para Calcular el Área de Figuras</h4>
					      <p>Es un sitio que te permite hallar el área de 4 figuras geométricas.</p>
					       	<div className="boton-card">
					        	<a href="https://github.com/yuli-reyes/areafiguras.git" target="_blank">Ver el Sitio</a>
					        </div>
					    </div>
					    
				</article>
				<article className="card">
						<div className="img-card">
					        <img src={proyecto5} alt="imagen proyectoa adivinanzas" />
					     </div>
					    <div className="card-body">			      
					      <h4>Página Web de Adivinanzas y Acertijos</h4>
					      <p>Es una página interactiva que te permite validar si la respuesta es correcta o no.</p>
					       	<div className="boton-card">
					        	<a href="https://github.com/yuli-reyes/sitioadivinanzas.git" target="_blank">Ver el Sitio</a>
					        </div>
					    </div>
					    
				</article>
				<article className="card">
						<div className="img-card">
					        <img src={proyecto6} alt="imagen proyecto cocteles" />
					     </div>
					    <div className="card-body">			      
					      <h4>Aplicativo Web de Icy Jelly Shot</h4>
					      <p>Aquí podrá ver un catálogo de bebidas con registro, para realizar un pedido. </p>
					       	<div className="boton-card">
					        	<a href="https://icyjellyshot.000webhostapp.com/" target="_blank">Ver el Sitio</a>
					        </div>
					    </div>
					    
				</article>
			</section>
	</div>

	);


}

export default Trabajos;