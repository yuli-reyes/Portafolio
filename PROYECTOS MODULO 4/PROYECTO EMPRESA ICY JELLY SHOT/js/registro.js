


let formregistro=document.querySelector('#formregistro')
let fed1=document.querySelector('#campoNombre .feedbackregis')
let fed2=document.querySelector('#campoCorreo .feedbackregis')
let fed3=document.querySelector('#campoClave .feedbackregis')



let conf1=/[a-zA-Z][a-zA-ZáéíóúÁÉÍÓÚ]{3,32}/
let conf2=/^[da-z_.-]+[@da-z.-]+.[a-z.]/
let conf3=/^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/


formregistro.nomregis.addEventListener('input',e=>{
	e.preventDefault()

	if(conf1.test(e.target.value)){
		fed1.style.setProperty("visibility","hidden")
		fed1.style.setProperty("opacity","0")
	}
	else{
		fed1.textContent='Por favor ingrese el nombre y apellido'
		fed1.style.setProperty("visibility","visible")
		fed1.style.setProperty("opacity","1")
		fed1.style.setProperty("font-weight","600")
		fed1.style.setProperty("color","#9B9B9B")

	}

})


formregistro.correoregis.addEventListener('input',e=>{
	e.preventDefault()

	if(conf2.test(e.target.value)){
		fed2.style.setProperty("visibility","hidden")
		fed2.style.setProperty("opacity","0")
	}
	else{
		fed2.textContent='No es válido el correo'
		fed2.style.setProperty("visibility","visible")
		fed2.style.setProperty("opacity","1")
		fed2.style.setProperty("font-weight","600")
		fed2.style.setProperty("color","#9B9B9B")
	}

})


formregistro.claveregis.addEventListener('input',e=>{
	e.preventDefault()

	if(conf3.test(e.target.value)){
		fed3.style.setProperty("visibility","hidden")
		fed3.style.setProperty("opacity","0")
	}
	else{
		fed3.textContent='Debe contener al menos 8 caracteres, como mínimo 1 número y 1 mayúscula'
		fed3.style.setProperty("visibility","visible")
		fed3.style.setProperty("opacity","1")
		fed3.style.setProperty("font-weight","600")
		fed3.style.setProperty("color","#9B9B9B")
	}

})

formregistro.addEventListener('submit',e=>{
	e.preventDefault()

	let correo=document.getElementById('correoregis').value
	let nombre=document.getElementById('nomregis').value
	let clave=document.getElementById('claveregis').value
	let acepto=document.getElementById('checkregis').checked;


	
	if(nombre==0){
		alert('No ha diligenciado su nombre.')
		document.registform.nombre.focus()

	}
	else if (correo==0){
		alert('El correo electrónico no ha sido diligenciado.')
		document.registform.correo.focus()
	}

	else if(clave==0){
		alert('No ha diligenciado la contraseña.')
		document.registform.clave.focus()

	}
	else if (acepto==0){
	alert('No ha aceptado los terminos y condiciones.')
	}

	else{
		formregistro.submit()
		alert('Datos Enviados')
	}


})




