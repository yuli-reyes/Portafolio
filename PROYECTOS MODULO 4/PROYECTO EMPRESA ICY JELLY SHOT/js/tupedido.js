
let form=document.querySelector('#formpedido');
let fe1=document.querySelector('#campoCorreo .feedback');
let fe2=document.querySelector('#campoTelefono .feedback');
let fe3=document.querySelector('#campoDireccion .feedback');


let ex1=/^[da-z_.-]+[@da-z.-]+.[a-z.]/
let ex2=/[0-9]{1,32}/ 
let ex3=/^[a-zA-z\d\s#-]+/


form.correo2.addEventListener('input',event=>{
	event.preventDefault()

	if(ex1.test(event.target.value)){
		fe1.style.setProperty("visibility","hidden")
		fe1.style.setProperty("opacity","0")
	}
	else{
		fe1.textContent='No es válido el correo'
		fe1.style.setProperty("visibility","visible")
		fe1.style.setProperty("opacity","1")
	}

})

form.telefono2.addEventListener('input',event=>{
	event.preventDefault()

	if (ex2.test(event.target.value)){
		fe2.style.setProperty("visibility","hidden")
		fe2.style.setProperty("opacity","0")
	}
	else{
		
		fe2.textContent='No es válido el telefono, debe ser valor numérico'
		fe2.style.setProperty("visibility","visible")
		fe2.style.setProperty("opacity","1")
	}

})

form.direccion.addEventListener('input',event=>{
	event.preventDefault()

	if (ex3.test(event.target.value)){
		fe3.style.setProperty("visibility","hidden")
		fe3.style.setProperty("opacity","0")
	}
	else{
		
		fe3.textContent='No es válida la direccion'
		fe3.style.setProperty("visibility","visible")
		fe3.style.setProperty("opacity","1")

	}
}) 


form.addEventListener('submit',event=>{
	event.preventDefault()
    
    let nombre=document.getElementById('nombre2').value
	let telefono=document.getElementById('telefono2').value
	let correo=document.getElementById('correo2').value
	let direccion=document.getElementById('direccion').value

	if(nombre==0){
		alert('Su nombre no ha sido diligenciado')
		document.formulario.nombre.focus()

	}

	else if(telefono==0){
		alert('El numero de telefono no ha sido diligenciado')
		document.formulario.telefono.focus()

	}
	else if (correo==0){
		alert('El correo electrónico no ha sido diligenciado')
		document.formulario.correo.focus()

	}

	else if(direccion==0){
		alert('No ha diligenciado el campo de Dirección')
		document.formulario.direccion.focus()
	}
	else{
		form.submit()
		alert('Datos Enviados')
	}
 }) 