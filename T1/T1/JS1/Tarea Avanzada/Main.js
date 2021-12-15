
var nombre = "jesus rodriguez";
var altura = 170;

var juntar = nombre + " " + altura;

//document.write(juntar);

var cositas = document.getElementById("cositas")

cositas.innerHTML = `
    <h2>hola soy --> ${nombre}</h2>
    <h3>y mido --> ${altura}</h3> 
`;

if(altura >= 160) {
    cositas.innerHTML = '<h1>Eres muy alto</h1>'
} else{
    cositas.innerHTML = '<h1>Eres muy bajito</h1>'
}

for(var i = 1990; i<=1992; i++){
    //instrucciones
    cositas.innerHTML += "<h2>Estamos en el año</h2>" + i;

}

function mostrarNombre(nombre, altura){
    var datos = document.getElementById("cositas");

    cositas.innerHTML = `
        <h2>Mi nombre es --> ${nombre}</h2>
        <h3>y mido --> ${altura}</h3>

    
    `;
}

mostrarNombre("Juan juanito", 155);