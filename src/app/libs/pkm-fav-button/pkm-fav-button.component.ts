import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-pkm-fav-button',
	templateUrl: './pkm-fav-button.component.html',
	styleUrls: ['./pkm-fav-button.component.scss']
})
export class PkmFavButtonComponent {

	@Input() checked: boolean = false;

	constructor() { }
}
