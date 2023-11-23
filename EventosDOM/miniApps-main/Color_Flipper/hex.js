const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById ('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){  // atribuir uma comportamento, que recebe 2 parâmetros, o evento dentro de '' e o comportamento dento de {}
 let hexColor = '#';

   for(let i = 0; i < 6; i++){
    // console.log(hex[getRandomNumber()])

    hexColor += hex[getRandomNumber()]

   }
   document.body.style.backgroundColor = hexColor
    color.textContent = hexColor


   console.log(hexColor)
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}
