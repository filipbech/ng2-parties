export class PartyService {
	items: any[];
	getParties() {
		return this.items;
	}

	constructor() {
		this.items = ['Socialdemokratiet', 
			'Radikale', 
			'Konservative', 
			'SF', 
			'Liberal alliance', 
			'Kristendemokraterne', 
			'Dansk Folkeparti', 
			'Venstre', 
			'Enhedslisten', 
			'Alternativet'];
	}
	
}