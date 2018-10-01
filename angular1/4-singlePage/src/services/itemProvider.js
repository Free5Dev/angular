'use strict';
var items=[
    {"name":"Rambo","id_categorie":1},
    {"name":"Booba","id_categorie":2}
];
app
    .service('itemProvider',function(){
        this.getItems=function(){
            return items;
        }
    })