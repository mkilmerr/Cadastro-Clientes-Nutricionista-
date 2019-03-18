var tabela = document.querySelector('tbody');

tabela.addEventListener('dblclick',function(e){
    console.log(e.target)
    e.target.parentNode.classList.add('remover');
    setTimeout(function(){
        e.target.parentNode.remove();
    },1000);
  
})