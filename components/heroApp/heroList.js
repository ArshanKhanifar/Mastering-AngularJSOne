function HeroListController() {
    var ctrl = this;
    // This would be loaded by $http etc.
    ctrl.list = [
        {
            name: 'Superman',
            location: ''
        },
        {
            name: 'Batman',
            location: 'Wayne Manor'
        }
    ];

    ctrl.updateHero = function(hero, prop, value) {
        hero[prop] = value;
    };

    ctrl.deleteHero = function(hero) {
        var idx = ctrl.list.indexOf(hero);
        if (idx >= 0) {
            ctrl.list.splice(idx, 1);
        }
    };

    ctrl.addHero = function(hero){
        ctrl.list.push(hero);
    }

}

angular.module('heroApp').component('heroList', {
    templateUrl: 'heroList.html',
    controller: HeroListController
});