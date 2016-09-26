(function(){
    angular.module('todoApp',[])
        .directive('firstDirective', firstDirective);
    
    firstDirective.$inject = ['$compile'];

    function firstDirective($compile){
        return{
            priority: 0,
            compile : compilefunc,
            template: '<button>click me to add a new directive!</button>'
        }
        function compilefunc(tElement, tAttrs, transclude){
            return{
                pre: function preLink(){
                    console.log('prelink function invoked!');
                },
                post: function postLink(scope, element, attrs, controller){
                    console.log('postLink function invoked!');
                    var button = angular.element(element.children()[0]);
                    button.on('click',function(){
                        var newHtml = '<div><second-directive></second-directive></div>';
                        var template = angular.element(newHtml);
                        var linkFn = $compile(template);
                        var newElement = linkFn(scope);
                        element.append(newElement);
                    })
                }
            }
        }
    }

     angular.module('todoApp')
        .directive('secondDirective', secondDirective);
    function secondDirective(){
        return{
            priority: 1,
            compile : compilefunc,
            template: "<h1> Hey! I'm a new directive! </h1>"
        }
        function compilefunc(tElement, tAttrs, transclude){
            return{
                pre: function preLink(){
                    console.log('prelink function invoked!');
                },
                post: function postLink(scope, elements, attrs, controller){
                    console.log('postLink function invoked!');
                }
            }
        }
    }    
    
})();


