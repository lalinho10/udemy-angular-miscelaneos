import { Component }      from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-usuario-nuevo',
	templateUrl: 'usuario-nuevo.component.html'
})

export class UsuarioNuevoComponent {
	constructor( private route: ActivatedRoute ) {
		this.route.parent.params.subscribe( params => {
			console.log( params );
		});
	}
}
