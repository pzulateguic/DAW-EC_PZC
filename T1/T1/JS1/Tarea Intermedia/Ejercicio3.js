// con esto creariamos un boton dentro de un div con la funcion

function activar(){
    let div = document.getElementById("nuevo_boton");
    div.innerHTML = "<div><button id='b1'>Nuevo Botón</button></div>";
  }
#nuevo_boton{
border:1px solid red;
}
<><button onclick="activar()" value="menu">Activar</button><div id="nuevo_boton"></div></>