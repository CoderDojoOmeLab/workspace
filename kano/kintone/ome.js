/*
 this is for kintone on NPO Ome Kodomomirai.
*/
(function(){
    "use strict";
    kintone.events.on(['app.record.create.show','app.record.edit.show'], function(event) {
        // スペースIDを取得する
        const spaceID = kintone.app.record.getSpaceElement('kanoSpace');
        // ボタンを作成する
        const btn = document.createElement('button');
        btn.textContent = 'かのボタンrev4';
        spaceID.appendChild(btn);

        var record = event.record;
        record['独自関数'].value = "あたい";
        record['独自関数'].disabled = true;

        //btn.onclick=()=>{
            //let record = kintone.app.record.get();
            //let kanoValue = record.record['チーム'].value;
            //event.record.record['独自関数'].value = 'だよ';
        //}
        return event;
    });
})();