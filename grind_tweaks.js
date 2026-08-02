(function () {
    'use strict';

    var GrindTweaks = {
        name: 'Grind Tweaks',
        version: '1.0.0',
        component_name: 'grind_tweaks_settings'
    };

    // Инициализация плагина
    function init() {
        // Создаем компонент настроек
        Lampa.SettingsApi.addComponent({
            component: GrindTweaks.component_name,
            name: 'Grind Tweaks',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 8H21M8 3V21" stroke="currentColor" stroke-width="2"/></svg>'
        });

        // Настройка: включить/выключить кастомный фон
        Lampa.SettingsApi.addParam({
            component: GrindTweaks.component_name,
            param: {
                name: 'grind_custom_bg_enabled',
                type: 'trigger',
                default: false
            },
            field: {
                name: 'Использовать кастомный фон',
                description: 'Заменяет серый фон при отсутствии выбора фильма'
            },
            onChange: function (value) {
                if (value) {
                    applyCustomBackground();
                } else {
                    removeCustomBackground();
                }
            }
        });

        // Настройка: выбор источника изображения (URL или файл)
        Lampa.SettingsApi.addParam({
            component: GrindTweaks.component_name,
            param: {
                name: 'grind_bg_source_type',
                type: 'select',
                values: {
                    'url': 'URL изображения',
                    'file': 'Файл из системы'
                },
                default: 'url'
            },
            field: {
                name: 'Источник изображения',
                description: 'Выберите способ загрузки изображения'
            },
            onChange: function (value) {
                if (Lampa.Storage.field('grind_custom_bg_enabled')) {
                    applyCustomBackground();
                }
            }
        });

        // Настройка: URL изображения
        Lampa.SettingsApi.addParam({
            component: GrindTweaks.component_name,
            param: {
                name: 'grind_bg_url',
                type: 'input',
                default: ''
            },
            field: {
                name: 'URL изображения',
                description: 'Введите прямую ссылку на изображение (jpg, png, webp)',
                placeholder: 'https://example.com/image.jpg'
            },
            onChange: function (value) {
                if (Lampa.Storage.field('grind_custom_bg_enabled') && 
                    Lampa.Storage.field('grind_bg_source_type') === 'url') {
                    applyCustomBackground();
                }
            }
        });

        // Настройка: выбор файла из системы
        Lampa.SettingsApi.addParam({
            component: GrindTweaks.component_name,
            param: {
                name: 'grind_bg_file_selector',
                type: 'static'
            },
            field: {
                name: 'Выбрать файл из системы',
                description: 'Нажмите для выбора изображения с устройства'
            },
            onRender: function (item) {
                item.on('hover:enter', function () {
                    selectImageFile();
                });
            }
        });

        // Настройка: режим отображения
        Lampa.SettingsApi.addParam({
            component: GrindTweaks.component_name,
            param: {
                name: 'grind_bg_mode',
                type: 'select',
                values: {
                    'cover': 'Заполнить (Cover)',
                    'contain': 'Вместить (Contain)',
                    'stretch': 'Растянуть',
                    'center': 'По центру'
                },
                default: 'cover'
            },
            field: {
                name: 'Режим отображения',
                description: 'Как изображение будет заполнять экран'
            },
            onChange: function (value) {
                if (Lampa.Storage.field('grind_custom_bg_enabled')) {
                    applyCustomBackground();
                }
            }
        });

        // Настройка: затемнение
        Lampa.SettingsApi.addParam({
            component: GrindTweaks.component_name,
            param: {
                name: 'grind_bg_overlay',
                type: 'select',
                values: {
                    '0': 'Без затемнения',
                    '0.2': 'Легкое (20%)',
                    '0.4': 'Среднее (40%)',
                    '0.6': 'Сильное (60%)',
                    '0.8': 'Очень сильное (80%)'
                },
                default: '0.4'
            },
            field: {
                name: 'Затемнение фона',
                description: 'Добавляет темный слой поверх изображения'
            },
            onChange: function (value) {
                if (Lampa.Storage.field('grind_custom_bg_enabled')) {
                    applyCustomBackground();
                }
            }
        });

        // Настройка: размытие
        Lampa.SettingsApi.addParam({
            component: GrindTweaks.component_name,
            param: {
                name: 'grind_bg_blur',
                type: 'select',
                values: {
                    '0': 'Без размытия',
                    '5': 'Легкое (5px)',
                    '10': 'Среднее (10px)',
                    '15': 'Сильное (15px)',
                    '20': 'Очень сильное (20px)'
                },
                default: '5'
            },
            field: {
                name: 'Размытие фона',
                description: 'Применяет blur эффект к изображению'
            },
            onChange: function (value) {
                if (Lampa.Storage.field('grind_custom_bg_enabled')) {
                    applyCustomBackground();
                }
            }
        });

        // Настройка: предпросмотр
        Lampa.SettingsApi.addParam({
            component: GrindTweaks.component_name,
            param: {
                name: 'grind_bg_preview',
                type: 'static'
            },
            field: {
                name: 'Предпросмотр',
                description: 'Нажмите для просмотра результата'
            },
            onRender: function (item) {
                item.on('hover:enter', function () {
                    previewBackground();
                });
            }
        });

        // Применяем фон при старте, если включено
        if (Lampa.Storage.field('grind_custom_bg_enabled')) {
            applyCustomBackground();
        }

        console.log('[Grind Tweaks]', 'Плагин инициализирован, версия:', GrindTweaks.version);
    }

    // Функция выбора файла из системы
    function selectImageFile() {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        
        input.onchange = function (e) {
            var file = e.target.files[0];
            if (!file) return;

            var reader = new FileReader();
            reader.onload = function (event) {
                var dataUrl = event.target.result;
                Lampa.Storage.set('grind_bg_file_data', dataUrl);
                Lampa.Noty.show('Изображение загружено');
                
                if (Lampa.Storage.field('grind_custom_bg_enabled')) {
                    applyCustomBackground();
                }
            };
            reader.readAsDataURL(file);
        };
        
        input.click();
    }

    // Функция применения кастомного фона
    function applyCustomBackground() {
        var sourceType = Lampa.Storage.field('grind_bg_source_type');
        var imageUrl = '';

        if (sourceType === 'url') {
            imageUrl = Lampa.Storage.field('grind_bg_url');
            if (!imageUrl) {
                Lampa.Noty.show('Укажите URL изображения в настройках');
                return;
            }
        } else if (sourceType === 'file') {
            imageUrl = Lampa.Storage.get('grind_bg_file_data', '');
            if (!imageUrl) {
                Lampa.Noty.show('Выберите файл изображения в настройках');
                return;
            }
        }

        var mode = Lampa.Storage.field('grind_bg_mode');
        var overlay = Lampa.Storage.field('grind_bg_overlay');
        var blur = Lampa.Storage.field('grind_bg_blur');

        // Создаем CSS для кастомного фона
        var bgSize = 'cover';
        var bgPosition = 'center';
        var bgRepeat = 'no-repeat';

        switch (mode) {
            case 'contain':
                bgSize = 'contain';
                break;
            case 'stretch':
                bgSize = '100% 100%';
                break;
            case 'center':
                bgSize = 'auto';
                bgPosition = 'center';
                break;
        }

        var css = `
            <style id="grind-custom-bg-style">
                .background:not(.background--loaded) {
                    background-image: url('${imageUrl}') !important;
                    background-size: ${bgSize} !important;
                    background-position: ${bgPosition} !important;
                    background-repeat: ${bgRepeat} !important;
                    filter: blur(${blur}px) !important;
                }
                
                .background:not(.background--loaded)::after {
                    content: '' !important;
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    bottom: 0 !important;
                    background: rgba(0, 0, 0, ${overlay}) !important;
                    pointer-events: none !important;
                }
                
                .background.hide:not(.background--loaded) {
                    display: block !important;
                    opacity: 1 !important;
                }
                
                .background__one,
                .background__two,
                .background__fade {
                    display: block !important;
                }
                
                body:not(.background--card-focused) .background canvas {
                    opacity: 0 !important;
                }
            </style>
        `;

        $('#grind-custom-bg-style').remove();
        $('head').append(css);

        // Отслеживаем наведение на карточки
        watchCardHover();

        console.log('[Grind Tweaks]', 'Кастомный фон применен');
    }

    // Функция удаления кастомного фона
    function removeCustomBackground() {
        $('#grind-custom-bg-style').remove();
        $('body').removeClass('background--card-focused');
        console.log('[Grind Tweaks]', 'Кастомный фон удален');
    }

    // Отслеживание наведения на карточки
    function watchCardHover() {
        var checkInterval = setInterval(function () {
            if (!Lampa.Storage.field('grind_custom_bg_enabled')) {
                clearInterval(checkInterval);
                return;
            }

            // Проверяем, есть ли карточки с фокусом
            var hasHoveredCard = $('.card.focus, .card.hover').length > 0;
            
            if (hasHoveredCard) {
                $('body').addClass('background--card-focused');
                $('.background').addClass('background--loaded');
            } else {
                $('body').removeClass('background--card-focused');
                $('.background').removeClass('background--loaded');
            }
        }, 100);
    }

    // Функция предпросмотра
    function previewBackground() {
        var sourceType = Lampa.Storage.field('grind_bg_source_type');
        var imageUrl = '';

        if (sourceType === 'url') {
            imageUrl = Lampa.Storage.field('grind_bg_url');
        } else {
            imageUrl = Lampa.Storage.get('grind_bg_file_data', '');
        }

        if (!imageUrl) {
            Lampa.Noty.show('Изображение не задано');
            return;
        }

        var modal = $('<div class="grind-preview-modal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.9); z-index: 99999; display: flex; align-items: center; justify-content: center; flex-direction: column;"></div>');
        
        var img = $('<img style="max-width: 90%; max-height: 80%; object-fit: contain;">');
        img.attr('src', imageUrl);
        
        var closeBtn = $('<div class="selector" style="margin-top: 2em; padding: 1em 2em; background: rgba(255,255,255,0.2); border-radius: 0.5em; cursor: pointer;">Закрыть (Enter)</div>');
        
        closeBtn.on('hover:enter click', function () {
            modal.remove();
            Lampa.Controller.toggle('settings_component');
        });

        modal.append(img);
        modal.append(closeBtn);
        $('body').append(modal);

        Lampa.Controller.add('grind_preview', {
            toggle: function () {
                Lampa.Controller.collectionSet(modal);
                Lampa.Controller.collectionFocus(closeBtn[0], modal);
            },
            back: function () {
                modal.remove();
                Lampa.Controller.toggle('settings_component');
            }
        });

        Lampa.Controller.toggle('grind_preview');
    }

    // Ожидаем готовности Lampa
    if (window.appready) {
        init();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') {
                init();
            }
        });
    }

})();
