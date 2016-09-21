(angular
    .module("myApp",[])
    .controller('Controller',['$scope',function($scope){
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('myCustomer', function() {
        return {
            templateUrl: function(elem, attr) {
                return 'customer-' + attr.type + '.html';
            }
        };
    })
)();

// CHALLENGE: ADD THE ABILITY TO TOGGLE THE TEMPLATE TO SHOW EITHER NAME OR ADDRESS.
// U NEED $compile FOR THAT! SO NEXT LEVEL! 