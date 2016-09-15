angular
    .module("myApp",[])
    .service("sayHelloService",sayHelloService)
    .factory("sayHelloFactory",sayHelloFactory)
    .controller("ExampleController",ExampleController)
    
function sayHelloService(){
    // this.sayHello = function(){
    //     console.log("Hello from Service!")
    // }
    return {
        sayHello: function(){
            console.log("Hello from Service!");
        }
    }
}
function sayHelloFactory(){
    // this.sayHello = function(){
    //     console.log("Hello from Factory!")
    // }
    return {
        sayHello: function(){
            console.log("Hello from Factory!");
        }
    }
}
function ExampleController(sayHelloService,sayHelloFactory){
    this.sayHelloService = sayHelloService.sayHello;
    this.sayHelloFactory = sayHelloFactory.sayHello;
}
