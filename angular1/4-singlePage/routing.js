'use strict';

app 
    .config(
        function($routeProvider){
        $routeProvider
        .when('/item/',{
            controller: 'itemList',
            templateUrl:'views/item/list.html'
        })
    }
);