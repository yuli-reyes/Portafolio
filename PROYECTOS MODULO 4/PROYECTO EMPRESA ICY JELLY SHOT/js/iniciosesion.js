





let error= document.getElementById('feedbackuser');
let error2= document.getElementById('feedbackpass');
let errordatos=document.getElementById('errordatos')
let formlogin=document.getElementById('formlogin');


formlogin.addEventListener('submit',e=>{
	e.preventDefault()


	let usuario=document.getElementById('nomuser').value;
	let password=document.getElementById('passlogin').value;


	
	if(usuario==0){
		error.innerHTML = "No ha diligenciado el usuario"
		document.loginform.usuario.focus()
	}

	else if(password==0){
		error2.innerHTML = "No ha diligenciado la contraseña"
		document.loginform.password.focus()
	}

	else if (usuario!=='usuario21' || password!=='clave21') {
		errordatos.innerHTML ="El usuario y contraseña son incorrectos"
		errordatos.style.setProperty("text-align","center")
		errordatos.style.setPropert("font-weight","bold")

	}

	else if(usuario=='usuario21' || password=='clave21'){
		formlogin.submit()
		alert('Usted ha ingresado')
	}
	
})

let clave=document.getElementById('passlogin');

function myFunction() {
  if (clave.type === "password") {
    clave.type = "text";
  } else {
    clave.type = "password";
  }
}

