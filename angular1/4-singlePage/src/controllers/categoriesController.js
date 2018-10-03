'use strict';

app 
    .controller('categorieIndex',function($scope){

    })
    .controller('categorieList',function($scope,categorieProvider){
        $scope.categories=categorieProvider.getCategories();
    })
    .controller('categorieCreate',function($scope){
        $scope.test="toto";
    })
    .controller('categorieRemove',function($scope){

    })
