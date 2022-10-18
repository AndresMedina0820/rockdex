import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

	pokemons: Pokemon[] = [];

	constructor(
		private PokemonsService: PokemonsService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.PokemonsService.myFav$
		.subscribe(data => {
			this.pokemons = data;
		});
	}

	redirectoList() {
		this.router.navigate(['pokemons'])
	}

}
