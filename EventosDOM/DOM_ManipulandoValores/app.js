function separaCaracter(){
    //Selecionar o valor de um  elemento = .value
    let caracter = document.getElementById(`entrada`).value
    console.log(typeof caracter)

    // limpar o campo de input 
    document.getElementById(`entrada`).value = ``

}
//limpar os espaços em braco 
caracter.trim()

switch (caracter){
    case value: 

    case "0" :
    case "1" :
    case "2" :
    case "3" :
    case "4" :
    case "5" :
    case "6" :
    case "7" :
    case "8" :
    case "9" :
        document.getElementById("apenas_numeros").value += caracter;
    break; 

    default:
        document.getElementById("apenas_letas").value += caracter;
    break; 
}