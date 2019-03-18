function verificarValores(peso,altura,p1,a1,imc){
    if((peso<=0 || peso>150) && (altura<=0 || altura>3)){
        imc.textContent = "Peso e Altura inválidos!";
        p1.classList.add('height-wrong');
        a1.classList.add("height-wrong");
        
    }
    else if(peso<=0 || peso>150){
      imc.textContent = "Peso Inválido";
        p1.classList.add('height-wrong');
    }else if(altura<=0 || altura>3){
        a1.classList.add('height-wrong');
        imc.textContent = "Altura Inválida";
    }else{
        imc = peso/(altura*altura).toFixed;
    }
}