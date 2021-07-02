//Este evento es del id btnsigno de la página "quesignoeres.html"

btnsigno.addEventListener('click',e=>{
	e.preventDefault()
	let dia=document.getElementById('dia').value
	dia=parseInt(dia)
	let mes=document.getElementById('mes').value
	mes=parseInt(mes)

	let signo=document.getElementById('cajaresp')

	    if((dia>=21 && mes==3)||(dia<=20 && mes==4)){
	    
	    texto=`<p>Tu signo es Aries <br><img src="imagenes/aries.png"></p>`

		signo.innerHTML=texto
		signo.style.setProperty("visibility","visible")
		signo.style.setProperty("opacity","1")
		signo.style.setProperty("transition","all 3s ease")
	}

		if((dia>=24 && mes==9)||(dia<=23 && mes==10)){

		texto=`<p>Tu signo es Libra <br><img src="imagenes/libra.png"></p>`

		signo.innerHTML=texto
		signo.style.setProperty("visibility","visible")
		signo.style.setProperty("opacity","1")
		signo.style.setProperty("transition","all 3s ease")
    }
    if((dia>=21 && mes==4)||(dia<=21 && mes==5)){

		texto=`<p>Tu signo es Tauro <br><img src="imagenes/tauro.png"></p>`

		signo.innerHTML=texto
		signo.style.setProperty("visibility","visible")
		signo.style.setProperty("opacity","1")
		signo.style.setProperty("transition","all 3s ease")
    }
    if((dia>=24 && mes==10)||(dia<=22 && mes==11)){

		texto=`<p>Tu signo es Escorpio <br><img src="imagenes/scorpio.png"></p>`

		signo.innerHTML=texto
		signo.style.setProperty("visibility","visible")
		signo.style.setProperty("opacity","1")
		signo.style.setProperty("transition","all 3s ease")

    }
    if((dia>=22 && mes==5)||(dia<=21 && mes==6)){

        texto=`<p>Tu signo es Géminis <br><img src="imagenes/gemini.png"></p>`

		signo.innerHTML=texto
		signo.style.setProperty("visibility","visible")
		signo.style.setProperty("opacity","1")
		signo.style.setProperty("transition","all 3s ease")
    }
    if((dia>=23 && mes==11)||(dia<=21 && mes==12)){

        texto=`<p>Tu signo es Sagitario <br><img src="imagenes/sagi.png"></p>`

		signo.innerHTML=texto
		signo.style.setProperty("visibility","visible")
		signo.style.setProperty("opacity","1")
		signo.style.setProperty("transition","all 3s ease")
    }
    if((dia>=21 && mes==6)||(dia<=23 && mes==7)){

    	texto=`<p>Tu signo es Cáncer <br><img src="imagenes/cancer.png"></p>`

		signo.innerHTML=texto
		signo.style.setProperty("visibility","visible")
		signo.style.setProperty("opacity","1")
		signo.style.setProperty("transition","all 3s ease")

    }

    if((dia>=22 && mes==12)||(dia<=20 && mes==1)){

        texto=`<p>Tu signo es Capricornio <br><img src="imagenes/capri.png"></p>`

		signo.innerHTML=texto
		signo.style.setProperty("visibility","visible")
		signo.style.setProperty("opacity","1")
		signo.style.setProperty("transition","all 3s ease")

    }

    if((dia>=24 && mes==7)||(dia<=23 && mes==8)){

    	texto=`<p>Tu signo es Leo <br><img src="imagenes/leo.png"></p>`

		signo.innerHTML=texto
		signo.style.setProperty("visibility","visible")
		signo.style.setProperty("opacity","1")
		signo.style.setProperty("transition","all 3s ease")
    }

    if((dia>=21 && mes==1)||(dia<=19 && mes==2)){

        texto=`<p>Tu signo es Acuario <br><img src="imagenes/acuario.png"></p>`

		signo.innerHTML=texto
		signo.style.setProperty("visibility","visible")
		signo.style.setProperty("opacity","1")
		signo.style.setProperty("transition","all 3s ease")
    }

    if((dia>=24 && mes==8)||(dia<=23 && mes==9)){

        texto=`<p>Tu signo es Virgo <br><img src="imagenes/virgo.png"></p>`

		signo.innerHTML=texto
		signo.style.setProperty("visibility","visible")
		signo.style.setProperty("opacity","1")
		signo.style.setProperty("transition","all 3s ease")
    }
    if((dia>=20 && mes==2)||(dia<=20 && mes==3)){

        texto=`<p>Tu signo es Piscis <br><img src="imagenes/picis.png"></p>`

		signo.innerHTML=texto
		signo.style.setProperty("visibility","visible")
		signo.style.setProperty("opacity","1")
		signo.style.setProperty("transition","all 3s ease")
    }

})



