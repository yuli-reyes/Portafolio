/*Este es para el Formulario de Contacto General*/

let form=document.querySelector('#form')
let fe1=document.querySelector('#campoCor .feedback')
let fe2=document.querySelector('#campoTel .feedback')


let ex1=/^[da-z_.-]+[@da-z.-]+.[a-z.]/
let ex2=/[0-9]{1,32}/


form.correo.addEventListener('input',e=>{
	e.preventDefault()

	if(ex1.test(e.target.value)){
		fe1.style.setProperty("visibility","hidden")
		fe1.style.setProperty("opacity","0")
	}
	else{
		fe1.textContent='No es válido el correo'
		fe1.style.setProperty("visibility","visible")
		fe1.style.setProperty("opacity","1")
	}

})

form.telefono.addEventListener('input',e=>{
	e.preventDefault()

	if (ex2.test(e.target.value)){
		fe2.style.setProperty("visibility","hidden")
		fe2.style.setProperty("opacity","0")
	}
	else{
		
		fe2.textContent='No es válido el telefono, debe ser valor numérico'
		fe2.style.setProperty("visibility","visible")
		fe2.style.setProperty("opacity","1")

	}

})

form.addEventListener('submit',e=>{
	e.preventDefault()

	let correo=document.getElementById('correo').value
	let telefono=document.getElementById('telefono').value
	let descripcion1=document.getElementById('descripcion').value
	let nombre=document.getElementById('nombre').value

	if (correo==0){
		alert('El correo electrónico no ha sido diligenciado')
		document.formulario.correo.focus()

	}

	else if(telefono==0){
		alert('El numero de telefono no ha sido diligenciado')
		document.formulario.telefono.focus()

	}
	else if(nombre==0){
		alert('Su nombre no ha sido diligenciado')
		document.formulario.solicitud.focus()

	}

	else if(descripcion1==0){
		alert('No ha diligenciado la descripcion')
		document.formulario.descripcion.focus()

	}
	else{
		form.submit()
		alert('Datos Enviados')
	}


})

/*Fin del Formulario de Contacto General*/



