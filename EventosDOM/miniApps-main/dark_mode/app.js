function darkMode(){
const pagina = document.body

pagina.classList.toggle("dark-mode") // toggle adicionar e remover classes ao clicar 

const isDarkMode = document.body.classList.contains("dark-mode")

// const textoBotao = isDarkMode ? "Modo Escuro" : "Modo Claro";
document.querySelector("button").textContent = textoBotao;
const botao= document.querySelector(button)

if(isDarkMode == true){
      botao.textContent= "Modo Claro"
}else{
      botao.textContent = "Modo escuro"
}

} 