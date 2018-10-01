'use strict';

var items = [
    {'name': 'Django Unchained', 'category_id': 1},
    {'name': 'Forrest Gump', 'category_id': 1}
]

app.service('itemProvider', function ($http) {
    this.getItems = function () {
        return items;
    }
});