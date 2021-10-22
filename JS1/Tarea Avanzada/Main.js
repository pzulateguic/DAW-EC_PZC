
var nombre = "Pablo";
var altura = 175;

var juntar = nombre + " " + altura;

//document.write(juntar);

var info = document.getElementById("info")

info.innerHTML = `
    <h2>hola soy --> ${nombre}</h2>
    <h3>y mido --> ${altura}</h3> 
`;

if(altura >= 160) {
    info.innerHTML = '<h1>Eres muy alto</h1>'
} else{
    info.innerHTML = '<h1>Eres muy bajito</h1>'
}

for(var i = 1990; i<=1992; i++){
    //instrucciones
    info.innerHTML += "<h2>Estamos en el año</h2>" + i;

}

function mostrarNombre(nombre, altura){
    var datos = document.getElementById("info");

    info.innerHTML = `
        <h2>Mi nombre es --> ${nombre}</h2>
        <h3>y mido --> ${altura}</h3>

    
    `;
}

mostrarNombre("Pablo", 175);