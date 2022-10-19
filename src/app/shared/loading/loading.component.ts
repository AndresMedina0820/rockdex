import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

	list = ["../../../assets/images/001-pokeball.png",
			"../../../assets/images/002-psyduck.png",
			"../../../assets/images/003-pikachu.png",
			"../../../assets/images/004-meowth.png",
			"../../../assets/images/005-snorlax.png",
			"../../../assets/images/006-charmander.png"];

	imgLoading = "";

	constructor() {
		this.imgLoading = this.list[Math.floor(Math.random() * this.list.length)];
	}

}
