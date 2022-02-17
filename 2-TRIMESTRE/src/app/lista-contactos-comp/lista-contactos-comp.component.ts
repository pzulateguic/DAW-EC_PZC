import { Component, OnInit } from '@angular/core';
import { Contacto } from '../models/contacto';

@Component({
  selector: 'app-lista-contactos-comp',
  templateUrl: './lista-contactos-comp.component.html',
  styleUrls: ['./lista-contactos-comp.component.css']
})
export class ListaContactosCompComponent implements OnInit {
  public contactos : Array<Contacto>

  constructor() { 
    this.contactos = [
      new Contacto('../../assets/img/user.png','Pedro'),
      new Contacto('../../assets/img/user.png','Juanma'),
      new Contacto('../../assets/img/user.png','Antonio'),
      
      
      
      
      
      

    ]
  }

  ngOnInit(): void {
  }

}
