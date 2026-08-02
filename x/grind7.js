(function(){
'use strict';

console.log('[Grind] Загрузка плагина v1.0');

var paramsAdded = false;

function addParams(){
    if(paramsAdded) return;
    paramsAdded = true;
    
    console.log('[Grind] Добавление параметров');
    
    Lampa.SettingsApi.addParam({
        component:'interface',
        param:{
            name:'grind_bg_enabled',
            type:'trigger',
            default:false
        },
        field:{
            name:'Кастомный фон (Grind)',
            description:'Показывать изображение когда нет фокуса на карточках'
        },
        onChange:function(value){
            console.log('[Grind] Фон:', value ? 'включен' : 'выключен');
            if(value) applyBg();
            else removeBg();
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
            name:'URL изображения',
            description:'Ссылка на картинку (jpg, png, webp)',
            placeholder:'https://example.com/image.jpg'
        },
        onChange:function(value){
            if(Lampa.Storage.get('grind_bg_enabled')) applyBg();
        }
    });
    
    Lampa.SettingsApi.addParam({
        component:'interface',
        param:{
            name:'grind_bg_mode',
            type:'select',
            values:{
                'cover':'Заполнить экран',
                'contain':'Вместить полностью',
                'stretch':'Растянуть'
            },
            default:'cover'
        },
        field:{
            name:'Режим фона',
            description:'Как отображать изображение'
        },
        onChange:function(value){
            if(Lampa.Storage.get('grind_bg_enabled')) applyBg();
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
            name:'Размытие фона',
            description:'Blur эффект'
        },
        onChange:function(value){
            if(Lampa.Storage.get('grind_bg_enabled')) applyBg();
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
            name:'Затемнение фона',
            description:'Темный слой поверх картинки'
        },
        onChange:function(value){
            if(Lampa.Storage.get('grind_bg_enabled')) applyBg();
        }
    });
    
    console.log('[Grind] Параметры добавлены');
}

function init(){
    console.log('[Grind] Инициализация');
    
    // Добавляем параметры при открытии настроек
    Lampa.Settings.listener.follow('open', function(e){
        if(e.name === 'interface'){
            addParams();
        }
    });
    
    // Пробуем добавить параметры сразу (если настройки уже открыты)
    setTimeout(function(){
        if(Lampa.Settings && Lampa.Settings.main && Lampa.Settings.main()){
            addParams();
        }
    }, 1000);
    
    // Применяем фон при загрузке, если включено
    if(Lampa.Storage.get('grind_bg_enabled')){
        setTimeout(applyBg, 1500);
    }
    
    console.log('[Grind] Плагин загружен');
}

function applyBg(){
    var url = Lampa.Storage.get('grind_bg_url','');
    if(!url){
        console.log('[Grind] URL не задан');
        return;
    }
    
    var mode = Lampa.Storage.get('grind_bg_mode','cover');
    var blur = Lampa.Storage.get('grind_bg_blur','5');
    var overlay = Lampa.Storage.get('grind_bg_overlay','0.5');
    
    var bgSize = mode === 'stretch' ? '100% 100%' : mode;
    
    var css = '<style id="grind-bg">';
    css += '.background{background-image:url('+url+')!important;';
    css += 'background-size:'+bgSize+'!important;';
    css += 'background-position:center!important;';
    css += 'background-repeat:no-repeat!important;}';
    css += '.background>canvas{opacity:0!important;transition:opacity .3s!important;}';
    css += 'body.grind-focus .background>canvas{opacity:1!important;}';
    css += '.background::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;';
    css += 'background:rgba(0,0,0,'+overlay+')!important;pointer-events:none;z-index:1;}';
    css += '.background::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;';
    css += 'backdrop-filter:blur('+blur+'px);-webkit-backdrop-filter:blur('+blur+'px);';
    css += 'pointer-events:none;z-index:2;}';
    css += 'body.grind-focus .background::before,';
    css += 'body.grind-focus .background::after{opacity:0!important;}';
    css += '</style>';
    
    $('#grind-bg').remove();
    $('head').append(css);
    
    if(!window.grindWatch){
        window.grindWatch = true;
        startWatch();
    }
    
    console.log('[Grind] Фон применен');
}

function removeBg(){
    $('#grind-bg').remove();
    $('body').removeClass('grind-focus');
    window.grindWatch = false;
    console.log('[Grind] Фон удален');
}

function startWatch(){
    setInterval(function(){
        if(!Lampa.Storage.get('grind_bg_enabled') || !window.grindWatch) return;
        
        var focused = $('.card.focus').length > 0 || 
                     $('.card.hover').length > 0 || 
                     $('.card--focus').length > 0;
        
        if(focused){
            $('body').addClass('grind-focus');
        }else{
            $('body').removeClass('grind-focus');
        }
    }, 100);
}

if(window.appready){
    init();
}else{
    Lampa.Listener.follow('app',function(e){
        if(e.type === 'ready') init();
    });
}

})();
