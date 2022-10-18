import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	favs_count: number = 0;
	logo = "../../../assets/images/logo.svg";

	constructor(
		private PokemonsService: PokemonsService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.PokemonsService.myFav$
		.subscribe(favs => {
			this.favs_count = favs.length;
		})
	}

	onFavList() {
		this.router.navigate(["/pokemons/favorites"])
	}

}
