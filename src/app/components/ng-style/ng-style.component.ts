import { Component, } from '@angular/core';

@Component({
	selector: 'app-ng-style',
	template: `
		<button type="button" class="btn btn-primary" (click)="tamano = tamano - 5">
			<i class="fa fa-minus"></i>
		</button>&nbsp;
		<button type="button" class="btn btn-primary" (click)="tamano = tamano + 5">
			<i class="fa fa-plus"></i>
		</button>
		<div [style.fontSize.px]="tamano">Hola mundo</div>
	`
})

export class NgStyleComponent {
	tamano: number = 10;

	constructor() {}
}