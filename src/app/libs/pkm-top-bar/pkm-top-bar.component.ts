import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-pkm-top-bar',
	templateUrl: './pkm-top-bar.component.html',
	styleUrls: ['./pkm-top-bar.component.scss']
})
export class PkmTopBarComponent {

	logoDefault = './../../../assets/images/logo.svg';
	@Input() logo: string = ''

	constructor() { }
}
