import './seccion2.css';
import estrella from './estrella.svg';

function Section2habil(){
	return(
		<section id="valoracion1">
			<div className="cajageneral1">
				<article className="cajatexto1">
					<div className="cajasubtitulo1">
						<h3>Idiomas</h3>
					</div>

					<div className="cajabarras">

						<div className="progress">
	            			<div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
	              				<span className="skill">Español(Nativo)<i className="val">100%</i></span>
	            			</div>
	          			</div>

					    <div className="progress">
					        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
					            <span className="skill">Ingles <i className="val">70%</i></span>
					        </div>
					    </div>

					</div>

				</article>
				<article className="cajatexto2">
					<div className="cajasubtitulo2">
						<h3>Adicionales</h3>
					</div>

					<div className="cajaitems">

						<div className="itemvalor">

							<p>Illustrator</p>
							<p>Photoshop</p>
							<p>Wordpress</p>
						</div>
					

						<div className="cajavalores">
							<div className="grupocirculos">
									<img className="estrella"src={estrella} />
									<img className="estrella"src={estrella} />
									<img className="estrella"src={estrella} />
									<img className="estrella"src={estrella} />
									<div className="circulovacio"></div>
							</div>
							<div className="grupocirculos">
									<img className="estrella"src={estrella} />
									<img className="estrella"src={estrella} />
									<img className="estrella"src={estrella} />
									<img className="estrella"src={estrella} />
									<div className="circulovacio"></div>
							</div>
							<div className="grupocirculos">
									<img className="estrella"src={estrella} />
									<img className="estrella"src={estrella} />
									<img className="estrella"src={estrella} />
									<img className="estrella"src={estrella} />
									<div className="circulovacio"></div>
							</div>
					</div>
					</div>	

				</article>
			</div>

		</section>


		);
}

export default Section2habil;