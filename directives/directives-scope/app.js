(angular
    .module("myApp",[])
    .controller('Controller',['$scope',function($scope){
        $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
        $scope.igor = { name: 'Igor', address: '123 Somewhere' };
    }])
    .directive('myCustomer', function() {
        return {
            restrict:'E',
            scope:{
                customerInfo : '=info'
            },
            templateUrl: 'my-customer-iso.html'
        };
    })
)();

// CHALLENGE: ADD THE ABILITY TO TOGGLE THE TEMPLATE TO SHOW EITHER NAME OR ADDRESS.
// U NEED $compile FOR THAT! SO NEXT LEVEL! 