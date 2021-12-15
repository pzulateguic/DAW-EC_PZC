package BASICO;

public class ejerciciojava {
    
    public class Equipo {
        Entrenador entrenador;
        Jugador jugador;
        public void equipo(Entrenador entrenador, Jugador jugador) {
            this.entrenador = entrenador;
            this.jugador = jugador;
        }
    }
    public class Entrenador {
        String animar;
        String hacerCambios;
        public void entrenador(String animar, String hacerCambios) {
            this.animar = animar;
            this.hacerCambios = hacerCambios;
        }
    }
    public class Jugador {
        String jugar;
        String encestar;
        public void jugador(String jugar, String encestar) {
            this.jugar = jugar;
            this.encestar = encestar;
        }
    }

}