'use strict';

app 
.directive('categorieDecorator',function(){
    return {
        template:'Categorie "{{categorie.id}}" dans {{categorie.name}}'
    }
})