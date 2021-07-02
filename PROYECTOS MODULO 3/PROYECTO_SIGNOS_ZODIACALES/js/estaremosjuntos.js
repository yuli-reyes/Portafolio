//Este es de la página "estaremosjuntos.html"

btnheart.addEventListener('click',e=>{

	e.preventDefault()
	let misigno=document.getElementById('signom').value
	let parsigno=document.getElementById('signop').value

	let respuesta=document.getElementById('respjuntos')

	if((misigno=="ari" && parsigno=="ari")||(misigno=="ari" && parsigno=="sag")||(misigno=="ari" && parsigno=="leo")||(misigno=="ari" && parsigno=="acu")){

		texto=`<p>En el Amor:<br>La atracción entre estos dos signos es inmediata y sus caracteres y formas de ver la vida y el mundo se adaptan a la perfección.</p>`

		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")
	}

	else if((misigno=="ari" && parsigno=="vir")||(misigno=="ari" && parsigno=="gem")||(misigno=="ari" && parsigno=="lib")){
		texto=`<p>En la amistad:<br>Forman un buen equipo como amigos. Por lo tanto, es muy posible que si una relación sentimental se acaba entre ambos, sigan siendo buenos amigos.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")

	}

	else if((misigno=="ari" && parsigno=="cap")||(misigno=="ari" && parsigno=="can")||(misigno=="ari" && parsigno=="pis")||(misigno=="ari" && parsigno=="esc")){

		texto=`<p>No son compatibles<br>Debido a sus enormes diferencias en el carácter de cada uno, hace dificil que una relación funcione.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")
	}

	else if((misigno=="tau" && parsigno=="can")||(misigno=="tau" && parsigno=="pis")||(misigno=="tau" && parsigno=="tau")||(misigno=="tau" && parsigno=="esc")||(misigno=="tau" && parsigno=="ari")){
		
		texto=`<p>En el Amor:<br> La atracción entre estos dos signos es inmediata y sus caracteres y formas de ver la vida y el mundo se adaptan a la perfección.</p>`

		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")
	}

	else if ((misigno=="tau" && parsigno=="vir")||(misigno=="tau" && parsigno=="cap")||(misigno=="tau" && parsigno=="lib")||(misigno=="tau" && parsigno=="gem")){

		texto=`<p>En la amistad:<br>Forman un buen equipo como amigos. Por lo tanto, es muy posible que si una relación sentimental se acaba entre ambos, sigan siendo buenos amigos.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")
	
	}

	else if((misigno=="tau" && parsigno=="leo")||(misigno=="tau" && parsigno=="acu")||(misigno=="tau" && parsigno=="sag")){

		texto=`<p>No son compatibles<br>Debido a sus enormes diferencias en el carácter de cada uno, hace dificil que una relación funcione.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")
	}
	else if((misigno=="gem" && parsigno=="ari")||(misigno=="gem" && parsigno=="leo")||(misigno=="gem" && parsigno=="acu")||(misigno=="gem" && parsigno=="gem")){
		
		texto=`<p>En el Amor:<br> La atracción entre estos dos signos es inmediata y sus caracteres y formas de ver la vida y el mundo se adaptan a la perfección.</p>`

		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")
	}

	else if((misigno=="gem" && parsigno=="lib")||(misigno=="gem" && parsigno=="sag")||(misigno=="gem" && parsigno=="tau")){

		texto=`<p>En la amistad:<br>Forman un buen equipo como amigos. Por lo tanto, es muy posible que si una relación sentimental se acaba entre ambos, sigan siendo buenos amigos.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")		
	}
	else if((misigno=="gem" && parsigno=="vir")||(misigno=="gem" && parsigno=="pis")||(misigno=="gem" && parsigno=="esc")||(misigno=="gem" && parsigno=="cap")||(misigno=="gem" && parsigno=="can")){

		texto=`<p>No son compatibles<br>Debido a sus enormes diferencias en el carácter de cada uno, hace dificil que una relación funcione.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")		
	}

	else if((misigno=="can" && parsigno=="tau")||(misigno=="can" && parsigno=="vir")||(misigno=="can" && parsigno=="can")||(misigno=="can" && parsigno=="esc")||(misigno=="can" && parsigno=="leo")||(misigno=="can" && parsigno=="pis")){
		
		texto=`<p>En el Amor:<br> La atracción entre estos dos signos es inmediata y sus caracteres y formas de ver la vida y el mundo se adaptan a la perfección.</p>`

		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")		
	}

	else if((misigno=="can" && parsigno=="cap")||(misigno=="can" && parsigno=="acu")||(misigno=="can" && parsigno=="sag")){

		texto=`<p>En la amistad:<br>Forman un buen equipo como amigos. Por lo tanto, es muy posible que si una relación sentimental se acaba entre ambos, sigan siendo buenos amigos.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")
	}

	else if((misigno=="can" && parsigno=="ari")||(misigno=="can" && parsigno=="lib")||(misigno=="can" && parsigno=="gem")){
		
		texto=`<p>No son compatibles<br>Debido a sus enormes diferencias en el carácter de cada uno, hace dificil que una relación funcione.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	

	}
	else if((misigno=="leo" && parsigno=="leo")||(misigno=="leo" && parsigno=="lib")||(misigno=="leo" && parsigno=="gem")||(misigno=="leo" && parsigno=="sag")||(misigno=="leo" && parsigno=="ari")||(misigno=="leo" && parsigno=="cap")||(misigno=="leo" && parsigno=="can")){

		texto=`<p>En el Amor:<br> La atracción entre estos dos signos es inmediata y sus caracteres y formas de ver la vida y el mundo se adaptan a la perfección.</p>`

		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	
	}

	else if((misigno=="leo" && parsigno=="pis")||(misigno=="leo" && parsigno=="vir")||(misigno=="leo" && parsigno=="acu")){

		texto=`<p>En la amistad:<br>Forman un buen equipo como amigos. Por lo tanto, es muy posible que si una relación sentimental se acaba entre ambos, sigan siendo buenos amigos.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")
	}
	else if((misigno=="leo" && parsigno=="tau")||(misigno=="leo" && parsigno=="esc")){

		texto=`<p>No son compatibles<br>Debido a sus enormes diferencias en el carácter de cada uno, hace dificil que una relación funcione.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")

	}

	else if((misigno=="vir" && parsigno=="can")||(misigno=="vir" && parsigno=="can")||(misigno=="vir" && parsigno=="esc")){
		
		texto=`<p>En el Amor:<br> La atracción entre estos dos signos es inmediata y sus caracteres y formas de ver la vida y el mundo se adaptan a la perfección.</p>`

		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")			
	}

	else if((misigno=="vir" && parsigno=="leo")||(misigno=="vir" && parsigno=="tau")||(misigno=="vir" && parsigno=="ari")||(misigno=="vir" && parsigno=="lib")||(misigno=="vir" && parsigno=="acu")||(misigno=="vir" && parsigno=="cap")){

		texto=`<p>En la amistad:<br>Forman un buen equipo como amigos. Por lo tanto, es muy posible que si una relación sentimental se acaba entre ambos, sigan siendo buenos amigos.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	
	}

	else if((misigno=="vir" && parsigno=="gem")||(misigno=="vir" && parsigno=="sag")||(misigno=="vir" && parsigno=="pis")){

		texto=`<p>No son compatibles<br>Debido a sus enormes diferencias en el carácter de cada uno, hace dificil que una relación funcione.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")		
	}
	else if((misigno=="lib" && parsigno=="leo")||(misigno=="lib" && parsigno=="lib")||(misigno=="lib" && parsigno=="sag")){

		texto=`<p>En el Amor:<br> La atracción entre estos dos signos es inmediata y sus caracteres y formas de ver la vida y el mundo se adaptan a la perfección.</p>`

		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")

	}
	else if((misigno=="lib" && parsigno=="tau")||(misigno=="lib" && parsigno=="gem")||(misigno=="lib" && parsigno=="ari")||(misigno=="lib" && parsigno=="vir")||(misigno=="lib" && parsigno=="acu")||(misigno=="lib" && parsigno=="pis")){

		texto=`<p>En la amistad:<br>Forman un buen equipo como amigos. Por lo tanto, es muy posible que si una relación sentimental se acaba entre ambos, sigan siendo buenos amigos.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	
	}
	else if((misigno=="lib" && parsigno=="can")||(misigno=="lib" && parsigno=="cap")||(misigno=="lib" && parsigno=="esc")){

		texto=`<p>No son compatibles<br>Debido a sus enormes diferencias en el carácter de cada uno, hace dificil que una relación funcione.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")

	}
	else if((misigno=="esc" && parsigno=="tau")||(misigno=="esc" && parsigno=="can")||(misigno=="esc" && parsigno=="vir")||(misigno=="esc" && parsigno=="cap")||(misigno=="esc" && parsigno=="esc")){

		texto=`<p>En el Amor:<br> La atracción entre estos dos signos es inmediata y sus caracteres y formas de ver la vida y el mundo se adaptan a la perfección.</p>`

		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")		
	}

	else if((misigno=="esc" && parsigno=="pis")||(misigno=="esc" && parsigno=="sag")){

		texto=`<p>En la amistad:<br>Forman un buen equipo como amigos. Por lo tanto, es muy posible que si una relación sentimental se acaba entre ambos, sigan siendo buenos amigos.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	

	}

	else if((misigno=="esc" && parsigno=="ari")||(misigno=="esc" && parsigno=="leo")||(misigno=="esc" && parsigno=="gem")||(misigno=="esc" && parsigno=="lib")||(misigno=="esc" && parsigno=="acu")){

		texto=`<p>No son compatibles<br>Debido a sus enormes diferencias en el carácter de cada uno, hace dificil que una relación funcione.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")

	}
	else if((misigno=="sag" && parsigno=="leo")||(misigno=="sag" && parsigno=="ari")||(misigno=="sag" && parsigno=="lib")||(misigno=="sag" && parsigno=="acu")||(misigno=="sag" && parsigno=="sag")){

		texto=`<p>En el Amor:<br> La atracción entre estos dos signos es inmediata y sus caracteres y formas de ver la vida y el mundo se adaptan a la perfección.</p>`

		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	


	}
	else if((misigno=="sag" && parsigno=="esc")||(misigno=="sag" && parsigno=="gem")||(misigno=="sag" && parsigno=="can")||(misigno=="sag" && parsigno=="cap")){

		texto=`<p>En la amistad:<br>Forman un buen equipo como amigos. Por lo tanto, es muy posible que si una relación sentimental se acaba entre ambos, sigan siendo buenos amigos.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	

	} 

	else if((misigno=="sag" && parsigno=="vir")||(misigno=="sag" && parsigno=="tau")||(misigno=="sag" && parsigno=="pis")){

		texto=`<p>No son compatibles<br>Debido a sus enormes diferencias en el carácter de cada uno, hace dificil que una relación funcione.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	
	}

	else if((misigno=="cap" && parsigno=="leo")||(misigno=="cap" && parsigno=="cap")||(misigno=="cap" && parsigno=="pis")){

		texto=`<p>En el Amor:<br> La atracción entre estos dos signos es inmediata y sus caracteres y formas de ver la vida y el mundo se adaptan a la perfección.</p>`

		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	
	}

	else if((misigno=="cap" && parsigno=="sag")||(misigno=="cap" && parsigno=="esc")||(misigno=="cap" && parsigno=="vir")||(misigno=="cap" && parsigno=="tau")||(misigno=="cap" && parsigno=="can")||(misigno=="cap" && parsigno=="acu")){
		
		texto=`<p>En la amistad:<br>Forman un buen equipo como amigos. Por lo tanto, es muy posible que si una relación sentimental se acaba entre ambos, sigan siendo buenos amigos.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	

	}

	else if((misigno=="cap" && parsigno=="lib")||(misigno=="cap" && parsigno=="ari")||(misigno=="cap" && parsigno=="gem")){

		texto=`<p>No son compatibles<br>Debido a sus enormes diferencias en el carácter de cada uno, hace dificil que una relación funcione.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	

	}

	else if((misigno=="acu" && parsigno=="ari")||(misigno=="acu" && parsigno=="acu")||(misigno=="acu" && parsigno=="sag")||(misigno=="acu" && parsigno=="gem")||(misigno=="acu" && parsigno=="pis")){

		texto=`<p>En el Amor:<br> La atracción entre estos dos signos es inmediata y sus caracteres y formas de ver la vida y el mundo se adaptan a la perfección.</p>`

		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")

	}

	else if((misigno=="acu" && parsigno=="cap")||(misigno=="acu" && parsigno=="lib")||(misigno=="acu" && parsigno=="vir")||(misigno=="acu" && parsigno=="can")||(misigno=="acu" && parsigno=="leo")){

	
		texto=`<p>En la amistad:<br>Forman un buen equipo como amigos. Por lo tanto, es muy posible que si una relación sentimental se acaba entre ambos, sigan siendo buenos amigos.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")		
	}

	else if((misigno=="acu" && parsigno=="esc")||(misigno=="acu" && parsigno=="tau")){

		texto=`<p>No son compatibles<br>Debido a sus enormes diferencias en el carácter de cada uno, hace dificil que una relación funcione.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")
	}

	else if((misigno=="pis" && parsigno=="acu")||(misigno=="pis" && parsigno=="cap")||(misigno=="pis" && parsigno=="tau")||(misigno=="pis" && parsigno=="can")||(misigno=="pis" && parsigno=="pis")){

		texto=`<p>En el Amor:<br> La atracción entre estos dos signos es inmediata y sus caracteres y formas de ver la vida y el mundo se adaptan a la perfección.</p>`

		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	
	}

	else if((misigno=="pis" && parsigno=="esc")||(misigno=="pis" && parsigno=="leo")||(misigno=="pis" && parsigno=="lib")){

		texto=`<p>En la amistad:<br>Forman un buen equipo como amigos. Por lo tanto, es muy posible que si una relación sentimental se acaba entre ambos, sigan siendo buenos amigos.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")

	}


	else if((misigno=="pis" && parsigno=="sag")||(misigno=="pis" && parsigno=="gem")||(misigno=="pis" && parsigno=="ari")||(misigno=="pis" && parsigno=="vir")){

		texto=`<p>No son compatibles<br>Debido a sus enormes diferencias en el carácter de cada uno, hace dificil que una relación funcione.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility","visible")
		respuesta.style.setProperty("opacity","1")
		respuesta.style.setProperty("transition","all 3s ease")	
	}



})

