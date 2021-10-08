package POO.BASICO;

public class ejerciciojava {
  
    public class  Vehiculo{
        public String marca ;
        private String motor ;
    
        void constructor (String marca , String motor) {
            this.marca = marca ;
            this.motor = motor ;
        }
        
    }

    public class Coche {

        public Vehiculo vehiculo ;

        void constructor (Vehiculo vehiculo ){
            this.vehiculo = vehiculo ;
        }
    }
}