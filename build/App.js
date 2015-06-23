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
var PartyList_1 = require('PartyList');
var PartyAdder_1 = require('PartyAdder');
var router_1 = require('angular2/router');
var App = (function () {
    function App() {
    }
    App = __decorate([
        router_1.RouteConfig([
            { path: '/', as: 'home', component: PartyList_1.PartyList },
            { path: '/add', as: 'add', component: PartyAdder_1.PartyAdder }
        ]),
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            directives: [router_1.RouterOutlet, router_1.RouterLink],
            template: "\n\t\t<a router-link=\"add\">Tilf\u00F8j</a> - \n\t\t<a router-link=\"home\">Oversigt</a>\n\t\t<br/><hr/>\n\t\t<router-outlet></router-outlet>\n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=App.js.map