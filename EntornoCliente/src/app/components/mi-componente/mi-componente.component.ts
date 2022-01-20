import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    template: `
        <h1>Hola mundo, soy MI COMPONENTE</h1>
        <p>Este es mi primer componente</p>
    `
})
export class MiComponente{
    constructor(){
        console.log("Componente mi-componente ha sido cargado!!!");
    }
}