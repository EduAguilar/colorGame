let colors = ["rgb(240, 14, 128)","rgb(120, 32, 80)", "rgb(252, 75,98)", "rgb(26,54,69)", "rgb(88,179,210)", "rgb(43,71,230)"];
let square = document.querySelectorAll(".square");

/*Ejecuto mis funciones que se cargaran al inicio*/
init()

/*Inicializo mis funciones*/
function init(){
  setColorByArray()
}

/*Función Asignación de color mediante un array colors*/
function setColorByArray(){
  for (var i = 0; i < square.length; i++) {
    if(colors[i]){
      square[i].style.background=colors[i]
      square[i].style.display="block"
    }else{
      square[i].style.display="none"
    }
  }
}