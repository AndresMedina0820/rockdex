import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-empty-state',
	templateUrl: './empty-state.component.html',
	styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {

	img_empty = "../../../assets/emptyStates/empty-state-pikachu.png";

	constructor() { }

}
