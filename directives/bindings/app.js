(function(){
    angular
    .module("myApp",[])
    .controller('Controller',['$scope',function($scope){
        $scope.name = 'Arshan';
        $scope.contact = {
            name: "Arshan",
            number: 2899523309
        }
        this.name = 'Arshan'
    }])
    .directive('greeter', function() {
        return {
            restrict:'E',
            scope:{
                name : '@'
            },
            template: '<p>heyy my name is {{name}}</p>'
        };
    })
    .directive('contactView',function(){
        return {
            restrict:'E',
            scope:{
                contactInfo : '='
            },
            template:'<label>change the contact name here: </label> <br>'+
                        '<input ng-model="contactInfo.name">' + 
                        '<p> name : {{contactInfo.name}}</p>' +
                        '<p> number : {{contactInfo.number}}</p>'
        }
    })
    .directive('contactViewOne',function(){
        return {
            restrict:'E',
            scope:{
                contactName : '<',
                contactNumber : '<'
            },
            template:'<label>change the contact name here: </label> <br>'+
                        '<input ng-model="contactName">' + 
                        '<p> name : {{contactName}}</p>' +
                        '<p> number : {{contactNumber}}</p>'
        }
    })
})();

// CHALLENGE: ADD THE ABILITY TO TOGGLE THE TEMPLATE TO SHOW EITHER NAME OR ADDRESS.
// U NEED $compile FOR THAT! SO NEXT LEVEL! 