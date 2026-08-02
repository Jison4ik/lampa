(function () {
    'use strict';

    // Добавляем переводы
    Lampa.Lang.add({
        grind_tweaks: {
            ru: 'Grind Tweaks',
            en: 'Grind Tweaks',
            uk: 'Grind Tweaks',
            be: 'Grind Tweaks'
        }
    });

    var GrindTweaks = {
        name: 'Grind Tweaks',
        version: '1.0.0',
        component_name: 'grind_tweaks_settings'
    };

    function init() {
        console.log('[Grind Tweaks] Начало инициализации');

        Lampa.SettingsApi.addComponent({
            component: GrindTweaks.component_name,
            name: Lampa.Lang.translate('grind_tweaks'),
            icon: '<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect x="64" y="64" width="384" height="384" rx="48" fill="none" stroke="white" stroke-width="32"/><rect x="176" y="176" width="160" height="160" rx="32" fill="white"/></svg>'
        });

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

        Lampa.SettingsApi.addParam({
            component: GrindTweaks.component_name,
            param: {
                name: 'grind_bg_url',
                type: 'input',
                default: ''
            },
            field: {
                name: 'URL изображения',
                description: 'Введите прямую ссылку на изображение',
                placeholder: 'https://example.com/image.jpg'
            },
            onChange: function (value) {
                if (Lampa.Storage.field('grind_custom_bg_enabled') && 
                    Lampa.Storage.field('grind_bg_source_type') === 'url') {
                    applyCustomBackground();
                }
            }
        });

        Lampa.SettingsApi.addParam({
            component: GrindTweaks.component_name,
            param: {
                name: 'grind_bg_file_selector',
                type: 'button'
            },
            field: {
                name: 'Выбрать файл из системы',
                description: 'Нажмите для выбора изображения'
            },
            onChange: selectImageFile
        });

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
                description: 'Применяет blur эффект'
            },
            onChange: function (value) {
                if (Lampa.Storage.field('grind_custom_bg_enabled')) {
                    applyCustomBackground();
                }
            }
        });

        Lampa.SettingsApi.addParam({
            component: GrindTweaks.component_name,
            param: {
                name: 'grind_bg_preview',
                type: 'button'
            },
            field: {
                name: 'Предпросмотр',
                description: 'Нажмите для просмотра результата'
            },
            onChange: previewBackground
        });

        if (Lampa.Storage.field('grind_custom_bg_enabled')) {
            setTimeout(applyCustomBackground, 1000);
        }

        console.log('[Grind Tweaks] Инициализирован, версия:', GrindTweaks.version);
    }

    function selectImageFile() {
        try {
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
        } catch (e) {
            console.error('[Grind Tweaks] Ошибка выбора файла:', e);
            Lampa.Noty.show('Ошибка выбора файла');
        }
    }

    function applyCustomBackground() {
        try {
            var sourceType = Lampa.Storage.field('grind_bg_source_type') || 'url';
            var imageUrl = '';

            if (sourceType === 'url') {
                imageUrl = Lampa.Storage.field('grind_bg_url') || '';
                if (!imageUrl) {
                    console.log('[Grind Tweaks] URL не задан');
                    return;
                }
            } else if (sourceType === 'file') {
                imageUrl = Lampa.Storage.get('grind_bg_file_data', '');
                if (!imageUrl) {
                    console.log('[Grind Tweaks] Файл не выбран');
                    return;
                }
            }

            var mode = Lampa.Storage.field('grind_bg_mode') || 'cover';
            var overlay = Lampa.Storage.field('grind_bg_overlay') || '0.4';
            var blur = Lampa.Storage.field('grind_bg_blur') || '5';

            var bgSize = 'cover';
            var bgPosition = 'center';
            var bgRepeat = 'no-repeat';

            if (mode === 'contain') {
                bgSize = 'contain';
            } else if (mode === 'stretch') {
                bgSize = '100% 100%';
            } else if (mode === 'center') {
                bgSize = 'auto';
            }

            var cssText = '<style id="grind-custom-bg-style">' +
                '.background { background-image: url(\'' + imageUrl + '\') !important; ' +
                'background-size: ' + bgSize + ' !important; ' +
                'background-position: ' + bgPosition + ' !important; ' +
                'background-repeat: ' + bgRepeat + ' !important; }' +
                '.background > canvas { opacity: 0 !important; transition: opacity 0.3s ease !important; }' +
                'body.grind-card-hovered .background > canvas { opacity: 1 !important; }' +
                '.background::before { content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0; ' +
                'background: rgba(0, 0, 0, ' + overlay + ') !important; pointer-events: none; z-index: 1; }' +
                '.background::after { content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0; ' +
                'backdrop-filter: blur(' + blur + 'px); -webkit-backdrop-filter: blur(' + blur + 'px); pointer-events: none; z-index: 2; }' +
                'body.grind-card-hovered .background::before, ' +
                'body.grind-card-hovered .background::after { opacity: 0 !important; }' +
                '</style>';

            $('#grind-custom-bg-style').remove();
            $('head').append(cssText);

            if (!window.grindTweaksWatcher) {
                window.grindTweaksWatcher = true;
                watchCardHover();
            }

            console.log('[Grind Tweaks] Фон применен');
        } catch (e) {
            console.error('[Grind Tweaks] Ошибка применения:', e);
        }
    }

    function removeCustomBackground() {
        $('#grind-custom-bg-style').remove();
        $('body').removeClass('grind-card-hovered');
        window.grindTweaksWatcher = false;
        console.log('[Grind Tweaks] Фон удален');
    }

    function watchCardHover() {
        setInterval(function () {
            if (!Lampa.Storage.field('grind_custom_bg_enabled') || !window.grindTweaksWatcher) {
                return;
            }

            var hasHoveredCard = $('.card.focus').length > 0 || 
                                 $('.card.hover').length > 0 || 
                                 $('.card--focus').length > 0;
            
            if (hasHoveredCard) {
                $('body').addClass('grind-card-hovered');
            } else {
                $('body').removeClass('grind-card-hovered');
            }
        }, 100);
    }

    function previewBackground() {
        try {
            var sourceType = Lampa.Storage.field('grind_bg_source_type') || 'url';
            var imageUrl = '';

            if (sourceType === 'url') {
                imageUrl = Lampa.Storage.field('grind_bg_url') || '';
            } else {
                imageUrl = Lampa.Storage.get('grind_bg_file_data', '');
            }

            if (!imageUrl) {
                Lampa.Noty.show('Изображение не задано');
                return;
            }

            var modal = $('<div class="grind-preview-modal"></div>').css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'right': '0',
                'bottom': '0',
                'background': 'rgba(0,0,0,0.95)',
                'z-index': '99999',
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'flex-direction': 'column'
            });
            
            var img = $('<img>').attr('src', imageUrl).css({
                'max-width': '90%',
                'max-height': '80%',
                'object-fit': 'contain'
            });
            
            var closeBtn = $('<div class="selector">Закрыть (Enter)</div>').css({
                'margin-top': '2em',
                'padding': '1em 2em',
                'background': 'rgba(255,255,255,0.2)',
                'border-radius': '0.5em',
                'cursor': 'pointer'
            });
            
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
        } catch (e) {
            console.error('[Grind Tweaks] Ошибка предпросмотра:', e);
            Lampa.Noty.show('Ошибка предпросмотра');
        }
    }

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
