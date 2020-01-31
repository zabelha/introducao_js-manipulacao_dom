var title = document.querySelector('.title');
title.textContent = 'Aparecida Nutri';

var pacientes = document.querySelectorAll('.paciente')

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i]

    var td_peso = paciente.querySelector('.info-peso');
    var peso = td_peso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc'); 

    if ( peso <= 0 || peso >= 1000){
        console.log('Peso inválido!!')
        tdImc.textContent = 'Peso inválido!!'
        paciente.classList.add('invalid-patient')
    } else if (altura <= 0 || altura >= 4 ){
        console.log('Altura inválida!!')
        tdImc.textContent = 'Altura inválita'
        paciente.classList.add('invalid-patient')
    } else {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc;
    }
}

var buttonAdd = document.querySelector('#adicionar-paciente');
buttonAdd.addEventListener('click', function(event){
    event.preventDefault();


var form = document.querySelector('#form-adiciona');
var paciente = patientCaracters(form)

var pacienteTr = createTr(paciente);


if (!validaPaciete(paciente)){
    var mensagem_erro = document.querySelector('.error')
    mensagem_erro.textContent = 'Dados do paciente (altura ou peso) estão iválidos!'
    console.log('Dados do paciente (altura ou peso) estão iválidos!')
    
} else {
    var tabel = document.querySelector('#tabela-pacientes');

    tabel.appendChild(pacienteTr)
}


    });


function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2)
}

function patientCaracters(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(peso, altura)
    }

    return paciente
}

function createTr(paciente){

    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente')
   
    pacienteTr.appendChild(createTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(createTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(createTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(createTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(createTd(paciente.imc, 'info-imc'))

    return pacienteTr
    
}

function createTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    
    return td
}

function validaDados(peso, altura){
    if ( peso <= 0 || peso >= 1000){
        return false
    } else if (altura <= 0 || altura >= 4 ){
       return false
    } else {
        return true
    }
}

function validaPaciete(paciente){
    if(validaDados(paciente.peso, paciente.altura)){
        return true;
    } else {
        return false;
    }
}
var table = document.querySelector('table')
 
table.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('delay')

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});

var filtrar_tabela = document.querySelector('#filter')

filtrar_tabela.addEventListener('input', function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if( this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector('.info-nome')
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, 'i')
            if( !expressao.test(nome)){
                paciente.classList.add('some');
            }else{
                paciente.classList.remove('some');
            }
        }
   
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove('some');
        }
    }
});

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");

    var xhr = new XMLHttpRequest();

});