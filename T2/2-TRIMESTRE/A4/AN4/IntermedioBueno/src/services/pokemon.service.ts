import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';


@Injectable()
export class PokemonService {

    public url: string;

    constructor (private _http: HttpClient){
        this.url = Global.url;
    }

    getPokemon():Observable<any>{
        return this._http.get(this.url+'type/10')
    }



}