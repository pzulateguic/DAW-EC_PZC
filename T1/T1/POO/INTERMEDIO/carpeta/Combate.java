package carpeta;

import carpeta.*;

public class Combate {
    
    int rondas;
    Insecto insecto1;
    Insecto insecto2;

    public Combate(Insecto insecto1, Insecto insecto2){
        this(insecto1, insecto2, 5);
    }

    public Combate(Insecto insecto1, Insecto insecto2, int rondas){
        this.rondas = rondas;
        this.insecto1 = insecto1;
        this.insecto2 = insecto2;
    }

    public void startCombate(int totalrondas){
        this.rondas = totalrondas;
    }

    public Insecto checkWinner(){
        if(insecto1.getlife() > insecto2.getlife()){
            return insecto1;
        }else if(insecto1.getlife() < insecto2.getlife()){
            return insecto2;
        }
        return null;
    }

    public boolean nextRound(){
        if(this.rondas > 0){
            return false;
        }
        this.rondas -= 1;
        if(Math.random() > 0.5){
            insecto1.atacar(insecto2);
            return insecto2.getlife() > 0;
        }
        insecto2.atacar(insecto1);
        return insecto1.getlife() > 0;
    }
}
