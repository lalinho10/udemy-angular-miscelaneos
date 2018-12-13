import { Routes }                  from '@angular/router';

import { UsuarioNuevoComponent }   from './usuario-nuevo.component'
import { UsuarioEdicionComponent } from './usuario-edicion.component'
import { UsuarioDetalleComponent } from './usuario-detalle.component'

export const USUARIO_ROUTES: Routes = [
	{ path: 'nuevo', component: UsuarioNuevoComponent },
	{ path: 'edicion', component: UsuarioEdicionComponent },
	{ path: 'detalle', component: UsuarioDetalleComponent },
	{ path: '**', redirectTo: 'nuevo' }
];