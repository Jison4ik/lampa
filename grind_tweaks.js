(function () {
    'use strict';

    var GrindTweaks = {
        name: 'Grind Tweaks',
        version: '1.0.0'
    };

    function init() {
        console.log('[Grind Tweaks] Инициализация плагина');

        Lampa.SettingsApi.addComponent({
            component: 'grind_tweaks',
            name: 'Grind Tweaks',
            icon: '<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect x="64" y="64" width="384" height="384" rx="48" fill="none" stroke="white" stroke-width="32"/><rect x="176" y="176" width="160" height="160" rx="32" fill="white"/></svg>'
        });

        Lampa.SettingsApi.addParam({
            component: 'grind_tweaks',
            param: {
                name: 'grind_bg_enabled',
                type: 'trigger',
                default: false
            },
            field: {
                name: 'Кастомный фон',
                description: 'Заменяет серый фон при отсутствии фокуса'
            },
            onChange: function (value) {
                if (value) {
                    applyBackground();
                } else {
                    removeBackground();
                }
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'grind_tweaks',
            param: {
                name: 'grind_bg_url',
                type: 'input',
                default: ''
            },
            field: {
                name: 'URL изображения',
                description: 'Прямая ссылка на изображение'
            },
            onChange: function (value) {
                if (Lampa.Storage.get('grind_bg_enabled')) {
                    applyBackground();
                }
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'grind_tweaks',
            param: {
                name: 'grind_bg_mode',
                type: 'select',
                values: {
                    'cover': 'Заполнить',
                    'contain': 'Вместить',
                    'stretch': 'Растянуть'
                },
                default: 'cover'
            },
            field: {
                name: 'Режим отображения',
                description: 'Как заполнять экран'
            },
            onChange: function (value) {
                if (Lampa.Storage.get('grind_bg_enabled')) {
                    applyBackground();
                }
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'grind_tweaks',
            param: {
                name: 'grind_bg_overlay',
                type: 'select',
                values: {
                    '0': 'Без затемнения',
                    '0.3': 'Легкое',
                    '0.5': 'Среднее',
                    '0.7': 'Сильное'
                },
                default: '0.5'
            },
            field: {
                name: 'Затемнение',
                description: 'Темный слой поверх фона'
            },
            onChange: function (value) {
                if (Lampa.Storage.get('grind_bg_enabled')) {
                    applyBackground();
                }
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'grind_tweaks',
            param: {
                name: 'grind_bg_blur',
                type: 'select',
                values: {
                    '0': 'Без размытия',
                    '5': 'Легкое',
                    '10': 'Среднее',
                    '15': 'Сильное'
                },
                default: '5'
            },
            field: {
                name: 'Размытие',
                description: 'Blur эффект'
            },
            onChange: function (value) {
                if (Lampa.Storage.get('grind_bg_enabled')) {
                    applyBackground();
                }
            }
        });

        if (Lampa.Storage.get('grind_bg_enabled')) {
            setTimeout(function() {
                applyBackground();
            }, 1000);
        }

        console.log('[Grind Tweaks] Плагин загружен v' + GrindTweaks.version);
    }

    function applyBackground() {
        var url = Lampa.Storage.get('grind_bg_url', '');
        
        if (!url) {
            console.log('[Grind Tweaks] URL не задан');
            return;
        }

        var mode = Lampa.Storage.get('grind_bg_mode', 'cover');
        var overlay = Lampa.Storage.get('grind_bg_overlay', '0.5');
        var blur = Lampa.Storage.get('grind_bg_blur', '5');

        var bgSize = 'cover';
        if (mode === 'contain') bgSize = 'contain';
        if (mode === 'stretch') bgSize = '100% 100%';

        var css = '<style id="grind-bg-style">';
        css += '.background { ';
        css += 'background-image: url(' + url + ') !important; ';
        css += 'background-size: ' + bgSize + ' !important; ';
        css += 'background-position: center !important; ';
        css += 'background-repeat: no-repeat !important; ';
        css += '}';
        css += '.background > canvas { opacity: 0 !important; transition: opacity 0.3s !important; }';
        css += 'body.grind-focused .background > canvas { opacity: 1 !important; }';
        css += '.background::before { content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0; ';
        css += 'background: rgba(0,0,0,' + overlay + ') !important; pointer-events: none; z-index: 1; }';
        css += '.background::after { content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0; ';
        css += 'backdrop-filter: blur(' + blur + 'px); -webkit-backdrop-filter: blur(' + blur + 'px); ';
        css += 'pointer-events: none; z-index: 2; }';
        css += 'body.grind-focused .background::before, body.grind-focused .background::after { opacity: 0 !important; }';
        css += '</style>';

        $('#grind-bg-style').remove();
        $('head').append(css);

        if (!window.grindWatcher) {
            window.grindWatcher = true;
            startWatcher();
        }

        console.log('[Grind Tweaks] Фон применен');
    }

    function removeBackground() {
        $('#grind-bg-style').remove();
        $('body').removeClass('grind-focused');
        window.grindWatcher = false;
        console.log('[Grind Tweaks] Фон удален');
    }

    function startWatcher() {
        setInterval(function() {
            if (!Lampa.Storage.get('grind_bg_enabled') || !window.grindWatcher) {
                return;
            }

            var focused = $('.card.focus').length > 0 || $('.card.hover').length > 0 || $('.card--focus').length > 0;
            
            if (focused) {
                $('body').addClass('grind-focused');
            } else {
                $('body').removeClass('grind-focused');
            }
        }, 100);
    }

    if (window.appready) {
        init();
    } else {
        Lampa.Listener.follow('app', function(e) {
            if (e.type === 'ready') {
                init();
            }
        });
    }

})();
