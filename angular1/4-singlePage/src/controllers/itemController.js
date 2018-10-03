'use strict';

app
    .controller('itemIndex',function($scope){

    })
    .controller('itemList',function($scope,itemProvider){
        $scope.items=itemProvider.getItems();
    })
    .controller('itemCreate',function($scope){
        $scope.test="tata";
    })
    .controller('itemRemove',function($scope){

    })