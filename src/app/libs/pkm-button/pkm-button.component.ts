import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-pkm-button',
	templateUrl: './pkm-button.component.html',
	styleUrls: ['./pkm-button.component.scss']
})
export class PkmButtonComponent {

	@Input() pkmType: string = 'default'
	@Input() text: string = 'VER MÁS'

	constructor() { }
}
