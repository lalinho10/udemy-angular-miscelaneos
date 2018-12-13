import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './components/home/home.component';
import { UsuarioComponent }     from './components/usuario/usuario.component';

import { USUARIO_ROUTES }       from './components/usuario/usuario.routes';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{
		path: 'usuario/:idUsuario',
		component: UsuarioComponent,
		children: USUARIO_ROUTES
	},
	{ path: '**', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );