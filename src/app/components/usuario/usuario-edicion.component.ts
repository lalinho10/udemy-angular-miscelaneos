import { Component }      from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-usuario-edicion',
	templateUrl: 'usuario-edicion.component.html'
})

export class UsuarioEdicionComponent {
	constructor( private route: ActivatedRoute ) {
		this.route.parent.params.subscribe( params => {
			console.log( params );
		});
	}
}
