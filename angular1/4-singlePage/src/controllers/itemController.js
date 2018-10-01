'use strict';


app 
    .controller('itemIndex',function($scope){

    })
    .controller('itemCreate',function($scope){
       
    })
    .controller('itemList',function($scope,itemProvider){
        $scope.items=itemProvider.getItems();
    })
    .controller('itemRemove',function($scope){

    })
    