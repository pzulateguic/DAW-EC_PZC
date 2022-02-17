import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Contacto } from '../models/contacto';

@Component({
  selector: 'app-contactos-comp',
  templateUrl: './contactos-comp.component.html',
  styleUrls: ['./contactos-comp.component.css']
})
export class ContactosCompComponent implements OnInit {
  @Input() contacto : Contacto | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
