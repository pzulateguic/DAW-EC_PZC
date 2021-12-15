package carpeta;

import carpeta.*;

abstract public class Insecto {
    
    String name;
    int life;
    int power;

    public Insecto(String name, int life, int power){
        this.name = name;
        this.life = life;
        this.power = power;
    }
    
    public String getName(){
        return this.name;
    }

    public int getlife(){
        return this.life;
    }
    public abstract void atacar(Insecto insecto);

    public void greeting(){
        System.out.println("Aqui "+name+" ,"+" Listo para la batalla señor!");
    }

    abstract public void greeting();
    


}
