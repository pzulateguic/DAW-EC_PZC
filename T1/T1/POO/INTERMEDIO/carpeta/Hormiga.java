package carpeta;

import carpeta.*;

public class Hormiga extends Insecto {
    
    public Hormiga(){

    }

    public Hormiga(String name){
        super(name, 100, 30);
    }

    public void atacar(Insecto contrincante){
        System.out.println(this.name+" Realiza un ataque mortal a "+contrincante.getName());
        contrincante.life *= 0.2;

    }

    /*
    public void descansar(){
        System.out.println(Hormiga()+" Ha usado descanso"+this.life+20%);
        this.life *= 1.2;
    }

    @Override
    public void greeting(){
        System.out.println("CRUNCH, CRUNCH");
    } */
}

