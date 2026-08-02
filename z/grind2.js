(function(){
'use strict';

console.log('[Grind] Загрузка плагина v1.0');

function applyBackground(){
    var url = Lampa.Storage.get('grind_bg_url','');
    if(!url){
        console.log('[Grind] URL не задан');
        return;
    }
    
    var mode = Lampa.Storage.get('grind_bg_mode','cover');
    var blur = Lampa.Storage.get('grind_bg_blur','5');
    var overlay = Lampa.Storage.get('grind_bg_overlay','0.5');
    var bgSize = mode === 'stretch' ? '100% 100%' : mode;
    
    var css = '<style id="grind-bg-style">';
    css += '.background{background-image:url('+url+')!important;';
    css += 'background-size:'+bgSize+'!important;';
    css += 'background-position:center!important;';
    css += 'background-repeat:no-repeat!important;}';
    css += '.background>canvas{opacity:0!important;transition:opacity .3s!important;}';
    css += 'body.grind-focused .background>canvas{opacity:1!important;}';
    css += '.background::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;';
    css += 'background:rgba(0,0,0,'+overlay+')!important;pointer-events:none;z-index:1;}';
    css += '.background::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;';
    css += 'backdrop-filter:blur('+blur+'px);-webkit-backdrop-filter:blur('+blur+'px);';
    css += 'pointer-events:none;z-index:2;}';
    css += 'body.grind-focused .background::before,';
    css += 'body.grind-focused .background::after{opacity:0!important;}';
    css += '</style>';
    
    $('#grind-bg-style').remove();
    $('head').append(css);
    
    if(!window.grindWatcher){
        window.grindWatcher = true;
        setInterval(function(){
            if(!Lampa.Storage.get('grind_bg_enabled')||!window.grindWatcher)return;
            var focused=$('.card.focus').length>0||$('.card.hover').length>0||$('.card--focus').length>0;
            if(focused)$('body').addClass('grind-focused');
            else $('body').removeClass('grind-focused');
        },100);
    }
    
    console.log('[Grind] Фон применен');
}

function removeBackground(){
    $('#grind-bg-style').remove();
    $('body').removeClass('grind-focused');
    window.grindWatcher = false;
    console.log('[Grind] Фон удален');
}

function init(){
    console.log('[Grind] Инициализация');
    
    Lampa.SettingsApi.addParam({
        component:'interface',
        param:{
            name:'grind_bg_enabled',
            type:'trigger',
            default:false
        },
        field:{
            name:'Кастомный фон (Grind)',
            description:'Показывать изображение вместо серого фона'
        },
        onChange:function(v){
            if(v)applyBackground();
            else removeBackground();
        }
    });
    
    Lampa.SettingsApi.addParam({
        component:'interface',
        param:{
            name:'grind_bg_url',
            type:'input',
            default:''
        },
        field:{
            name:'URL изображения (Grind)',
            description:'Ссылка на картинку',
            placeholder:'https://example.com/image.jpg'
        },
        onChange:function(){
            if(Lampa.Storage.get('grind_bg_enabled'))applyBackground();
        }
    });
    
    Lampa.SettingsApi.addParam({
        component:'interface',
        param:{
            name:'grind_bg_mode',
            type:'select',
            values:{
                'cover':'Заполнить',
                'contain':'Вместить',
                'stretch':'Растянуть'
            },
            default:'cover'
        },
        field:{
            name:'Режим фона (Grind)',
            description:'Как заполнять экран'
        },
        onChange:function(){
            if(Lampa.Storage.get('grind_bg_enabled'))applyBackground();
        }
    });
    
    Lampa.SettingsApi.addParam({
        component:'interface',
        param:{
            name:'grind_bg_blur',
            type:'select',
            values:{
                '0':'Без размытия',
                '5':'Легкое (5px)',
                '10':'Среднее (10px)',
                '15':'Сильное (15px)'
            },
            default:'5'
        },
        field:{
            name:'Размытие (Grind)',
            description:'Blur эффект'
        },
        onChange:function(){
            if(Lampa.Storage.get('grind_bg_enabled'))applyBackground();
        }
    });
    
    Lampa.SettingsApi.addParam({
        component:'interface',
        param:{
            name:'grind_bg_overlay',
            type:'select',
            values:{
                '0':'Без затемнения',
                '0.3':'Легкое (30%)',
                '0.5':'Среднее (50%)',
                '0.7':'Сильное (70%)'
            },
            default:'0.5'
        },
        field:{
            name:'Затемнение (Grind)',
            description:'Темный слой'
        },
        onChange:function(){
            if(Lampa.Storage.get('grind_bg_enabled'))applyBackground();
        }
    });
    
    console.log('[Grind] Параметры добавлены');
    
    if(Lampa.Storage.get('grind_bg_enabled')){
        setTimeout(applyBackground,1000);
    }
    
    console.log('[Grind] Плагин загружен');
}

if(window.appready){
    init();
}else{
    Lampa.Listener.follow('app',function(e){
        if(e.type==='ready')init();
    });
}

})();
