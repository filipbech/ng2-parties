import { Component, View } from 'angular2/angular2';
import { Validators, formDirectives, Control } from 'angular2/forms';
import { PartyService } from 'PartyService';

@Component({
	selector:'party-adder'
})
@View({
	directives: [formDirectives],
	template:`
		<form (submit)="submit($event, field)">
			<input type="text" [ng-control]="field" #field/>
			<button>Tilføj parti</button>
		</form>
	`
})
export class PartyAdder {
	field;
	parties;
	constructor(parties: PartyService) {
		this.parties = parties.getParties();
	}

	submit(event,field) {
		event.preventDefault();
		this.parties.push(field.value);
		field.value = '';
		return false;
	}
}