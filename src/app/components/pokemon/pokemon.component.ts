import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

	@Input() pokemon: Pokemon = {
		id: '',
		name: '',
		pic: [],
		types: [],
		fav: false
	};

	constructor(
		private router: Router,
		private PokemonsService: PokemonsService
	) { }

	onShowDetails() {
		this.router.navigate(['pokemons/detail/', this.pokemon.id]);
	}

	onAddFavorites() {
		this.pokemon.fav = !this.pokemon.fav;
		this.PokemonsService.addFavorite(this.pokemon);
	}

}
