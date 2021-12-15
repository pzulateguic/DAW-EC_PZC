


class clase2ejer1.js extends Ejercicio1{
    constructor(uno, dos, cuarto){
        super (uno, dos);
        this.cuatro = cuarto;
    }
}

var ObjetoTres = new clase2ejer1("Jesus", "Rodriguez", 27);
document.write(ObjetoTres.cuatro);