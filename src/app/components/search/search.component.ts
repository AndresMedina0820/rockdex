import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent {

	btnClass: string = "primary";
	keywords: string = "";
	text: string = "BUSCAR"
	@Output() searchPokemon = new EventEmitter<string>();

	constructor() { }

	onSearch() {
		this.searchPokemon.emit(this.keywords);
	}
}
