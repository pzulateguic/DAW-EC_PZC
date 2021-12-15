package carpeta;

import carpeta.*;


public class Bugattack {
    
    public void start(){
        System.out.println("Comienzo del Combate");
        Insecto Hormiga = new Hormiga("Hormiguita");
        Insecto Abeja = new Abeja("Maya");
        Insecto Mosca = new Mosca("Pejiguera");

        Hormiga.atacar(Mosca);
    }
}
