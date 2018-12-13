import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';

import { ResaltadoDirective }      from './directives/resaltado.directive';

import { AppComponent }            from './app.component';
import { CssComponent }            from './components/css/css.component';
import { HomeComponent }           from './components/home/home.component';
import { NavbarComponent }         from './components/navbar/navbar.component';
import { NgClassComponent }        from './components/ng-class/ng-class.component';
import { NgStyleComponent }        from './components/ng-style/ng-style.component';
import { NgSwitchComponent }       from './components/ng-switch/ng-switch.component';
import { UsuarioComponent }        from './components/usuario/usuario.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioNuevoComponent }   from './components/usuario/usuario-nuevo.component';
import { UsuarioEdicionComponent}  from './components/usuario/usuario-edicion.component';

import { APP_ROUTING }             from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		CssComponent,
		HomeComponent,
		NavbarComponent,
		NgClassComponent,
		NgStyleComponent,
		NgSwitchComponent,
		ResaltadoDirective,
		UsuarioComponent,
		UsuarioDetalleComponent,
		UsuarioNuevoComponent,
		UsuarioEdicionComponent
	],
	imports: [
		BrowserModule,
		APP_ROUTING
	],
	providers: [],
	bootstrap: [ AppComponent ]
})

export class AppModule {}