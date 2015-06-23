import { Component, View } from 'angular2/angular2';
import { PartyList } from 'PartyList';
import { PartyAdder } from 'PartyAdder';
import { RouteConfig, RouterOutlet, RouterLink } from 'angular2/router';


@RouteConfig([
	{ path:'/', as:'home', component:PartyList },
	{ path:'/add' as:'add', component: PartyAdder }
])
@Component({
	selector:'my-app'
})
@View({
	directives: [RouterOutlet, RouterLink],
	template: `
		<a router-link="add">Tilføj</a> - 
		<a router-link="home">Oversigt</a>
		<br/><hr/>
		<router-outlet></router-outlet>
		`
})
export class App {
	
	constructor() {
		
	}
}
