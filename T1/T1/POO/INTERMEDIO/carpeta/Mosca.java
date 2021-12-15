package carpeta;

import carpeta.*;

public class Mosca extends Insecto implements Volador {


    public Mosca(String name){
        super(name, 100, 20);
    }

    public void volar(){
        System.out.println("Estoy volando maik");
    }

    public void atack(Insecto insecto){
        System.out.println(Hormiga()+" Realiza un ataque mortal "+this.life-80%);
    }


    /*
    public void descansar(Insecto insecto){
        System.out.println(Hormiga()+" Ha usado descanso"+this.life+20%);
    }

    @Override
    public void greeting(){
        System.out.println("ZOMMM, ZOMMM");
    } */
}
