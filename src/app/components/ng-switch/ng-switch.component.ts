import { Component } from '@angular/core';

@Component({
	selector: 'app-ng-switch',
	templateUrl: 'ng-switch.component.html'
})

export class NgSwitchComponent {
	alertType: string = 'none';

	options: Object[] = [
		{ value: 'primary', description: 'Primaria' },
		{ value: 'secondary', description: 'Secundaria' },
		{ value: 'success', description: 'Éxito' },
		{ value: 'danger', description: 'Error' },
		{ value: 'warning', description: 'Advertencia' },
		{ value: 'info', description: 'Información' },
		{ value: 'light', description: 'Clara' },
		{ value: 'dark', description: 'Oscura' },
		{ value: 'none', description: 'Ninguna' }
	];

	constructor() {}

	changeAlertType( alertTypeSelected: string ): void {
		this.alertType = alertTypeSelected;
	}
}