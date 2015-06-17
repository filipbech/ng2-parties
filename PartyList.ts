import { Component, View, NgFor, NgIf } from 'angular2/angular2';
import { PartyService } from 'PartyService';

@Component({
	selector:'party-list'
})
@View({
	directives: [NgFor, NgIf],
	template:`
		<ul *ng-if="parties.length">
			<li *ng-for="#party of parties; #i = index"><button (click)="remoteParty(i)">x</button> {{party}} </li>
		</ul>
		<div *ng-if="!parties.length">Listen er tom</div>
	`
})
export class PartyList {
	parties: any[];
	constructor(parties: PartyService) {
		this.parties = parties.getParties();
	}
	remoteParty(i) {
		this.parties.splice(i, 1);
	}
}