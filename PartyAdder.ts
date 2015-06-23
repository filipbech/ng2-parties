import { Component, View } from 'angular2/angular2';
import { Validators, formDirectives } from 'angular2/forms';
import { PartyService } from 'PartyService';

@Component({
	selector:'party-adder'
})
@View({
	directives: [formDirectives],
	template:`
		<form (submit)="submit($event)">
			<input type="text" [(ng-model)]="field" />
			<button>Tilføj parti</button>
		</form>
	`
})
export class PartyAdder {
	field;
	parties;
	constructor(parties: PartyService) {
		this.parties = parties.getParties();

		this.field = 'Partinavn...';
	}

	submit(event) {
		event.preventDefault();
		this.parties.push(this.field);
		this.field = '';
		return false;
	}
}