'use strict';
app 
    .config(
        function($routeProvider){
            $routeProvider
            .when('/items/',{
                controller: 'itemList',
                templateUrl: 'views/item/itemList.html'
            })
            .when('/items/new',{
                controller: 'itemCreate',
                templateUrl: 'views/item/create.html'
            })
           
    });