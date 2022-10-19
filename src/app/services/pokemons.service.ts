import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonData } from '../models/pokemon.model';
import { map } from 'rxjs/internal/operators/map';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PokemonsService {

	URL_API = "https://pokeapi.co/api/v2/pokemon";
	private myFavsPokemons: Pokemon[] = [];
	private myFav = new BehaviorSubject<Pokemon[]>([]);
	myFav$ = this.myFav.asObservable();

	private loading = new BehaviorSubject(false);
	loading$ = this.loading.asObservable();


	constructor(
		private http: HttpClient
	) {
		this.getFavorites();
	}

	get(url: string = this.URL_API) {
		return this.http.get<PokemonData>(url);
	}

	getByName(name: string) {
		return this.http.get(`${this.URL_API}/${name}`)
		.pipe(
			map((data:any) => {
				return [{
					id: data.id,
					name: data.name,
					pic: data.sprites.other["official-artwork"].front_default,
					types: data.types,
					fav: false
				}];
			})
		);
	}

	getDetail(id: string) {
		return this.http.get<PokemonData>(`${this.URL_API}/${id}`);
	}

	addFavorite(pokemon: Pokemon) {
		if (pokemon) {
			if (this.myFavsPokemons.find(pkm => pkm.id === pokemon.id)) {
				const index = this.myFavsPokemons.findIndex(pkm => pkm.id === pokemon.id);
				this.myFavsPokemons.splice(index, 1);
			} else {
				this.myFavsPokemons.push(pokemon);
			}
			localStorage.setItem("pokemonsList", JSON.stringify(this.myFavsPokemons));
			this.myFav.next(this.myFavsPokemons);
		}
	}

	getFavorites() {
		const dataString: string | null = localStorage.getItem("pokemonsList");
		if (dataString) {
			this.myFavsPokemons = JSON.parse(dataString);
			this.myFav.next(this.myFavsPokemons);
		}
	}

}
