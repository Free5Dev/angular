'use strict';
// les model de donnees
var items=[
    {"name":"Rambo","id_categorie":1},
    {"name":"Gims","id_categorie":2}

];
app 
    .service('itemProvider',function(){
        this.getItems=function(){
            return items;
        }
    });