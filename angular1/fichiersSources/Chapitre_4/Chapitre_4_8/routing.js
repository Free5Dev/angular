'use strict';

app.config(
    function ($routeProvider) {
        $routeProvider
            .when('/items/', {
                controller: 'itemList',
                templateUrl: 'views/item/list.html'
            })
    }
);