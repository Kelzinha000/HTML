function verificarMulta(){
    const velocidade = document.querySelector("#velocidade").value
    const resultado = document.getElementById("resultado")

    if(velocidade <=60){ 
        resultado.innerHTML = "Você não foi mutado!" 
        //         Dom insira o valor na minha div
        // resultado é uma div 
        resultado.className = "verde"
    }else{
 resultado.innerHTML = "Você foi mutado!"
 resultado.className = "vermelho"
    }

}