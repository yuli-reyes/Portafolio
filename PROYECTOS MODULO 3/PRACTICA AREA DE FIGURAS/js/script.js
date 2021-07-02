function CalcularAreaCir(){


	let radio=document.getElementById('radio').value
	let resultado=document.getElementById('resultado')

	let area=3.14*radio*radio;

	let aread=area.toFixed(2);


	resultado.innerHTML=`El área del círculo es: ${aread} cm <sup>2</sup>`

}


function CalcularAreaCua(){

	let lado=document.getElementById('lado').value
	let resultadocua=document.getElementById('resultadoc')

	let areac=Math.pow(lado,2);

	resultadocua.innerHTML=`El área del cuadrado es: ${areac} cm <sup>2</sup>`


}

function CalcularAreaRec(){

	let base=document.getElementById('base').value
	let altura=document.getElementById('altura').value
	let resultadorec=document.getElementById('resultador')

	let arear=base*altura;

	resultadorec.innerHTML=`El área del cuadrado es: ${arear} cm <sup>2</sup>`

}

function calcularAreaTrian(){

	let baset=document.getElementById('baset').value
	let alturat=document.getElementById('alturat').value
	let resultadotrian=document.getElementById('resultadot')

	let areat=(baset*alturat)/2;

	resultadotrian.innerHTML=`El área del triángulo es: ${areat} cm <sup>2</sup>`



}

