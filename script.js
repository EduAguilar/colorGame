let numberOfSquares = 6;
let square = document.querySelectorAll(".square");
let colors
let pickedColor
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let resetBtn=document.getElementById("reset");
let easyButton=document.getElementById("easyBtn");
let hardButton=document.getElementById("hardBtn");
let buttonMode= document.querySelectorAll('.mode')
/*Asigno un color especifico para el valor #colorDisplay */
colorDisplay.textContent=pickedColor

/*Ejecuto mis funciones que se cargaran al inicio*/
init()
/*Inicializo mis funciones*/
function init(){
  reset()
  setUpSquares()
  selectedButton()
}
/*Funcion Asignación de color mediante un array colors + evento al presionar un cuadro */
function setUpSquares(){  
  for (let i = 0; i < colors.length; i++) {
    square[i].style.background=colors[i]
    square[i].addEventListener("click", function() {
      let clickedColor=colors[i]
      //Si el color es correcto
      if(clickedColor === pickedColor){
        messageDisplay.textContent="¡Correcto!"
        document.querySelector("h1").style.backgroundColor =pickedColor
        resetBtn.textContent="¡Vuelve a jugar!"
        changeColors(clickedColor)
      }else{ //Si el color es incorrecto
        this.style.background="#414040"
        messageDisplay.textContent="Intentalo nuevamente"
      } 
    });
  }
}
/*Funcion cambiar de color cuando el presionado es el color correcto */
function changeColors(color){
  for (let i = 0; i < colors.length; i++) {
    square[i].style.backgroundColor=color
  }
}
//Funcion para asignar colores aleatorios desde el array colors
function pickColor(){
  return colors[Math.floor(Math.random()*colors.length)]
}
//Función para generar y devolver un color aleatorio
function randomColor(){
  return "rgb" + "(" 
  + Math.floor(Math.random()*256) + "," 
  + Math.floor(Math.random()*256) + "," 
  + Math.floor(Math.random()*256) + ")"
}
//Función para generar de forma aleatoria el Arreglo de colores usando la función randomColor.
function generateRandomColors(numero){
  let arrayColors = []
  arrayColors.length= numero
  for (let i = 0; i < arrayColors.length; i++) {
    arrayColors[i]=randomColor()
  }
  return arrayColors
}
//Funcion de reinicio del juego
function reset(){
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  message.textContent = '';
  resetBtn.textContent="Nuevos Colores"
  document.querySelector("h1").style.backgroundColor = "steelblue"
  for(let i = 0; i < square.length; i++){    
    if(colors[i]){
      square[i].style.display = "block";
      square[i].style.backgroundColor = colors[i];
    } else {
      square[i].style.display = "none";
    }
  };
} 
//Funcion para escuchar al boton reset
resetBtn.addEventListener("click",function(){
  reset();
})
//Funcion para verificar el modo de juego facil o dificil
/* function selectedButton(){
  hardButton.addEventListener("click",function(){
    buttonMode[1].classList.add("selected")
    buttonMode[0].classList.remove("selected")
    numberOfSquares = 6;
    reset()
  })
  easyButton.addEventListener("click",function(){
    buttonMode[0].classList.add("selected")
    buttonMode[1].classList.remove("selected")
    numberOfSquares = 3;
    reset()
  })
} */
//Funcion para verificar el modo de juego facil o dificil refactorizada
function selectedButton(){
  for (let i = 0; i < buttonMode.length; i++) {
    buttonMode[i].addEventListener("click", function(){
      buttonMode[0].classList.remove("selected")
      buttonMode[1].classList.remove("selected")
      this.classList.add("selected")
      if(this.textContent === "Fácil"){
        numberOfSquares = 3;
      }else{
        numberOfSquares = 6;
      }
      reset();
    })
  }
}