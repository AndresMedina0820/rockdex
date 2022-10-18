import { Component, OnInit } from '@angular/core';
import { PokemonData, Pokemon } from 'src/app/models/pokemon.model';
import { PokemonsService } from '../../services/pokemons.service';
import { catchError } from 'rxjs/internal/operators/catchError';

@Component({
	selector: 'app-pokemons',
	templateUrl: './pokemons.component.html',
	styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

	pokemons: Pokemon[] = [];
	pokemonsFav: Pokemon[] = [];
	nextURL = '';
	btnClass: string = "default"
	textContent: string = "VER MÁS"

	constructor(
		private pokemonsService: PokemonsService,
		private PokemonsService: PokemonsService
	) { }

	ngOnInit(): void {
		this.PokemonsService.myFav$
		.subscribe(data => this.pokemonsFav = data);

		this.pokemonsService.get()
		.subscribe((data: any) => {
			this.nextURL = data.next;
			this.resolveUrl(data.results);
		})
	}

	loadMore() {
		this.pokemonsService.get(this.nextURL)
		.subscribe((data: any) => {
			this.nextURL = data.next;
			this.resolveUrl(data.results);
		});
	}

	resolveUrl(results:any) {
		results.map((result: PokemonData) => {
			this.PokemonsService.get(result.url)
			.subscribe((detail: any) => {
				this.pokemons.push({
					id: detail.id,
					name: detail.name,
					pic: detail.sprites.other["official-artwork"].front_default,
					types: detail.types,
					fav: this.pokemonsFav.find(pkm => pkm.id === detail.id) ? true : false
				});
			}),
			catchError(() => {
				return [];
			})
		});
	}

	onSearchPokemon(keywords: string) {
		if (keywords) {
			this.pokemonsService.getByName(keywords)
			.subscribe({
				next: ((data:any) => {
					this.pokemons = data;
				}),
				error: (err) => {
					this.pokemons = []
				}
			});
		} else {
			this.pokemonsService.get()
			.subscribe((data: any) => {
				this.nextURL = data.next;
				this.pokemons = [];
				this.resolveUrl(data.results);
			})
		}
	}

}
