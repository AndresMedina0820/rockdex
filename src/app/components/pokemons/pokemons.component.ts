import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
	btnClass: string = "default";
	textContent: string = "VER MÁS";
	loading = true
	blur = 'blur';

	@Output() loadingClass = new EventEmitter();

	constructor(
		private pokemonsService: PokemonsService,
	) { }

	ngOnInit(): void {
		this.pokemonsService.myFav$
		.subscribe(favs => this.pokemonsFav = favs);

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
			this.resolveUrl(data.results)
		});
	}

	setLoading() {
		this.loading = false;
		this.loadingClass.emit(true);
		this.blur = '';
	}

	resolveUrl(results:any) {
		results.map((result: PokemonData) => {
			this.pokemonsService.get(result.url)
			.subscribe({
				next: ((detail: any) => {
					this.pokemons.push({
						id: detail.id,
						name: detail.name,
						pic: detail.sprites.other["official-artwork"].front_default,
						types: detail.types,
						fav: this.pokemonsFav.find(pkm => pkm.id === detail.id) ? true : false
					});
				}),
				complete: () => {
					setTimeout(() => {
						this.setLoading();
					}, 3000);
				}
			}),
			catchError(() => {
				return [];
			})
		});
	}

	onSearchPokemon(keywords: string) {
		this.loading = true;
		this.blur = 'blur';
		if (keywords) {
			this.pokemonsService.getByName(keywords)
			.subscribe({
				next: ((data:any) => {
					this.pokemons = data;
					this.setLoading();
				}),
				error: () => {
					this.pokemons = []
					this.setLoading();
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
