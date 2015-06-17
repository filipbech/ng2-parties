import { Component, View } from 'angular2/angular2';
import { PartyList } from 'PartyList';
import { PartyAdder } from 'PartyAdder';


@Component({
	selector:'my-app'
})
@View({
	directives: [PartyList, PartyAdder],
	template: `
		<party-list></party-list>
		<party-adder></party-adder>
		`
})
export class App {
	
	constructor() {
		
	}
}
