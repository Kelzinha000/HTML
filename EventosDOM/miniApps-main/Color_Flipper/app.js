const colors = ["green", "red", "blue", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById ('btn')
const color = document.querySelector('.color')


btn.addEventListener('click',function(){
// console.log(document.body)
const numero = getRandomNumber()
document.body.style.backgroundColor = colors[numero]
color.textContent= colors[numero]

})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}
