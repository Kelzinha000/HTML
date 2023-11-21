

const value = document.getElementById('value') // seleciona o elemento que vai sofrer uma ação ou comportamento
const btns = document.querySelectorAll('.btn')

let count = 0

// console.log(value)
// console.log(btns)

btns.forEach(function(btn){ // forEach listar elementos

btn.addEventListener('click',function(){
   const style = event.currentTarget.classList
   console.log(style)
   if(style.contains('decrease')){
     count--
    
   }else if(style.contains ('reset')){
   count = 0;
   }else if(style.contains('increase')){
     count++;
   }
   value.textContent = count



   if(count === 30){
    value.style.color = 
    value.className = 'gradiente'
  
   }

if(count > 0){
  // ação 
  value.style.color = '#0f0'
  
}else if (count < 0){
  value.style.color = '#f00'
}else if (count === 0){
  value.style.color = '#00f'
}


})

})