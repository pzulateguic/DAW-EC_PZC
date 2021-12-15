package carpeta;

import carpeta.*;

public class Abeja extends Insecto implements Volador {
    
    public Abeja(String name){
        super(name, 100, 50);
    }

    public void volar(){
        System.out.println("Estoy volando maik");
    }

    public void atacar(Insecto insecto){
        System.out.println(Hormiga()+" Realiza un ataque mortal a "+this.life-80);
    }










    
    /*public void descansar(Insecto insecto){
        System.out.println(Hormiga()+" Ha usado descanso"+this.life+20%);
    }*/

    /*@Override
    public void greeting(){
        System.out.println("ZUMM, ZUMM");
    }*/
}
