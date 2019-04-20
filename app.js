var operandoa;
var operandob;
var operacion;
function init(){
	//variables de los botones...
var display = document.getElementById('display');
var on = document.getElementById('on');
var signo = document.getElementById('sign');
var dividido = document.getElementById('dividido');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var por = document.getElementById('por');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var menos = document.getElementById('menos');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cero = document.getElementById('0');
var punto = document.getElementById('punto');
var igual = document.getElementById('igual');
var mas = document.getElementById('mas');
var sign = document.getElementById('sign');
//eventos
uno.onclick = function(e){
	numero("1");
}
	dos.onclick = function(e){
		numero("2");
	}
tres.onclick = function(e){
	numero("3");
	}
	cuatro.onclick = function(e){
		numero("4");
	}
	cinco.onclick = function(e){
		numero("5");
	}
	seis.onclick = function(e){
		numero("6");
	}
	siete.onclick = function(e){
		numero("7")
	}
	ocho.onclick = function(e){
		numero("8");
	}
	nueve.onclick = function(e){
numero("9");
}
	cero.onclick = function(e){
		numero("0");
	}
	punto.onclick = function(e){
	display.textContent = display.textContent + ".";
	}
	sign.onclick = function(e) {
display.textContent = display.textContent * -1
};
//Efecto para que los botones se presionen y salgan al hacer click//
      function presionar(tecla) {
          tecla.target.style.transform = "scale(0.9,0.9)";
      }

      function soltar(tecla) {
          tecla.target.style.transform = "scale(1,1)";
      }

      function ejecutar() {
          var teclas = document.getElementsByTagName('img');
          for (i = 0; i < teclas.length; i++) {
              teclas[i].addEventListener("mousedown", presionar);
              teclas[i].addEventListener("mouseup", soltar);
          }
      }

      ejecutar();
    
on.onclick = function(e){
display.textContent = +"0";                  
	}
//Funcion para operaciones, y el display muestre maximo 9 digitos//	
	function numero(n){
if (display.textContent.length <9) {
if(display.textContent == "0"){
display.textContent = n;
} else {
display.textContent = display.textContent + n; 
}
}
}
//Funcion para que el boton on resetee y quede un 0//
on.onclick = function(e){ 
	reset(0);
	}
//Funcion para las operaciones basicas//			
	mas.onclick = function(e){
		operandoa = display.textContent;
		operacion = "+";
	limpiar();	
	}	
	menos.onclick = function(e){
		operandoa = display.textContent;
		operacion = "-"; 
	limpiar();	
	}
	por.onclick = function(e){
		operandoa = display.textContent; 
		operacion = "*";
	limpiar();	
	}
	dividido.onclick = function(e){
		operandoa = display.textContent;
		operacion = "/";
	limpiar();	
	}
//Funcion para mostar el resultado de las operaciones//	
	igual.onclick = function(e){ 
		operandob = display.textContent;
		resolver(); 
		}
//Funcion para limpiar la pantalla despues de presionar los signos de las operaciones//
	function limpiar(){
		display.textContent = "";
	}
	function reset(){
		display.textContent = "0";
		operandoa = 0;
		operandob = 0;
		operacion = "";
	}
	function resolver() {
        var res = 0;
        switch (operacion) {
            case "+":
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;
		case "-":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;
case "*":
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;
case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;

				
        }
        display.textContent = res; 
    }
}
init();


		
			
			
			
			
			
			
			
			
	