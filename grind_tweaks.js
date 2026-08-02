(function(){
'use strict';

function startPlugin(){
    console.log('[Grind Tweaks] Плагин запущен');
    
    Lampa.SettingsApi.addParam({
        component:'interface',
        param:{
            name:'grind_test',
            type:'trigger',
            default:false
        },
        field:{
            name:'Grind Tweaks Test',
            description:'Тестовая настройка плагина'
        },
        onChange:function(value){
            console.log('[Grind Tweaks] Значение изменено:', value);
            if(value){
                console.log('[Grind Tweaks] ВКЛЮЧЕНО');
            }else{
                console.log('[Grind Tweaks] ВЫКЛЮЧЕНО');
            }
        }
    });
    
    console.log('[Grind Tweaks] Настройка добавлена');
}

if(window.appready){
    startPlugin();
}else{
    Lampa.Listener.follow('app',function(e){
        if(e.type=='ready'){
            startPlugin();
        }
    });
}

})();
