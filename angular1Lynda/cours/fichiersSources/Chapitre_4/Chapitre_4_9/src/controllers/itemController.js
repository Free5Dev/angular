'use strict';

app
    .controller('itemIndex', function ($scope) {

    })
    .controller('itemList', function ($scope, itemProvider) {
        $scope.items = itemProvider.getItems();
    })
    .controller('itemCreate', function ($scope, categoryProvider) {
        $scope.categories = categoryProvider.getCategories();
    })
    .controller('itemRemove', function ($scope) {

    })
;