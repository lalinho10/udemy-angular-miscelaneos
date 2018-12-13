import { Component } from '@angular/core';

@Component({
	selector: 'app-ng-class',
	templateUrl: 'ng-class.component.html'
})

export class NgClassComponent {
	loading: boolean = false;
	alertType: string = 'alert-danger';

	propiedades: Object = {
		danger: false
	}

	constructor() {}

	asynProcess(): void {
		this.loading = true;
		setTimeout( () => this.loading = false, 3000 );
	}
}