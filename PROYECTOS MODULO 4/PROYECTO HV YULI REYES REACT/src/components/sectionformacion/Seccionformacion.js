import './seccionformacion.css';

function Seccionformacion(){

	return(

		<section id="infoform">
			<article className="tituloform">
				<h2>Mi Formación</h2>
				<hr></hr>
			</article>
			<article className="general">
				<div className="subtituloform">
					<h3>Formación Académica</h3>
				</div>

				<div className="cajas">
					<div className="cajainfo1">

						<div className="cajatext">
							<h4>TÉCNICO EN DESARROLLO WEB FRONT END.</h4>
							<h5>Kuepa programa Techpower</h5>
							<h5>Febrero de 2021 - Actual</h5>
						</div>
					</div>
					<div className="cajainfo1">
						<div className="cajatext">
							<h4>PUBLICIDAD CON ÉNFASIS EN DIRECCIÓN DE ARTE</h4>
							<h5>Universidad Central</h5>
							<h5>Enero de 2010 - Octubre de 2015</h5>
						</div>
					</div>
				</div>
				<div className="caja2subtitulo">
					<h3>Otros Estudios</h3>
				</div>

				<div className="cajas">
					<div className="cajainfo2">

						<div className="cajatext2">
							<h4>CURSO DE DESIGN THINKING</h4>
							<h5>Global TI</h5>
							<h5>Diciembre 2020</h5>
						</div>
					</div>
					<div className="cajainfo2">
						<div className="cajatext2">
							<h4>CURSO BÁSICO DE PHOTOSHOP</h4>
							<h5>Platzi</h5>
							<h5>Mayo 2017</h5>
						</div>
					</div>
				</div>
			</article>

		</section>





	);
}

export default Seccionformacion;