/*
 this is for kintone on NPO Ome Kodomomirai.
*/
(function(){
    "use strict";
    kintone.events.on(['app.record.create.show','app.record.edit.show'], event => {
        // スペースIDを取得する
        const spaceID = kintone.app.record.getSpaceElement('kanoSpace');
        // ボタンを作成する
        const btn = document.createElement('button');
        btn.textContent = 'かのボタン';
        spaceID.appendChild(btn);

        btn.onclick=()=>{
            let record = kintone.app.record.get();
            let kanoValue = record.record['独自関数'].value;
            kanoValue.record['独自関数'].value = 'だっちゃ';
            kintone.app.record.set( record );
        }
        return event;
    });
})();