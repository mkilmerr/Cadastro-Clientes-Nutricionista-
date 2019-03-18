

var inputFiltrar = document.querySelector("#filtrar-tabela");

inputFiltrar.addEventListener('input',function(){
    
    var pacientes = document.querySelectorAll('.paciente');

    if(this.value.length>0){
    for(var i =0;i<pacientes.length;i++){
        var paciente = pacientes[i];
        var nomes = paciente.querySelector('.info-nome').textContent;
        var express = new RegExp(this.value,"i");

        if(express.test(nomes)){
            paciente.classList.remove('ocultar');
           
        }else{
            paciente.classList.add('ocultar');
           

        }
    }
}else{
    for(var i =0;i<pacientes.length;i++){
        var paciente = pacientes[i];
        paciente.classList.remove('ocultar');
    }
}
})
