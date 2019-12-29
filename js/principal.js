var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nossa";



var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var pesoValido = true;
    var alturaValida = true;
    paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso");
    var altura = paciente.querySelector(".info-altura");
    var totalimc = paciente.querySelector(".info-imc");

    var p1 = peso.textContent;
    
    if (p1 <= 0 || p1 >= 300){
        totalimc.textContent = "Peso inválido";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }

    var a1 = altura.textContent;
    

    if (a1 <= 0 || a1 >= 3.00){
        totalimc.textContent = "Altura inválida";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida){
    var imc = (p1/(a1*a1));
    totalimc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    var pacienteTr = document.createElement("tr");
    var pesoTd = document.createElement("td");
    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr);
}
);