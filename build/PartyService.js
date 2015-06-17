var PartyService = (function () {
    function PartyService() {
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
    PartyService.prototype.getParties = function () {
        return this.items;
    };
    return PartyService;
})();
exports.PartyService = PartyService;
//# sourceMappingURL=PartyService.js.map