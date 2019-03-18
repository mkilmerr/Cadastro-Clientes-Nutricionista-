(function(){
   
    var arrayPesos = [];
    var arrayAlturas = [];
    var arrayImc = [];
    var pacientes = document.querySelectorAll('.paciente');
    
    for(var i =0;i<pacientes.length;i++) {
        var paciente = pacientes[i];
        var pesos = paciente.querySelector('.info-peso').textContent;
        var alturas = paciente.querySelector('.info-altura').textContent;
        var imcDOM = paciente.querySelector('.info-imc');
       arrayPesos.push(pesos);
       arrayAlturas.push(alturas)
       
       var imc = arrayPesos[i]/(arrayAlturas[i]*arrayAlturas[i]);
       arrayImc.push(imc);
        
        if(arrayAlturas[i]<=0 || arrayAlturas[i]>3){
            imcDOM.textContent = 'Altura Inválida';
            paciente.querySelector('.info-altura').classList.add('height-wrong');
        }else if(arrayPesos[i]<=0 || arrayPesos[i]>150){
            imcDOM.textContent = 'Peso Inválido';
            paciente.querySelector('.info-peso').classList.add('height-wrong');
        }else{
            imcDOM.textContent = arrayImc[i].toFixed(2);
        }
        
    }
    var p = {
       
        nome: document.createElement('td'),
        peso : document.createElement("td"),
        altura : document.createElement("td"),
        gordura : document.createElement("td"),
        imc: document.createElement("td")
    }
   
   
    var botaoForm = document.querySelector('#adicionar-paciente');
    botaoForm.addEventListener('click',function(e){
        e.preventDefault();
        createElements(p);
      form.reset();
        
    })

})();
   
