import { Component, } from '@angular/core';

@Component({
	selector: 'app-css',
	template: `
		<p>Párrafo dentro del css.component</p>
	`,
	styles: [
		`p {color:red}`
	]
})

export class CssComponent {
	constructor() {}
}