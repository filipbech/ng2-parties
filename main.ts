import { bootstrap } from 'angular2/angular2';
import { App } from 'App';
import { bind } from 'angular2/di';
import { PartyService } from 'PartyService';

bootstrap(App, [bind(PartyService).toClass(PartyService)]);

/* 
	this could be written 
		bootstrap(App, [PartyService]);
	OR some other bindind methods
*/
