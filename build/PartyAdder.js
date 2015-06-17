if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var forms_1 = require('angular2/forms');
var PartyService_1 = require('PartyService');
var PartyAdder = (function () {
    function PartyAdder(parties) {
        this.parties = parties.getParties();
    }
    PartyAdder.prototype.submit = function (event, field) {
        event.preventDefault();
        this.parties.push(field.value);
        field.value = '';
        return false;
    };
    PartyAdder = __decorate([
        angular2_1.Component({
            selector: 'party-adder'
        }),
        angular2_1.View({
            directives: [forms_1.formDirectives],
            template: "\n\t\t<form (submit)=\"submit($event, field)\">\n\t\t\t<input type=\"text\" [ng-control]=\"field\" #field/>\n\t\t\t<button>Tilf\u00F8j parti</button>\n\t\t</form>\n\t"
        }), 
        __metadata('design:paramtypes', [PartyService_1.PartyService])
    ], PartyAdder);
    return PartyAdder;
})();
exports.PartyAdder = PartyAdder;
//# sourceMappingURL=PartyAdder.js.map