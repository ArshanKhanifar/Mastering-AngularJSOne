(function(){
    angular
    .module("myApp",[])
    .controller('Controller',['$scope',function($scope){


         $scope.newUser = {
            telephoneNumber: '',
            firstName: '',
            lastName: '',
            department: '',
            plan: ''
        }
        
        $scope.canSendNewUser = false;

        $scope.plans = [{
            label: 'Engineering',
            value: 'engVal'
        }, {
            label: 'Science',
            value: 'sciVal'
        }, {
            label: 'ECE',
            value: 'eceVal'
        }];

        $scope.newUser.plan = $scope.plans[0].value;

    }]);
   

})();

// CHALLENGE: ADD THE ABILITY TO TOGGLE THE TEMPLATE TO SHOW EITHER NAME OR ADDRESS.
// U NEED $compile FOR THAT! SO NEXT LEVEL! 