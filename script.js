let numberOfSquares = 3;
let square = document.querySelectorAll(".square");
let colors = generateRandomColors(numberOfSquares);/* = ["rgb(240, 14, 128)","rgb(120, 32, 80)", "rgb(252, 75,98)", "rgb(26,54,69)", "rgb(88,179,210)", "rgb(43,71,230)"]; */
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let resetBtn=document.getElementById("reset")

/*Asigno un color especifico para el valor #colorDisplay */
colorDisplay.textContent=pickedColor

/*Ejecuto mis funciones que se cargaran al inicio*/
init()

/*Inicializo mis funciones*/
function init(){
  setUpSquares()
}

/*Función Asignación de color mediante un array colors*/
/* function setColorByArray(){
  for (let i = 0; i < square.length; i++) {
    if(colors[i]){
      square[i].style.background=colors[i]
      square[i].style.display="block"
    }else{
      square[i].style.display="none"
    }
  }
} */

/*Funcion Asignación de color mediante un array colors + evento al presionar un cuadro */
function setUpSquares(){  
  for (let i = 0; i < colors.length; i++) {
    square[i].style.background=colors[i]
    square[i].addEventListener("click", function() {
      let clickedColor=colors[i]
      //Si el color es correcto
      if(clickedColor == pickedColor){
        messageDisplay.textContent="¡Correcto!"
        document.querySelector("h1").style.backgroundColor =pickedColor
        resetBtn.textContent="¡Vuelve a jugar!"
        changeColors(clickedColor)
      }else{ //Si el color es incorrecto
        this.style.background="#232323"
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