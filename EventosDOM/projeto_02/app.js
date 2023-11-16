const inNome = document.getElementById('inNome')
const rbMasculino = document.getElementById('rbMasculino')
const rbFeminino = document.getElementById('rbFeminino')
const inAltura = document.getElementById('inAltura')
const outResposta = document.getElementById('outResposta')

const btnCalcular = document.getElementById('btnCalcular')
const btnLimpar = document.getElementById('btnLimpar')

btnCalcular.addEventListener('click',function(){

    let nome = inNome.value  // passando valor
    let masculino = rbMasculino.checked
    let feminino = rbFeminino.checked
    let altura = Number(inAltura.value )
    
    //console.log(nome,masculino,feminino,altura)

    if(nome === '' || (masculino === false && feminino === false)){
    alert('Por favor, informe seu nome')
    inNome.focus()
    return
    }

    if(altura <= 0 || isNaN(altura)){
        alert('Por favor, sua altura')
    inAltura.focus()
    return
    }

    let peso 
    if(masculino){
      peso = 22 * Math.pow(altura,2)
    
    }else if(feminino){
        peso = 21 * Math.po2 (altura,2)
    }
    console.log(peso, nome)

    // atribuir texto de 3 maneiras 
    // innerHTML
    // innerText 
    // TextContent
    outResposta.textContent = `${nome} Seu peso ideal é: ${peso.toFixed(2)}kg`
})

btnLimpar.addEventListener('click', function(){
 location.reload();
})


