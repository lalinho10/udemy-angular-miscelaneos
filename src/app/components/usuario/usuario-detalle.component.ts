import { Component }      from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-usuario-detalle',
	templateUrl: 'usuario-detalle.component.html'
})

export class UsuarioDetalleComponent {
	constructor( private route: ActivatedRoute ) {
		this.route.parent.params.subscribe( params => {
			console.log( params );
		});
	}
}
