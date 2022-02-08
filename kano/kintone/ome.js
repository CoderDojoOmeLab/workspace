/*
 this is for kintone on NPO Ome Kodomomirai.
*/
(function () {
    "use strict";
    kintone.events.on(['app.record.create.submit', 'app.record.edit.submit'], function (event){
        var record = event.record;
        record['myFunc'].value = "Yeah!";

        return event;
    });})();