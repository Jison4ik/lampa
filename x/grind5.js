(function(){
'use strict';

console.log('[Grind] Плагин загружается...');

function init(){
    console.log('[Grind] Инициализация');
    
    try{
        Lampa.SettingsApi.addParam({
            component:'interface',
            param:{
                name:'grind_bg',
                type:'trigger',
                default:false
            },
            field:{
                name:'Custom Background',
                description:'Test setting'
            },
            onChange:function(v){
                console.log('[Grind] Changed:', v);
            }
        });
        
        console.log('[Grind] OK');
    }catch(e){
        console.error('[Grind] Error:', e.message);
    }
}

setTimeout(function(){
    if(window.Lampa && Lampa.SettingsApi){
        init();
    }else{
        console.error('[Grind] Lampa not ready');
    }
}, 2000);

})();
