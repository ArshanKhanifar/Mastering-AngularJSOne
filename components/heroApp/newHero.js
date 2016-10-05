angular.module('heroApp')
    .component('newHero',{
        templateUrl:'new-hero.html',
        scope:{
            onNew: '&'
        },
        controller:NewHeroController
    })
function NewHeroController (){
    var self = this;
    var newHeroObject = {}
    self.addHero = function(newHeroObject){
        if(NewHeroController.name.length && newHeroObject.location.length){
            alert('please insert both name and location');
            return
        }
    }
}