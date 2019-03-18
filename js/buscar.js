var btnBuscar = document.querySelector("#buscar-pacientes");

btnBuscar.addEventListener('click',function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load',function() {
        console.log(xhr.responseText);
        var responde = JSON.parse(xhr.responseText);
       responde.forEach(function(e){
        crAjax(e);
        console.log(xhr.status)
       
       });
    })
    xhr.send();
    
})

