'use strict';
// les modeles de donnees
var categories=[
    {"id":1,"name":"films"},
    {"id":2,"name":"Musiques"}
];
app 
    .service('categorieProvider',function(){
        this.getCategories=function(){
            return categories;
        }
    });