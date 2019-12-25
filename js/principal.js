var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nossa";


var primeiroPaciente = document.querySelector("#primeiro-paciente");

var peso = primeiroPaciente.querySelector(".info-peso");
var p1 = peso.textContent
console.log(p1);

var altura = primeiroPaciente.querySelector(".info-altura");
var a1 = altura.textContent
console.log(a1);

var imc = (p1/(a1*a1))
console.log(imc)