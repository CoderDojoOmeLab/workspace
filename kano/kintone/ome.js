/*
 this is for kintone on NPO Ome Kodomomirai.
*/
(function () {
    "use strict";
    kintone.events.on(['app.record.create.submit', 'app.record.edit.submit'], function (event){

        // スペースIDを取得する
        const spaceID = kintone.app.record.getSpaceElement('kanoSpace');
        // ボタンを作成する
        const btn = document.createElement('button');
        btn.textContent = 'かのボタンrev5';
        spaceID.appendChild(btn);

        // フィールドに値を書く
        var record = event.record;
        record['myFunc'].value = "Yeah!";

        return event;
    });})();