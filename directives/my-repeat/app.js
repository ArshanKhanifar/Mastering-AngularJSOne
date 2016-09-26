(function(){
    angular
    .module("myApp",[])
    .controller('MyController',['$scope',function($scope){
        $scope.Books = [  
            {
                name: "Game of Thrones",
                author: "George R. R. Martin"
            },
            {
                name: "Harry Potter",
                author: "J.K.Rowling"
            },
            {
                name: "50 Shades of Grey",
                author: "E. L. James"
            },
            {
                name: "Lord of the Rings",
                author: "J. R. R. Tolkien"
            },
            {
                name: "The Little Prince",
                author: "Antoine de Saint-Exupéry"
            }
        ];
        $scope.addItem = function(){
            $scope.Books.push({
                name: "Game of Thrones",
                author: "George R. R. Martin"
            });
        }
    }])
    .directive('myRepeat',function(){
        return{
            restrict: 'A',
            transclude: 'element',
            link: function(scope, element, attrs, controller, transcludeFn){
                var expression = attrs.myRepeat;
                var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                var parent = angular.element(element.parent());
                var item = match[1],
                    collection = match[2];
                    var Books = scope[collection];
                    for(var i = 0 ; i < Books.length; i++ ){
                        var newScope = scope.$new();
                        newScope.book = Books[i];
                        transcludeFn(newScope,function(clone,scope){
                            parent.append(clone);
                        })                        
                    }
                    
                // scope.$watchCollection(collection,function(collection){
                //     var i,block,childsope;
                //     var compiledElem = transcludeFn(scope);

                // });
            }
        }
    })
})();

// CHALLENGE: ADD THE ABILITY TO TOGGLE THE TEMPLATE TO SHOW EITHER NAME OR ADDRESS.
// U NEED $compile FOR THAT! SO NEXT LEVEL! 