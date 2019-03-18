function createElements(p){
    var form = document.querySelector("#form");
    divForm = document.createElement('tr');
  
    var listaTd = [p.nome,p.peso,p.altura,p.gordura,p.imc];

    p.nome.textContent = form.nome.value;
    p.peso.textContent = form.peso.value;
    p.altura.textContent = form.altura.value;
    p.gordura.textContent = form.gordura.value;
    p.imc.textContent = (p.peso.textContent/(p.altura.textContent*p.altura.textContent)).toFixed(2);
    for(var i=0;i<listaTd.length;i++){
        divForm.appendChild(listaTd[i]);
    }
    divForm.classList.add('paciente');
    p.nome.classList.add('info-nome');
    p.peso.classList.add('info-peso');
    p.altura.classList.add('info-altura');
    p.gordura.classList.add('gordura-info');
    p.imc.classList.add('imc-info');

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(divForm);
    verificarValores(p.peso.textContent,p.altura.textContent,p.peso,p.altura,p.imc);
    console.log(p.imc);

}

function crAjax(obje){
    var divForm = document.createElement('tr');
    var tabela = document.querySelector('#tabela-pacientes');
    var nome = document.createElement('td');
    nome.textContent = obje.nome;
    nome.classList.add('info-nome');
    divForm.classList.add('paciente');
    var peso = document.createElement('td');
    peso.textContent = obje.peso;
    peso.classList.add('info-peso');

    var altura = document.createElement('td');
    altura.textContent = obje.altura;
    altura.classList.add('info-altura');

    var gordura = document.createElement('td');
    gordura.textContent = obje.gordura;
    gordura.classList.add('info-gordura');

    var imc = document.createElement('td');
    imc.textContent = obje.imc;
    imc.classList.add('info-imc');
    var listaTd = [nome,peso,altura,gordura,imc];

    for(var i=0;i<listaTd.length;i++){
        divForm.appendChild(listaTd[i]);
    }

    tabela.appendChild(divForm);

}



   


    