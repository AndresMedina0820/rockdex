import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pokemon, PokemonDetail } from 'src/app/models/pokemon.model';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
	selector: 'app-pokemon-detail',
	templateUrl: './pokemon-detail.component.html',
	styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

	pokemonId: string | null = null;
	pokemonsFav: Pokemon[] = []
	pokemonDetail: PokemonDetail = {
		id: '',
		name: '',
		pic: [],
		types: [],
		description: '',
		height: 0,
		weight: 0,
		fav: false
	};
	btnClass: string = "primary"
	textContent: string = "AGREGAR A FAVORITOS"

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pokemonsService: PokemonsService,
		private PokemonsService: PokemonsService
	) { }

	ngOnInit(): void {
		this.PokemonsService.myFav$
		.subscribe(data => {
			this.pokemonsFav = data;
		});

		this.route.paramMap
		.pipe(
			switchMap(params => {
				this.pokemonId = params.get('id');
				if (this.pokemonId) {
					return this.pokemonsService.getDetail(this.pokemonId);
				}
				return []
			}),
			switchMap((detail:any) => {
				if (detail) {
					this.pokemonDetail = {
						id: detail?.id,
						name: detail?.name,
						pic: detail?.sprites?.other["official-artwork"]?.front_default,
						types: detail?.types,
						description: '',
						height: detail?.height,
						weight: detail?.weight,
						fav: this.pokemonsFav.find(pkm => pkm.id === detail.id) ? true : false
					}
					return this.pokemonsService.get(detail.species.url);
				}
				return []
			}),
		)
		.subscribe((species:any) => {
			if (species) {
				const FILTER_DESCRIPTION = species?.flavor_text_entries.find((item: { language: { name: string; }; }) => item.language.name === 'es');
				this.pokemonDetail.description = FILTER_DESCRIPTION?.flavor_text;
				this.setBtnClass();
				this.setTextContent();
			}
		});
	}

	setBtnClass() {
		this.btnClass = this.pokemonDetail.fav ? "default" : "primary"
	}

	setTextContent() {
		this.textContent = this.pokemonDetail.fav ? "QUITAR DE FAVORITOS" : "AGREGAR A FAVORITOS";
	}


	redirectoList() {
		this.router.navigate(['pokemons'])
	}

	onAddFavorites() {
		this.pokemonDetail.fav = !this.pokemonDetail.fav;
		this.setBtnClass();
		this.setTextContent();
		this.PokemonsService.addFavorite(this.pokemonDetail);
	}
}
