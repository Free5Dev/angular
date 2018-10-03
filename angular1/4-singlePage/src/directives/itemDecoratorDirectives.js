'use strict';

app
    .directive('decorateItem',function(){
        return {
            template:'Item "{{item.name}}" dans la {{item.id_categorie}}'
        }
    })