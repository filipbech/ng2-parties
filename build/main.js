var angular2_1 = require('angular2/angular2');
var App_1 = require('App');
var di_1 = require('angular2/di');
var PartyService_1 = require('PartyService');
angular2_1.bootstrap(App_1.App, [di_1.bind(PartyService_1.PartyService).toClass(PartyService_1.PartyService)]);
/*
    this could be written
        bootstrap(App, [PartyService]);
    OR some other bindind methods
*/
//# sourceMappingURL=main.js.map