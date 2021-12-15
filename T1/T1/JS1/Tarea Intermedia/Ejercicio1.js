
class Ejercicio1 {

    constructor(primero, segundo){
        this.uno = primero;
        this.dos = segundo;
        this.tres = "Hola a todos"
    }

    MetodoUno(){
        return this.uno;
    }

    MetodoDos(parametroUno, parametroDos){
        document.write(
            "El parametro UNO es: " + parametroUno + " " + 
            "El parametro DOS es: " + parametroDos)

    }

}