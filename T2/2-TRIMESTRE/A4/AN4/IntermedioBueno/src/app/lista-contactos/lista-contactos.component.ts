import { Component, Input, OnInit } from '@angular/core';
import { Contactos } from 'src/app/models/Contactos';

@Component({
  selector: 'app-lista',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {
  
  /* public contactos: Array<any> */
  @Input() public nombre: String;
  @Input() public contactos: Contactos[];

  constructor() {
    this.nombre = ""; 
    this.contactos = [
      new Contactos("contacto1", "../assets/contacto1.jpg"),
      new Contactos("contacto2", "../assets/contacto2.jpeg"),
      new Contactos("contacto3", "../assets/contacto3.jpg"),
      new Contactos("contacto4", "../assets/contacto4.jpg"),
      new Contactos("contacto5", "../assets/contacto5.png"),
      new Contactos("contacto6", "../assets/contacto6.jpg"),
      new Contactos("contacto7", "../assets/contacto7.jpg"),
      new Contactos("contacto8", "../assets/contacto8.png"),
    ]
  }

  ngOnInit(): void {
  }

  seleccionar(event: any){
    console.log(event);
  }

  borrarContacto(nombre: String){
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i] !=undefined && this.contactos[i].nombre == nombre)
      delete this.contactos[i];
      
    }
  }
}
