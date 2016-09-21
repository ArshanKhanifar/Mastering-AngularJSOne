(angular
    .module("myApp",[])
    .controller('Controller',['$scope',function($scope){
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('myCustomer',function(){
        return{
            template:'Name : {{customer.name}} Address:{{customer.address}}'
        }
    })
    .directive('myOtherCustomer',function(){
        return{
            templateUrl:'my-other-customer.html'
        }
    })
    
)();