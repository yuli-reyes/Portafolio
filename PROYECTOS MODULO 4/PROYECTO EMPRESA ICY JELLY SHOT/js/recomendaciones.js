
btnrecomendacion.addEventListener('click',e=>{
	
	e.preventDefault()
	let fruta=document.getElementById('fruta').value
	fruta=parseInt(fruta)
	let licor=document.getElementById('licor').value
	licor=parseInt(licor)

	let coctel=document.getElementById('cajaresp')

	    if ((fruta==1 && licor==1) ||(fruta==2 && licor==1) || (fruta==3 && licor==1) || (fruta==5 && licor==1)){
	    
	    texto=`<p> Eres Aventurero y arriesgado, Tú cóctel recomendado es: Tequila Sunrise<br><img style="width:150px"  src="imagenes/coctelrojo.png"></p>`
		coctel.innerHTML=texto
		coctel.style.setProperty("visibility","visible")
		coctel.style.setProperty("opacity","1")
		coctel.style.setProperty("transition","all 3s ease")
	} 

	if(( fruta==1 && licor==2)||(fruta==3 && licor==2)){

	    texto=`<p> Eres Divertido pero reservado, Tú cóctel recomendado es: Green Moon <br><img style="width:150px"  src="imagenes/coctelverde.png"></p>`
		coctel.innerHTML=texto
		coctel.style.setProperty("visibility","visible")
		coctel.style.setProperty("opacity","1")
		coctel.style.setProperty("transition","all 3s ease")
    }

    if(( fruta==1 && licor==3)||(fruta==3 && licor==3)){

	    texto=`<p> Eres una persona Feliz y apasionada, Tú cóctel recomendado es: Blue Lemon<br><img style="width:150px"  src="imagenes/coctelazul.png"></p>`
		coctel.innerHTML=texto
		coctel.style.setProperty("visibility","visible")
		coctel.style.setProperty("opacity","1")
		coctel.style.setProperty("transition","all 3s ease")
    }
   
   if(( fruta==1 && licor==4)||(fruta==3 && licor==4) || (fruta==2 && licor==4) || (fruta==4 && licor==1)){

	    texto=`<p> Eres una persona muy popular entre tus amigos, Tú cóctel recomendado es: Tom Collins<br><img style="width:150px"  src="imagenes/coctellimon.png"></p>`
		coctel.innerHTML=texto
		coctel.style.setProperty("visibility","visible")
		coctel.style.setProperty("opacity","1")
		coctel.style.setProperty("transition","all 3s ease")
    }
     if(( fruta==1 && licor==5)||(fruta==3 && licor==5)||(fruta==4 && licor==3)){

	    texto=`<p> Eres una persona soñadora y muy fiel, Tú cóctel recomendado es: Green Moon<br><img style="width:150px"  src="imagenes/coctelverde.png"></p>`
		coctel.innerHTML=texto
		coctel.style.setProperty("visibility","visible")
		coctel.style.setProperty("opacity","1")
		coctel.style.setProperty("transition","all 3s ease")
    }

     if((fruta==2 && licor==2)||(fruta==2 && licor==3) || (fruta==5 && licor==2) || (fruta==5 && licor==3)){

	    texto=`<p> Eres una persona de otro planeta simpático, sincero y muy valiente, Tú cóctel recomendado es: Galaxy <br><img style="width:150px"  src="imagenes/coctelfucsia.png"></p>`
		coctel.innerHTML=texto
		coctel.style.setProperty("visibility","visible")
		coctel.style.setProperty("opacity","1")
		coctel.style.setProperty("transition","all 3s ease")
    }
    
    if((fruta==2 && licor==5)||(fruta==5 && licor==5)){

	    texto=`<p> Eres una persona generosa y extrovertida, Tú cóctel recomendado es: Red Scotch <br><img style="width:150px"  src="imagenes/coctelfresa.png"></p>`
		coctel.innerHTML=texto
		coctel.style.setProperty("visibility","visible")
		coctel.style.setProperty("opacity","1")
		coctel.style.setProperty("transition","all 3s ease")
    }
    
     if((fruta==5 && licor==4)||(fruta==4 && licor==4)){

	    texto=`<p> Eres una persona aventurera y decidida, Tú cóctel recomendado es: Singapore <br><img style="width:150px"  src="imagenes/coctelamarillo.png"></p>`
		coctel.innerHTML=texto
		coctel.style.setProperty("visibility","visible")
		coctel.style.setProperty("opacity","1")
		coctel.style.setProperty("transition","all 3s ease")
    }

    if((fruta==4 && licor==5)||(fruta==4 && licor==2)){

	    texto=`<p> Eres una persona atrevida y muy entusiasta, Tú cóctel recomendado es: Passion Fruit <br><img style="width:150px"  src="imagenes/coctelamari.png"></p>`
		coctel.innerHTML=texto
		coctel.style.setProperty("visibility","visible")
		coctel.style.setProperty("opacity","1")
		coctel.style.setProperty("transition","all 3s ease")
    }

});



