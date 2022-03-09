import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  providers: [PokemonService],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public pokemons: Array<any>

  constructor(private _PokemonService : PokemonService ) { 
    this.pokemons = []
  }

  ngOnInit(): void {
    this._PokemonService.getPokemon().subscribe(
      response => {
        for (var i = 0; i < response.pokemon.length; i++) {
          console.log(response.pokemon[i].pokemon.name);
          console.log(response.pokemon[i].pokemon.url);
          this.pokemons[i] = new Pokemon(
            response.pokemon[i].pokemon.name,
            response.pokemon[i].pokemon.url
          );
        }
      },
      error => { 
        console.log(error);
      }
    );
  }

  salir(){}
}
