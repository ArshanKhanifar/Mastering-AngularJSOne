angular.module('docsTabsExample',[])
    .component('myTabs',{
        transclude: true,
        controller: function myTabsController($scope){
            var self = this;
            var panes = self.panes = [];
            self.select = function(pane){
                angular.forEach(panes,function(pane){
                    pane.selected = false;
                })
                pane.selected = true;
            }
            self.addPane = function(pane){
                if(panes.length === 0 ){
                    self.select(pane);
                }
                panes.push(pane);
            }
        },
        templateUrl : 'my-tabs.html'
    })
    .component('myPane',{
        transclude : true,
        require : {
            tabsCtrl : '^myTabs'
        },
        bindings:{
            title: '@'
        },
        controller: function(){
            this.$onInit = function(){
                this.tabsCtrl.addPane(this);
                console.log(this);
            }
        },
        templateUrl: 'my-pane.html'
    })