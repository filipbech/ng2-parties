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
var PartyService_1 = require('PartyService');
var PartyList = (function () {
    function PartyList(parties) {
        this.parties = parties.getParties();
    }
    PartyList.prototype.remoteParty = function (i) {
        this.parties.splice(i, 1);
    };
    PartyList = __decorate([
        angular2_1.Component({
            selector: 'party-list'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, angular2_1.NgIf],
            template: "\n\t\t<ul *ng-if=\"parties.length\">\n\t\t\t<li *ng-for=\"#party of parties; #i = index\"><button (click)=\"remoteParty(i)\">x</button> {{party}} </li>\n\t\t</ul>\n\t\t<div *ng-if=\"!parties.length\">Listen er tom</div>\n\t"
        }), 
        __metadata('design:paramtypes', [PartyService_1.PartyService])
    ], PartyList);
    return PartyList;
})();
exports.PartyList = PartyList;
//# sourceMappingURL=PartyList.js.map