//Funcion Por declaración

function calcularLongitud(){
	let palabra=document.getElementById("palabra").value
		alert("La longitud de "+palabra+" es\n"+palabra.length+" letras")
	}
//Funcion por expresión anónima
let convertirMayus= function(){

	let mayus=document.getElementById("palabra").value
	alert("En Mayúsculas " +mayus.toUpperCase())
}

//Funcion por expresión con nombre
let convertirMinus= function convertir(){
	let minus=document.getElementById("palabra").value
	alert("En minúsculas " +minus.toLowerCase())
}

function extraerInicial(){
	let inicial=document.getElementById("palabra").value
	alert("La inicial es " +inicial.substring(0,1))
}

function unirPalabra(){
	let nombre=document.getElementById("palabra").value
	let apellido=document.getElementById("otrapalabra").value
	let texto=nombre.concat(" ",apellido)
	alert("La unión de las 2 palabras es " +texto)
}

let calcularPrecio=function calcular(){
	let cantidad=document.getElementById("minutos").value
	cantidad=parseInt(cantidad)
	let opcion=document.getElementById("eleccion").value
	opcion=parseInt(opcion)

	let resultado

	if (opcion===1){
		resultado=cantidad*200
		alert("El precio de la llamada a fijo es " +resultado)
		}

	else if (opcion===2){
		resultado=cantidad*100
			alert("El precio de la llamada a celular es " +resultado)
		}

		else{
			alert("La opción no es válida")

		}
	}

function calcularGrado(){


	let grados=document.getElementById("grados").value
	grados=parseFloat(grados)
	let opciona=document.getElementById("opcion1").value
	let opcionb=document.getElementById("opcion2").value

	let conversion

	if(opciona==="C" && opcionb==="F"){

		conversion=(((9*parseFloat(grados))/5)+32)
			alert("La conversión de " +grados+ " grados Celcius a Farenheit es " +conversion.toFixed(2)+ "°F")
	}
		else if(opciona==="C" && opcionb==="K"){

			conversion=parseFloat(grados)+273.15
			alert("La conversión de " +grados+ " grados Celcius a Kelvin es " +conversion.toFixed(2)+ "°K")

		}

			else if(opciona==="F" && opcionb==="C"){

				conversion=((parseFloat(grados)-32)*(5/9))

					alert("La conversión de " +grados+ " grados Fahrenheit a Celcius es " +conversion.toFixed(2)+ "°C")
				}

				else if(opciona==="F" && opcionb==="K"){

					conversion=((5*(parseFloat(grados)-32)/9)+273.15)

					alert("La conversión de " +grados+ " grados Fahrenheit a Kelvin es " +conversion.toFixed(2)+ "°K")
				}

					else if(opciona==="K" && opcionb==="C"){
						conversion=(parseFloat(grados)-273.15)
						alert("La conversión de " +grados+ " grados Kelvin a Celsius es " +conversion.toFixed(2)+ "°C")

					}

						else if(opciona==="K" && opcionb==="F"){

							conversion=(9*(parseFloat(grados)-273.15)/5)+32
							alert("La conversión de " +grados+ " grados Kelvin a Fahrenheit es " +conversion.toFixed(2)+ "°F")
						}

						else{

							alert("No es posible hacer la conversión")
						}

}

//Ejercicio Triángulo


let tipoTriangulo=function(){

	let ladoa=document.getElementById("lado1").value
	let ladob=document.getElementById("lado2").value
	let ladoc=document.getElementById("lado3").value



	if (ladoa===ladob && ladob===ladoc) {

		alert("Según los valores es un Triángulo Equilátero, todos sus lados son iguales ")
	}

	else if(ladoa===ladob || ladob===ladoc || ladoa===ladoc){

		alert("Según los valores es un Triángulo Isósceles, 2 de sus lados son iguales ")
	}

	else{
		alert("Según los valores es un Triángulo Escaleno, todos sus lados son diferentes")
	}
}


// Ejercicio 5 Calculadora

let calcularOperacion=function calcular(){
	let valor1=document.getElementById("numero1").value
	let valor2=document.getElementById("numero2").value
	let opc=document.getElementById("operacion").value
	opc=parseInt(opc)

	let resp

	switch(opc){

		case 1:
		resp=parseInt(valor1)+parseInt(valor2)
		alert("La suma de "+valor1+" + "+valor2+ " = "+resp)
		break;

		case 2:
		resp=parseInt(valor1)-parseInt(valor2)
		alert("La resta de "+valor1+" - "+valor2+ " = " +resp)
		break;

		case 3:
		resp=parseInt(valor1)*parseInt(valor2)
		alert("La multiplicación de "+valor1+" * "+valor2+ " = "+resp)
		break;

		case 4:
		resp=parseInt(valor1)/parseInt(valor2)
		alert("La división de "+valor1+" / "+valor2+ " = "+resp)
		break;

		default:
		alert("La opción ingresada no es válida")
		break;
	}


}


