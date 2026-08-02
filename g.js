(function () {
    'use strict';

    if (window.lampa_games_plugin) return;
    window.lampa_games_plugin = true;

    // ============================================================
    //                        ПЕРЕВОДЫ
    // ============================================================
    Lampa.Lang.add({
        // Заголовки / меню
        games_menu_title:           { ru:'Игры', en:'Games', uk:'Ігри', be:'Гульні', zh:'游戏', pt:'Jogos', bg:'Игри', he:'משחקים', cs:'Hry', ro:'Jocuri', fr:'Jeux' },
        games_not_found:            { ru:'Игра не найдена', en:'Game not found', uk:'Гру не знайдено', be:'Гульня не знойдзена', zh:'未找到游戏', pt:'Jogo não encontrado', bg:'Играта не е намерена', he:'המשחק לא נמצא', cs:'Hra nenalezena', ro:'Joc negăsit', fr:'Jeu introuvable' },

        // Игры — названия (некоторые)
        game_title_snake:           { ru:'Змейка', en:'Snake', uk:'Змійка', be:'Змейка', zh:'贪吃蛇', pt:'Cobrinha', bg:'Змийче', he:'נחש', cs:'Had', ro:'Șarpe', fr:'Serpent' },
        game_title_tetris:          { ru:'Тетрис', en:'Tetris', uk:'Тетріс', be:'Тэтрыс', zh:'俄罗斯方块', pt:'Tetris', bg:'Тетрис', he:'טטריס', cs:'Tetris', ro:'Tetris', fr:'Tetris' },
        game_title_pacman:          { ru:'Pac-Man', en:'Pac-Man', uk:'Pac-Man', be:'Pac-Man', zh:'吃豆人', pt:'Pac-Man', bg:'Pac-Man', he:'Pac-Man', cs:'Pac-Man', ro:'Pac-Man', fr:'Pac-Man' },
        game_title_tron:            { ru:'Трон', en:'Tron', uk:'Трон', be:'Трон', zh:'创战纪', pt:'Tron', bg:'Трон', he:'טרון', cs:'Tron', ro:'Tron', fr:'Tron' },
        game_title_seabattle:       { ru:'Морской бой', en:'Battleship', uk:'Морський бій', be:'Марскі бой', zh:'海战', pt:'Batalha Naval', bg:'Морски шах', he:'קרב ימי', cs:'Lodě', ro:'Bătălie navală', fr:'Bataille navale' },
        game_title_tictac:          { ru:'Крестики-нолики', en:'Tic-Tac-Toe', uk:'Хрестики-нулики', be:'Крыжыкі-нулікі', zh:'井字棋', pt:'Jogo da velha', bg:'Морски шах (X-O)', he:'איקס עיגול', cs:'Piškvorky', ro:'X și 0', fr:'Morpion' },
        game_title_flappy:          { ru:'Flappy Bird', en:'Flappy Bird', uk:'Flappy Bird', be:'Flappy Bird', zh:'Flappy Bird', pt:'Flappy Bird', bg:'Flappy Bird', he:'Flappy Bird', cs:'Flappy Bird', ro:'Flappy Bird', fr:'Flappy Bird' },
        game_title_doodle:          { ru:'Doodle Jump', en:'Doodle Jump', uk:'Doodle Jump', be:'Doodle Jump', zh:'涂鸦跳跃', pt:'Doodle Jump', bg:'Doodle Jump', he:'Doodle Jump', cs:'Doodle Jump', ro:'Doodle Jump', fr:'Doodle Jump' },
        game_title_arkanoid:        { ru:'Арканоид', en:'Arkanoid', uk:'Арканоїд', be:'Арканоід', zh:'打砖块', pt:'Arkanoid', bg:'Арканоид', he:'ארקנואיד', cs:'Arkanoid', ro:'Arkanoid', fr:'Arkanoid' },
        game_title_tanks:           { ru:'Танчики', en:'Tanks', uk:'Танчики', be:'Танчыкі', zh:'坦克大战', pt:'Tanques', bg:'Танкове', he:'טנקים', cs:'Tanky', ro:'Tancuri', fr:'Tanks' },
        game_title_memory:          { ru:'Memory', en:'Memory', uk:'Memory', be:'Memory', zh:'记忆翻牌', pt:'Memória', bg:'Памет', he:'זיכרון', cs:'Pexeso', ro:'Memorie', fr:'Mémoire' },
        game_title_invaders:        { ru:'Space Invaders', en:'Space Invaders', uk:'Space Invaders', be:'Space Invaders', zh:'太空侵略者', pt:'Space Invaders', bg:'Space Invaders', he:'Space Invaders', cs:'Space Invaders', ro:'Space Invaders', fr:'Space Invaders' },
        game_title_crossy:          { ru:'Crossy Road', en:'Crossy Road', uk:'Crossy Road', be:'Crossy Road', zh:'天天过马路', pt:'Crossy Road', bg:'Crossy Road', he:'Crossy Road', cs:'Crossy Road', ro:'Crossy Road', fr:'Crossy Road' },
        game_title_minesweeper:     { ru:'Сапёр', en:'Minesweeper', uk:'Сапер', be:'Сапёр', zh:'扫雷', pt:'Campo Minado', bg:'Миночистач', he:'שולה מוקשים', cs:'Hledání min', ro:'Câmp minat', fr:'Démineur' },
        game_title_checkers:        { ru:'Шашки', en:'Checkers', uk:'Шашки', be:'Шашкі', zh:'西洋跳棋', pt:'Damas', bg:'Дама', he:'דמקה', cs:'Dáma', ro:'Dame', fr:'Dames' },
        game_title_match3:          { ru:'Три в ряд', en:'Match 3', uk:'Три в ряд', be:'Тры ў рад', zh:'消消乐', pt:'Três em linha', bg:'Три в ред', he:'שלושה בשורה', cs:'Tři v řadě', ro:'Trei în linie', fr:'Trois en ligne' },
        game_title_platformer:      { ru:'Ленарио', en:'Lenario', uk:'Ленаріо', be:'Ленарыа', zh:'Lenario', pt:'Lenario', bg:'Ленарио', he:'לנאריו', cs:'Lenario', ro:'Lenario', fr:'Lenario' },
        game_title_sudoku:          { ru:'Судоку', en:'Sudoku', uk:'Судоку', be:'Судоку', zh:'数独', pt:'Sudoku', bg:'Судоку', he:'סודוקו', cs:'Sudoku', ro:'Sudoku', fr:'Sudoku' },
        game_title_race:            { ru:'Гонка', en:'Race', uk:'Гонка', be:'Гонка', zh:'赛车', pt:'Corrida', bg:'Състезание', he:'מירוץ', cs:'Závod', ro:'Cursă', fr:'Course' },

        // Игры — описания
        game_desc_snake:            { ru:'Классическая змейка', en:'Classic snake', uk:'Класична змійка', be:'Класічная змейка', zh:'经典贪吃蛇', pt:'Cobrinha clássica', bg:'Класическо змийче', he:'נחש קלאסי', cs:'Klasický had', ro:'Șarpele clasic', fr:'Serpent classique' },
        game_desc_tetris:           { ru:'Собирай линии из падающих фигур', en:'Collect lines from falling pieces', uk:'Збирай лінії з падаючих фігур', be:'Збірай лініі з падаючых фігур', zh:'用下落的方块组成完整的行', pt:'Forme linhas com as peças que caem', bg:'Подреди линии от падащи фигури', he:'אסוף שורות מחלקים נופלים', cs:'Skládej řady z padajících kostek', ro:'Formează linii din piesele care cad', fr:'Forme des lignes avec les pièces qui tombent' },
        game_desc_pacman:           { ru:'Собирай точки, убегай от призраков', en:'Collect dots, run from ghosts', uk:'Збирай крапки, тікай від привидів', be:'Збірай кропкі, уцякай ад прывідаў', zh:'吃豆子,躲避幽灵', pt:'Colete pontos, fuja dos fantasmas', bg:'Събирай точки, бягай от призраци', he:'אסוף נקודות, ברח מהרוחות', cs:'Sbírej body, utíkej před duchy', ro:'Adună puncte, fugi de fantome', fr:'Collecte les points, fuis les fantômes' },
        game_desc_tron:             { ru:'Двое на одном поле, не врежься в след', en:'Two on one field, don\'t hit the trail', uk:'Двоє на одному полі, не врізайся у слід', be:'Двое на адным полі, не ўрэжся ў след', zh:'两人同场,别撞上痕迹', pt:'Dois no mesmo campo, não bata no rastro', bg:'Двама на едно поле, не удряй следата', he:'שניים על אותו מגרש, אל תפגע בשובל', cs:'Dva na jednom poli, nenarážej do stopy', ro:'Doi pe același teren, nu lovi urma', fr:'Deux sur un terrain, n\'entre pas dans la traînée' },
        game_desc_seabattle:        { ru:'Битва против компьютера', en:'Battle against the computer', uk:'Битва проти комп\'ютера', be:'Бітва супраць камп\'ютара', zh:'对战电脑', pt:'Batalha contra o computador', bg:'Битка срещу компютъра', he:'קרב נגד המחשב', cs:'Bitva proti počítači', ro:'Luptă împotriva calculatorului', fr:'Combat contre l\'ordinateur' },
        game_desc_tictac:           { ru:'Классика 3х3', en:'Classic 3x3', uk:'Класика 3х3', be:'Класіка 3х3', zh:'经典 3x3', pt:'Clássico 3x3', bg:'Класически 3х3', he:'קלאסי 3x3', cs:'Klasické 3x3', ro:'Clasic 3x3', fr:'Classique 3x3' },
        game_desc_flappy:           { ru:'Лети и не задень трубы', en:'Fly and don\'t hit the pipes', uk:'Лети і не зачепи труби', be:'Ляці і не закрані трубы', zh:'飞行,别碰到管道', pt:'Voe sem bater nos canos', bg:'Лети и не докосвай тръбите', he:'עוף ואל תיגע בצינורות', cs:'Leť a nenarazi do trubek', ro:'Zboară fără să atingi conductele', fr:'Vole sans toucher les tuyaux' },
        game_desc_doodle:           { ru:'Прыгай по платформам вверх', en:'Jump up on platforms', uk:'Стрибай по платформах угору', be:'Скачы па платформах уверх', zh:'在平台上向上跳', pt:'Pule pelas plataformas para cima', bg:'Скачай по платформите нагоре', he:'קפוץ על פלטפורמות למעלה', cs:'Skákej po plošinách nahoru', ro:'Sari pe platforme în sus', fr:'Saute sur les plateformes vers le haut' },
        game_desc_arkanoid:         { ru:'Разбей все блоки мячом', en:'Break all blocks with the ball', uk:'Розбий усі блоки м\'ячем', be:'Разбі ўсе блокі мячом', zh:'用球打碎所有方块', pt:'Quebre todos os blocos com a bola', bg:'Счупи всички блокове с топката', he:'שבור את כל הבלוקים בכדור', cs:'Rozbij všechny bloky míčkem', ro:'Sparge toate blocurile cu mingea', fr:'Casse tous les blocs avec la balle' },
        game_desc_tanks:            { ru:'Защити штаб, уничтожь врагов', en:'Defend the base, destroy enemies', uk:'Захисти штаб, знищ ворогів', be:'Абарані штаб, знішчы ворагаў', zh:'保卫基地,消灭敌人', pt:'Defenda a base, destrua os inimigos', bg:'Защити базата, унищожи враговете', he:'הגן על הבסיס, השמד את האויבים', cs:'Braň základnu, znič nepřátele', ro:'Apără baza, distruge inamicii', fr:'Défends la base, détruis les ennemis' },
        game_desc_memory:           { ru:'Найди все пары карточек', en:'Find all card pairs', uk:'Знайди усі пари карток', be:'Знайдзі ўсе пары картак', zh:'找到所有卡片对', pt:'Encontre todos os pares de cartas', bg:'Намери всички двойки карти', he:'מצא את כל זוגות הקלפים', cs:'Najdi všechny páry karet', ro:'Găsește toate perechile de cărți', fr:'Trouve toutes les paires de cartes' },
        game_desc_invaders:         { ru:'Сбей пришельцев из космоса', en:'Shoot down space aliens', uk:'Збий прибульців з космосу', be:'Збі прышэльцаў з космасу', zh:'击落外星人', pt:'Derrube os alienígenas do espaço', bg:'Свали извънземните от космоса', he:'הפל את החייזרים מהחלל', cs:'Sestřel mimozemšťany z vesmíru', ro:'Doboară extratereștrii din spațiu', fr:'Abats les extraterrestres de l\'espace' },
        game_desc_crossy:           { ru:'Беги вперёд, не попадись машинам', en:'Run forward, dodge the cars', uk:'Біжи вперед, не потрап під машини', be:'Бяжы наперад, не патрап пад машыны', zh:'向前奔跑,躲避车辆', pt:'Corra para frente, fuja dos carros', bg:'Бягай напред, избягвай колите', he:'רוץ קדימה, התחמק מהמכוניות', cs:'Běž vpřed, vyhni se autům', ro:'Aleargă înainte, ferește-te de mașini', fr:'Cours en avant, évite les voitures' },
        game_desc_minesweeper:      { ru:'Найди все мины не подорвавшись', en:'Find all mines without exploding', uk:'Знайди усі міни не підірвавшись', be:'Знайдзі ўсе міны не падарваўшыся', zh:'找出所有地雷,不要踩到', pt:'Encontre todas as minas sem explodir', bg:'Намери всички мини без да се взривиш', he:'מצא את כל המוקשים מבלי להתפוצץ', cs:'Najdi všechny miny bez výbuchu', ro:'Găsește toate minele fără să explodezi', fr:'Trouve toutes les mines sans exploser' },
        game_desc_checkers:         { ru:'Классика против компьютера', en:'Classic vs computer', uk:'Класика проти комп\'ютера', be:'Класіка супраць камп\'ютара', zh:'经典对战电脑', pt:'Clássico contra o computador', bg:'Класика срещу компютъра', he:'קלאסי מול המחשב', cs:'Klasika proti počítači', ro:'Clasic împotriva calculatorului', fr:'Classique contre l\'ordinateur' },
        game_desc_match3:           { ru:'Меняй камни, собирай линии', en:'Swap gems, collect lines', uk:'Міняй камені, збирай лінії', be:'Мяняй камяні, збірай лініі', zh:'交换宝石,组成连线', pt:'Troque as gemas, forme linhas', bg:'Размяна на камъни, събирай линии', he:'החלף אבנים, אסוף שורות', cs:'Vyměňuj kameny, sbírej řady', ro:'Schimbă pietrele, formează linii', fr:'Échange les gemmes, forme des lignes' },
        game_desc_platformer:       { ru:'Беги, прыгай, побеждай врагов', en:'Run, jump, defeat enemies', uk:'Біжи, стрибай, перемагай ворогів', be:'Бяжы, скачы, перамагай ворагаў', zh:'奔跑、跳跃、击败敌人', pt:'Corra, pule, derrote os inimigos', bg:'Бягай, скачай, побеждавай врагове', he:'רוץ, קפוץ, נצח את האויבים', cs:'Běž, skákej, poraz nepřátele', ro:'Aleargă, sari, învinge dușmanii', fr:'Cours, saute, vaincs les ennemis' },
        game_desc_sudoku:           { ru:'Заполни сетку 9x9', en:'Fill the 9x9 grid', uk:'Заповни сітку 9x9', be:'Запоўні сетку 9x9', zh:'填满 9x9 网格', pt:'Preencha a grade 9x9', bg:'Попълни мрежата 9x9', he:'מלא את רשת 9x9', cs:'Vyplň mřížku 9x9', ro:'Completează grila 9x9', fr:'Remplis la grille 9x9' },
        game_desc_race:             { ru:'Объезжай машины, набирай очки', en:'Dodge cars, score points', uk:'Об\'їжджай авто, набирай очки', be:'Аб\'язджай машыны, набірай ачкі', zh:'躲避汽车,赢得积分', pt:'Desvie dos carros, marque pontos', bg:'Избягвай колите, печели точки', he:'התחמק ממכוניות, צבור נקודות', cs:'Vyhýbej se autům, sbírej body', ro:'Evită mașinile, adună puncte', fr:'Évite les voitures, marque des points' },

        // Состояния игр
        game_over:                  { ru:'Игра окончена', en:'Game over', uk:'Гру закінчено', be:'Гульня скончана', zh:'游戏结束', pt:'Fim de jogo', bg:'Край на играта', he:'המשחק נגמר', cs:'Konec hry', ro:'Joc terminat', fr:'Fin de partie' },
        game_victory:               { ru:'Победа!', en:'Victory!', uk:'Перемога!', be:'Перамога!', zh:'胜利!', pt:'Vitória!', bg:'Победа!', he:'ניצחון!', cs:'Vítězství!', ro:'Victorie!', fr:'Victoire!' },
        game_defeat:                { ru:'Поражение', en:'Defeat', uk:'Поразка', be:'Паражэнне', zh:'失败', pt:'Derrota', bg:'Поражение', he:'תבוסה', cs:'Porážka', ro:'Înfrângere', fr:'Défaite' },
        game_draw:                  { ru:'Ничья', en:'Draw', uk:'Нічия', be:'Нічыя', zh:'平局', pt:'Empate', bg:'Равенство', he:'תיקו', cs:'Remíza', ro:'Egal', fr:'Match nul' },
        game_you_won:               { ru:'Вы победили!', en:'You won!', uk:'Ви перемогли!', be:'Вы перамаглі!', zh:'你赢了!', pt:'Você venceu!', bg:'Спечелихте!', he:'ניצחת!', cs:'Vyhráli jste!', ro:'Ai câștigat!', fr:'Vous avez gagné!' },
        game_you_lost:              { ru:'Вы проиграли', en:'You lost', uk:'Ви програли', be:'Вы прайгралі', zh:'你输了', pt:'Você perdeu', bg:'Загубихте', he:'הפסדת', cs:'Prohráli jste', ro:'Ai pierdut', fr:'Vous avez perdu' },
        game_level_passed:          { ru:'Уровень пройден!', en:'Level complete!', uk:'Рівень пройдено!', be:'Узровень пройдзены!', zh:'通关!', pt:'Nível completo!', bg:'Нивото е завършено!', he:'השלב הושלם!', cs:'Úroveň dokončena!', ro:'Nivel completat!', fr:'Niveau terminé!' },

        // Подсказки OK
        ok_restart:                 { ru:'OK — заново', en:'OK — restart', uk:'OK — заново', be:'OK — нанава', zh:'OK — 重来', pt:'OK — reiniciar', bg:'OK — отначало', he:'OK — מחדש', cs:'OK — znovu', ro:'OK — din nou', fr:'OK — recommencer' },
        ok_continue:                { ru:'OK — продолжить', en:'OK — continue', uk:'OK — продовжити', be:'OK — працягнуць', zh:'OK — 继续', pt:'OK — continuar', bg:'OK — продължи', he:'OK — המשך', cs:'OK — pokračovat', ro:'OK — continuă', fr:'OK — continuer' },
        ok_next:                    { ru:'OK — следующий', en:'OK — next', uk:'OK — наступний', be:'OK — наступны', zh:'OK — 下一关', pt:'OK — próximo', bg:'OK — следващ', he:'OK — הבא', cs:'OK — další', ro:'OK — următorul', fr:'OK — suivant' },

        // Ходы
        turn_yours:                 { ru:'Ваш ход', en:'Your turn', uk:'Ваш хід', be:'Ваш ход', zh:'你的回合', pt:'Sua vez', bg:'Вашият ход', he:'תורך', cs:'Tvůj tah', ro:'Rândul tău', fr:'Votre tour' },
        turn_yours_x:               { ru:'Ваш ход (X)', en:'Your turn (X)', uk:'Ваш хід (X)', be:'Ваш ход (X)', zh:'你的回合 (X)', pt:'Sua vez (X)', bg:'Вашият ход (X)', he:'תורך (X)', cs:'Tvůj tah (X)', ro:'Rândul tău (X)', fr:'Votre tour (X)' },
        turn_opponent:              { ru:'Ход противника', en:'Opponent\'s turn', uk:'Хід суперника', be:'Ход суперніка', zh:'对手回合', pt:'Vez do oponente', bg:'Ход на противника', he:'תור היריב', cs:'Tah soupeře', ro:'Rândul adversarului', fr:'Tour de l\'adversaire' },
        turn_computer:              { ru:'Ход компьютера...', en:'Computer\'s turn...', uk:'Хід комп\'ютера...', be:'Ход камп\'ютара...', zh:'电脑回合...', pt:'Vez do computador...', bg:'Ход на компютъра...', he:'תור המחשב...', cs:'Tah počítače...', ro:'Rândul calculatorului...', fr:'Tour de l\'ordinateur...' },

        // Морской бой
        sea_must_capture:           { ru:'Обязательное взятие!', en:'Capture required!', uk:'Обов\'язкове взяття!', be:'Абавязковае ўзяцце!', zh:'必须吃子!', pt:'Captura obrigatória!', bg:'Задължително вземане!', he:'חובה לאכול!', cs:'Povinný skok!', ro:'Captură obligatorie!', fr:'Prise obligatoire!' },
        sea_yours_must_capture:     { ru:'Ваш ход — обязательное взятие!', en:'Your turn — capture required!', uk:'Ваш хід — обов\'язкове взяття!', be:'Ваш ход — абавязковае ўзяцце!', zh:'你的回合 — 必须吃子!', pt:'Sua vez — captura obrigatória!', bg:'Вашият ход — задължително вземане!', he:'תורך — חובה לאכול!', cs:'Tvůj tah — povinný skok!', ro:'Rândul tău — captură obligatorie!', fr:'Votre tour — prise obligatoire!' },
        sea_sunk_again:             { ru:'Потоплен! Стреляйте ещё', en:'Sunk! Shoot again', uk:'Потоплено! Стріляйте ще', be:'Патоплены! Страляйце яшчэ', zh:'击沉!继续射击', pt:'Afundado! Atire novamente', bg:'Потопен! Стреляйте отново', he:'הוטבע! ירה שוב', cs:'Potopeno! Střílej znovu', ro:'Scufundat! Trage din nou', fr:'Coulé! Tirez encore' },
        sea_hit_again:              { ru:'Попадание! Стреляйте ещё', en:'Hit! Shoot again', uk:'Влучання! Стріляйте ще', be:'Трапленне! Страляйце яшчэ', zh:'命中!继续射击', pt:'Acertou! Atire novamente', bg:'Попадение! Стреляйте отново', he:'פגיעה! ירה שוב', cs:'Zásah! Střílej znovu', ro:'Lovit! Trage din nou', fr:'Touché! Tirez encore' },
        comp_cant_move:             { ru:'Компьютер не может ходить!', en:'Computer cannot move!', uk:'Комп\'ютер не може ходити!', be:'Камп\'ютар не можа хадзіць!', zh:'电脑无法移动!', pt:'O computador não pode jogar!', bg:'Компютърът не може да ходи!', he:'המחשב לא יכול לזוז!', cs:'Počítač nemůže táhnout!', ro:'Calculatorul nu poate muta!', fr:'L\'ordinateur ne peut pas jouer!' },

        // Прочее
        flappy_press:               { ru:'Нажмите OK или стрелку', en:'Press OK or arrow', uk:'Натисніть OK або стрілку', be:'Націсніце OK ці стрэлку', zh:'按 OK 或方向键', pt:'Pressione OK ou seta', bg:'Натиснете OK или стрелка', he:'לחץ OK או חץ', cs:'Stiskni OK nebo šipku', ro:'Apasă OK sau săgeată', fr:'Appuyez sur OK ou flèche' },
        flappy_to_fly:              { ru:'чтобы взлететь', en:'to fly', uk:'щоб злетіти', be:'каб узляцець', zh:'起飞', pt:'para voar', bg:'за да излетите', he:'כדי לעוף', cs:'pro vzlet', ro:'pentru a zbura', fr:'pour décoller' },
        press_ok_to_start:          { ru:'Нажмите OK для запуска', en:'Press OK to start', uk:'Натисніть OK для запуску', be:'Націсніце OK для запуску', zh:'按 OK 开始', pt:'Pressione OK para iniciar', bg:'Натиснете OK за начало', he:'לחץ OK כדי להתחיל', cs:'Stiskni OK pro spuštění', ro:'Apasă OK pentru a începe', fr:'Appuyez sur OK pour démarrer' },
        lives_left:                 { ru:'Жизней осталось:', en:'Lives left:', uk:'Залишилось життів:', be:'Засталося жыццяў:', zh:'剩余生命:', pt:'Vidas restantes:', bg:'Останали живота:', he:'חיים שנותרו:', cs:'Zbývající životy:', ro:'Vieți rămase:', fr:'Vies restantes:' },
        level_n:                    { ru:'Уровень', en:'Level', uk:'Рівень', be:'Узровень', zh:'关卡', pt:'Nível', bg:'Ниво', he:'שלב', cs:'Úroveň', ro:'Nivel', fr:'Niveau' },
        score:                      { ru:'Счёт:', en:'Score:', uk:'Рахунок:', be:'Лік:', zh:'得分:', pt:'Pontos:', bg:'Точки:', he:'ניקוד:', cs:'Skóre:', ro:'Scor:', fr:'Score:' },
        record:                     { ru:'Рекорд:', en:'Best:', uk:'Рекорд:', be:'Рэкорд:', zh:'最高分:', pt:'Recorde:', bg:'Рекорд:', he:'שיא:', cs:'Rekord:', ro:'Record:', fr:'Record:' },
        time_label:                 { ru:'Время:', en:'Time:', uk:'Час:', be:'Час:', zh:'时间:', pt:'Tempo:', bg:'Време:', he:'זמן:', cs:'Čas:', ro:'Timp:', fr:'Temps:' },
        moves_label:                { ru:'Ходов:', en:'Moves:', uk:'Ходів:', be:'Хадоў:', zh:'步数:', pt:'Jogadas:', bg:'Ходове:', he:'מהלכים:', cs:'Tahů:', ro:'Mutări:', fr:'Coups:' },
        seconds_short:              { ru:'с', en:'s', uk:'с', be:'с', zh:'秒', pt:'s', bg:'с', he:'שנ׳', cs:'s', ro:'s', fr:'s' },
        exploded:                   { ru:'Подорвался!', en:'Boom!', uk:'Підірвався!', be:'Падарваўся!', zh:'爆炸!', pt:'Explodiu!', bg:'Взривихте се!', he:'התפוצץ!', cs:'Bouchlo!', ro:'A explodat!', fr:'Explosion!' },

        // Сложность
        diff_easy:                  { ru:'Лёгкая', en:'Easy', uk:'Легка', be:'Лёгкая', zh:'简单', pt:'Fácil', bg:'Лесно', he:'קל', cs:'Lehká', ro:'Ușor', fr:'Facile' },
        diff_medium:                { ru:'Средняя', en:'Medium', uk:'Середня', be:'Сярэдняя', zh:'中等', pt:'Médio', bg:'Средно', he:'בינוני', cs:'Střední', ro:'Mediu', fr:'Moyen' },
        diff_hard:                  { ru:'Сложная', en:'Hard', uk:'Складна', be:'Складаная', zh:'困难', pt:'Difícil', bg:'Трудно', he:'קשה', cs:'Těžká', ro:'Greu', fr:'Difficile' },
        diff_label:                 { ru:'Сложность:', en:'Difficulty:', uk:'Складність:', be:'Складанасць:', zh:'难度:', pt:'Dificuldade:', bg:'Трудност:', he:'קושי:', cs:'Obtížnost:', ro:'Dificultate:', fr:'Difficulté:' },

        // Crossy Road
        crossy_camera:              { ru:'Камера ушла вперёд', en:'Camera moved ahead', uk:'Камера пішла вперед', be:'Камера сышла наперад', zh:'摄像机已超前', pt:'A câmera avançou', bg:'Камерата избяга напред', he:'המצלמה התקדמה', cs:'Kamera ujela vpřed', ro:'Camera a luat-o înainte', fr:'La caméra est partie' },
        crossy_offscreen:           { ru:'Уплыл за край', en:'Drifted off the edge', uk:'Заплив за край', be:'Заплыў за край', zh:'漂出边缘', pt:'Saiu da borda', bg:'Излезе от ръба', he:'נסחפת מהקצה', cs:'Spadl jsi z okraje', ro:'Ai ieșit de pe margine', fr:'Tombé dans le vide' },
        crossy_car_hit:             { ru:'Сбила машина', en:'Hit by a car', uk:'Збила машина', be:'Збіла машына', zh:'被车撞了', pt:'Atropelado por um carro', bg:'Блъсна те кола', he:'נפגעת ממכונית', cs:'Sraženo autem', ro:'Lovit de o mașină', fr:'Renversé par une voiture' },
        crossy_drowned:             { ru:'Утонул', en:'Drowned', uk:'Утопився', be:'Утануў', zh:'淹死了', pt:'Afogou-se', bg:'Удави се', he:'טבעת', cs:'Utopil ses', ro:'Te-ai înecat', fr:'Noyé' },
        crossy_train:               { ru:'Поезд!', en:'Train!', uk:'Поїзд!', be:'Цягнік!', zh:'火车!', pt:'Trem!', bg:'Влак!', he:'רכבת!', cs:'Vlak!', ro:'Trenul!', fr:'Train!' },

        // Ленарио
        platformer_run_failed:      { ru:'Не удалось запустить Ленарио', en:'Failed to start Lenario', uk:'Не вдалося запустити Ленаріо', be:'Не атрымалася запусціць Ленарыа', zh:'无法启动 Lenario', pt:'Falha ao iniciar Lenario', bg:'Lenario не успя да стартира', he:'נכשל בהפעלת Lenario', cs:'Nepodařilo se spustit Lenario', ro:'Pornirea Lenario a eșuat', fr:'Échec du démarrage de Lenario' },
        platformer_load_failed:     { ru:'Не удалось загрузить', en:'Failed to load', uk:'Не вдалося завантажити', be:'Не атрымалася загрузіць', zh:'加载失败', pt:'Falha ao carregar', bg:'Зареждането не успя', he:'הטעינה נכשלה', cs:'Nepodařilo se načíst', ro:'Încărcarea a eșuat', fr:'Échec du chargement' }
    });

    var GAMES_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="currentColor"><path d="M21 6c-1.7 0-3.2.7-4.3 1.7L16 8.3l-.7-.6C14.2 6.7 12.7 6 11 6 7.1 6 4 9.1 4 13c0 5.5 8.7 11.5 11.4 13.2.4.2.8.2 1.2 0C19.3 24.5 28 18.5 28 13c0-3.9-3.1-7-7-7zm-9 9H9v3H7v-3H4v-2h3v-3h2v3h3v2zm6 1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm3-3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm3-3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/></svg>';

    // ============================================================
    //                     ОБЩАЯ ИНФРАСТРУКТУРА
    // ============================================================

    var GAMES_LIST = [
        { id: 'snake',       title_key: 'game_title_snake',       desc_key: 'game_desc_snake' },
        { id: 'tetris',      title_key: 'game_title_tetris',      desc_key: 'game_desc_tetris' },
        { id: 'pacman',      title_key: 'game_title_pacman',      desc_key: 'game_desc_pacman' },
        { id: 'tron',        title_key: 'game_title_tron',        desc_key: 'game_desc_tron' },
        { id: 'seabattle',   title_key: 'game_title_seabattle',   desc_key: 'game_desc_seabattle' },
        { id: 'tictac',      title_key: 'game_title_tictac',      desc_key: 'game_desc_tictac' },
        { id: 'flappy',      title_key: 'game_title_flappy',      desc_key: 'game_desc_flappy' },
        { id: 'doodle',      title_key: 'game_title_doodle',      desc_key: 'game_desc_doodle' },
        { id: 'arkanoid',    title_key: 'game_title_arkanoid',    desc_key: 'game_desc_arkanoid' },
        { id: 'tanks',       title_key: 'game_title_tanks',       desc_key: 'game_desc_tanks' },
        { id: 'memory',      title_key: 'game_title_memory',      desc_key: 'game_desc_memory' },
        { id: 'invaders',    title_key: 'game_title_invaders',    desc_key: 'game_desc_invaders' },
        { id: 'crossy',      title_key: 'game_title_crossy',      desc_key: 'game_desc_crossy' },
        { id: 'minesweeper', title_key: 'game_title_minesweeper', desc_key: 'game_desc_minesweeper' },
        { id: 'checkers',    title_key: 'game_title_checkers',    desc_key: 'game_desc_checkers' },
        { id: 'match3',      title_key: 'game_title_match3',      desc_key: 'game_desc_match3' },
        { id: 'sudoku',      title_key: 'game_title_sudoku',      desc_key: 'game_desc_sudoku' },
        { id: 'race',        title_key: 'game_title_race',        desc_key: 'game_desc_race' },
        { id: 'platformer',  title_key: 'game_title_platformer',  desc_key: 'game_desc_platformer' }
    ];

    // SVG-иконки для каждой игры (60x60)
    var GAME_ICONS = {
        snake:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#1a1a2e"/>' +
                '<rect x="10" y="10" width="8" height="8" fill="#66bb6a"/>' +
                '<rect x="18" y="10" width="8" height="8" fill="#43a047"/>' +
                '<rect x="26" y="10" width="8" height="8" fill="#43a047"/>' +
                '<rect x="26" y="18" width="8" height="8" fill="#43a047"/>' +
                '<rect x="26" y="26" width="8" height="8" fill="#43a047"/>' +
                '<rect x="34" y="26" width="8" height="8" fill="#43a047"/>' +
                '<rect x="42" y="26" width="8" height="8" fill="#43a047"/>' +
                '<circle cx="46" cy="46" r="5" fill="#e53935"/>' +
                '<rect x="11" y="12" width="2" height="2" fill="#000"/>' +
                '<rect x="15" y="12" width="2" height="2" fill="#000"/>' +
            '</svg>',
        tetris:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#1a1a2e"/>' +
                '<rect x="6"  y="22" width="10" height="10" fill="#00bcd4"/>' +
                '<rect x="16" y="22" width="10" height="10" fill="#00bcd4"/>' +
                '<rect x="26" y="22" width="10" height="10" fill="#00bcd4"/>' +
                '<rect x="36" y="22" width="10" height="10" fill="#00bcd4"/>' +
                '<rect x="6"  y="42" width="10" height="10" fill="#ffeb3b"/>' +
                '<rect x="16" y="42" width="10" height="10" fill="#ffeb3b"/>' +
                '<rect x="6"  y="32" width="10" height="10" fill="#ffeb3b"/>' +
                '<rect x="16" y="32" width="10" height="10" fill="#ffeb3b"/>' +
                '<rect x="36" y="42" width="10" height="10" fill="#9c27b0"/>' +
                '<rect x="46" y="42" width="10" height="10" fill="#9c27b0"/>' +
                '<rect x="36" y="32" width="10" height="10" fill="#f44336"/>' +
                '<rect x="46" y="22" width="10" height="10" fill="#4caf50"/>' +
            '</svg>',
        pacman:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#000"/>' +
                '<path d="M 30 30 L 50 18 A 16 16 0 1 0 50 42 Z" fill="#ffeb3b"/>' +
                '<circle cx="36" cy="22" r="2" fill="#000"/>' +
                '<circle cx="12" cy="30" r="2" fill="#fff"/>' +
                '<circle cx="6"  cy="30" r="1.5" fill="#fff"/>' +
                '<path d="M 50 42 q 0 -10 5 -10 q 5 0 5 10 l -2 -2 l -2 2 l -2 -2 l -2 2 l -2 -2 z" fill="#f44336"/>' +
                '<circle cx="53" cy="36" r="1.5" fill="#fff"/>' +
                '<circle cx="58" cy="36" r="1.5" fill="#fff"/>' +
            '</svg>',
        tron:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#000"/>' +
                '<rect x="6"  y="20" width="20" height="3" fill="#00e5ff"/>' +
                '<rect x="23" y="20" width="3"  height="15" fill="#00e5ff"/>' +
                '<rect x="23" y="32" width="12" height="3" fill="#00e5ff"/>' +
                '<rect x="32" y="32" width="3"  height="10" fill="#00e5ff"/>' +
                '<rect x="32" y="40" width="2" height="2" fill="#fff"/>' +
                '<rect x="50" y="10" width="3"  height="20" fill="#ff5252"/>' +
                '<rect x="38" y="27" width="15" height="3" fill="#ff5252"/>' +
                '<rect x="38" y="27" width="3"  height="15" fill="#ff5252"/>' +
                '<rect x="38" y="40" width="2" height="2" fill="#fff"/>' +
            '</svg>',
        seabattle:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#0d47a1"/>' +
                '<g stroke="rgba(255,255,255,0.15)" stroke-width="0.5">' +
                    '<line x1="0" y1="10" x2="60" y2="10"/>' +
                    '<line x1="0" y1="20" x2="60" y2="20"/>' +
                    '<line x1="0" y1="30" x2="60" y2="30"/>' +
                    '<line x1="0" y1="40" x2="60" y2="40"/>' +
                    '<line x1="0" y1="50" x2="60" y2="50"/>' +
                    '<line x1="10" y1="0" x2="10" y2="60"/>' +
                    '<line x1="20" y1="0" x2="20" y2="60"/>' +
                    '<line x1="30" y1="0" x2="30" y2="60"/>' +
                    '<line x1="40" y1="0" x2="40" y2="60"/>' +
                    '<line x1="50" y1="0" x2="50" y2="60"/>' +
                '</g>' +
                '<rect x="10" y="11" width="30" height="8" fill="#9e9e9e"/>' +
                '<rect x="40" y="31" width="10" height="8" fill="#9e9e9e"/>' +
                '<rect x="14" y="13" width="6" height="4" fill="#e53935"/>' +
                '<text x="15.5" y="17" font-size="6" fill="#fff" font-weight="bold">X</text>' +
                '<text x="35.5" y="47" font-size="8" fill="#fff" font-weight="bold">·</text>' +
                '<text x="22.5" y="34" font-size="8" fill="#fff" font-weight="bold">·</text>' +
            '</svg>',
        tictac:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#1a1a2e"/>' +
                '<g stroke="#fff" stroke-width="2">' +
                    '<line x1="20" y1="6"  x2="20" y2="54"/>' +
                    '<line x1="40" y1="6"  x2="40" y2="54"/>' +
                    '<line x1="6"  y1="20" x2="54" y2="20"/>' +
                    '<line x1="6"  y1="40" x2="54" y2="40"/>' +
                '</g>' +
                '<g stroke="#42a5f5" stroke-width="3" stroke-linecap="round">' +
                    '<line x1="9"  y1="9"  x2="17" y2="17"/>' +
                    '<line x1="17" y1="9"  x2="9"  y2="17"/>' +
                    '<line x1="49" y1="29" x2="57" y2="37"/>' +
                    '<line x1="57" y1="29" x2="49" y2="37"/>' +
                '</g>' +
                '<g stroke="#ef5350" stroke-width="3" fill="none">' +
                    '<circle cx="30" cy="30" r="6"/>' +
                    '<circle cx="13" cy="50" r="6"/>' +
                '</g>' +
            '</svg>',
        flappy:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#4fc3f7"/>' +
                '<rect x="0"  y="50" width="60" height="10" fill="#8d6e63"/>' +
                '<rect x="42" y="0"  width="12" height="20" fill="#43a047"/>' +
                '<rect x="40" y="18" width="16" height="4"  fill="#2e7d32"/>' +
                '<rect x="42" y="38" width="12" height="22" fill="#43a047"/>' +
                '<rect x="40" y="35" width="16" height="4"  fill="#2e7d32"/>' +
                '<circle cx="22" cy="30" r="9" fill="#ffeb3b"/>' +
                '<circle cx="22" cy="30" r="9" fill="none" stroke="#000" stroke-width="0.5"/>' +
                '<circle cx="26" cy="27" r="2" fill="#fff"/>' +
                '<circle cx="27" cy="27" r="1" fill="#000"/>' +
                '<polygon points="29,30 35,28 35,32" fill="#ff5722"/>' +
                '<path d="M 16 32 q 2 4 6 2" fill="#fbc02d"/>' +
            '</svg>',
        doodle:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#e1f5fe"/>' +
                '<rect x="4"  y="50" width="20" height="4" fill="#4caf50"/>' +
                '<rect x="32" y="40" width="20" height="4" fill="#4caf50"/>' +
                '<rect x="8"  y="28" width="20" height="4" fill="#4caf50"/>' +
                '<rect x="34" y="14" width="20" height="4" fill="#4caf50"/>' +
                '<rect x="20" y="20" width="14" height="14" fill="#ff6f00"/>' +
                '<rect x="23" y="24" width="3" height="3" fill="#fff"/>' +
                '<rect x="29" y="24" width="3" height="3" fill="#fff"/>' +
                '<rect x="24" y="25" width="1.5" height="1.5" fill="#000"/>' +
                '<rect x="30" y="25" width="1.5" height="1.5" fill="#000"/>' +
            '</svg>',
        arkanoid:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#0d1b2a"/>' +
                '<rect x="2"  y="6"  width="11" height="5" fill="#f44336"/>' +
                '<rect x="14" y="6"  width="11" height="5" fill="#ff9800"/>' +
                '<rect x="26" y="6"  width="11" height="5" fill="#ffeb3b"/>' +
                '<rect x="38" y="6"  width="11" height="5" fill="#4caf50"/>' +
                '<rect x="50" y="6"  width="8"  height="5" fill="#2196f3"/>' +
                '<rect x="2"  y="12" width="11" height="5" fill="#ff9800"/>' +
                '<rect x="14" y="12" width="11" height="5" fill="#ffeb3b"/>' +
                '<rect x="26" y="12" width="11" height="5" fill="#4caf50"/>' +
                '<rect x="38" y="12" width="11" height="5" fill="#2196f3"/>' +
                '<rect x="50" y="12" width="8"  height="5" fill="#9c27b0"/>' +
                '<circle cx="35" cy="35" r="3" fill="#fff"/>' +
                '<rect x="20" y="50" width="22" height="5" fill="#42a5f5" rx="2"/>' +
            '</svg>',
        tanks:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#000"/>' +
                // кирпичи фоном
                '<g fill="#8d4e2f">' +
                    '<rect x="2"  y="2"  width="14" height="10"/>' +
                    '<rect x="44" y="2"  width="14" height="10"/>' +
                    '<rect x="2"  y="48" width="14" height="10"/>' +
                    '<rect x="44" y="48" width="14" height="10"/>' +
                '</g>' +
                '<g stroke="#5d2d15" stroke-width="0.5">' +
                    '<line x1="2" y1="7" x2="16" y2="7"/>' +
                    '<line x1="9" y1="2" x2="9" y2="7"/>' +
                    '<line x1="44" y1="7" x2="58" y2="7"/>' +
                    '<line x1="51" y1="2" x2="51" y2="7"/>' +
                '</g>' +
                // танк игрока (жёлтый)
                '<g transform="translate(20,36)">' +
                    '<rect width="20" height="20" fill="#f57c00"/>' +
                    '<rect x="2"  y="2"  width="4"  height="16" fill="#ffd54f"/>' +
                    '<rect x="14" y="2"  width="4"  height="16" fill="#ffd54f"/>' +
                    '<rect x="7"  y="7"  width="6"  height="6"  fill="#ffd54f"/>' +
                    '<rect x="9"  y="0"  width="2"  height="10" fill="#fff"/>' +
                '</g>' +
                // вражеский танк (серый, сверху)
                '<g transform="translate(20,4)">' +
                    '<rect width="20" height="20" fill="#616161"/>' +
                    '<rect x="2"  y="2"  width="4"  height="16" fill="#bdbdbd"/>' +
                    '<rect x="14" y="2"  width="4"  height="16" fill="#bdbdbd"/>' +
                    '<rect x="7"  y="7"  width="6"  height="6"  fill="#bdbdbd"/>' +
                    '<rect x="9"  y="10" width="2"  height="10" fill="#fff"/>' +
                '</g>' +
                // снаряд между танками
                '<rect x="29" y="29" width="2" height="2" fill="#fff"/>' +
            '</svg>',
        memory:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#1a1a2e"/>' +
                // 4 карточки 2х2
                '<rect x="6"  y="6"  width="22" height="22" fill="#42a5f5" rx="2"/>' +
                '<text x="17" y="23" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">?</text>' +
                '<rect x="32" y="6"  width="22" height="22" fill="#ef5350" rx="2"/>' +
                '<circle cx="43" cy="17" r="6" fill="#fff"/>' +
                '<rect x="6"  y="32" width="22" height="22" fill="#ef5350" rx="2"/>' +
                '<circle cx="17" cy="43" r="6" fill="#fff"/>' +
                '<rect x="32" y="32" width="22" height="22" fill="#42a5f5" rx="2"/>' +
                '<text x="43" y="49" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">?</text>' +
            '</svg>',
        invaders:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#000"/>' +
                // звёзды
                '<rect x="8"  y="8"  width="1" height="1" fill="#fff"/>' +
                '<rect x="50" y="14" width="1" height="1" fill="#fff"/>' +
                '<rect x="22" y="3"  width="1" height="1" fill="#fff"/>' +
                // пришельцы (3шт)
                '<g fill="#4caf50">' +
                    '<rect x="10" y="14" width="3" height="3"/><rect x="16" y="14" width="3" height="3"/>' +
                    '<rect x="7"  y="17" width="15" height="3"/>' +
                    '<rect x="4"  y="20" width="3" height="3"/><rect x="22" y="20" width="3" height="3"/>' +
                '</g>' +
                '<g fill="#ff5722">' +
                    '<rect x="34" y="14" width="3" height="3"/><rect x="40" y="14" width="3" height="3"/>' +
                    '<rect x="31" y="17" width="15" height="3"/>' +
                    '<rect x="28" y="20" width="3" height="3"/><rect x="46" y="20" width="3" height="3"/>' +
                '</g>' +
                // снаряды
                '<rect x="13" y="30" width="2" height="5" fill="#fff"/>' +
                '<rect x="40" y="35" width="2" height="5" fill="#fff"/>' +
                // корабль игрока
                '<g fill="#42a5f5">' +
                    '<rect x="26" y="48" width="10" height="6"/>' +
                    '<rect x="29" y="44" width="4"  height="4"/>' +
                    '<rect x="22" y="52" width="18" height="3"/>' +
                '</g>' +
                // снаряд игрока
                '<rect x="30" y="38" width="2" height="6" fill="#fff"/>' +
            '</svg>',
        crossy:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                // несколько чередующихся полос
                '<rect y="0"  width="60" height="8" fill="#43a047"/>' +
                '<rect y="8"  width="60" height="9" fill="#424242"/>' +
                '<rect y="17" width="60" height="9" fill="#424242"/>' +
                '<rect y="26" width="60" height="6" fill="#43a047"/>' +
                '<rect y="32" width="60" height="9" fill="#1565c0"/>' +
                '<rect y="41" width="60" height="9" fill="#424242"/>' +
                '<rect y="50" width="60" height="10" fill="#43a047"/>' +
                // разметка дорог
                '<g stroke="#fff200" stroke-width="0.5" stroke-dasharray="3 2">' +
                    '<line x1="0" y1="12.5" x2="60" y2="12.5"/>' +
                    '<line x1="0" y1="21.5" x2="60" y2="21.5"/>' +
                    '<line x1="0" y1="45.5" x2="60" y2="45.5"/>' +
                '</g>' +
                // машинки
                '<rect x="8"  y="9.5"  width="13" height="6" fill="#f44336" rx="1"/>' +
                '<rect x="38" y="18.5" width="13" height="6" fill="#ffc107" rx="1"/>' +
                '<rect x="20" y="42.5" width="13" height="6" fill="#9c27b0" rx="1"/>' +
                // бревно на воде
                '<rect x="14" y="33.5" width="22" height="6" fill="#6d4c41" rx="1"/>' +
                // персонаж (курица) внизу-середине
                '<g fill="#fff">' +
                    '<rect x="27" y="52" width="6" height="6"/>' +
                    '<rect x="28" y="49" width="4" height="3"/>' +
                '</g>' +
                '<rect x="29" y="50" width="2" height="1" fill="#000"/>' +
                '<polygon points="32,51 35,50 35,52" fill="#ff9800"/>' +
            '</svg>',
        minesweeper:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#1a1a2e"/>' +
                // сетка 4x4
                '<g stroke="#37474f" stroke-width="1" fill="#cfd8dc">' +
                    '<rect x="2"  y="2"  width="13" height="13"/>' +
                    '<rect x="16" y="2"  width="13" height="13"/>' +
                    '<rect x="30" y="2"  width="13" height="13"/>' +
                    '<rect x="44" y="2"  width="13" height="13"/>' +
                    '<rect x="2"  y="16" width="13" height="13"/>' +
                    '<rect x="44" y="16" width="13" height="13"/>' +
                    '<rect x="2"  y="30" width="13" height="13"/>' +
                    '<rect x="30" y="30" width="13" height="13"/>' +
                    '<rect x="44" y="30" width="13" height="13"/>' +
                    '<rect x="16" y="44" width="13" height="13"/>' +
                    '<rect x="30" y="44" width="13" height="13"/>' +
                    '<rect x="44" y="44" width="13" height="13"/>' +
                '</g>' +
                // открытые клетки с цифрами
                '<g fill="#90a4ae">' +
                    '<rect x="16" y="16" width="13" height="13"/>' +
                    '<rect x="30" y="16" width="13" height="13"/>' +
                    '<rect x="16" y="30" width="13" height="13"/>' +
                    '<rect x="2"  y="44" width="13" height="13"/>' +
                '</g>' +
                '<text x="22.5" y="27" font-size="10" fill="#1976d2" text-anchor="middle" font-weight="bold">1</text>' +
                '<text x="36.5" y="27" font-size="10" fill="#388e3c" text-anchor="middle" font-weight="bold">2</text>' +
                '<text x="22.5" y="41" font-size="10" fill="#d32f2f" text-anchor="middle" font-weight="bold">3</text>' +
                '<text x="8.5"  y="55" font-size="10" fill="#1976d2" text-anchor="middle" font-weight="bold">1</text>' +
                // флажок
                '<g transform="translate(46,4)">' +
                    '<rect x="3" y="0" width="1" height="9" fill="#000"/>' +
                    '<polygon points="4,0 9,2 4,4" fill="#f44336"/>' +
                '</g>' +
                // мина
                '<g transform="translate(36,46)">' +
                    '<circle cx="3" cy="6" r="3.5" fill="#000"/>' +
                    '<rect x="2.5" y="1" width="1" height="2" fill="#000"/>' +
                    '<rect x="2" y="5" width="2" height="0.8" fill="#fff"/>' +
                '</g>' +
            '</svg>',
        checkers:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                // шахматная доска 4x4 (упрощённая, для иконки)
                '<rect width="60" height="60" fill="#8d6e63"/>' +
                '<g fill="#3e2723">' +
                    '<rect x="0"  y="0"  width="15" height="15"/>' +
                    '<rect x="30" y="0"  width="15" height="15"/>' +
                    '<rect x="15" y="15" width="15" height="15"/>' +
                    '<rect x="45" y="15" width="15" height="15"/>' +
                    '<rect x="0"  y="30" width="15" height="15"/>' +
                    '<rect x="30" y="30" width="15" height="15"/>' +
                    '<rect x="15" y="45" width="15" height="15"/>' +
                    '<rect x="45" y="45" width="15" height="15"/>' +
                '</g>' +
                // белые шашки
                '<g fill="#fafafa" stroke="#bdbdbd" stroke-width="0.5">' +
                    '<circle cx="7.5"  cy="7.5"  r="5"/>' +
                    '<circle cx="37.5" cy="7.5"  r="5"/>' +
                    '<circle cx="22.5" cy="22.5" r="5"/>' +
                '</g>' +
                // чёрные шашки
                '<g fill="#212121" stroke="#000" stroke-width="0.5">' +
                    '<circle cx="22.5" cy="52.5" r="5"/>' +
                    '<circle cx="52.5" cy="52.5" r="5"/>' +
                    '<circle cx="37.5" cy="37.5" r="5"/>' +
                '</g>' +
                // дамка с короной (на одной из чёрных)
                '<rect x="35" y="35" width="5" height="1.5" fill="#ffd700"/>' +
                '<polygon points="35,35 36,32 38,33 40,32 41,35" fill="#ffd700"/>' +
            '</svg>',
        match3:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#1a1a2e"/>' +
                // сетка-фон
                '<g fill="#3a3a5e">' +
                    '<rect x="2"  y="2"  width="13" height="13"/>' +
                    '<rect x="16" y="2"  width="13" height="13"/>' +
                    '<rect x="30" y="2"  width="13" height="13"/>' +
                    '<rect x="44" y="2"  width="13" height="13"/>' +
                    '<rect x="2"  y="16" width="13" height="13"/>' +
                    '<rect x="16" y="16" width="13" height="13"/>' +
                    '<rect x="30" y="16" width="13" height="13"/>' +
                    '<rect x="44" y="16" width="13" height="13"/>' +
                    '<rect x="2"  y="30" width="13" height="13"/>' +
                    '<rect x="16" y="30" width="13" height="13"/>' +
                    '<rect x="30" y="30" width="13" height="13"/>' +
                    '<rect x="44" y="30" width="13" height="13"/>' +
                    '<rect x="2"  y="44" width="13" height="13"/>' +
                    '<rect x="16" y="44" width="13" height="13"/>' +
                    '<rect x="30" y="44" width="13" height="13"/>' +
                    '<rect x="44" y="44" width="13" height="13"/>' +
                '</g>' +
                // ряд из трёх красных кружков (совпадение!) - подсвеченные
                '<circle cx="8.5"  cy="8.5"  r="5" fill="#f44336"/>' +
                '<circle cx="22.5" cy="8.5"  r="5" fill="#f44336"/>' +
                '<circle cx="36.5" cy="8.5"  r="5" fill="#f44336"/>' +
                // обводка вокруг тройки (подсветка)
                '<rect x="3" y="3" width="40" height="11" fill="none" stroke="#fff" stroke-width="0.6" rx="2"/>' +
                '<circle cx="50.5" cy="8.5"  r="5" fill="#9c27b0"/>' +
                // другие самоцветы — разные формы для разнообразия
                '<rect x="4"  y="18" width="9" height="9" fill="#4caf50" rx="1"/>' +
                '<polygon points="22.5,17 27.5,22 22.5,27 17.5,22" fill="#ffc107"/>' +
                '<circle cx="36.5" cy="22.5" r="5" fill="#2196f3"/>' +
                '<rect x="46"  y="18" width="9" height="9" fill="#f44336" rx="1"/>' +
                '<polygon points="8.5,31 13.5,36 8.5,41 3.5,36" fill="#9c27b0"/>' +
                '<circle cx="22.5" cy="36.5" r="5" fill="#4caf50"/>' +
                '<rect x="32"  y="32" width="9" height="9" fill="#ffc107" rx="1"/>' +
                '<polygon points="50.5,31 55.5,36 50.5,41 45.5,36" fill="#2196f3"/>' +
                '<circle cx="8.5" cy="50.5" r="5" fill="#ffc107"/>' +
                '<rect x="18"  y="46" width="9" height="9" fill="#2196f3" rx="1"/>' +
                '<polygon points="36.5,45 41.5,50 36.5,55 31.5,50" fill="#f44336"/>' +
                '<circle cx="50.5" cy="50.5" r="5" fill="#4caf50"/>' +
                // блики
                '<circle cx="7"   cy="7"   r="1.2" fill="#fff" opacity="0.7"/>' +
                '<circle cx="21"  cy="7"   r="1.2" fill="#fff" opacity="0.7"/>' +
                '<circle cx="35"  cy="7"   r="1.2" fill="#fff" opacity="0.7"/>' +
            '</svg>',
        sudoku:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                '<rect width="60" height="60" fill="#1a1a2e"/>' +
                // тонкие линии сетки
                '<g stroke="#37474f" stroke-width="0.5">' +
                    '<line x1="0"  y1="6.5"  x2="60" y2="6.5"/>' +
                    '<line x1="0"  y1="13"   x2="60" y2="13"/>' +
                    '<line x1="0"  y1="26"   x2="60" y2="26"/>' +
                    '<line x1="0"  y1="32.5" x2="60" y2="32.5"/>' +
                    '<line x1="0"  y1="46"   x2="60" y2="46"/>' +
                    '<line x1="0"  y1="52.5" x2="60" y2="52.5"/>' +
                    '<line x1="6.5"  y1="0" x2="6.5"  y2="60"/>' +
                    '<line x1="13"   y1="0" x2="13"   y2="60"/>' +
                    '<line x1="26"   y1="0" x2="26"   y2="60"/>' +
                    '<line x1="32.5" y1="0" x2="32.5" y2="60"/>' +
                    '<line x1="46"   y1="0" x2="46"   y2="60"/>' +
                    '<line x1="52.5" y1="0" x2="52.5" y2="60"/>' +
                '</g>' +
                // жирные линии блоков 3x3
                '<g stroke="#fff" stroke-width="1.2">' +
                    '<line x1="0"  y1="20" x2="60" y2="20"/>' +
                    '<line x1="0"  y1="40" x2="60" y2="40"/>' +
                    '<line x1="20" y1="0"  x2="20" y2="60"/>' +
                    '<line x1="40" y1="0"  x2="40" y2="60"/>' +
                '</g>' +
                // рамка
                '<rect x="0" y="0" width="60" height="60" fill="none" stroke="#fff" stroke-width="2"/>' +
                // цифры (не во всех клетках)
                '<g font-family="Arial" font-size="5" text-anchor="middle" font-weight="bold">' +
                    '<text x="3.5"  y="11"   fill="#ddd">5</text>' +
                    '<text x="16.5" y="11"   fill="#ddd">3</text>' +
                    '<text x="36.5" y="11"   fill="#4fc3f7">7</text>' +
                    '<text x="10"   y="17.5" fill="#ddd">6</text>' +
                    '<text x="23"   y="17.5" fill="#ddd">1</text>' +
                    '<text x="49.5" y="17.5" fill="#ddd">5</text>' +
                    '<text x="3.5"  y="24"   fill="#4fc3f7">9</text>' +
                    '<text x="29.5" y="24"   fill="#ddd">8</text>' +
                    '<text x="56.5" y="24"   fill="#ddd">6</text>' +
                    '<text x="3.5"  y="30.5" fill="#ddd">8</text>' +
                    '<text x="23"   y="30.5" fill="#4fc3f7">6</text>' +
                    '<text x="43"   y="30.5" fill="#ddd">3</text>' +
                    '<text x="10"   y="37"   fill="#ddd">4</text>' +
                    '<text x="29.5" y="37"   fill="#ddd">5</text>' +
                    '<text x="49.5" y="37"   fill="#ddd">2</text>' +
                    '<text x="16.5" y="43.5" fill="#ddd">2</text>' +
                    '<text x="36.5" y="43.5" fill="#4fc3f7">9</text>' +
                    '<text x="56.5" y="43.5" fill="#ddd">1</text>' +
                    '<text x="3.5"  y="50"   fill="#ddd">4</text>' +
                    '<text x="23"   y="50"   fill="#ddd">8</text>' +
                    '<text x="43"   y="50"   fill="#ddd">7</text>' +
                    '<text x="10"   y="56.5" fill="#ddd">9</text>' +
                    '<text x="36.5" y="56.5" fill="#ddd">5</text>' +
                    '<text x="49.5" y="56.5" fill="#4fc3f7">3</text>' +
                '</g>' +
            '</svg>',
        race:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                // дорожное полотно
                '<rect width="60" height="60" fill="#2e7d32"/>' +
                '<rect x="8" y="0" width="44" height="60" fill="#37474f"/>' +
                // обочины (бордюры)
                '<rect x="8"  y="0" width="2" height="60" fill="#fff"/>' +
                '<rect x="50" y="0" width="2" height="60" fill="#fff"/>' +
                // прерывистая разметка по центру
                '<g fill="#fff">' +
                    '<rect x="29" y="2"  width="2" height="6"/>' +
                    '<rect x="29" y="14" width="2" height="6"/>' +
                    '<rect x="29" y="26" width="2" height="6"/>' +
                    '<rect x="29" y="38" width="2" height="6"/>' +
                    '<rect x="29" y="50" width="2" height="6"/>' +
                '</g>' +
                // встречная машина (чёрная, наверху)
                '<g>' +
                    '<rect x="14" y="6"  width="12" height="16" rx="2" fill="#212121"/>' +
                    '<rect x="15" y="8"  width="10" height="4"  fill="#5d4037"/>' +    // лобовое
                    '<rect x="15" y="16" width="10" height="4"  fill="#5d4037"/>' +    // заднее
                    '<rect x="13" y="8"  width="1"  height="3"  fill="#fdd835"/>' +    // фары
                    '<rect x="26" y="8"  width="1"  height="3"  fill="#fdd835"/>' +
                '</g>' +
                // машина игрока (красная, внизу)
                '<g>' +
                    '<rect x="34" y="36" width="12" height="16" rx="2" fill="#e53935"/>' +
                    '<rect x="35" y="38" width="10" height="4"  fill="#1565c0"/>' +    // лобовое
                    '<rect x="35" y="46" width="10" height="4"  fill="#1565c0"/>' +    // заднее
                    '<rect x="33" y="48" width="1"  height="3"  fill="#fdd835"/>' +    // задние фонари
                    '<rect x="46" y="48" width="1"  height="3"  fill="#fdd835"/>' +
                '</g>' +
                // дерево слева
                '<circle cx="4" cy="20" r="3.5" fill="#2e7d32"/>' +
                '<rect x="3.5" y="22" width="1" height="3" fill="#5d4037"/>' +
                // дерево справа
                '<circle cx="56" cy="42" r="3.5" fill="#2e7d32"/>' +
                '<rect x="55.5" y="44" width="1" height="3" fill="#5d4037"/>' +
            '</svg>',
        platformer:
            '<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">' +
                // небо
                '<rect width="60" height="60" fill="#5c94fc"/>' +
                // облако
                '<circle cx="12" cy="14" r="4" fill="#fff"/>' +
                '<circle cx="17" cy="13" r="4" fill="#fff"/>' +
                // земля с травой
                '<rect x="0" y="46" width="60" height="14" fill="#c84c0c"/>' +
                '<rect x="0" y="46" width="60" height="3" fill="#43a047"/>' +
                // героиня (упрощённый силуэт)
                '<rect x="26" y="26" width="8" height="6" fill="#fed7aa"/>' +     // голова
                '<rect x="25" y="24" width="10" height="5" fill="#1f1410"/>' +    // волосы
                '<rect x="26" y="32" width="8" height="6" fill="#a855f7"/>' +     // топ
                '<rect x="26" y="38" width="8" height="6" fill="#2563eb"/>' +     // комбинезон
                '<rect x="26" y="44" width="3" height="2" fill="#312e81"/>' +     // ноги
                '<rect x="31" y="44" width="3" height="2" fill="#312e81"/>' +
                '<rect x="28" y="29" width="1" height="1" fill="#15803d"/>' +     // глаза
                '<rect x="31" y="29" width="1" height="1" fill="#15803d"/>' +
                // труба справа
                '<rect x="44" y="38" width="12" height="8" fill="#22c55e"/>' +
                '<rect x="42" y="36" width="16" height="4" fill="#22c55e"/>' +
                '<rect x="42" y="36" width="16" height="1" fill="#000"/>' +
                '<rect x="44" y="40" width="12" height="1" fill="#86efac"/>' +
                // ?-блок сверху
                '<rect x="6" y="20" width="10" height="10" fill="#fbbf24"/>' +
                '<rect x="6" y="20" width="10" height="1" fill="#000"/>' +
                '<rect x="6" y="29" width="10" height="1" fill="#000"/>' +
                '<rect x="10" y="23" width="2" height="4" fill="#fff"/>' +
                '<rect x="10" y="28" width="2" height="1" fill="#fff"/>' +
            '</svg>'
    };

    // Динамическая подгрузка плагина платформера.
    // Если уже подгружен — просто открываем активность.
    // Если нет — добавляем <script src="..."> на хостинг плагина, ждём загрузки, открываем.
    var PLATFORMER_URL = 'https://skaz.tv/mario.js';
    function loadPlatformerPlugin() {
        // Если плагин уже загружен — Lampa.Component зарегистрировал mario_game
        if (window.lampa_mario_plugin) {
            Lampa.Activity.push({
                url: '',
                title: Lampa.Lang.translate('game_title_platformer'),
                component: 'mario_game',
                page: 1
            });
            return;
        }
        var s = document.createElement('script');
        s.src = PLATFORMER_URL + '?t=' + Date.now(); // защита от кэша
        s.onload = function () {
            // Плагин при загрузке сам регистрирует пункт меню и компонент.
            // Открываем активность через небольшую задержку чтобы плагин успел инициализироваться.
            setTimeout(function () {
                if (window.lampa_mario_plugin) {
                    Lampa.Activity.push({
                        url: '',
                        title: Lampa.Lang.translate('game_title_platformer'),
                        component: 'mario_game',
                        page: 1
                    });
                } else {
                    Lampa.Noty && Lampa.Noty.show && Lampa.Noty.show(Lampa.Lang.translate('platformer_run_failed'));
                }
            }, 200);
        };
        s.onerror = function () {
            Lampa.Noty && Lampa.Noty.show && Lampa.Noty.show(Lampa.Lang.translate('platformer_load_failed') + ' ' + PLATFORMER_URL);
        };
        document.head.appendChild(s);
    }

    function getRecord(id) {
        return Lampa.Storage.get('games_record_' + id, 0);
    }
    function setRecord(id, value) {
        if (value > getRecord(id)) Lampa.Storage.set('games_record_' + id, value);
    }

    // ============================================================
    //                          МЕНЮ ИГР
    // ============================================================
    function GamesMenuComponent(object) {
        var html;
        var items;
        var self = this;

        this.create = function () {
            html = $('<div class="games-menu"><div class="games-menu__title">Выберите игру</div><div class="games-menu__list"></div></div>');
            var list = html.find('.games-menu__list');

            GAMES_LIST.forEach(function (g) {
                var rec = getRecord(g.id);
                var noRecord = (g.id === 'tictac' || g.id === 'seabattle' || g.id === 'tron' || g.id === 'platformer');
                var recText = noRecord ? '' : '<div class="games-menu__rec">' + Lampa.Lang.translate('record') + ' ' + rec + '</div>';
                var icon = GAME_ICONS[g.id] || '';
                var item = $(
                    '<div class="games-menu__item selector" data-id="' + g.id + '">' +
                        '<div class="games-menu__icon">' + icon + '</div>' +
                        '<div class="games-menu__body">' +
                            '<div class="games-menu__name">' + Lampa.Lang.translate(g.title_key) + '</div>' +
                            '<div class="games-menu__desc">' + Lampa.Lang.translate(g.desc_key) + '</div>' +
                            recText +
                        '</div>' +
                    '</div>'
                );
                item.on('hover:enter', function () {
                    var id = $(this).data('id');
                    // Платформер — отдельный плагин, подгружаем динамически
                    if (id === 'platformer') {
                        loadPlatformerPlugin();
                        return;
                    }
                    Lampa.Activity.push({
                        url: '',
                        title: Lampa.Lang.translate(GAMES_LIST.filter(function(x){return x.id===id;})[0].title_key),
                        component: 'games_play',
                        game_id: id,
                        page: 1
                    });
                });
                list.append(item);
            });

            items = html.find('.games-menu__item').toArray();
            return this.render();
        };

        this.start = function () {
            function scrollToFocus() {
                setTimeout(function(){
                    var focused = html.find('.games-menu__item.focus')[0];
                    if (focused && focused.scrollIntoView) {
                        focused.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                    }
                }, 30);
            }
            Lampa.Controller.add('content', {
                toggle: function () {
                    Lampa.Controller.collectionSet(self.render());
                    Lampa.Controller.collectionFocus(false, self.render());
                },
                left: function () {
                    if (Navigator.canmove('left')) Navigator.move('left');
                    else Lampa.Controller.toggle('menu');
                    scrollToFocus();
                },
                right: function () { Navigator.move('right'); scrollToFocus(); },
                up:    function () { Navigator.move('up');    scrollToFocus(); },
                down:  function () { Navigator.move('down');  scrollToFocus(); },
                back:  function () { Lampa.Activity.backward(); }
            });
            Lampa.Controller.toggle('content');
        };

        this.pause = function () {};
        this.stop = function () {};
        this.render = function () { return html; };
        this.destroy = function () { if (html) html.remove(); html = null; };
    }

    // ============================================================
    //                  КОМПОНЕНТ-ОБЁРТКА ДЛЯ ИГР
    // ============================================================
    function GamesPlayComponent(object) {
        var game = null;
        var html;
        var self = this;

        this.create = function () {
            html = $('<div class="games-play"></div>');
            var GameClass = GAMES[object.game_id];
            if (!GameClass) {
                html.text(Lampa.Lang.translate('games_not_found'));
                return html;
            }
            game = new GameClass(html, self);
            game.create();
            return this.render();
        };

        this.start = function () { if (game) game.start(); };
        this.pause = function () { if (game && game.pause) game.pause(); };
        this.stop  = function () { if (game && game.stop) game.stop(); };
        this.render = function () { return html; };
        this.destroy = function () {
            if (game && game.destroy) game.destroy();
            game = null;
            if (html) html.remove();
            html = null;
        };
    }

    // ============================================================
    //                            ИГРЫ
    // ============================================================
    var GAMES = {};

    // ---------- Универсальные хелперы ----------
    function setupController(handlers) {
        Lampa.Controller.add('content', $.extend({
            toggle: function () {},
            update: function () {},
            left:  function () {},
            right: function () {},
            up:    function () {},
            down:  function () {},
            enter: function () {},
            back:  function () { Lampa.Activity.backward(); }
        }, handlers || {}));
        Lampa.Controller.toggle('content');
    }

    // Универсальный обработчик касаний для игр.
    // Принимает корневой $-элемент и колбэки:
    //   onSwipe(dir): 'left'|'right'|'up'|'down' — после свайпа
    //   onTap(x, y): тап без свайпа, с координатами относительно элемента
    //   onDrag(x, y): движение пальца после старта (для перетаскивания платформы)
    //   onTouchStart, onTouchEnd: начало/конец касания
    // Возвращает функцию-открепитель.
    function attachTouch(rootEl, callbacks) {
        callbacks = callbacks || {};
        var startX = 0, startY = 0, startTime = 0, dragging = false;
        var THRESHOLD = 25; // px — порог свайпа
        var TAP_TIME = 300; // ms — порог тапа
        var lastTouchEnd = 0; // отметка времени последнего touchend, чтобы игнорировать эмулированный mouse-эвент

        function onStart(e, isTouch) {
            // Если это mousedown сразу после touchend — это эмуляция, игнор
            if (!isTouch && Date.now() - lastTouchEnd < 500) return;
            var t = e.originalEvent.touches ? e.originalEvent.touches[0] : e.originalEvent;
            var rect = rootEl[0].getBoundingClientRect();
            startX = t.clientX;
            startY = t.clientY;
            startTime = Date.now();
            dragging = true;
            if (callbacks.onTouchStart) {
                callbacks.onTouchStart(t.clientX - rect.left, t.clientY - rect.top);
            }
        }
        function onMove(e) {
            if (!dragging) return;
            var t = e.originalEvent.touches ? e.originalEvent.touches[0] : e.originalEvent;
            var rect = rootEl[0].getBoundingClientRect();
            if (callbacks.onDrag) {
                callbacks.onDrag(t.clientX - rect.left, t.clientY - rect.top);
            }
        }
        function onEnd(e, isTouch) {
            if (!dragging) return;
            dragging = false;
            if (isTouch) {
                lastTouchEnd = Date.now();
                // блокируем эмулируемый клик/mouseup, который браузер пошлёт следом
                if (e.originalEvent && e.originalEvent.cancelable) {
                    try { e.originalEvent.preventDefault(); } catch (_) {}
                }
            }
            var t = (e.originalEvent.changedTouches && e.originalEvent.changedTouches[0]) || e.originalEvent;
            var rect = rootEl[0].getBoundingClientRect();
            var dx = t.clientX - startX;
            var dy = t.clientY - startY;
            var adx = Math.abs(dx), ady = Math.abs(dy);
            var elapsed = Date.now() - startTime;

            if (adx < THRESHOLD && ady < THRESHOLD) {
                if (elapsed < TAP_TIME && callbacks.onTap) {
                    callbacks.onTap(t.clientX - rect.left, t.clientY - rect.top);
                }
            } else if (callbacks.onSwipe) {
                var dir;
                if (adx > ady) dir = dx > 0 ? 'right' : 'left';
                else           dir = dy > 0 ? 'down' : 'up';
                callbacks.onSwipe(dir);
            }
            if (callbacks.onTouchEnd) callbacks.onTouchEnd();
        }

        rootEl.on('touchstart.gametouch', function(e){ onStart(e, true); });
        rootEl.on('mousedown.gametouch',  function(e){ onStart(e, false); });
        rootEl.on('touchmove.gametouch mousemove.gametouch', onMove);
        rootEl.on('touchend.gametouch',                function(e){ onEnd(e, true); });
        rootEl.on('mouseup.gametouch mouseleave.gametouch', function(e){ onEnd(e, false); });

        return function detach() {
            rootEl.off('.gametouch');
        };
    }

    // ============================================================
    //                          ЗМЕЙКА
    // ============================================================
    GAMES.snake = function (root) {
        var canvas, ctx, info, overlay;
        var cols = 20, rows = 20, grid;
        var snake, dir, nextDir, food, score, timer;
        var paused = false, gameOver = false, destroyed = false;
        var SPEED = 110;

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>' + Lampa.Lang.translate('score') + ' <b class="g-score">0</b></span>' +
                    '<span>' + Lampa.Lang.translate('record') + ' <b class="g-record">' + getRecord('snake') + '</b></span>' +
                    '<span class="g-hint">Стрелки — движение</span>' +
                  '</div>' +
                  '<div class="game-canvas-wrap">' +
                    '<canvas></canvas><div class="game-overlay"></div>' +
                  '</div>' +
                '</div>'
            );
            canvas = root.find('canvas')[0];
            ctx = canvas.getContext('2d');
            info = root.find('.game-info');
            overlay = root.find('.game-overlay');
            // reset делается из start() когда DOM готов
        };

        this.reset = function () {
            var cx = Math.floor(cols/2), cy = Math.floor(rows/2);
            snake = [{x:cx,y:cy},{x:cx-1,y:cy},{x:cx-2,y:cy}];
            dir = nextDir = {x:1,y:0};
            score = 0; paused = false; gameOver = false;
            this.placeFood();
            root.find('.g-score').text(score);
            this.resize(); this.draw();
            this.startLoop();
            overlay.removeClass('show').text('');
        };

        this.placeFood = function () {
            var free = [];
            for (var x=0; x<cols; x++) for (var y=0; y<rows; y++) {
                var on=false;
                for (var i=0;i<snake.length;i++) if (snake[i].x===x&&snake[i].y===y){on=true;break;}
                if (!on) free.push({x:x,y:y});
            }
            food = free.length ? free[Math.floor(Math.random()*free.length)] : null;
        };

        this.resize = function () {
            var wrap = root.find('.game-canvas-wrap')[0];
            var rect = wrap.getBoundingClientRect();
            var size = Math.floor(Math.min(rect.width, rect.height));
            if (size < 100) size = Math.min(window.innerHeight-200, window.innerWidth-100, 800);
            grid = Math.floor(size/cols);
            if (grid<8) grid=8;
            canvas.width = grid*cols; canvas.height = grid*rows;
        };

        this.draw = function () {
            ctx.fillStyle='#111'; ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.strokeStyle='rgba(255,255,255,0.04)';
            for (var i=1;i<cols;i++){ctx.beginPath();ctx.moveTo(i*grid,0);ctx.lineTo(i*grid,canvas.height);ctx.stroke();}
            for (var j=1;j<rows;j++){ctx.beginPath();ctx.moveTo(0,j*grid);ctx.lineTo(canvas.width,j*grid);ctx.stroke();}
            if (food) {
                ctx.fillStyle='#e53935';
                ctx.beginPath();
                ctx.arc(food.x*grid+grid/2, food.y*grid+grid/2, grid/2-2, 0, Math.PI*2);
                ctx.fill();
            }
            for (var k=0;k<snake.length;k++){
                ctx.fillStyle = k===0?'#66bb6a':'#43a047';
                ctx.fillRect(snake[k].x*grid+1, snake[k].y*grid+1, grid-2, grid-2);
            }
        };

        this.tick = function () {
            if (paused||gameOver||destroyed) return;
            dir = nextDir;
            var h = snake[0], nx=h.x+dir.x, ny=h.y+dir.y;
            if (nx<0||ny<0||nx>=cols||ny>=rows) return this.lose();
            for (var i=0;i<snake.length-1;i++) if (snake[i].x===nx&&snake[i].y===ny) return this.lose();
            snake.unshift({x:nx,y:ny});
            if (food && nx===food.x && ny===food.y) {
                score++;
                root.find('.g-score').text(score);
                setRecord('snake', score);
                root.find('.g-record').text(getRecord('snake'));
                this.placeFood();
            } else snake.pop();
            this.draw();
        };

        this.startLoop = function(){this.stopLoop(); var s=this; timer=setInterval(function(){s.tick();}, SPEED);};
        this.stopLoop  = function(){if(timer){clearInterval(timer);timer=null;}};
        this.lose = function(){gameOver=true;this.stopLoop();overlay.html(Lampa.Lang.translate('game_over')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');};
        this.setDir = function(x,y){if(snake.length>1&&dir.x+x===0&&dir.y+y===0)return;nextDir={x:x,y:y};};

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:function(){s.setDir(-1,0);}, right:function(){s.setDir(1,0);},
                up:function(){s.setDir(0,-1);}, down:function(){s.setDir(0,1);},
                enter:function(){if(gameOver){s.reset();}}
            });
            // Тач: свайп = поворот, тап = рестарт после Game Over
            this._detachTouch = attachTouch(root, {
                onSwipe: function(dir){
                    if (dir==='left')  s.setDir(-1,0);
                    if (dir==='right') s.setDir(1,0);
                    if (dir==='up')    s.setDir(0,-1);
                    if (dir==='down')  s.setDir(0,1);
                },
                onTap: function(){
                    if (gameOver) s.reset();
                }
            });
            this._r = function(){s.resize();s.draw();};
            $(window).on('resize', this._r);
            setTimeout(function(){if(!destroyed) s.reset();},50);
        };
        this.pause = function(){};
        this.destroy = function(){destroyed=true;this.stopLoop();if(this._detachTouch)this._detachTouch();$(window).off('resize',this._r);};
    };

    // ============================================================
    //                           ТЕТРИС
    // ============================================================
    GAMES.tetris = function (root) {
        var canvas, ctx, overlay;
        var COLS = 10, ROWS = 20, grid;
        var board, piece, score, lines, level, timer, dropDelay;
        var paused = false, gameOver = false, destroyed = false;

        var SHAPES = {
            I:{c:'#00bcd4', m:[[1,1,1,1]]},
            O:{c:'#ffeb3b', m:[[1,1],[1,1]]},
            T:{c:'#9c27b0', m:[[0,1,0],[1,1,1]]},
            S:{c:'#4caf50', m:[[0,1,1],[1,1,0]]},
            Z:{c:'#f44336', m:[[1,1,0],[0,1,1]]},
            L:{c:'#ff9800', m:[[1,0],[1,0],[1,1]]},
            J:{c:'#3f51b5', m:[[0,1],[0,1],[1,1]]}
        };
        var KEYS = ['I','O','T','S','Z','L','J'];

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>' + Lampa.Lang.translate('score') + ' <b class="g-score">0</b></span>' +
                    '<span>Линии: <b class="g-lines">0</b></span>' +
                    '<span>Уровень: <b class="g-level">1</b></span>' +
                    '<span>' + Lampa.Lang.translate('record') + ' <b class="g-record">' + getRecord('tetris') + '</b></span>' +
                    '<span class="g-hint">↑ — поворот, ↓ — ускорение, OK — поворот</span>' +
                  '</div>' +
                  '<div class="game-canvas-wrap"><canvas></canvas><div class="game-overlay"></div></div>' +
                '</div>'
            );
            canvas = root.find('canvas')[0];
            ctx = canvas.getContext('2d');
            overlay = root.find('.game-overlay');
            // reset делается из start() когда DOM готов
        };

        this.reset = function () {
            board = [];
            for (var y=0;y<ROWS;y++){var r=[];for(var x=0;x<COLS;x++)r.push(null);board.push(r);}
            score=0; lines=0; level=1; dropDelay=600;
            paused=false; gameOver=false;
            this.spawn();
            this.updateUI();
            this.resize(); this.draw();
            this.startLoop();
            overlay.removeClass('show').text('');
        };

        this.spawn = function () {
            var k = KEYS[Math.floor(Math.random()*KEYS.length)];
            var s = SHAPES[k];
            piece = {
                m: s.m.map(function(r){return r.slice();}),
                c: s.c,
                x: Math.floor((COLS - s.m[0].length)/2),
                y: 0
            };
            if (this.collide(piece, 0, 0)) { gameOver=true; this.stopLoop(); setRecord('tetris',score); overlay.html(Lampa.Lang.translate('game_over')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show'); }
        };

        this.collide = function (p, dx, dy, m) {
            var mat = m || p.m;
            for (var y=0;y<mat.length;y++) for (var x=0;x<mat[y].length;x++){
                if (!mat[y][x]) continue;
                var nx = p.x + x + dx, ny = p.y + y + dy;
                if (nx<0||nx>=COLS||ny>=ROWS) return true;
                if (ny>=0 && board[ny][nx]) return true;
            }
            return false;
        };

        this.merge = function () {
            for (var y=0;y<piece.m.length;y++) for (var x=0;x<piece.m[y].length;x++){
                if (piece.m[y][x] && piece.y+y >= 0) board[piece.y+y][piece.x+x] = piece.c;
            }
        };

        this.clearLines = function () {
            var cleared = 0;
            for (var y=ROWS-1;y>=0;y--){
                var full=true;
                for (var x=0;x<COLS;x++) if (!board[y][x]){full=false;break;}
                if (full) { board.splice(y,1); var nr=[];for(var k=0;k<COLS;k++)nr.push(null); board.unshift(nr); cleared++; y++; }
            }
            if (cleared) {
                var pts = [0,100,300,500,800][cleared] * level;
                score += pts; lines += cleared;
                level = 1 + Math.floor(lines/10);
                dropDelay = Math.max(80, 600 - (level-1)*50);
                setRecord('tetris', score);
                this.updateUI();
                this.startLoop();
            }
        };

        this.rotate = function () {
            var m = piece.m;
            var rotated = [];
            for (var x=0;x<m[0].length;x++){
                var row = [];
                for (var y=m.length-1;y>=0;y--) row.push(m[y][x]);
                rotated.push(row);
            }
            if (!this.collide(piece, 0, 0, rotated)) piece.m = rotated;
        };

        this.move = function (dx) { if (!this.collide(piece, dx, 0)) piece.x += dx; };
        this.softDrop = function () {
            if (!this.collide(piece, 0, 1)) { piece.y++; score++; this.updateUI(); }
            else { this.merge(); this.clearLines(); this.spawn(); }
            this.draw();
        };

        this.updateUI = function () {
            root.find('.g-score').text(score);
            root.find('.g-lines').text(lines);
            root.find('.g-level').text(level);
            root.find('.g-record').text(getRecord('tetris'));
        };

        this.resize = function () {
            var wrap = root.find('.game-canvas-wrap')[0];
            var rect = wrap.getBoundingClientRect();
            var maxH = Math.min(rect.height, window.innerHeight-200);
            var maxW = Math.min(rect.width, window.innerWidth-100);
            grid = Math.floor(Math.min(maxW/COLS, maxH/ROWS));
            if (grid<10) grid=10;
            canvas.width = grid*COLS; canvas.height = grid*ROWS;
        };

        this.draw = function () {
            ctx.fillStyle='#111'; ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.strokeStyle='rgba(255,255,255,0.04)';
            for (var i=1;i<COLS;i++){ctx.beginPath();ctx.moveTo(i*grid,0);ctx.lineTo(i*grid,canvas.height);ctx.stroke();}
            for (var j=1;j<ROWS;j++){ctx.beginPath();ctx.moveTo(0,j*grid);ctx.lineTo(canvas.width,j*grid);ctx.stroke();}
            for (var y=0;y<ROWS;y++) for (var x=0;x<COLS;x++) if (board[y][x]) drawCell(x,y,board[y][x]);
            if (piece) for (var py=0;py<piece.m.length;py++) for (var px=0;px<piece.m[py].length;px++)
                if (piece.m[py][px]) drawCell(piece.x+px, piece.y+py, piece.c);

            function drawCell(x,y,c){
                if (y<0) return;
                ctx.fillStyle=c;
                ctx.fillRect(x*grid+1, y*grid+1, grid-2, grid-2);
            }
        };

        this.startLoop = function(){
            this.stopLoop();
            var s=this;
            timer = setInterval(function(){
                if (paused||gameOver||destroyed) return;
                if (!s.collide(piece,0,1)) piece.y++;
                else { s.merge(); s.clearLines(); s.spawn(); }
                s.draw();
            }, dropDelay);
        };
        this.stopLoop = function(){if(timer){clearInterval(timer);timer=null;}};

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){if(!gameOver){s.move(-1);s.draw();}},
                right: function(){if(!gameOver){s.move(1);s.draw();}},
                up:    function(){if(!gameOver){s.rotate();s.draw();}},
                down:  function(){if(!gameOver) s.softDrop();},
                enter: function(){
                    if (gameOver){s.reset();return;}
                    s.rotate(); s.draw();
                }
            });
            // Тач: свайп влево/вправо/вниз = движение, свайп вверх = поворот, тап = поворот
            this._detachTouch = attachTouch(root, {
                onSwipe: function(dir){
                    if (gameOver) return;
                    if (dir==='left') { s.move(-1); s.draw(); }
                    else if (dir==='right') { s.move(1); s.draw(); }
                    else if (dir==='up') { s.rotate(); s.draw(); }
                    else if (dir==='down') s.softDrop();
                },
                onTap: function(){
                    if (gameOver){s.reset();return;}
                    s.rotate(); s.draw();
                }
            });
            this._r = function(){s.resize();s.draw();};
            $(window).on('resize', this._r);
            setTimeout(function(){if(!destroyed) s.reset();},50);
        };
        this.pause = function(){};
        this.destroy = function(){destroyed=true;this.stopLoop();if(this._detachTouch)this._detachTouch();$(window).off('resize',this._r);};
    };

    // ============================================================
    //                           PAC-MAN
    // ============================================================
    GAMES.pacman = function (root) {
        // Простая карта 19x15: # стена, . точка, o энергайзер, ' ' пусто
        var MAP = [
            "###################",
            "#........#........#",
            "#o##.###.#.###.##o#",
            "#.................#",
            "#.##.#.#####.#.##.#",
            "#....#...#...#....#",
            "####.### # ###.####",
            "   #.#       #.#   ",
            "####.# ##=## #.####",
            "#....  #   #  ....#",
            "#.####.#####.####.#",
            "#o..#...P...#...o#".replace('P','.'),
            "##.#.#.#####.#.#.##",
            "#....#...#...#....#",
            "###################"
        ];
        var COLS = MAP[0].length, ROWS = MAP.length;
        var canvas, ctx, overlay;
        var grid, grid_field;
        var pac, ghosts, score, lives, dotsLeft, frightTimer;
        var dir, nextDir;
        var timer, paused=false, gameOver=false, won=false, destroyed=false;

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>' + Lampa.Lang.translate('score') + ' <b class="g-score">0</b></span>' +
                    '<span>Жизни: <b class="g-lives">3</b></span>' +
                    '<span>' + Lampa.Lang.translate('record') + ' <b class="g-record">' + getRecord('pacman') + '</b></span>' +
                    '<span class="g-hint">Стрелки — движение</span>' +
                  '</div>' +
                  '<div class="game-canvas-wrap"><canvas></canvas><div class="game-overlay"></div></div>' +
                '</div>'
            );
            canvas = root.find('canvas')[0];
            ctx = canvas.getContext('2d');
            overlay = root.find('.game-overlay');
            // reset делается из start() когда DOM готов
        };

        this.reset = function () {
            grid_field = [];
            for (var y=0;y<ROWS;y++){
                var row=[];
                for (var x=0;x<COLS;x++) row.push(MAP[y].charAt(x));
                grid_field.push(row);
            }
            // подсчёт точек
            dotsLeft = 0;
            for (var yy=0;yy<ROWS;yy++) for (var xx=0;xx<COLS;xx++)
                if (grid_field[yy][xx]==='.'||grid_field[yy][xx]==='o') dotsLeft++;

            pac = { x: 9, y: 11, px:9, py:11, t:0 };
            dir = {x:0,y:0}; nextDir = {x:0,y:0};
            ghosts = [
                { x:9, y:7, px:9, py:7, t:0, c:'#f44336', dir:{x:1,y:0}, mode:'normal', spawn:{x:9,y:7} },
                { x:8, y:7, px:8, py:7, t:0, c:'#ff9800', dir:{x:-1,y:0}, mode:'normal', spawn:{x:8,y:7} },
                { x:10,y:7, px:10,py:7, t:0, c:'#4fc3f7', dir:{x:0,y:1}, mode:'normal', spawn:{x:10,y:7} }
            ];
            score = 0; lives = 3; frightTimer = 0;
            paused=false; gameOver=false; won=false;
            this.updateUI();
            this.resize(); this.draw();
            this.startLoop();
            overlay.removeClass('show').text('');
        };

        this.cellAt = function (x,y) {
            if (y<0||y>=ROWS) return '#';
            if (x<0) x = COLS-1;
            if (x>=COLS) x = 0;
            return grid_field[y][x];
        };
        this.canMove = function (x,y,d) {
            var nx = x + d.x, ny = y + d.y;
            if (ny<0||ny>=ROWS) return false;
            if (nx<0) nx = COLS-1; if (nx>=COLS) nx=0;
            return grid_field[ny][nx] !== '#';
        };

        this.updateUI = function () {
            root.find('.g-score').text(score);
            root.find('.g-lives').text(lives);
            root.find('.g-record').text(getRecord('pacman'));
        };

        this.resize = function () {
            var wrap = root.find('.game-canvas-wrap')[0];
            var rect = wrap.getBoundingClientRect();
            var maxH = Math.min(rect.height, window.innerHeight-200);
            var maxW = Math.min(rect.width, window.innerWidth-100);
            grid = Math.floor(Math.min(maxW/COLS, maxH/ROWS));
            if (grid<14) grid=14;
            canvas.width = grid*COLS; canvas.height = grid*ROWS;
        };

        this.draw = function () {
            ctx.fillStyle='#000'; ctx.fillRect(0,0,canvas.width,canvas.height);
            for (var y=0;y<ROWS;y++) for (var x=0;x<COLS;x++){
                var c = grid_field[y][x];
                if (c==='#') {
                    ctx.fillStyle='#1a237e';
                    ctx.fillRect(x*grid, y*grid, grid, grid);
                    ctx.strokeStyle='#3949ab';
                    ctx.strokeRect(x*grid+1, y*grid+1, grid-2, grid-2);
                } else if (c==='.') {
                    ctx.fillStyle='#ffeb3b';
                    ctx.beginPath();
                    ctx.arc(x*grid+grid/2, y*grid+grid/2, Math.max(2,grid/8), 0, Math.PI*2);
                    ctx.fill();
                } else if (c==='o') {
                    ctx.fillStyle='#fff';
                    ctx.beginPath();
                    ctx.arc(x*grid+grid/2, y*grid+grid/2, Math.max(4,grid/4), 0, Math.PI*2);
                    ctx.fill();
                } else if (c==='=') {
                    ctx.fillStyle='#f48fb1';
                    ctx.fillRect(x*grid, y*grid+grid/2-2, grid, 4);
                }
            }
            // pac-man
            var pcx = (pac.px + (pac.x-pac.px)*pac.t)*grid + grid/2;
            var pcy = (pac.py + (pac.y-pac.py)*pac.t)*grid + grid/2;
            ctx.fillStyle='#ffeb3b';
            ctx.beginPath();
            var ang = Math.atan2(dir.y, dir.x) || 0;
            var mouth = 0.25 + 0.15*Math.sin(Date.now()/80);
            ctx.moveTo(pcx, pcy);
            ctx.arc(pcx, pcy, grid/2-2, ang+mouth, ang-mouth+Math.PI*2);
            ctx.closePath();
            ctx.fill();
            // ghosts
            ghosts.forEach(function(g){
                var gx = (g.px + (g.x-g.px)*g.t)*grid + grid/2;
                var gy = (g.py + (g.y-g.py)*g.t)*grid + grid/2;
                ctx.fillStyle = g.mode==='fright' ? '#1a237e' : g.c;
                ctx.beginPath();
                ctx.arc(gx, gy-2, grid/2-2, Math.PI, 0);
                ctx.lineTo(gx+grid/2-2, gy+grid/2-2);
                ctx.lineTo(gx+grid/4, gy+grid/3);
                ctx.lineTo(gx, gy+grid/2-2);
                ctx.lineTo(gx-grid/4, gy+grid/3);
                ctx.lineTo(gx-grid/2+2, gy+grid/2-2);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle='#fff';
                ctx.beginPath(); ctx.arc(gx-4, gy-2, 2, 0, Math.PI*2); ctx.fill();
                ctx.beginPath(); ctx.arc(gx+4, gy-2, 2, 0, Math.PI*2); ctx.fill();
            });
        };

        this.tick = function () {
            if (paused||gameOver||destroyed||won) return;

            // Pac-man плавно идёт
            pac.t += 0.2;
            if (pac.t >= 1) {
                pac.px = pac.x; pac.py = pac.y; pac.t = 0;
                // меняем направление, если можно
                if ((nextDir.x||nextDir.y) && this.canMove(pac.x, pac.y, nextDir)) dir = nextDir;
                if ((dir.x||dir.y) && this.canMove(pac.x, pac.y, dir)) {
                    pac.x += dir.x; pac.y += dir.y;
                    if (pac.x<0) pac.x = COLS-1; if (pac.x>=COLS) pac.x=0;
                }
                // съесть
                var c = grid_field[pac.y][pac.x];
                if (c==='.') { grid_field[pac.y][pac.x]=' '; score+=10; dotsLeft--; this.updateUI(); }
                else if (c==='o') {
                    grid_field[pac.y][pac.x]=' '; score+=50; dotsLeft--; this.updateUI();
                    frightTimer = 50;
                    ghosts.forEach(function(g){g.mode='fright';});
                }
                if (dotsLeft<=0) { won=true; this.stopLoop(); setRecord('pacman',score); overlay.html(Lampa.Lang.translate('game_level_passed')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show'); }
            }

            // призраки
            for (var i=0;i<ghosts.length;i++){
                var g = ghosts[i];
                g.t += g.mode==='fright' ? 0.13 : 0.18;
                if (g.t >= 1) {
                    g.px = g.x; g.py = g.y; g.t = 0;
                    // выбираем направление: исключаем разворот, выбираем валидное случайно
                    var opts = [{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}].filter(function(d){
                        return !(d.x+g.dir.x===0 && d.y+g.dir.y===0) && this.canMove(g.x,g.y,d);
                    }, this);
                    if (!opts.length) opts = [{x:-g.dir.x, y:-g.dir.y}];
                    // в обычном режиме предпочитаем направление к pac-man с шансом 60%
                    if (g.mode==='normal' && Math.random()<0.6) {
                        opts.sort(function(a,b){
                            var da = Math.abs(g.x+a.x-pac.x)+Math.abs(g.y+a.y-pac.y);
                            var db = Math.abs(g.x+b.x-pac.x)+Math.abs(g.y+b.y-pac.y);
                            return da-db;
                        });
                        g.dir = opts[0];
                    } else {
                        g.dir = opts[Math.floor(Math.random()*opts.length)];
                    }
                    g.x += g.dir.x; g.y += g.dir.y;
                    if (g.x<0) g.x=COLS-1; if (g.x>=COLS) g.x=0;
                }
            }

            // фрайт-таймер
            if (frightTimer>0){
                frightTimer--;
                if (frightTimer===0) ghosts.forEach(function(g){g.mode='normal';});
            }

            // столкновение
            for (var j=0;j<ghosts.length;j++){
                var gh = ghosts[j];
                if (gh.x===pac.x && gh.y===pac.y) {
                    if (gh.mode==='fright') {
                        score += 200; this.updateUI();
                        gh.x = gh.spawn.x; gh.y = gh.spawn.y; gh.px = gh.x; gh.py = gh.y; gh.t = 0; gh.mode='normal';
                    } else {
                        lives--; this.updateUI();
                        if (lives<=0) { gameOver=true; this.stopLoop(); setRecord('pacman',score); overlay.html(Lampa.Lang.translate('game_over')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show'); return; }
                        pac.x=9; pac.y=11; pac.px=pac.x; pac.py=pac.y; pac.t=0; dir={x:0,y:0}; nextDir={x:0,y:0};
                        ghosts.forEach(function(g){g.x=g.spawn.x;g.y=g.spawn.y;g.px=g.x;g.py=g.y;g.t=0;g.mode='normal';});
                        return;
                    }
                }
            }

            this.draw();
        };

        this.startLoop = function(){this.stopLoop(); var s=this; timer=setInterval(function(){s.tick();}, 50);};
        this.stopLoop = function(){if(timer){clearInterval(timer);timer=null;}};

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){nextDir={x:-1,y:0};},
                right: function(){nextDir={x:1,y:0};},
                up:    function(){nextDir={x:0,y:-1};},
                down:  function(){nextDir={x:0,y:1};},
                enter: function(){
                    if (gameOver||won){s.reset();return;}
                }
            });
            this._detachTouch = attachTouch(root, {
                onSwipe: function(dir){
                    if (dir==='left')  nextDir={x:-1,y:0};
                    if (dir==='right') nextDir={x:1,y:0};
                    if (dir==='up')    nextDir={x:0,y:-1};
                    if (dir==='down')  nextDir={x:0,y:1};
                },
                onTap: function(){
                    if (gameOver||won) s.reset();
                }
            });
            this._r = function(){s.resize();s.draw();};
            $(window).on('resize', this._r);
            setTimeout(function(){if(!destroyed) s.reset();},50);
        };
        this.pause = function(){};
        this.destroy = function(){destroyed=true;this.stopLoop();if(this._detachTouch)this._detachTouch();$(window).off('resize',this._r);};
    };

    // ============================================================
    //                            ТРОН
    // ============================================================
    // Игрок против бота. Каждый оставляет след, нельзя врезаться.
    GAMES.tron = function (root) {
        var canvas, ctx, overlay;
        var COLS=40, ROWS=30, grid;
        var board; // 0 пусто, 1 след игрока, 2 след бота
        var p, b; // {x,y,dir}
        var timer, paused=false, gameOver=false, destroyed=false;
        var roundScore = 0;

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>Победы: <b class="g-score">0</b></span>' +
                    '<span class="g-hint">Стрелки — поворот</span>' +
                  '</div>' +
                  '<div class="game-canvas-wrap"><canvas></canvas><div class="game-overlay"></div></div>' +
                '</div>'
            );
            canvas = root.find('canvas')[0];
            ctx = canvas.getContext('2d');
            overlay = root.find('.game-overlay');
            // reset делается из start() когда DOM готов
        };

        this.reset = function () {
            board = [];
            for (var y=0;y<ROWS;y++){var r=[];for(var x=0;x<COLS;x++)r.push(0);board.push(r);}
            p = { x:5, y:Math.floor(ROWS/2), dir:{x:1,y:0} };
            b = { x:COLS-6, y:Math.floor(ROWS/2), dir:{x:-1,y:0} };
            board[p.y][p.x]=1; board[b.y][b.x]=2;
            paused=false; gameOver=false;
            this.resize(); this.draw();
            this.startLoop();
            overlay.removeClass('show').text('');
        };

        this.resize = function () {
            var wrap = root.find('.game-canvas-wrap')[0];
            var rect = wrap.getBoundingClientRect();
            var maxH = Math.min(rect.height, window.innerHeight-200);
            var maxW = Math.min(rect.width, window.innerWidth-100);
            grid = Math.floor(Math.min(maxW/COLS, maxH/ROWS));
            if (grid<8) grid=8;
            canvas.width = grid*COLS; canvas.height = grid*ROWS;
        };

        this.draw = function () {
            ctx.fillStyle='#000'; ctx.fillRect(0,0,canvas.width,canvas.height);
            for (var y=0;y<ROWS;y++) for (var x=0;x<COLS;x++){
                if (board[y][x]===1) { ctx.fillStyle='#00e5ff'; ctx.fillRect(x*grid,y*grid,grid,grid); }
                else if (board[y][x]===2) { ctx.fillStyle='#ff5252'; ctx.fillRect(x*grid,y*grid,grid,grid); }
            }
            // головы поярче
            ctx.fillStyle='#fff';
            ctx.fillRect(p.x*grid+2, p.y*grid+2, grid-4, grid-4);
            ctx.fillRect(b.x*grid+2, b.y*grid+2, grid-4, grid-4);
        };

        this.botAI = function () {
            // выбирает направление, чтобы прожить дольше: считает свободные клетки в каждом направлении
            var opts = [{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}].filter(function(d){
                return !(d.x+b.dir.x===0 && d.y+b.dir.y===0);
            });
            var best = b.dir, bestScore = -1;
            for (var i=0;i<opts.length;i++){
                var d = opts[i];
                var nx = b.x+d.x, ny = b.y+d.y;
                if (nx<0||ny<0||nx>=COLS||ny>=ROWS) continue;
                if (board[ny][nx]) continue;
                // оценка: считаем доступные клетки flood-fill, но дёшево — до 30 шагов
                var score = floodCount(nx, ny, 40);
                if (score > bestScore) { bestScore = score; best = d; }
            }
            b.dir = best;

            function floodCount(sx, sy, limit) {
                var seen = {};
                var stack = [[sx,sy]];
                var cnt = 0;
                while (stack.length && cnt<limit) {
                    var c = stack.pop();
                    var key = c[0]+'_'+c[1];
                    if (seen[key]) continue;
                    if (c[0]<0||c[1]<0||c[0]>=COLS||c[1]>=ROWS) continue;
                    if (board[c[1]][c[0]]) continue;
                    seen[key]=1; cnt++;
                    stack.push([c[0]+1,c[1]]);
                    stack.push([c[0]-1,c[1]]);
                    stack.push([c[0],c[1]+1]);
                    stack.push([c[0],c[1]-1]);
                }
                return cnt;
            }
        };

        this.tick = function () {
            if (paused||gameOver||destroyed) return;
            this.botAI();
            var pn = {x:p.x+p.dir.x, y:p.y+p.dir.y};
            var bn = {x:b.x+b.dir.x, y:b.y+b.dir.y};
            var pDead = pn.x<0||pn.y<0||pn.x>=COLS||pn.y>=ROWS||board[pn.y][pn.x];
            var bDead = bn.x<0||bn.y<0||bn.x>=COLS||bn.y>=ROWS||board[bn.y][bn.x];
            if (pn.x===bn.x && pn.y===bn.y) { pDead = bDead = true; }
            if (pDead && bDead) return this.endRound(Lampa.Lang.translate('game_draw'));
            if (pDead) return this.endRound(Lampa.Lang.translate('game_defeat'));
            if (bDead) {
                roundScore++;
                root.find('.g-score').text(roundScore);
                return this.endRound(Lampa.Lang.translate('game_victory'));
            }
            p.x = pn.x; p.y = pn.y; board[p.y][p.x]=1;
            b.x = bn.x; b.y = bn.y; board[b.y][b.x]=2;
            this.draw();
        };

        this.endRound = function (text) {
            gameOver = true;
            this.stopLoop();
            overlay.html(text + '<br><span class="g-sub">OK — следующий раунд</span>').addClass('show');
        };

        this.startLoop = function(){this.stopLoop(); var s=this; timer=setInterval(function(){s.tick();}, 80);};
        this.stopLoop = function(){if(timer){clearInterval(timer);timer=null;}};

        this.setDir = function (x,y) {
            if (p.dir.x+x===0 && p.dir.y+y===0) return;
            p.dir = {x:x,y:y};
        };

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:function(){s.setDir(-1,0);},right:function(){s.setDir(1,0);},
                up:function(){s.setDir(0,-1);},down:function(){s.setDir(0,1);},
                enter: function(){
                    if (gameOver) s.reset();
                }
            });
            this._detachTouch = attachTouch(root, {
                onSwipe: function(dir){
                    if (dir==='left') s.setDir(-1,0);
                    if (dir==='right') s.setDir(1,0);
                    if (dir==='up') s.setDir(0,-1);
                    if (dir==='down') s.setDir(0,1);
                },
                onTap: function(){
                    if (gameOver) s.reset();
                }
            });
            this._r = function(){s.resize();s.draw();};
            $(window).on('resize', this._r);
            setTimeout(function(){if(!destroyed) s.reset();},50);
        };
        this.pause = function(){};
        this.destroy = function(){destroyed=true;this.stopLoop();if(this._detachTouch)this._detachTouch();$(window).off('resize',this._r);};
    };

    // ============================================================
    //                         МОРСКОЙ БОЙ
    // ============================================================
    GAMES.seabattle = function (root) {
        var SIZE = 10;
        var SHIPS = [4,3,3,2,2,2,1,1,1,1];
        var playerBoard, enemyBoard; // 0 пусто, 1 корабль, 2 промах, 3 попадание
        var playerShips, enemyShips;
        var cursor = {x:0, y:0};
        var aiState; // память бота
        var phase = 'play'; // 'play' | 'win' | 'lose'
        var turn = 'player';
        var info, overlay;

        this.create = function () {
            root.html(
                '<div class="game-wrap sea-wrap">' +
                  '<div class="game-info">' +
                    '<span class="sea-status">Ваш ход</span>' +
                    '<span class="g-hint">Стрелки — наводка, OK — выстрел</span>' +
                  '</div>' +
                  '<div class="sea-boards">' +
                    '<div class="sea-side"><div class="sea-title">Ваше поле</div><div class="sea-board sea-player"></div></div>' +
                    '<div class="sea-side"><div class="sea-title">Поле противника</div><div class="sea-board sea-enemy"></div></div>' +
                  '</div>' +
                  '<div class="game-overlay"></div>' +
                '</div>'
            );
            info = root.find('.sea-status');
            overlay = root.find('.game-overlay');
            this.reset();
        };

        this.reset = function () {
            playerBoard = makeBoard();
            enemyBoard = makeBoard();
            playerShips = placeShips(playerBoard);
            enemyShips = placeShips(enemyBoard);
            cursor = {x:0,y:0};
            aiState = { mode:'hunt', queue:[], hits:[] };
            phase = 'play'; turn = 'player';
            this.renderBoards();
            info.text(Lampa.Lang.translate('turn_yours'));
            overlay.removeClass('show').text('');

            function makeBoard() {
                var b=[]; for(var y=0;y<SIZE;y++){var r=[];for(var x=0;x<SIZE;x++)r.push(0);b.push(r);} return b;
            }
            function placeShips(b) {
                var ships = [];
                for (var s=0;s<SHIPS.length;s++) {
                    var len = SHIPS[s];
                    for (var attempt=0; attempt<200; attempt++){
                        var horiz = Math.random()<0.5;
                        var x = Math.floor(Math.random()*(horiz ? SIZE-len+1 : SIZE));
                        var y = Math.floor(Math.random()*(horiz ? SIZE : SIZE-len+1));
                        if (canPlace(b,x,y,len,horiz)) {
                            var cells=[];
                            for (var i=0;i<len;i++){
                                var cx = horiz?x+i:x, cy = horiz?y:y+i;
                                b[cy][cx]=1;
                                cells.push({x:cx,y:cy});
                            }
                            ships.push({cells:cells, hits:0});
                            break;
                        }
                    }
                }
                return ships;
            }
            function canPlace(b,x,y,len,horiz) {
                for (var i=-1;i<=len;i++) for (var j=-1;j<=1;j++){
                    var cx = horiz?x+i:x+j, cy = horiz?y+j:y+i;
                    if (cx<0||cy<0||cx>=SIZE||cy>=SIZE) continue;
                    if (b[cy][cx]===1) return false;
                }
                return true;
            }
        };

        this.renderBoards = function () {
            renderBoard(root.find('.sea-player'), playerBoard, false);
            renderBoard(root.find('.sea-enemy'),  enemyBoard,  true);
            var self = this;
            function renderBoard($el, board, hideShips) {
                var html = '<table class="sea-table">';
                for (var y=0;y<SIZE;y++){
                    html += '<tr>';
                    for (var x=0;x<SIZE;x++){
                        var v = board[y][x];
                        var cls = 'sea-cell';
                        if (hideShips) {
                            if (v===2) cls += ' sea-miss';
                            else if (v===3) cls += ' sea-hit';
                            if (cursor.x===x && cursor.y===y && phase==='play' && turn==='player') cls += ' sea-cursor';
                        } else {
                            if (v===1) cls += ' sea-ship';
                            else if (v===2) cls += ' sea-miss';
                            else if (v===3) cls += ' sea-hit';
                        }
                        var attrs = hideShips ? ' data-x="'+x+'" data-y="'+y+'"' : '';
                        html += '<td class="' + cls + '"' + attrs + '></td>';
                    }
                    html += '</tr>';
                }
                html += '</table>';
                $el.html(html);
            }
            // Тап по клетке вражеского поля = выстрел в эту клетку
            root.find('.sea-enemy td[data-x]').on('click touchend', function(e){
                e.preventDefault();
                if (phase!=='play' || turn!=='player') {
                    if (phase!=='play') self.reset();
                    return;
                }
                cursor.x = parseInt($(this).attr('data-x'), 10);
                cursor.y = parseInt($(this).attr('data-y'), 10);
                self.fire();
            });
        };

        this.fire = function () {
            if (phase!=='play' || turn!=='player') return;
            var x = cursor.x, y = cursor.y;
            if (enemyBoard[y][x]>=2) return; // уже стреляли
            var hit = enemyBoard[y][x]===1;
            enemyBoard[y][x] = hit ? 3 : 2;
            if (hit) {
                var sunk = this.checkSunk(enemyShips, enemyBoard, x, y);
                this.renderBoards();
                if (this.allSunk(enemyShips)) {
                    phase='win'; info.text(Lampa.Lang.translate('game_victory'));
                    overlay.html(Lampa.Lang.translate('game_you_won')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
                    return;
                }
                info.text(sunk ? Lampa.Lang.translate('sea_sunk_again') : Lampa.Lang.translate('sea_hit_again'));
            } else {
                turn='enemy';
                this.renderBoards();
                info.text(Lampa.Lang.translate('turn_opponent'));
                var s=this;
                setTimeout(function(){s.aiTurn();}, 600);
            }
        };

        this.checkSunk = function (ships, board, x, y) {
            for (var i=0;i<ships.length;i++){
                var s = ships[i];
                var has = false; var alive=0;
                for (var j=0;j<s.cells.length;j++){
                    var c = s.cells[j];
                    if (c.x===x && c.y===y) has=true;
                    if (board[c.y][c.x]!==3) alive++;
                }
                if (has && alive===0) return true;
            }
            return false;
        };

        this.allSunk = function (ships) {
            for (var i=0;i<ships.length;i++){
                for (var j=0;j<ships[i].cells.length;j++){
                    var c = ships[i].cells[j];
                    var board = (ships===enemyShips) ? enemyBoard : playerBoard;
                    if (board[c.y][c.x]===1) return false;
                }
            }
            return true;
        };

        this.aiTurn = function () {
            if (phase!=='play') return;
            var x,y;
            if (aiState.queue.length) {
                var t = aiState.queue.shift();
                x = t.x; y = t.y;
                if (playerBoard[y][x]>=2) { this.aiTurn(); return; }
            } else {
                aiState.mode='hunt';
                aiState.hits=[];
                // случайный выстрел в шахматном порядке
                var tries=0;
                do {
                    x = Math.floor(Math.random()*SIZE);
                    y = Math.floor(Math.random()*SIZE);
                    tries++;
                } while ((playerBoard[y][x]>=2 || (x+y)%2!==0) && tries<200);
                if (playerBoard[y][x]>=2) {
                    do { x = Math.floor(Math.random()*SIZE); y = Math.floor(Math.random()*SIZE); } while (playerBoard[y][x]>=2);
                }
            }
            var hit = playerBoard[y][x]===1;
            playerBoard[y][x] = hit ? 3 : 2;
            if (hit) {
                aiState.hits.push({x:x,y:y});
                var sunk = this.checkSunk(playerShips, playerBoard, x, y);
                if (sunk) {
                    aiState.mode='hunt'; aiState.queue=[]; aiState.hits=[];
                } else {
                    aiState.mode='target';
                    // добавляем соседей в очередь
                    var dirs = [{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}];
                    for (var k=0;k<dirs.length;k++){
                        var nx=x+dirs[k].x, ny=y+dirs[k].y;
                        if (nx>=0&&ny>=0&&nx<SIZE&&ny<SIZE && playerBoard[ny][nx]<2) {
                            aiState.queue.push({x:nx,y:ny});
                        }
                    }
                }
                this.renderBoards();
                if (this.allSunk(playerShips)) {
                    phase='lose'; info.text(Lampa.Lang.translate('game_defeat'));
                    overlay.html(Lampa.Lang.translate('game_you_lost')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
                    return;
                }
                var s=this;
                setTimeout(function(){s.aiTurn();}, 600);
            } else {
                turn='player';
                this.renderBoards();
                info.text(Lampa.Lang.translate('turn_yours'));
            }
        };

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){if(phase==='play'&&turn==='player'&&cursor.x>0){cursor.x--;s.renderBoards();}},
                right: function(){if(phase==='play'&&turn==='player'&&cursor.x<SIZE-1){cursor.x++;s.renderBoards();}},
                up:    function(){if(phase==='play'&&turn==='player'&&cursor.y>0){cursor.y--;s.renderBoards();}},
                down:  function(){if(phase==='play'&&turn==='player'&&cursor.y<SIZE-1){cursor.y++;s.renderBoards();}},
                enter: function(){
                    if (phase!=='play') { s.reset(); return; }
                    s.fire();
                }
            });
        };
        this.pause = function(){};
        this.destroy = function(){};
    };

    // ============================================================
    //                       КРЕСТИКИ-НОЛИКИ
    // ============================================================
    GAMES.tictac = function (root) {
        var board, cursor={x:0,y:0}, turn='X', phase='play';
        var info, overlay;

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span class="ttt-status">Ваш ход (X)</span>' +
                    '<span class="g-hint">Стрелки — выбор, OK — поставить</span>' +
                  '</div>' +
                  '<div class="ttt-board"></div>' +
                  '<div class="game-overlay"></div>' +
                '</div>'
            );
            info = root.find('.ttt-status');
            overlay = root.find('.game-overlay');
            this.reset();
        };

        this.reset = function () {
            board = [['','',''],['','',''],['','','']];
            cursor = {x:0,y:0}; turn='X'; phase='play';
            this.draw();
            info.text(Lampa.Lang.translate('turn_yours_x'));
            overlay.removeClass('show').text('');
        };

        this.draw = function () {
            var html = '';
            for (var y=0;y<3;y++) for (var x=0;x<3;x++){
                var cls = 'ttt-cell';
                if (cursor.x===x&&cursor.y===y&&phase==='play'&&turn==='X') cls += ' ttt-cursor';
                html += '<div class="' + cls + '" data-x="'+x+'" data-y="'+y+'">' + (board[y][x]||'') + '</div>';
            }
            root.find('.ttt-board').html(html);
            var self = this;
            root.find('.ttt-cell').on('click touchend', function(e){
                e.preventDefault();
                if (phase!=='play') { self.reset(); return; }
                if (turn!=='X') return;
                cursor.x = parseInt($(this).attr('data-x'), 10);
                cursor.y = parseInt($(this).attr('data-y'), 10);
                self.place();
            });
        };

        this.checkWin = function (mark) {
            for (var i=0;i<3;i++){
                if (board[i][0]===mark&&board[i][1]===mark&&board[i][2]===mark) return true;
                if (board[0][i]===mark&&board[1][i]===mark&&board[2][i]===mark) return true;
            }
            if (board[0][0]===mark&&board[1][1]===mark&&board[2][2]===mark) return true;
            if (board[0][2]===mark&&board[1][1]===mark&&board[2][0]===mark) return true;
            return false;
        };
        this.isFull = function () {
            for (var y=0;y<3;y++) for (var x=0;x<3;x++) if (!board[y][x]) return false;
            return true;
        };

        this.minimax = function (b, mark) {
            var opp = mark==='O'?'X':'O';
            // терминальные состояния
            if (winCheck(b,'O')) return {score: 1};
            if (winCheck(b,'X')) return {score:-1};
            if (full(b)) return {score: 0};
            var best = {score: mark==='O'?-Infinity:Infinity, x:-1, y:-1};
            for (var y=0;y<3;y++) for (var x=0;x<3;x++){
                if (!b[y][x]) {
                    b[y][x]=mark;
                    var r = this.minimax(b, opp);
                    b[y][x]='';
                    if (mark==='O' && r.score > best.score) best = {score:r.score, x:x, y:y};
                    if (mark==='X' && r.score < best.score) best = {score:r.score, x:x, y:y};
                }
            }
            return best;

            function winCheck(b, m) {
                for (var i=0;i<3;i++){
                    if (b[i][0]===m&&b[i][1]===m&&b[i][2]===m) return true;
                    if (b[0][i]===m&&b[1][i]===m&&b[2][i]===m) return true;
                }
                if (b[0][0]===m&&b[1][1]===m&&b[2][2]===m) return true;
                if (b[0][2]===m&&b[1][1]===m&&b[2][0]===m) return true;
                return false;
            }
            function full(b){for (var y=0;y<3;y++) for (var x=0;x<3;x++) if (!b[y][x]) return false; return true;}
        };

        this.aiMove = function () {
            var move = this.minimax(board, 'O');
            if (move.x>=0) board[move.y][move.x] = 'O';
            this.draw();
            if (this.checkWin('O')) { phase='lose'; info.text(Lampa.Lang.translate('game_defeat')); overlay.html(Lampa.Lang.translate('game_you_lost')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show'); return; }
            if (this.isFull()) { phase='draw'; info.text(Lampa.Lang.translate('game_draw')); overlay.html(Lampa.Lang.translate('game_draw')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show'); return; }
            turn='X'; info.text(Lampa.Lang.translate('turn_yours_x'));
        };

        this.place = function () {
            if (phase!=='play' || turn!=='X') return;
            if (board[cursor.y][cursor.x]) return;
            board[cursor.y][cursor.x] = 'X';
            this.draw();
            if (this.checkWin('X')) { phase='win'; info.text(Lampa.Lang.translate('game_victory')); overlay.html(Lampa.Lang.translate('game_you_won')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show'); return; }
            if (this.isFull()) { phase='draw'; info.text(Lampa.Lang.translate('game_draw')); overlay.html(Lampa.Lang.translate('game_draw')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show'); return; }
            turn='O'; info.text(Lampa.Lang.translate('turn_opponent'));
            var s=this;
            setTimeout(function(){s.aiMove();}, 400);
        };

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){if(phase==='play'&&turn==='X'&&cursor.x>0){cursor.x--;s.draw();}},
                right: function(){if(phase==='play'&&turn==='X'&&cursor.x<2){cursor.x++;s.draw();}},
                up:    function(){if(phase==='play'&&turn==='X'&&cursor.y>0){cursor.y--;s.draw();}},
                down:  function(){if(phase==='play'&&turn==='X'&&cursor.y<2){cursor.y++;s.draw();}},
                enter: function(){
                    if (phase!=='play') { s.reset(); return; }
                    s.place();
                }
            });
        };
        this.pause = function(){};
        this.destroy = function(){};
    };

    // ============================================================
    //                         FLAPPY BIRD
    // ============================================================
    GAMES.flappy = function (root) {
        var canvas, ctx, overlay;
        var W, H;
        var bird, pipes, score, timer;
        var paused=false, gameOver=false, destroyed=false, started=false;
        var GRAVITY = 0.5, JUMP = -8, PIPE_GAP = 160, PIPE_W = 60, PIPE_SPEED = 3;
        var spawnCounter = 0;

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>' + Lampa.Lang.translate('score') + ' <b class="g-score">0</b></span>' +
                    '<span>' + Lampa.Lang.translate('record') + ' <b class="g-record">' + getRecord('flappy') + '</b></span>' +
                    '<span class="g-hint">OK / стрелки — взмах</span>' +
                  '</div>' +
                  '<div class="game-canvas-wrap"><canvas></canvas><div class="game-overlay"></div></div>' +
                '</div>'
            );
            canvas = root.find('canvas')[0];
            ctx = canvas.getContext('2d');
            overlay = root.find('.game-overlay');
            // reset делается из start() когда DOM готов
        };

        this.resize = function () {
            var wrap = root.find('.game-canvas-wrap')[0];
            var rect = wrap.getBoundingClientRect();
            W = Math.floor(Math.min(rect.width, rect.height * 0.8));
            H = Math.floor(rect.height);
            if (W < 200) W = 400;
            if (H < 300) H = 600;
            canvas.width = W; canvas.height = H;
        };

        this.reset = function () {
            this.resize();
            bird = { x: W*0.25, y: H/2, vy: 0, r: 14 };
            pipes = [];
            score = 0; spawnCounter = 0;
            paused=false; gameOver=false; started=false;
            root.find('.g-score').text(0);
            this.draw();
            overlay.html(Lampa.Lang.translate('flappy_press')+'<br><span class="g-sub">'+Lampa.Lang.translate('flappy_to_fly')+'</span>').addClass('show');
            this.startLoop();
        };

        this.flap = function () {
            if (gameOver) { this.reset(); return; }
            if (!started) { started=true; overlay.removeClass('show').text(''); }
            if (paused) return;
            bird.vy = JUMP;
        };

        this.startLoop = function(){this.stopLoop(); var s=this; timer=setInterval(function(){s.tick();}, 1000/60);};
        this.stopLoop = function(){if(timer){clearInterval(timer);timer=null;}};

        this.tick = function () {
            if (paused||gameOver||destroyed) { this.draw(); return; }
            if (!started) { this.draw(); return; }

            bird.vy += GRAVITY;
            bird.y += bird.vy;

            spawnCounter++;
            if (spawnCounter > 90) {
                spawnCounter = 0;
                var gapY = 80 + Math.random() * (H - PIPE_GAP - 160);
                pipes.push({ x: W, gapY: gapY, passed: false });
            }

            for (var i=pipes.length-1;i>=0;i--) {
                pipes[i].x -= PIPE_SPEED;
                if (pipes[i].x + PIPE_W < 0) pipes.splice(i,1);
                else if (!pipes[i].passed && pipes[i].x + PIPE_W < bird.x) {
                    pipes[i].passed = true;
                    score++;
                    root.find('.g-score').text(score);
                    setRecord('flappy', score);
                    root.find('.g-record').text(getRecord('flappy'));
                }
            }

            // столкновения
            if (bird.y + bird.r > H || bird.y - bird.r < 0) return this.lose();
            for (var j=0;j<pipes.length;j++) {
                var p = pipes[j];
                if (bird.x + bird.r > p.x && bird.x - bird.r < p.x + PIPE_W) {
                    if (bird.y - bird.r < p.gapY || bird.y + bird.r > p.gapY + PIPE_GAP) return this.lose();
                }
            }
            this.draw();
        };

        this.lose = function () {
            gameOver = true;
            this.stopLoop();
            overlay.html(Lampa.Lang.translate('game_over')+'<br>'+Lampa.Lang.translate('score')+' '+score+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
        };

        this.draw = function () {
            // небо
            var grad = ctx.createLinearGradient(0,0,0,H);
            grad.addColorStop(0,'#4fc3f7'); grad.addColorStop(1,'#81d4fa');
            ctx.fillStyle = grad; ctx.fillRect(0,0,W,H);
            // трубы
            ctx.fillStyle = '#43a047';
            for (var i=0;i<pipes.length;i++) {
                var p = pipes[i];
                ctx.fillRect(p.x, 0, PIPE_W, p.gapY);
                ctx.fillRect(p.x, p.gapY + PIPE_GAP, PIPE_W, H - p.gapY - PIPE_GAP);
                ctx.fillStyle = '#2e7d32';
                ctx.fillRect(p.x-3, p.gapY-15, PIPE_W+6, 15);
                ctx.fillRect(p.x-3, p.gapY+PIPE_GAP, PIPE_W+6, 15);
                ctx.fillStyle = '#43a047';
            }
            // земля
            ctx.fillStyle = '#8d6e63';
            ctx.fillRect(0, H-20, W, 20);
            // птица
            ctx.fillStyle = '#ffeb3b';
            ctx.beginPath();
            ctx.arc(bird.x, bird.y, bird.r, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.beginPath();
            ctx.arc(bird.x+5, bird.y-3, 2, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#ff5722';
            ctx.beginPath();
            ctx.moveTo(bird.x+10, bird.y);
            ctx.lineTo(bird.x+18, bird.y-2);
            ctx.lineTo(bird.x+18, bird.y+2);
            ctx.closePath();
            ctx.fill();
        };

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){s.flap();},
                right: function(){s.flap();},
                up:    function(){s.flap();},
                down:  function(){s.flap();},
                enter: function(){s.flap();}
            });
            // Тач: любой тап или свайп = взмах
            this._detachTouch = attachTouch(root, {
                onTap: function(){ s.flap(); },
                onSwipe: function(){ s.flap(); }
            });
            this._r = function(){s.resize();s.draw();};
            $(window).on('resize', this._r);
            setTimeout(function(){if(!destroyed) s.reset();},50);
        };
        this.pause = function(){};
        this.destroy = function(){destroyed=true;this.stopLoop();if(this._detachTouch)this._detachTouch();$(window).off('resize',this._r);};
    };

    // ============================================================
    //                         DOODLE JUMP
    // ============================================================
    GAMES.doodle = function (root) {
        var canvas, ctx, overlay;
        var W, H;
        var player, platforms, score, height, timer;
        var paused=false, gameOver=false, destroyed=false;
        var keys = {left:false, right:false};
        var GRAVITY = 0.4, JUMP = -12, MOVE_SPEED = 5;

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>' + Lampa.Lang.translate('score') + ' <b class="g-score">0</b></span>' +
                    '<span>' + Lampa.Lang.translate('record') + ' <b class="g-record">' + getRecord('doodle') + '</b></span>' +
                    '<span class="g-hint">Стрелки — движение</span>' +
                  '</div>' +
                  '<div class="game-canvas-wrap"><canvas></canvas><div class="game-overlay"></div></div>' +
                '</div>'
            );
            canvas = root.find('canvas')[0];
            ctx = canvas.getContext('2d');
            overlay = root.find('.game-overlay');
            // reset делается из start() когда DOM готов
        };

        this.resize = function () {
            var wrap = root.find('.game-canvas-wrap')[0];
            var rect = wrap.getBoundingClientRect();
            W = Math.floor(Math.min(rect.width, rect.height * 0.8));
            H = Math.floor(rect.height);
            if (W < 200) W = 400;
            if (H < 300) H = 600;
            canvas.width = W; canvas.height = H;
        };

        this.reset = function () {
            this.resize();
            player = { x: W/2, y: H-100, vx:0, vy:0, w:30, h:30 };
            platforms = [];
            // стартовая платформа под игроком
            platforms.push({ x: W/2 - 40, y: H - 60, w: 80 });
            // случайные платформы
            for (var i=0;i<10;i++) {
                platforms.push({
                    x: Math.random()*(W-80),
                    y: H - 60 - (i+1)*60,
                    w: 80
                });
            }
            score = 0; height = 0;
            paused=false; gameOver=false;
            root.find('.g-score').text(0);
            this.draw();
            this.startLoop();
            overlay.removeClass('show').text('');
        };

        this.startLoop = function(){this.stopLoop(); var s=this; timer=setInterval(function(){s.tick();}, 1000/60);};
        this.stopLoop = function(){if(timer){clearInterval(timer);timer=null;}};

        this.tick = function () {
            if (paused||gameOver||destroyed) return;

            // движение по горизонтали
            if (keys.left)  player.vx = -MOVE_SPEED;
            else if (keys.right) player.vx = MOVE_SPEED;
            else player.vx *= 0.8;

            player.x += player.vx;
            if (player.x < -player.w) player.x = W;
            if (player.x > W) player.x = -player.w;

            // гравитация
            player.vy += GRAVITY;
            player.y += player.vy;

            // прокрутка экрана вверх когда игрок поднялся
            if (player.y < H/2 && player.vy < 0) {
                var dy = H/2 - player.y;
                player.y = H/2;
                height += dy;
                for (var i=0;i<platforms.length;i++) platforms[i].y += dy;
                score = Math.floor(height/10);
                root.find('.g-score').text(score);
                setRecord('doodle', score);
                root.find('.g-record').text(getRecord('doodle'));
            }

            // удалить ушедшие платформы и сгенерировать новые
            for (var j=platforms.length-1;j>=0;j--) {
                if (platforms[j].y > H) platforms.splice(j,1);
            }
            while (platforms.length < 10) {
                var topY = Math.min.apply(null, platforms.map(function(p){return p.y;}));
                platforms.push({
                    x: Math.random()*(W-80),
                    y: topY - 60 - Math.random()*30,
                    w: 80
                });
            }

            // приземление на платформы (только при падении)
            if (player.vy > 0) {
                for (var k=0;k<platforms.length;k++) {
                    var p = platforms[k];
                    if (player.x + player.w > p.x && player.x < p.x + p.w &&
                        player.y + player.h > p.y && player.y + player.h < p.y + 12) {
                        player.vy = JUMP;
                    }
                }
            }

            // падение за низ экрана = смерть
            if (player.y > H) return this.lose();

            this.draw();
        };

        this.lose = function () {
            gameOver = true;
            this.stopLoop();
            overlay.html(Lampa.Lang.translate('game_over')+'<br>'+Lampa.Lang.translate('score')+' '+score+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
        };

        this.draw = function () {
            ctx.fillStyle = '#e1f5fe'; ctx.fillRect(0,0,W,H);
            // платформы
            ctx.fillStyle = '#4caf50';
            for (var i=0;i<platforms.length;i++) {
                ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].w, 10);
            }
            // персонаж — простой кругляш с глазками
            ctx.fillStyle = '#ff6f00';
            ctx.fillRect(player.x, player.y, player.w, player.h);
            ctx.fillStyle = '#fff';
            ctx.fillRect(player.x+5, player.y+8, 6, 6);
            ctx.fillRect(player.x+19, player.y+8, 6, 6);
            ctx.fillStyle = '#000';
            ctx.fillRect(player.x+7, player.y+10, 3, 3);
            ctx.fillRect(player.x+21, player.y+10, 3, 3);
        };

        this.start = function () {
            var s = this;
            // на пульте нет keyup/keydown в привычном виде — делаем «толчок» по нажатию
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){player.vx = -MOVE_SPEED * 2;},
                right: function(){player.vx = MOVE_SPEED * 2;},
                enter: function(){
                    if (gameOver) s.reset();
                }
            });
            // Тач: удержание в левой/правой половине = движение туда
            // отпустить = стоп (через keys.left/right)
            this._detachTouch = attachTouch(root, {
                onTouchStart: function(x, y){
                    if (gameOver) { s.reset(); return; }
                    var rect = root[0].getBoundingClientRect();
                    if (x < rect.width / 2) { keys.left = true; keys.right = false; }
                    else { keys.right = true; keys.left = false; }
                },
                onDrag: function(x, y){
                    var rect = root[0].getBoundingClientRect();
                    if (x < rect.width / 2) { keys.left = true; keys.right = false; }
                    else { keys.right = true; keys.left = false; }
                },
                onTouchEnd: function(){
                    keys.left = false; keys.right = false;
                }
            });
            this._r = function(){s.resize();s.draw();};
            $(window).on('resize', this._r);
            setTimeout(function(){if(!destroyed) s.reset();},50);
        };
        this.pause = function(){};
        this.destroy = function(){destroyed=true;this.stopLoop();if(this._detachTouch)this._detachTouch();$(window).off('resize',this._r);};
    };

    // ============================================================
    //                          АРКАНОИД
    // ============================================================
    GAMES.arkanoid = function (root) {
        var canvas, ctx, overlay;
        var W, H;
        var paddle, ball, blocks, lives, score, level, timer;
        var paused=false, gameOver=false, destroyed=false, ballLaunched=false;

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>' + Lampa.Lang.translate('score') + ' <b class="g-score">0</b></span>' +
                    '<span>Жизни: <b class="g-lives">3</b></span>' +
                    '<span>Уровень: <b class="g-level">1</b></span>' +
                    '<span>' + Lampa.Lang.translate('record') + ' <b class="g-record">' + getRecord('arkanoid') + '</b></span>' +
                    '<span class="g-hint">Стрелки — платформа, OK — запуск мяча</span>' +
                  '</div>' +
                  '<div class="game-canvas-wrap"><canvas></canvas><div class="game-overlay"></div></div>' +
                '</div>'
            );
            canvas = root.find('canvas')[0];
            ctx = canvas.getContext('2d');
            overlay = root.find('.game-overlay');
            // reset() вызовется в start() — к этому моменту DOM готов и getBoundingClientRect даст реальные размеры
        };

        this.resize = function () {
            var wrap = root.find('.game-canvas-wrap')[0];
            var rect = wrap.getBoundingClientRect();
            var newW = Math.floor(rect.width);
            var newH = Math.floor(rect.height);
            if (newW < 300) newW = 600;
            if (newH < 300) newH = 500;
            // если размеры реально поменялись и игра уже инициализирована — пересчитаем геометрию
            var prevW = W, prevH = H;
            W = newW; H = newH;
            canvas.width = W; canvas.height = H;
            if (paddle && (prevW !== W || prevH !== H)) {
                // пересчитаем размеры платформы и мяча
                var pw = Math.max(80, Math.floor(W / 7));
                var ph = Math.max(12, Math.floor(pw / 8));
                var pr = Math.max(6, Math.floor(W / 80));
                paddle.w = pw;
                paddle.h = ph;
                paddle.y = H - ph - 18;
                if (paddle.x + paddle.w > W) paddle.x = W - paddle.w;
                if (paddle.x < 0) paddle.x = 0;
                paddle.speed = Math.max(8, Math.floor(W/80));
                ball.r = pr;
                if (!ballLaunched) {
                    ball.x = paddle.x + paddle.w/2;
                    ball.y = paddle.y - pr - 2;
                }
                // блоки тоже пересоберём, если были
                if (blocks && blocks.length) this.buildLevel();
            }
        };

        this.reset = function () {
            this.resize();
            // адаптивный размер платформы и мяча
            var pw = Math.max(80, Math.floor(W / 7));
            var ph = Math.max(12, Math.floor(pw / 8));
            var pr = Math.max(6, Math.floor(W / 80));
            paddle = { x: W/2 - pw/2, y: H - ph - 18, w: pw, h: ph, speed: Math.max(8, Math.floor(W/80)) };
            ball = { x: W/2, y: paddle.y - pr - 2, vx: 0, vy: 0, r: pr };
            ballLaunched = false;
            blocks = [];
            score = 0; lives = 3; level = 1;
            this.buildLevel();
            paused=false; gameOver=false;
            root.find('.g-score').text(0);
            root.find('.g-lives').text(3);
            root.find('.g-level').text(1);
            this.draw();
            this.startLoop();
            overlay.html(Lampa.Lang.translate('press_ok_to_start')).addClass('show');
        };

        this.buildLevel = function () {
            blocks = [];
            var cols = 10, rows = Math.min(3 + level, 8);
            var bw = (W - 40) / cols, bh = Math.max(20, Math.floor(H / 25));
            var colors = ['#f44336','#ff9800','#ffeb3b','#4caf50','#2196f3','#9c27b0','#00bcd4','#e91e63'];
            for (var y=0;y<rows;y++) for (var x=0;x<cols;x++) {
                blocks.push({
                    x: 20 + x*bw + 2,
                    y: 60 + y*bh + 2,
                    w: bw - 4,
                    h: bh - 4,
                    c: colors[y % colors.length]
                });
            }
        };

        this.launchBall = function () {
            ballLaunched = true;
            // скорость мяча зависит от размера поля (медленнее на больших экранах)
            var sp = Math.max(3, Math.floor(W / 200));
            ball.vx = (Math.random() < 0.5 ? -1 : 1) * sp;
            ball.vy = -sp - 1;
            overlay.removeClass('show').text('');
        };

        this.startLoop = function(){this.stopLoop(); var s=this; timer=setInterval(function(){s.tick();}, 1000/60);};
        this.stopLoop = function(){if(timer){clearInterval(timer);timer=null;}};

        this.tick = function () {
            if (paused||gameOver||destroyed) return;
            if (!ballLaunched) {
                ball.x = paddle.x + paddle.w/2;
                ball.y = paddle.y - ball.r - 2;
                this.draw();
                return;
            }

            ball.x += ball.vx;
            ball.y += ball.vy;

            // стены
            if (ball.x - ball.r < 0) { ball.x = ball.r; ball.vx *= -1; }
            if (ball.x + ball.r > W) { ball.x = W - ball.r; ball.vx *= -1; }
            if (ball.y - ball.r < 0) { ball.y = ball.r; ball.vy *= -1; }

            // платформа
            if (ball.y + ball.r > paddle.y && ball.y - ball.r < paddle.y + paddle.h &&
                ball.x > paddle.x && ball.x < paddle.x + paddle.w && ball.vy > 0) {
                ball.vy *= -1;
                ball.y = paddle.y - ball.r - 1;
                // отскок зависит от точки удара
                var hit = (ball.x - (paddle.x + paddle.w/2)) / (paddle.w/2);
                ball.vx = hit * 6;
            }

            // блоки
            for (var i=blocks.length-1;i>=0;i--) {
                var b = blocks[i];
                if (ball.x + ball.r > b.x && ball.x - ball.r < b.x + b.w &&
                    ball.y + ball.r > b.y && ball.y - ball.r < b.y + b.h) {
                    blocks.splice(i,1);
                    score += 10 * level;
                    root.find('.g-score').text(score);
                    setRecord('arkanoid', score);
                    root.find('.g-record').text(getRecord('arkanoid'));
                    // определяем сторону удара
                    var prevX = ball.x - ball.vx, prevY = ball.y - ball.vy;
                    if (prevX + ball.r <= b.x || prevX - ball.r >= b.x + b.w) ball.vx *= -1;
                    else ball.vy *= -1;
                    break;
                }
            }

            // потеря жизни
            if (ball.y - ball.r > H) {
                lives--;
                root.find('.g-lives').text(lives);
                if (lives <= 0) return this.lose();
                ballLaunched = false;
                ball.vx = 0; ball.vy = 0;
                overlay.html(Lampa.Lang.translate('lives_left')+' '+lives+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_continue')+'</span>').addClass('show');
            }

            // победа на уровне
            if (blocks.length === 0) {
                level++;
                root.find('.g-level').text(level);
                ballLaunched = false;
                ball.vx = 0; ball.vy = 0;
                this.buildLevel();
                overlay.html(Lampa.Lang.translate('level_n')+' '+level+'!<br><span class="g-sub">'+Lampa.Lang.translate('ok_continue')+'</span>').addClass('show');
            }

            this.draw();
        };

        this.lose = function () {
            gameOver = true;
            this.stopLoop();
            overlay.html(Lampa.Lang.translate('game_over')+'<br>'+Lampa.Lang.translate('score')+' '+score+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
        };

        this.draw = function () {
            ctx.fillStyle = '#0d1b2a'; ctx.fillRect(0,0,W,H);
            // блоки
            for (var i=0;i<blocks.length;i++) {
                var b = blocks[i];
                ctx.fillStyle = b.c;
                ctx.fillRect(b.x, b.y, b.w, b.h);
                ctx.strokeStyle = 'rgba(255,255,255,0.3)';
                ctx.strokeRect(b.x, b.y, b.w, b.h);
            }
            // платформа
            ctx.fillStyle = '#42a5f5';
            ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);
            // мяч
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
            ctx.fill();
        };

        this.movePaddle = function (dir) {
            paddle.x += dir * paddle.speed * 2;
            if (paddle.x < 0) paddle.x = 0;
            if (paddle.x + paddle.w > W) paddle.x = W - paddle.w;
            if (!ballLaunched) ball.x = paddle.x + paddle.w/2;
            this.draw();
        };

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){if(!gameOver) s.movePaddle(-1);},
                right: function(){if(!gameOver) s.movePaddle(1);},
                enter: function(){
                    if (gameOver) { s.reset(); return; }
                    if (!ballLaunched) { s.launchBall(); return; }
                    // во время игры OK ничего не делает
                }
            });
            // Тач: палец перемещает платформу под собой (drag); тап без drag = запуск мяча
            var didDrag = false;
            this._detachTouch = attachTouch(root, {
                onTouchStart: function(){ didDrag = false; },
                onDrag: function(x, y){
                    if (gameOver) return;
                    didDrag = true;
                    var canvasRect = canvas.getBoundingClientRect();
                    var rootRect = root[0].getBoundingClientRect();
                    var canvasX = x - (canvasRect.left - rootRect.left);
                    paddle.x = canvasX - paddle.w/2;
                    if (paddle.x < 0) paddle.x = 0;
                    if (paddle.x + paddle.w > W) paddle.x = W - paddle.w;
                    if (!ballLaunched) ball.x = paddle.x + paddle.w/2;
                    s.draw();
                },
                onTap: function(){
                    if (gameOver) { s.reset(); return; }
                    if (!ballLaunched) { s.launchBall(); return; }
                }
            });
            this._r = function(){s.resize();s.draw();};
            $(window).on('resize', this._r);
            // reset делается с задержкой — нужно дождаться чтобы DOM-элемент получил реальные размеры
            setTimeout(function(){if(!destroyed) s.reset();},50);
        };
        this.pause = function(){};
        this.destroy = function(){destroyed=true;this.stopLoop();if(this._detachTouch)this._detachTouch();$(window).off('resize',this._r);};
    };

    // ============================================================
    //                          ТАНЧИКИ
    // ============================================================
    // Карта 13x13 клеток. Каждая клетка — тайл стены/пусто.
    // Игрок стартует слева от штаба внизу. Штаб — 1 клетка в координатах (6,12).
    // Танк занимает 1 клетку, движется плавно по пикселям.
    GAMES.tanks = function (root) {
        var canvas, ctx, overlay;
        var COLS = 13, ROWS = 13, TILE;
        // тайлы: '.' пусто, 'B' кирпич, 'S' сталь, 'W' вода, 'T' куст, 'E' штаб
        var MAPS = [
            [
                ".............",
                ".BB.BB.BB.BB.",
                ".BB.BB.BB.BB.",
                ".BB.BBBBB.BB.",
                ".............",
                ".SS.....SS...",
                ".SS.WWW.SS...",
                ".....WWW.....",
                ".TTT.....TTT.",
                ".BB.BBBBB.BB.",
                ".BB.BB.BB.BB.",
                ".....B.B.....",
                ".....BEB....."
            ],
            [
                ".B.B.B.B.B.B.",
                ".B.B.B.B.B.B.",
                ".............",
                "SS.BB.BBB.SS.",
                "SS...........",
                "....WW.WW....",
                ".B..WW.WW..B.",
                ".B...........",
                ".TTTT...TTTT.",
                "..BB.BBB.BB..",
                ".............",
                ".....B.B.....",
                ".....BEB....."
            ]
        ];

        var field;            // массив [y][x] символ тайла
        var player;           // {px, py, dir, alive, cooldown}
        var enemies;          // [{px, py, dir, type, hp, alive, moveTimer, shootTimer}]
        var bullets;          // [{px, py, dx, dy, fromPlayer}]
        var bonus;            // {type, gx, gy, blink} | null
        var pressedDir;       // 'up'|'down'|'left'|'right'|null - текущее направление движения
        var enemiesLeft, score, lives, level;
        var freezeTimer, shieldTimer, fortifyTimer;
        var spawnTimer;
        var timer, paused, gameOver, won, destroyed;

        var DIRS = {
            up:    { dx:0,  dy:-1 },
            down:  { dx:0,  dy:1  },
            left:  { dx:-1, dy:0  },
            right: { dx:1,  dy:0  }
        };

        var ENEMY_SPAWNS = [{gx:0,gy:0}, {gx:6,gy:0}, {gx:12,gy:0}];
        var PLAYER_SPAWN = { gx:4, gy:12 };  // слева от штаба
        var EAGLE_POS    = { gx:6, gy:12 };

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>' + Lampa.Lang.translate('score') + ' <b class="g-score">0</b></span>' +
                    '<span>Жизни: <b class="g-lives">3</b></span>' +
                    '<span>Уровень: <b class="g-level">1</b></span>' +
                    '<span>Врагов: <b class="g-enemies">0</b></span>' +
                    '<span>' + Lampa.Lang.translate('record') + ' <b class="g-record">' + getRecord('tanks') + '</b></span>' +
                    '<span class="g-hint">Стрелки — едет/поворот, та же стрелка — стоп, OK — выстрел</span>' +
                  '</div>' +
                  '<div class="game-canvas-wrap"><canvas></canvas><div class="game-overlay"></div></div>' +
                '</div>'
            );
            canvas = root.find('canvas')[0];
            ctx = canvas.getContext('2d');
            overlay = root.find('.game-overlay');
            score = 0; lives = 3; level = 1;
            this.reset();
        };

        this.resize = function () {
            var wrap = root.find('.game-canvas-wrap')[0];
            var rect = wrap.getBoundingClientRect();
            var maxH = Math.min(rect.height, window.innerHeight - 200);
            var maxW = Math.min(rect.width, window.innerWidth - 100);
            TILE = Math.floor(Math.min(maxW/COLS, maxH/ROWS));
            if (TILE < 24) TILE = 24;
            canvas.width = TILE * COLS;
            canvas.height = TILE * ROWS;
        };

        this.reset = function () {
            this.loadMap((level - 1) % MAPS.length);
            player = {
                px: PLAYER_SPAWN.gx,
                py: PLAYER_SPAWN.gy,
                dir: 'up',
                alive: true,
                cooldown: 0
            };
            enemies = [];
            bullets = [];
            bonus = null;
            pressedDir = null;
            enemiesLeft = 10 + (level - 1) * 4;
            spawnTimer = 0;
            freezeTimer = 0;
            shieldTimer = 60;       // ~3 сек неуязвимости в начале
            fortifyTimer = 0;
            paused = false;
            gameOver = false;
            won = false;
            destroyed = false;
            this.updateUI();
            this.resize();
            this.draw();
            this.startLoop();
            overlay.removeClass('show').text('');
        };

        this.loadMap = function (idx) {
            var map = MAPS[idx];
            field = [];
            for (var y = 0; y < ROWS; y++) {
                var row = [];
                for (var x = 0; x < COLS; x++) {
                    row.push(map[y].charAt(x));
                }
                field.push(row);
            }
        };

        this.updateUI = function () {
            root.find('.g-score').text(score);
            root.find('.g-lives').text(lives);
            root.find('.g-level').text(level);
            root.find('.g-enemies').text(enemiesLeft);
            root.find('.g-record').text(getRecord('tanks'));
        };

        // Может ли тайл быть проходим для танка
        this.tileBlocks = function (gx, gy) {
            if (gx < 0 || gy < 0 || gx >= COLS || gy >= ROWS) return true;
            var c = field[gy][gx];
            return c === 'B' || c === 'S' || c === 'W' || c === 'E';
        };

        // Можно ли поставить танк (1x1) в позицию (px, py) в координатах клеток (могут быть дробные)
        this.canTankBeAt = function (px, py, ignoreTank) {
            // Проверяем 4 угла танка
            var corners = [
                { x: px,           y: py           },
                { x: px + 0.99,    y: py           },
                { x: px,           y: py + 0.99    },
                { x: px + 0.99,    y: py + 0.99    }
            ];
            for (var i = 0; i < corners.length; i++) {
                var gx = Math.floor(corners[i].x);
                var gy = Math.floor(corners[i].y);
                if (this.tileBlocks(gx, gy)) return false;
            }
            // другие танки
            var all = enemies.concat(player.alive ? [player] : []);
            for (var j = 0; j < all.length; j++) {
                var t = all[j];
                if (t === ignoreTank) continue;
                if (px + 1 > t.px && px < t.px + 1 && py + 1 > t.py && py < t.py + 1) return false;
            }
            return true;
        };

        // Двигаем танк на speed клеток в направлении dir.
        // Танк движется только если выровнен по сетке в перпендикулярной оси (для удобства поворота).
        this.moveTank = function (tank, dirName, speed) {
            var d = DIRS[dirName];
            // Поворот свободный — направление меняется сразу
            tank.dir = dirName;

            // Авто-выравнивание по сетке в перпендикулярной оси, если близко
            if (d.dx !== 0) {
                var ny = Math.round(tank.py);
                if (Math.abs(tank.py - ny) < speed) tank.py = ny;
            } else {
                var nx = Math.round(tank.px);
                if (Math.abs(tank.px - nx) < speed) tank.px = nx;
            }

            var newPx = tank.px + d.dx * speed;
            var newPy = tank.py + d.dy * speed;
            if (this.canTankBeAt(newPx, newPy, tank)) {
                tank.px = newPx;
                tank.py = newPy;
                return true;
            }
            return false;
        };

        this.fire = function (tank) {
            if (tank.cooldown > 0) return;
            // у каждого танка одновременно может летать только один свой снаряд
            for (var i = 0; i < bullets.length; i++) {
                if (tank === player && bullets[i].fromPlayer) return;
                if (tank !== player && bullets[i].owner === tank) return;
            }
            var d = DIRS[tank.dir];
            // снаряд вылетает из центра передней грани танка
            var bx = tank.px + 0.5 + d.dx * 0.5;
            var by = tank.py + 0.5 + d.dy * 0.5;
            bullets.push({
                px: bx, py: by,
                dx: d.dx, dy: d.dy,
                fromPlayer: tank === player,
                owner: tank
            });
            tank.cooldown = 12;
        };

        this.spawnEnemy = function () {
            if (enemiesLeft <= 0 || enemies.length >= 4) return;
            var free = ENEMY_SPAWNS.filter(function (sp) {
                return this.canTankBeAt(sp.gx, sp.gy);
            }, this);
            if (!free.length) return;
            var sp = free[Math.floor(Math.random() * free.length)];
            var r = Math.random();
            var type = 1;
            if (r > 0.85) type = 4;
            else if (r > 0.65) type = 3;
            else if (r > 0.4) type = 2;
            enemies.push({
                px: sp.gx, py: sp.gy,
                dir: 'down',
                type: type,
                hp: type === 3 ? 4 : 1,
                alive: true,
                moveTimer: 0,
                shootTimer: 30 + Math.floor(Math.random() * 60),
                spawnFlash: 30
            });
            enemiesLeft--;
            this.updateUI();
        };

        this.tick = function () {
            if (paused || gameOver || won || destroyed) return;

            if (freezeTimer > 0) freezeTimer--;
            if (shieldTimer > 0) shieldTimer--;
            if (fortifyTimer > 0) {
                fortifyTimer--;
                if (fortifyTimer === 0) this.fortifyEagle(false);
            }

            // спавн врагов
            spawnTimer--;
            if (spawnTimer <= 0) {
                this.spawnEnemy();
                spawnTimer = 120;
            }

            // игрок
            if (player.alive) {
                if (player.cooldown > 0) player.cooldown--;
                if (pressedDir) this.moveTank(player, pressedDir, 0.15);
                this.checkBonus();
            }

            // враги
            if (freezeTimer === 0) {
                for (var i = 0; i < enemies.length; i++) {
                    var e = enemies[i];
                    if (e.spawnFlash > 0) { e.spawnFlash--; continue; }
                    e.moveTimer--;
                    if (e.moveTimer <= 0) {
                        var dirs = ['up','down','left','right'];
                        if (Math.random() < 0.2 || !this.moveTank(e, e.dir, 0.1)) {
                            // пытаемся сменить направление, иногда в сторону штаба или игрока
                            if (Math.random() < 0.5) {
                                var tx = EAGLE_POS.gx, ty = EAGLE_POS.gy;
                                if (Math.random() < 0.5 && player.alive) { tx = player.px; ty = player.py; }
                                if (Math.abs(e.px - tx) > Math.abs(e.py - ty)) {
                                    dirs = [e.px > tx ? 'left' : 'right', e.py > ty ? 'up' : 'down'];
                                } else {
                                    dirs = [e.py > ty ? 'up' : 'down', e.px > tx ? 'left' : 'right'];
                                }
                            } else {
                                dirs.sort(function(){return Math.random()-0.5;});
                            }
                            for (var di = 0; di < dirs.length; di++) {
                                if (this.moveTank(e, dirs[di], 0.1)) break;
                            }
                        }
                        e.moveTimer = 0;
                    }
                    e.shootTimer--;
                    if (e.shootTimer <= 0) {
                        this.fire(e);
                        e.shootTimer = 50 + Math.floor(Math.random() * 80);
                    }
                }
            }

            // снаряды (двигаем в 2 шага по 0.3 для надёжности коллизий)
            for (var bi = bullets.length - 1; bi >= 0; bi--) {
                var b = bullets[bi];
                var hit = false;
                for (var step = 0; step < 2; step++) {
                    b.px += b.dx * 0.3;
                    b.py += b.dy * 0.3;
                    if (this.bulletCheck(b, bi)) { hit = true; break; }
                }
                if (hit) continue;
            }

            this.draw();

            // конец уровня
            if (enemiesLeft <= 0 && enemies.length === 0) {
                won = true;
                this.stopLoop();
                level++;
                setRecord('tanks', score);
                this.updateUI();
                overlay.html(Lampa.Lang.translate('game_level_passed')+'<br>'+Lampa.Lang.translate('score')+' '+score+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_next')+'</span>').addClass('show');
            }
        };

        this.bulletCheck = function (b, bi) {
            // вышел за границы
            if (b.px < 0 || b.py < 0 || b.px >= COLS || b.py >= ROWS) {
                bullets.splice(bi, 1);
                return true;
            }
            var gx = Math.floor(b.px), gy = Math.floor(b.py);
            var c = field[gy][gx];
            if (c === 'E') {
                bullets.splice(bi, 1);
                this.endGame(false);
                return true;
            }
            if (c === 'B') {
                field[gy][gx] = '.';
                bullets.splice(bi, 1);
                return true;
            }
            if (c === 'S') {
                bullets.splice(bi, 1);
                return true;
            }
            // игрок
            if (player.alive && !b.fromPlayer) {
                if (b.px >= player.px && b.px < player.px + 1 &&
                    b.py >= player.py && b.py < player.py + 1) {
                    bullets.splice(bi, 1);
                    if (shieldTimer > 0) return true;
                    this.playerHit();
                    return true;
                }
            }
            // враги
            if (b.fromPlayer) {
                for (var i = 0; i < enemies.length; i++) {
                    var e = enemies[i];
                    if (b.px >= e.px && b.px < e.px + 1 &&
                        b.py >= e.py && b.py < e.py + 1) {
                        bullets.splice(bi, 1);
                        e.hp--;
                        if (e.hp <= 0) {
                            if (e.type === 4) this.spawnBonus();
                            score += [0, 100, 200, 300, 400][e.type] || 100;
                            enemies.splice(i, 1);
                            this.updateUI();
                            setRecord('tanks', score);
                        }
                        return true;
                    }
                }
            }
            // снаряд об снаряд
            for (var bj = bi - 1; bj >= 0; bj--) {
                var b2 = bullets[bj];
                if (Math.abs(b.px - b2.px) < 0.5 && Math.abs(b.py - b2.py) < 0.5) {
                    bullets.splice(bi, 1);
                    bullets.splice(bj, 1);
                    return true;
                }
            }
            return false;
        };

        this.playerHit = function () {
            lives--;
            this.updateUI();
            if (lives <= 0) { this.endGame(false); return; }
            player.px = PLAYER_SPAWN.gx;
            player.py = PLAYER_SPAWN.gy;
            player.dir = 'up';
            shieldTimer = 60;
            pressedDir = null;
        };

        this.endGame = function (victory) {
            gameOver = true;
            this.stopLoop();
            setRecord('tanks', score);
            overlay.html((victory ? Lampa.Lang.translate('game_victory') : Lampa.Lang.translate('game_over'))+'<br>'+Lampa.Lang.translate('score')+' '+score+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
        };

        this.spawnBonus = function () {
            var types = ['star','helmet','shovel','grenade','clock','tank'];
            var t = types[Math.floor(Math.random() * types.length)];
            for (var attempt = 0; attempt < 50; attempt++) {
                var x = Math.floor(Math.random() * COLS);
                var y = Math.floor(Math.random() * ROWS);
                var c = field[y][x];
                if (c === '.' || c === 'T') {
                    bonus = { type: t, gx: x, gy: y, timer: 600 };
                    return;
                }
            }
        };

        this.checkBonus = function () {
            if (!bonus || !player.alive) return;
            if (player.px + 1 > bonus.gx && player.px < bonus.gx + 1 &&
                player.py + 1 > bonus.gy && player.py < bonus.gy + 1) {
                this.applyBonus(bonus.type);
                bonus = null;
            }
        };

        this.applyBonus = function (type) {
            score += 500;
            if (type === 'star')    shieldTimer = 60;
            else if (type === 'helmet')  shieldTimer = 600;
            else if (type === 'shovel')  { this.fortifyEagle(true); fortifyTimer = 600; }
            else if (type === 'grenade') {
                for (var i = 0; i < enemies.length; i++) score += 100;
                enemies = [];
            }
            else if (type === 'clock')   freezeTimer = 600;
            else if (type === 'tank')    lives++;
            this.updateUI();
            setRecord('tanks', score);
        };

        this.fortifyEagle = function (steel) {
            // стены вокруг штаба: (5,11),(6,11),(7,11),(5,12),(7,12)
            var walls = [{x:5,y:11},{x:6,y:11},{x:7,y:11},{x:5,y:12},{x:7,y:12}];
            for (var i = 0; i < walls.length; i++) {
                var w = walls[i];
                if (steel) {
                    if (field[w.y][w.x] !== 'E') field[w.y][w.x] = 'S';
                } else {
                    if (field[w.y][w.x] === 'S') field[w.y][w.x] = 'B';
                }
            }
        };

        // ---- Рисование ----
        this.draw = function () {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // тайлы (кроме кустов)
            for (var y = 0; y < ROWS; y++) for (var x = 0; x < COLS; x++) {
                var c = field[y][x];
                if (c === 'B') this.drawBrick(x, y);
                else if (c === 'S') this.drawSteel(x, y);
                else if (c === 'W') this.drawWater(x, y);
                else if (c === 'E') this.drawEagle(x, y);
            }

            // бонус
            if (bonus) {
                bonus.timer--;
                if (bonus.timer <= 0) bonus = null;
                else if (Math.floor(bonus.timer / 8) % 2 === 0) this.drawBonus(bonus);
            }

            // игрок
            if (player.alive) {
                this.drawTank(player.px, player.py, player.dir, '#ffd54f', '#f57c00');
                if (shieldTimer > 0 && Math.floor(shieldTimer / 4) % 2 === 0) {
                    ctx.strokeStyle = '#fff';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(player.px * TILE - 1, player.py * TILE - 1, TILE + 2, TILE + 2);
                }
            }

            // враги
            var ECOL = {
                1: ['#bdbdbd', '#616161'],
                2: ['#ff8a65', '#bf360c'],
                3: ['#90a4ae', '#263238'],
                4: ['#fff59d', '#f57f17']
            };
            for (var ei = 0; ei < enemies.length; ei++) {
                var e = enemies[ei];
                if (e.spawnFlash > 0) {
                    // мерцание при появлении
                    if (Math.floor(e.spawnFlash / 4) % 2 === 0) {
                        ctx.fillStyle = '#fff';
                        ctx.fillRect(e.px * TILE + 4, e.py * TILE + 4, TILE - 8, TILE - 8);
                    }
                    continue;
                }
                var col = ECOL[e.type] || ECOL[1];
                if (e.type === 4 && Math.floor(Date.now() / 200) % 2 === 0) col = ['#fff', '#f00'];
                this.drawTank(e.px, e.py, e.dir, col[0], col[1]);
            }

            // снаряды
            ctx.fillStyle = '#fff';
            for (var bi = 0; bi < bullets.length; bi++) {
                var b = bullets[bi];
                var s = TILE * 0.2;
                ctx.fillRect(b.px * TILE - s/2, b.py * TILE - s/2, s, s);
            }

            // кусты сверху (танки прячутся)
            for (var y2 = 0; y2 < ROWS; y2++) for (var x2 = 0; x2 < COLS; x2++) {
                if (field[y2][x2] === 'T') this.drawBush(x2, y2);
            }
        };

        this.drawBrick = function (x, y) {
            var px = x * TILE, py = y * TILE;
            ctx.fillStyle = '#8d4e2f';
            ctx.fillRect(px, py, TILE, TILE);
            ctx.fillStyle = '#5d2d15';
            ctx.fillRect(px, py + TILE/2 - 1, TILE, 1);
            ctx.fillRect(px + TILE/2 - 1, py, 1, TILE/2);
            ctx.fillRect(px + TILE/4, py + TILE/2, 1, TILE/2);
            ctx.fillRect(px + 3*TILE/4, py + TILE/2, 1, TILE/2);
        };

        this.drawSteel = function (x, y) {
            var px = x * TILE, py = y * TILE;
            ctx.fillStyle = '#9e9e9e';
            ctx.fillRect(px, py, TILE, TILE);
            ctx.fillStyle = '#cfd8dc';
            ctx.fillRect(px + 2, py + 2, TILE - 4, TILE - 4);
            ctx.fillStyle = '#616161';
            ctx.fillRect(px + 3, py + 3, 3, 3);
        };

        this.drawWater = function (x, y) {
            var t = Math.floor(Date.now() / 300) % 2;
            var px = x * TILE, py = y * TILE;
            ctx.fillStyle = t ? '#1976d2' : '#1565c0';
            ctx.fillRect(px, py, TILE, TILE);
            ctx.fillStyle = '#64b5f6';
            ctx.fillRect(px + 2, py + TILE/3, TILE/3, 1);
            ctx.fillRect(px + TILE/2, py + 2*TILE/3, TILE/3, 1);
        };

        this.drawBush = function (x, y) {
            var px = x * TILE, py = y * TILE;
            ctx.fillStyle = '#1b5e20';
            ctx.fillRect(px, py, TILE, TILE);
            ctx.fillStyle = '#2e7d32';
            for (var i = 0; i < 4; i++) {
                var dx = (i % 2) * TILE/2 + 4;
                var dy = Math.floor(i / 2) * TILE/2 + 4;
                ctx.fillRect(px + dx, py + dy, TILE/2 - 6, TILE/2 - 6);
            }
        };

        this.drawEagle = function (x, y) {
            var px = x * TILE, py = y * TILE;
            ctx.fillStyle = '#bdbdbd';
            ctx.fillRect(px, py, TILE, TILE);
            ctx.fillStyle = '#212121';
            ctx.fillRect(px + TILE/4, py + TILE/4, TILE/2, TILE/2);
            ctx.fillStyle = '#fbc02d';
            ctx.fillRect(px + TILE/2 - 2, py + TILE/2 - 4, 4, 6);
        };

        this.drawTank = function (px, py, dir, light, dark) {
            var x = px * TILE, y = py * TILE;
            var size = TILE;
            ctx.fillStyle = dark;
            ctx.fillRect(x, y, size, size);
            ctx.fillStyle = light;
            // Гусеницы и ствол по направлению
            if (dir === 'up' || dir === 'down') {
                ctx.fillRect(x + 2, y + 2, 4, size - 4);
                ctx.fillRect(x + size - 6, y + 2, 4, size - 4);
                ctx.fillStyle = dark;
                ctx.fillRect(x + 7, y + 4, size - 14, size - 8);
                ctx.fillStyle = light;
                ctx.fillRect(x + size/3, y + size/3, size/3, size/3);
                ctx.fillStyle = '#fff';
                if (dir === 'up')   ctx.fillRect(x + size/2 - 1, y, 2, size/2);
                else                ctx.fillRect(x + size/2 - 1, y + size/2, 2, size/2);
            } else {
                ctx.fillRect(x + 2, y + 2, size - 4, 4);
                ctx.fillRect(x + 2, y + size - 6, size - 4, 4);
                ctx.fillStyle = dark;
                ctx.fillRect(x + 4, y + 7, size - 8, size - 14);
                ctx.fillStyle = light;
                ctx.fillRect(x + size/3, y + size/3, size/3, size/3);
                ctx.fillStyle = '#fff';
                if (dir === 'left') ctx.fillRect(x, y + size/2 - 1, size/2, 2);
                else                ctx.fillRect(x + size/2, y + size/2 - 1, size/2, 2);
            }
        };

        this.drawBonus = function (b) {
            var px = b.gx * TILE, py = b.gy * TILE;
            ctx.fillStyle = '#fff';
            ctx.fillRect(px + 2, py + 2, TILE - 4, TILE - 4);
            ctx.fillStyle = '#000';
            ctx.font = Math.floor(TILE * 0.7) + 'px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var sym = { star:'★', helmet:'⛑', shovel:'⛏', grenade:'B', clock:'⏱', tank:'+' };
            ctx.fillText(sym[b.type] || '?', px + TILE/2, py + TILE/2);
            ctx.textAlign = 'start';
            ctx.textBaseline = 'alphabetic';
        };

        this.startLoop = function () {
            this.stopLoop();
            var s = this;
            timer = setInterval(function () { s.tick(); }, 50);
        };
        this.stopLoop = function () {
            if (timer) { clearInterval(timer); timer = null; }
        };

        // ---- Управление ----
        // На пульте Лампы нет события "клавиша отпущена".
        // Поэтому: нажатие стрелки = "ехать в эту сторону".
        // Повторное нажатие той же стрелки = "стоп".
        // Нажатие другой стрелки = смена направления.
        this.start = function () {
            var s = this;
            function setDir(d) {
                if (gameOver || won || paused) return;
                if (pressedDir === d) pressedDir = null;
                else pressedDir = d;
                // мгновенный поворот без движения, чтобы было видно что направление сменилось
                if (player.alive) player.dir = d;
            }
            setupController({
                toggle: function () {
                    Lampa.Controller.collectionSet(root);
                    Lampa.Controller.collectionFocus(false, root);
                },
                left:  function () { setDir('left'); },
                right: function () { setDir('right'); },
                up:    function () { setDir('up'); },
                down:  function () { setDir('down'); },
                enter: function () {
                    if (gameOver) { score = 0; lives = 3; level = 1; s.reset(); return; }
                    if (won)      { s.reset(); return; }
                    if (paused)   { paused = false; overlay.removeClass('show').text(''); return; }
                    s.fire(player);
                },
                back: function () {
                    Lampa.Activity.backward();
                }
            });
            // Тач: свайп = движение в эту сторону, тап = выстрел
            // Свайп в ту же сторону что текущее движение = стоп (через setDir)
            this._detachTouch = attachTouch(root, {
                onSwipe: function(dir){
                    if (gameOver) { score = 0; lives = 3; level = 1; s.reset(); return; }
                    if (won) { s.reset(); return; }
                    setDir(dir);
                },
                onTap: function(){
                    if (gameOver) { score = 0; lives = 3; level = 1; s.reset(); return; }
                    if (won)      { s.reset(); return; }
                    if (paused)   { paused = false; overlay.removeClass('show').text(''); return; }
                    s.fire(player);
                }
            });
            this._r = function () { s.resize(); s.draw(); };
            $(window).on('resize', this._r);
            setTimeout(function () { if (!destroyed) { s.resize(); s.draw(); } }, 50);
        };

        this.pause = function () {};
        this.destroy = function () {
            destroyed = true;
            this.stopLoop();
            if (this._detachTouch) this._detachTouch();
            if (this._r) $(window).off('resize', this._r);
        };
    };

    // ============================================================
    //                          MEMORY
    // ============================================================
    GAMES.memory = function (root) {
        var grid;        // массив карточек {value, flipped, matched}
        var COLS = 4, ROWS = 4;
        var first = null; // индекс первой открытой
        var second = null;
        var lock = false;
        var moves, matches, startTime, timerId;
        var cursor = 0;
        var info, overlay;
        var gameOver = false;

        // 16 эмодзи / символов для пар
        var SYMBOLS = ['🍎','🍌','🍇','🍒','🥝','🍓','🥑','🍑'];

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>Ходов: <b class="g-moves">0</b></span>' +
                    '<span>Время: <b class="g-time">0</b></span>' +
                    '<span>Найдено: <b class="g-matches">0</b>/8</span>' +
                    '<span>' + Lampa.Lang.translate('record') + ' <b class="g-record">' + (getRecord('memory')||'-') + '</b></span>' +
                    '<span class="g-hint">Стрелки/тап — выбор карточки</span>' +
                  '</div>' +
                  '<div class="memory-board"></div>' +
                  '<div class="game-overlay"></div>' +
                '</div>'
            );
            info = root.find('.game-info');
            overlay = root.find('.game-overlay');
            this.reset();
        };

        this.reset = function () {
            // создаём пары
            var pool = [];
            for (var i = 0; i < SYMBOLS.length; i++) {
                pool.push(SYMBOLS[i], SYMBOLS[i]);
            }
            // перемешиваем
            for (var j = pool.length - 1; j > 0; j--) {
                var k = Math.floor(Math.random() * (j + 1));
                var tmp = pool[j]; pool[j] = pool[k]; pool[k] = tmp;
            }
            grid = pool.map(function (v) { return { value: v, flipped: false, matched: false }; });
            first = null; second = null; lock = false;
            moves = 0; matches = 0; cursor = 0;
            startTime = Date.now();
            gameOver = false;
            this.updateUI();
            this.draw();
            overlay.removeClass('show').text('');
            if (timerId) clearInterval(timerId);
            var s = this;
            timerId = setInterval(function () {
                if (!gameOver) {
                    var sec = Math.floor((Date.now() - startTime) / 1000);
                    root.find('.g-time').text(sec);
                }
            }, 500);
        };

        this.updateUI = function () {
            root.find('.g-moves').text(moves);
            root.find('.g-matches').text(matches);
            var rec = getRecord('memory');
            root.find('.g-record').text(rec ? rec : '-');
        };

        this.draw = function () {
            var html = '';
            for (var i = 0; i < grid.length; i++) {
                var c = grid[i];
                var cls = 'memory-card';
                if (c.flipped || c.matched) cls += ' memory-card--open';
                if (c.matched) cls += ' memory-card--matched';
                if (i === cursor && !gameOver) cls += ' memory-card--cursor';
                var content = (c.flipped || c.matched) ? c.value : '';
                html += '<div class="' + cls + '" data-i="' + i + '">' + content + '</div>';
            }
            root.find('.memory-board').html(html);
            var s = this;
            root.find('.memory-card').on('click touchend', function(e){
                e.preventDefault();
                var i = parseInt($(this).attr('data-i'), 10);
                cursor = i;
                s.flip();
            });
        };

        this.flip = function () {
            if (lock || gameOver) return;
            var c = grid[cursor];
            if (c.flipped || c.matched) return;
            c.flipped = true;
            this.draw();
            if (first === null) {
                first = cursor;
                return;
            }
            // вторая карточка
            second = cursor;
            moves++;
            this.updateUI();
            if (grid[first].value === grid[second].value) {
                grid[first].matched = true;
                grid[second].matched = true;
                matches++;
                this.updateUI();
                first = null; second = null;
                if (matches === SYMBOLS.length) this.win();
            } else {
                lock = true;
                var s = this;
                setTimeout(function () {
                    grid[first].flipped = false;
                    grid[second].flipped = false;
                    first = null; second = null;
                    lock = false;
                    s.draw();
                }, 800);
            }
        };

        this.win = function () {
            gameOver = true;
            if (timerId) { clearInterval(timerId); timerId = null; }
            var sec = Math.floor((Date.now() - startTime) / 1000);
            // рекорд = меньше ходов лучше; если ходов одинаково — меньше времени
            var prev = getRecord('memory');
            if (!prev || moves < prev) {
                Lampa.Storage.set('games_record_memory', moves);
            }
            this.updateUI();
            overlay.html(Lampa.Lang.translate('game_victory')+'<br>'+Lampa.Lang.translate('moves_label')+' '+moves+', '+Lampa.Lang.translate('time_label').toLowerCase()+' '+sec+' '+Lampa.Lang.translate('seconds_short')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
        };

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){if(gameOver)return; if(cursor%COLS>0){cursor--;s.draw();}},
                right: function(){if(gameOver)return; if(cursor%COLS<COLS-1){cursor++;s.draw();}},
                up:    function(){if(gameOver)return; if(cursor>=COLS){cursor-=COLS;s.draw();}},
                down:  function(){if(gameOver)return; if(cursor<grid.length-COLS){cursor+=COLS;s.draw();}},
                enter: function(){if(gameOver){s.reset();return;} s.flip();}
            });
        };

        this.pause = function () {};
        this.destroy = function () { if (timerId) clearInterval(timerId); };
    };

    // ============================================================
    //                       SPACE INVADERS
    // ============================================================
    GAMES.invaders = function (root) {
        var canvas, ctx, overlay;
        var W, H;
        var player;       // {x, y, w, h, cooldown, alive}
        var aliens;       // [{x, y, alive, type}]
        var bullets;      // [{x, y, vy, fromPlayer}]
        var keys;         // {left, right}
        var shootHeld;    // зажата ли «стрельба»
        var direction;    // движение армии: 1 / -1
        var stepDown;     // флаг что нужно сместиться вниз
        var moveTimer, score, lives, level;
        var loopTimer, spawnTimer;
        var paused = false, gameOver = false, won = false, destroyed = false;

        var COLS_A = 8, ROWS_A = 4;
        var ALIEN_W = 24, ALIEN_H = 18;
        var ALIEN_GAP_X = 12, ALIEN_GAP_Y = 10;
        var ALIEN_TOP = 40;

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>' + Lampa.Lang.translate('score') + ' <b class="g-score">0</b></span>' +
                    '<span>Жизни: <b class="g-lives">3</b></span>' +
                    '<span>Уровень: <b class="g-level">1</b></span>' +
                    '<span>' + Lampa.Lang.translate('record') + ' <b class="g-record">' + getRecord('invaders') + '</b></span>' +
                    '<span class="g-hint">← → — движение, OK — выстрел</span>' +
                  '</div>' +
                  '<div class="game-canvas-wrap"><canvas></canvas><div class="game-overlay"></div></div>' +
                '</div>'
            );
            canvas = root.find('canvas')[0];
            ctx = canvas.getContext('2d');
            overlay = root.find('.game-overlay');
            score = 0; lives = 3; level = 1;
            this.reset();
        };

        this.resize = function () {
            var wrap = root.find('.game-canvas-wrap')[0];
            var rect = wrap.getBoundingClientRect();
            W = Math.floor(rect.width);
            H = Math.floor(rect.height);
            if (W < 320) W = 480;
            if (H < 400) H = 600;
            canvas.width = W; canvas.height = H;
        };

        this.reset = function () {
            this.resize();
            // делаем корабль крупнее и ставим выше дна, чтобы был виден на ТВ
            var pw = Math.max(48, Math.floor(W / 12));
            var ph = Math.max(20, Math.floor(pw / 2));
            player = { x: W/2 - pw/2, y: H - ph - 60, w: pw, h: ph, cooldown: 0, alive: true };
            aliens = [];
            // адаптивный размер пришельцев и расстановка
            var aw = Math.max(24, Math.floor(W / 18));
            var ah = Math.max(18, Math.floor(aw * 0.75));
            var gapX = Math.floor(aw * 0.5);
            var gapY = Math.floor(ah * 0.55);
            ALIEN_W = aw; ALIEN_H = ah;
            var totalW = COLS_A * aw + (COLS_A - 1) * gapX;
            var startX = (W - totalW) / 2;
            for (var r = 0; r < ROWS_A; r++) for (var c = 0; c < COLS_A; c++) {
                aliens.push({
                    col: c, row: r,
                    x: startX + c * (aw + gapX),
                    y: 50 + r * (ah + gapY),
                    alive: true,
                    type: r === 0 ? 3 : (r < 2 ? 2 : 1)
                });
            }
            bullets = [];
            keys = { left: false, right: false };
            shootHeld = false;
            direction = 1;
            stepDown = false;
            moveTimer = 0;
            spawnTimer = 0;
            paused = false; gameOver = false; won = false;
            this.updateUI();
            this.draw();
            this.startLoop();
            overlay.removeClass('show').text('');
        };

        this.updateUI = function () {
            root.find('.g-score').text(score);
            root.find('.g-lives').text(lives);
            root.find('.g-level').text(level);
            root.find('.g-record').text(getRecord('invaders'));
        };

        this.startLoop = function () {
            this.stopLoop();
            var s = this;
            loopTimer = setInterval(function () { s.tick(); }, 1000/60);
        };
        this.stopLoop = function () { if (loopTimer) { clearInterval(loopTimer); loopTimer = null; } };

        this.tick = function () {
            if (paused || gameOver || won || destroyed) return;

            // движение игрока
            if (player.cooldown > 0) player.cooldown--;
            if (keys.left)  player.x -= 4;
            if (keys.right) player.x += 4;
            if (player.x < 0) player.x = 0;
            if (player.x + player.w > W) player.x = W - player.w;

            // стрельба
            if (shootHeld && player.cooldown === 0) {
                bullets.push({ x: player.x + player.w/2 - 1, y: player.y, vy: -8, fromPlayer: true });
                player.cooldown = 25;
            }

            // движение армии — раз в N кадров (быстрее, чем меньше осталось)
            var alive = aliens.filter(function (a) { return a.alive; });
            if (alive.length === 0) {
                won = true;
                this.stopLoop();
                level++;
                setRecord('invaders', score);
                this.updateUI();
                overlay.html(Lampa.Lang.translate('game_level_passed')+'<br>'+Lampa.Lang.translate('score')+' '+score+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_next')+'</span>').addClass('show');
                return;
            }
            var moveInterval = Math.max(8, 30 - Math.floor((COLS_A * ROWS_A - alive.length) / 2) - level * 2);
            moveTimer++;
            if (moveTimer >= moveInterval) {
                moveTimer = 0;
                // проверим, надо ли спуститься
                var minX = Infinity, maxX = -Infinity;
                for (var i = 0; i < alive.length; i++) {
                    if (alive[i].x < minX) minX = alive[i].x;
                    if (alive[i].x + ALIEN_W > maxX) maxX = alive[i].x + ALIEN_W;
                }
                if ((direction > 0 && maxX + 8 >= W) || (direction < 0 && minX - 8 <= 0)) {
                    direction *= -1;
                    for (var j = 0; j < aliens.length; j++) aliens[j].y += 14;
                    // проверим достижение игрока
                    for (var k = 0; k < aliens.length; k++) {
                        if (aliens[k].alive && aliens[k].y + ALIEN_H >= player.y) {
                            return this.gameOverNow(false);
                        }
                    }
                } else {
                    for (var m = 0; m < aliens.length; m++) aliens[m].x += direction * 6;
                }
            }

            // стрельба пришельцев
            spawnTimer--;
            if (spawnTimer <= 0) {
                spawnTimer = Math.max(20, 80 - level * 5);
                if (alive.length) {
                    var shooter = alive[Math.floor(Math.random() * alive.length)];
                    bullets.push({ x: shooter.x + ALIEN_W/2 - 1, y: shooter.y + ALIEN_H, vy: 4, fromPlayer: false });
                }
            }

            // движение снарядов и коллизии
            for (var bi = bullets.length - 1; bi >= 0; bi--) {
                var b = bullets[bi];
                b.y += b.vy;
                if (b.y < -10 || b.y > H + 10) { bullets.splice(bi, 1); continue; }
                if (b.fromPlayer) {
                    for (var ai = 0; ai < aliens.length; ai++) {
                        var a = aliens[ai];
                        if (!a.alive) continue;
                        if (b.x > a.x && b.x < a.x + ALIEN_W && b.y > a.y && b.y < a.y + ALIEN_H) {
                            a.alive = false;
                            score += a.type * 10;
                            setRecord('invaders', score);
                            this.updateUI();
                            bullets.splice(bi, 1);
                            break;
                        }
                    }
                } else {
                    if (player.alive && b.x > player.x && b.x < player.x + player.w && b.y > player.y && b.y < player.y + player.h) {
                        bullets.splice(bi, 1);
                        lives--;
                        this.updateUI();
                        if (lives <= 0) { return this.gameOverNow(false); }
                    }
                }
            }

            this.draw();
        };

        this.gameOverNow = function (victory) {
            gameOver = true;
            this.stopLoop();
            setRecord('invaders', score);
            overlay.html((victory ? Lampa.Lang.translate('game_victory') : Lampa.Lang.translate('game_over'))+'<br>'+Lampa.Lang.translate('score')+' '+score+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
        };

        this.draw = function () {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, W, H);
            // звёзды
            ctx.fillStyle = 'rgba(255,255,255,0.4)';
            for (var s = 0; s < 30; s++) {
                var sx = (s * 73) % W;
                var sy = (s * 37) % H;
                ctx.fillRect(sx, sy, 1, 1);
            }
            // пришельцы
            for (var i = 0; i < aliens.length; i++) {
                var a = aliens[i];
                if (!a.alive) continue;
                var col = ['#4caf50','#ff9800','#f44336'][a.type - 1] || '#4caf50';
                ctx.fillStyle = col;
                ctx.fillRect(a.x + 2, a.y + 4, ALIEN_W - 4, ALIEN_H - 8);
                ctx.fillRect(a.x, a.y + 8, ALIEN_W, ALIEN_H - 14);
                ctx.fillRect(a.x + 4, a.y, 4, 4);
                ctx.fillRect(a.x + ALIEN_W - 8, a.y, 4, 4);
                // глаза
                ctx.fillStyle = '#000';
                ctx.fillRect(a.x + 6, a.y + 8, 3, 3);
                ctx.fillRect(a.x + ALIEN_W - 9, a.y + 8, 3, 3);
            }
            // снаряды
            for (var b = 0; b < bullets.length; b++) {
                ctx.fillStyle = bullets[b].fromPlayer ? '#fff' : '#ff5252';
                ctx.fillRect(bullets[b].x, bullets[b].y, 2, 6);
            }
            // игрок
            if (player.alive) {
                ctx.fillStyle = '#42a5f5';
                ctx.fillRect(player.x, player.y + 4, player.w, player.h - 4);
                ctx.fillRect(player.x + player.w/2 - 3, player.y, 6, 6);
            }
        };

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){
                    if (gameOver||won) return;
                    keys.left = true; keys.right = false;
                    setTimeout(function(){keys.left=false;}, 200);
                },
                right: function(){
                    if (gameOver||won) return;
                    keys.right = true; keys.left = false;
                    setTimeout(function(){keys.right=false;}, 200);
                },
                up:    function(){
                    // тоже выстрел для удобства
                    if (gameOver||won) { s.reset(); return; }
                    if (player.cooldown === 0) {
                        bullets.push({ x: player.x + player.w/2 - 1, y: player.y, vy: -8, fromPlayer: true });
                        player.cooldown = 25;
                    }
                },
                enter: function(){
                    if (gameOver||won) { s.reset(); return; }
                    if (player.cooldown === 0) {
                        bullets.push({ x: player.x + player.w/2 - 1, y: player.y, vy: -8, fromPlayer: true });
                        player.cooldown = 25;
                    }
                }
            });
            // тач
            this._detachTouch = attachTouch(root, {
                onTouchStart: function(x, y){
                    if (gameOver||won) return;
                    var rect = root[0].getBoundingClientRect();
                    if (x < rect.width / 2) { keys.left = true; keys.right = false; }
                    else { keys.right = true; keys.left = false; }
                    shootHeld = true; // непрерывная стрельба пока зажат экран
                },
                onDrag: function(x, y){
                    var rect = root[0].getBoundingClientRect();
                    if (x < rect.width / 2) { keys.left = true; keys.right = false; }
                    else { keys.right = true; keys.left = false; }
                },
                onTouchEnd: function(){
                    keys.left = false; keys.right = false; shootHeld = false;
                },
                onTap: function(){
                    if (gameOver||won) s.reset();
                }
            });
            this._r = function () { s.resize(); s.draw(); };
            $(window).on('resize', this._r);
            setTimeout(function(){if(!destroyed) s.reset();},50);
        };

        this.pause = function () {};
        this.destroy = function () {
            destroyed = true;
            this.stopLoop();
            if (this._detachTouch) this._detachTouch();
            if (this._r) $(window).off('resize', this._r);
        };
    };

    // ============================================================
    //                         CROSSY ROAD
    // ============================================================
    // Бесконечная прокрутка вверх. Полосы: трава (безопасно), дорога (машинки),
    // вода (нужны брёвна). Начало — несколько травяных полос. Камера скроллится
    // вместе с игроком, обратно вниз нельзя уйти за край экрана.
    GAMES.crossy = function (root) {
        var canvas, ctx, overlay;
        var TILE = 40;
        var COLS = 11;        // ширина поля в клетках
        var VISIBLE_ROWS = 12; // сколько рядов на экране
        var W, H;
        var lanes;             // массив полос (бесконечно генерируется вверх)
        var player;            // {col, row, animTimer, onLog}
        var camera;            // currentTopRow (плавающее число для плавной прокрутки)
        var cameraTarget;
        var rowsAdvanced;      // сколько рядов прошёл игрок (= счёт)
        var maxRowEver;        // максимальный достигнутый row
        var loopTimer;
        var paused = false, gameOver = false, destroyed = false;
        var moveTimer = 0;
        var idleTimer = 0;     // если стоишь на месте слишком долго — вылетаешь снизу

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>' + Lampa.Lang.translate('score') + ' <b class="g-score">0</b></span>' +
                    '<span>' + Lampa.Lang.translate('record') + ' <b class="g-record">' + getRecord('crossy') + '</b></span>' +
                    '<span class="g-hint">Стрелки/свайпы — движение</span>' +
                  '</div>' +
                  '<div class="game-canvas-wrap"><canvas></canvas><div class="game-overlay"></div></div>' +
                '</div>'
            );
            canvas = root.find('canvas')[0];
            ctx = canvas.getContext('2d');
            overlay = root.find('.game-overlay');
        };

        this.resize = function () {
            var wrap = root.find('.game-canvas-wrap')[0];
            var rect = wrap.getBoundingClientRect();
            // Поле вертикальное. Ширина — целое число клеток помещающихся в высоту
            H = Math.floor(rect.height);
            if (H < 300) H = 600;
            TILE = Math.max(28, Math.floor(H / VISIBLE_ROWS));
            W = TILE * COLS;
            // Если W не помещается по ширине — уменьшим TILE
            if (W > rect.width) {
                TILE = Math.floor(rect.width / COLS);
                if (TILE < 24) TILE = 24;
                W = TILE * COLS;
                H = TILE * VISIBLE_ROWS;
            }
            canvas.width = W;
            canvas.height = H;
        };

        this.reset = function () {
            this.resize();
            lanes = {};
            // Стартовые ряды — трава, чтобы было где стартовать без опасности
            // row=0 — стартовый. Игрок начинает на row=0.
            for (var r = -3; r <= 5; r++) {
                lanes[r] = this.makeLane(r, true);
            }
            for (var r2 = 6; r2 < 25; r2++) {
                lanes[r2] = this.makeLane(r2, false);
            }
            player = { col: Math.floor(COLS/2), row: 0, animTimer: 0, prevCol: Math.floor(COLS/2), prevRow: 0 };
            camera = -8;       // показываем 8 рядов выше игрока
            cameraTarget = -8;
            rowsAdvanced = 0;
            maxRowEver = 0;
            paused = false; gameOver = false;
            idleTimer = 0;
            this.updateUI();
            this.draw();
            this.startLoop();
            overlay.removeClass('show').text('');
        };

        this.makeLane = function (row, forceGrass) {
            // тип полосы: 0=трава, 1=дорога, 2=вода, 3=ж/д
            var type = 0;
            if (!forceGrass) {
                var r = Math.random();
                if (r < 0.45) type = 1;       // дорога — самые частые
                else if (r < 0.65) type = 2;  // вода
                else if (r < 0.72) type = 3;  // ж/д (редко)
                else type = 0;                // трава
            }
            var lane = { row: row, type: type, items: [], speed: 0, dir: Math.random() < 0.5 ? 1 : -1 };
            if (type === 1) {
                // дорога: 1-3 машины
                var count = 1 + Math.floor(Math.random() * 3);
                lane.speed = (0.04 + Math.random() * 0.06) * lane.dir;
                var spacing = COLS / count;
                for (var i = 0; i < count; i++) {
                    lane.items.push({ x: i * spacing + Math.random() * 0.5, len: 1 });
                }
            } else if (type === 2) {
                // вода: брёвна
                var count2 = 2 + Math.floor(Math.random() * 2);
                lane.speed = (0.025 + Math.random() * 0.025) * lane.dir;
                var len = 2 + Math.floor(Math.random() * 2);
                var spacing2 = COLS / count2;
                for (var j = 0; j < count2; j++) {
                    lane.items.push({ x: j * spacing2, len: len });
                }
            } else if (type === 3) {
                // ж/д: пока пустая, поезд появляется по таймеру
                lane.trainTimer = 100 + Math.floor(Math.random() * 100);
                lane.trainActive = false;
                lane.warning = false;
            } else {
                // трава: иногда добавляем дерево как препятствие
                if (Math.random() < 0.3) {
                    var tx = Math.floor(Math.random() * COLS);
                    lane.items.push({ x: tx, len: 1, isTree: true });
                }
            }
            return lane;
        };

        this.updateUI = function () {
            root.find('.g-score').text(rowsAdvanced);
            root.find('.g-record').text(getRecord('crossy'));
        };

        this.startLoop = function () {
            this.stopLoop();
            var s = this;
            loopTimer = setInterval(function () { s.tick(); }, 1000/30);
        };
        this.stopLoop = function () { if (loopTimer) { clearInterval(loopTimer); loopTimer = null; } };

        this.tick = function () {
            if (paused || gameOver || destroyed) return;

            // плавная прокрутка камеры
            cameraTarget = player.row - 8;
            if (cameraTarget > camera) {
                camera += Math.min(0.15, cameraTarget - camera);
            }

            // движение объектов на полосах в видимой области
            for (var key in lanes) {
                var lane = lanes[key];
                var r = parseInt(key, 10);
                if (r < camera - 2 || r > camera + VISIBLE_ROWS + 2) continue;
                if (lane.type === 1 || lane.type === 2) {
                    for (var i = 0; i < lane.items.length; i++) {
                        var it = lane.items[i];
                        it.x += lane.speed;
                        // wrap
                        if (lane.speed > 0 && it.x > COLS + 1) it.x = -it.len - 1;
                        if (lane.speed < 0 && it.x + it.len < -1) it.x = COLS + 1;
                    }
                } else if (lane.type === 3) {
                    // поезд
                    if (lane.trainTimer > 0) lane.trainTimer--;
                    if (!lane.trainActive && lane.trainTimer <= 0) {
                        // предупреждение
                        if (!lane.warning) { lane.warning = true; lane.warnTimer = 30; }
                        else if (lane.warnTimer > 0) { lane.warnTimer--; }
                        else {
                            // запускаем поезд
                            lane.trainActive = true;
                            lane.trainPos = lane.dir > 0 ? -8 : COLS;
                            lane.warning = false;
                        }
                    }
                    if (lane.trainActive) {
                        lane.trainPos += lane.dir * 0.6;
                        if ((lane.dir > 0 && lane.trainPos > COLS + 2) ||
                            (lane.dir < 0 && lane.trainPos < -10)) {
                            lane.trainActive = false;
                            lane.trainTimer = 80 + Math.floor(Math.random() * 120);
                        }
                    }
                }
            }

            // если игрок на бревне — двигается с ним
            var pl = lanes[player.row];
            if (pl && pl.type === 2 && player.onLog) {
                player.col += player.onLog.speed;
            }

            // проверка коллизий
            this.checkCollisions();

            // удалить далёкие полосы вниз и сгенерировать новые сверху
            var topRow = Math.floor(camera) - 5;
            var maxLaneRow = -Infinity;
            for (var k in lanes) {
                var rr = parseInt(k, 10);
                if (rr < topRow) delete lanes[k];
                if (rr > maxLaneRow) maxLaneRow = rr;
            }
            while (maxLaneRow < Math.ceil(camera) + VISIBLE_ROWS + 5) {
                maxLaneRow++;
                lanes[maxLaneRow] = this.makeLane(maxLaneRow, false);
            }

            // если игрок ушёл ниже видимой зоны (камера обогнала) — смерть
            if (player.row < camera - 1) {
                return this.die(Lampa.Lang.translate('crossy_camera'));
            }
            // или если съехал на бревне за край
            if (player.col < 0 || player.col >= COLS) {
                return this.die(Lampa.Lang.translate('crossy_offscreen'));
            }

            // движение игрока (для анимации перемещения)
            if (player.animTimer > 0) player.animTimer--;

            this.draw();
        };

        this.checkCollisions = function () {
            var lane = lanes[player.row];
            if (!lane) return;
            if (lane.type === 1) {
                // машинки
                for (var i = 0; i < lane.items.length; i++) {
                    var c = lane.items[i];
                    if (player.col + 0.7 > c.x && player.col + 0.3 < c.x + c.len) {
                        return this.die(Lampa.Lang.translate('crossy_car_hit'));
                    }
                }
                player.onLog = null;
            } else if (lane.type === 2) {
                // вода — нужно стоять на бревне
                var onLog = null;
                for (var j = 0; j < lane.items.length; j++) {
                    var lg = lane.items[j];
                    if (player.col + 0.5 >= lg.x && player.col + 0.5 < lg.x + lg.len) {
                        onLog = { speed: lane.speed };
                        break;
                    }
                }
                if (!onLog) return this.die(Lampa.Lang.translate('crossy_drowned'));
                player.onLog = onLog;
            } else if (lane.type === 3 && lane.trainActive) {
                // поезд (длиной 8 клеток)
                if (player.col + 0.5 > lane.trainPos && player.col + 0.5 < lane.trainPos + 8) {
                    return this.die(Lampa.Lang.translate('crossy_train'));
                }
                player.onLog = null;
            } else {
                player.onLog = null;
            }
        };

        this.die = function (reason) {
            gameOver = true;
            this.stopLoop();
            setRecord('crossy', rowsAdvanced);
            this.updateUI();
            overlay.html((reason || Lampa.Lang.translate('game_over'))+'<br>'+Lampa.Lang.translate('score')+' '+rowsAdvanced+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
        };

        this.move = function (dx, dy) {
            if (gameOver || paused) return;
            var nc = player.col + dx;
            var nr = player.row + dy;
            // нельзя уходить за края по горизонтали
            if (nc < 0 || nc >= COLS) return;
            // нельзя сильно назад (только до камеры + 1)
            if (nr < Math.ceil(camera)) return;
            // проверка дерева на новом месте
            var lane = lanes[nr];
            if (lane && lane.type === 0) {
                for (var i = 0; i < lane.items.length; i++) {
                    if (lane.items[i].isTree && Math.floor(lane.items[i].x) === nc) return;
                }
            }
            player.prevCol = player.col;
            player.prevRow = player.row;
            player.col = nc;
            player.row = nr;
            player.animTimer = 4;
            if (player.row > maxRowEver) {
                maxRowEver = player.row;
                rowsAdvanced = maxRowEver;
                this.updateUI();
            }
        };

        this.draw = function () {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, W, H);
            // рисуем полосы по убыванию row сверху (большие row выше)
            // экран: y = (camera + VISIBLE_ROWS - 1 - row) * TILE
            var topRow = Math.ceil(camera) + VISIBLE_ROWS;
            var botRow = Math.floor(camera) - 1;
            for (var r = topRow; r >= botRow; r--) {
                var lane = lanes[r];
                if (!lane) continue;
                var y = (camera + VISIBLE_ROWS - 1 - r) * TILE;
                this.drawLane(lane, y);
            }

            // игрок (с анимацией)
            var t = player.animTimer / 4;
            var pcol = player.col + (player.prevCol - player.col) * t;
            var prow = player.row + (player.prevRow - player.row) * t;
            // если на бревне — двигается с ним
            if (player.onLog && t === 0) {
                // позиция уже актуальная, ничего не меняем
            }
            var px = pcol * TILE + TILE/2;
            var py = (camera + VISIBLE_ROWS - 1 - prow) * TILE + TILE/2;
            // тень
            ctx.fillStyle = 'rgba(0,0,0,0.3)';
            ctx.beginPath();
            ctx.ellipse(px, py + TILE*0.35, TILE*0.3, TILE*0.1, 0, 0, Math.PI*2);
            ctx.fill();
            // тушка (курица)
            ctx.fillStyle = '#fafafa';
            ctx.fillRect(px - TILE*0.25, py - TILE*0.15, TILE*0.5, TILE*0.4);
            ctx.fillRect(px - TILE*0.18, py - TILE*0.35, TILE*0.36, TILE*0.25);
            // глаз
            ctx.fillStyle = '#000';
            ctx.fillRect(px + TILE*0.05, py - TILE*0.28, TILE*0.06, TILE*0.06);
            // клюв
            ctx.fillStyle = '#ff9800';
            ctx.fillRect(px + TILE*0.16, py - TILE*0.22, TILE*0.12, TILE*0.06);
            // гребешок
            ctx.fillStyle = '#f44336';
            ctx.fillRect(px - TILE*0.05, py - TILE*0.42, TILE*0.1, TILE*0.08);
        };

        this.drawLane = function (lane, y) {
            // фон
            var bgColor = '#43a047'; // трава
            if (lane.type === 1) bgColor = '#424242'; // дорога
            else if (lane.type === 2) bgColor = '#1565c0'; // вода
            else if (lane.type === 3) bgColor = '#5d4037'; // ж/д шпалы
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, y, W, TILE);

            if (lane.type === 1) {
                // разметка
                ctx.strokeStyle = 'rgba(255,242,0,0.7)';
                ctx.lineWidth = 2;
                ctx.setLineDash([8, 8]);
                ctx.beginPath();
                ctx.moveTo(0, y + TILE/2);
                ctx.lineTo(W, y + TILE/2);
                ctx.stroke();
                ctx.setLineDash([]);
                // машинки
                for (var i = 0; i < lane.items.length; i++) {
                    var c = lane.items[i];
                    var cx = c.x * TILE;
                    var cw = c.len * TILE;
                    // машина может уехать за край — отображаем wrap
                    drawCar(cx, cw);
                    if (cx + cw > W) drawCar(cx - W * 1, cw);
                    if (cx < 0) drawCar(cx + W, cw);
                }
            } else if (lane.type === 2) {
                // вода с волнами
                ctx.fillStyle = 'rgba(255,255,255,0.15)';
                for (var w = 0; w < W; w += 30) {
                    ctx.fillRect(w + ((Date.now()/100) % 30), y + TILE/2, 8, 1);
                }
                // брёвна
                for (var li = 0; li < lane.items.length; li++) {
                    var lg = lane.items[li];
                    var lx = lg.x * TILE;
                    var lw = lg.len * TILE;
                    drawLog(lx, lw);
                    if (lx + lw > W) drawLog(lx - W, lw);
                    if (lx < 0) drawLog(lx + W, lw);
                }
            } else if (lane.type === 3) {
                // шпалы
                ctx.fillStyle = '#3e2723';
                for (var sx = 0; sx < W; sx += TILE/2) {
                    ctx.fillRect(sx + 4, y + 4, TILE/2 - 8, TILE - 8);
                }
                // рельсы
                ctx.fillStyle = '#9e9e9e';
                ctx.fillRect(0, y + TILE * 0.25, W, 3);
                ctx.fillRect(0, y + TILE * 0.7, W, 3);
                // предупреждение
                if (lane.warning) {
                    ctx.fillStyle = (Math.floor(Date.now()/150) % 2 === 0) ? 'rgba(255,0,0,0.5)' : 'rgba(255,0,0,0.2)';
                    ctx.fillRect(0, y, W, TILE);
                }
                // поезд
                if (lane.trainActive) {
                    var tx = lane.trainPos * TILE;
                    ctx.fillStyle = '#37474f';
                    ctx.fillRect(tx, y + 3, 8 * TILE, TILE - 6);
                    ctx.fillStyle = '#ffeb3b';
                    // фары
                    if (lane.dir > 0) {
                        ctx.fillRect(tx + 8 * TILE - 6, y + TILE/2 - 4, 4, 8);
                    } else {
                        ctx.fillRect(tx + 2, y + TILE/2 - 4, 4, 8);
                    }
                }
            } else {
                // трава с деревьями
                for (var ti = 0; ti < lane.items.length; ti++) {
                    var t2 = lane.items[ti];
                    if (t2.isTree) {
                        var tx2 = t2.x * TILE;
                        // ствол
                        ctx.fillStyle = '#5d4037';
                        ctx.fillRect(tx2 + TILE*0.4, y + TILE*0.5, TILE*0.2, TILE*0.5);
                        // крона
                        ctx.fillStyle = '#1b5e20';
                        ctx.beginPath();
                        ctx.arc(tx2 + TILE/2, y + TILE*0.4, TILE*0.4, 0, Math.PI*2);
                        ctx.fill();
                    }
                }
            }

            function drawCar(x, w) {
                var grad = lane.row * 137 % 360;
                // колесо удачи цвета
                var cols = ['#f44336', '#ffc107', '#9c27b0', '#00bcd4', '#ff9800', '#4caf50'];
                ctx.fillStyle = cols[Math.abs(lane.row) % cols.length];
                ctx.fillRect(x + 3, y + 6, w - 6, TILE - 12);
                // окна
                ctx.fillStyle = 'rgba(255,255,255,0.7)';
                ctx.fillRect(x + 8, y + 9, w - 16, TILE * 0.3);
                // фары
                ctx.fillStyle = '#ffeb3b';
                if (lane.dir > 0) {
                    ctx.fillRect(x + w - 7, y + TILE - 12, 4, 4);
                } else {
                    ctx.fillRect(x + 3, y + TILE - 12, 4, 4);
                }
            }

            function drawLog(x, w) {
                ctx.fillStyle = '#6d4c41';
                ctx.fillRect(x, y + 4, w, TILE - 8);
                ctx.strokeStyle = '#3e2723';
                ctx.lineWidth = 1;
                for (var k = 1; k < w / TILE; k++) {
                    ctx.beginPath();
                    ctx.moveTo(x + k * TILE, y + 4);
                    ctx.lineTo(x + k * TILE, y + TILE - 4);
                    ctx.stroke();
                }
                // концы — закруглённые
                ctx.fillStyle = '#3e2723';
                ctx.beginPath();
                ctx.arc(x, y + TILE/2, TILE*0.1, 0, Math.PI*2);
                ctx.arc(x + w, y + TILE/2, TILE*0.1, 0, Math.PI*2);
                ctx.fill();
            }
        };

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){if(gameOver){s.reset();return;} s.move(-1, 0);},
                right: function(){if(gameOver){s.reset();return;} s.move(1, 0);},
                up:    function(){if(gameOver){s.reset();return;} s.move(0, 1);},
                down:  function(){if(gameOver){s.reset();return;} s.move(0, -1);},
                enter: function(){
                    if (gameOver) { s.reset(); return; }
                    s.move(0, 1); // OK = шаг вперёд
                }
            });
            this._detachTouch = attachTouch(root, {
                onSwipe: function(dir){
                    if (gameOver){s.reset();return;}
                    if (dir==='left')  s.move(-1, 0);
                    if (dir==='right') s.move(1, 0);
                    if (dir==='up')    s.move(0, 1);
                    if (dir==='down')  s.move(0, -1);
                },
                onTap: function(){
                    if (gameOver){s.reset();return;}
                    s.move(0, 1); // тап = шаг вперёд
                }
            });
            this._r = function(){s.resize();s.draw();};
            $(window).on('resize', this._r);
            setTimeout(function(){if(!destroyed) s.reset();},50);
        };
        this.pause = function(){};
        this.destroy = function(){destroyed=true;this.stopLoop();if(this._detachTouch)this._detachTouch();$(window).off('resize',this._r);};
    };

    // ============================================================
    //                          САПЁР
    // ============================================================
    GAMES.minesweeper = function (root) {
        var info, overlay;
        var COLS, ROWS, MINES;
        var field;        // массив [y][x] = {mine, revealed, flagged, count}
        var cursor = {x:0, y:0};
        var firstClick = true;
        var minesLeft;
        var startTime, timerId;
        var gameOver = false, won = false;
        var DIFFICULTIES = {
            easy:   { cols: 9,  rows: 9,  mines: 10 },
            medium: { cols: 12, rows: 12, mines: 25 },
            hard:   { cols: 16, rows: 14, mines: 50 }
        };
        var difficulty = 'easy';

        this.create = function () {
            root.html(
                '<div class="game-wrap mine-wrap">' +
                  '<div class="game-info">' +
                    '<span>Мин: <b class="g-mines">0</b></span>' +
                    '<span>Время: <b class="g-time">0</b></span>' +
                    '<span class="mine-diff">Сложность: <b>' + this.diffName(difficulty) + '</b></span>' +
                    '<span class="g-hint">↑↓←→ — курсор, OK — открыть, ↓ долго — флажок, цифра 1/2/3 — сложность</span>' +
                  '</div>' +
                  '<div class="mine-board"></div>' +
                  '<div class="game-overlay"></div>' +
                '</div>'
            );
            info = root.find('.game-info');
            overlay = root.find('.game-overlay');
            this.reset();
        };

        this.diffName = function (d) {
            return d === 'easy' ? Lampa.Lang.translate('diff_easy') : (d === 'medium' ? Lampa.Lang.translate('diff_medium') : Lampa.Lang.translate('diff_hard'));
        };

        this.reset = function () {
            var d = DIFFICULTIES[difficulty];
            COLS = d.cols; ROWS = d.rows; MINES = d.mines;
            field = [];
            for (var y=0; y<ROWS; y++) {
                var row = [];
                for (var x=0; x<COLS; x++) row.push({ mine:false, revealed:false, flagged:false, count:0 });
                field.push(row);
            }
            cursor = { x: Math.floor(COLS/2), y: Math.floor(ROWS/2) };
            firstClick = true;
            minesLeft = MINES;
            gameOver = false; won = false;
            startTime = null;
            this.updateUI();
            this.draw();
            overlay.removeClass('show').text('');
            if (timerId) clearInterval(timerId);
            var s = this;
            timerId = setInterval(function () {
                if (!gameOver && !won && startTime) {
                    var sec = Math.floor((Date.now() - startTime) / 1000);
                    root.find('.g-time').text(sec);
                }
            }, 500);
        };

        this.placeMines = function (avoidX, avoidY) {
            // ставим мины рандомно, избегая первый клик и его соседей
            var placed = 0;
            while (placed < MINES) {
                var rx = Math.floor(Math.random() * COLS);
                var ry = Math.floor(Math.random() * ROWS);
                if (Math.abs(rx - avoidX) <= 1 && Math.abs(ry - avoidY) <= 1) continue;
                if (field[ry][rx].mine) continue;
                field[ry][rx].mine = true;
                placed++;
            }
            // считаем подсказки
            for (var y=0; y<ROWS; y++) for (var x=0; x<COLS; x++) {
                if (field[y][x].mine) continue;
                var c = 0;
                for (var dy=-1; dy<=1; dy++) for (var dx=-1; dx<=1; dx++) {
                    var nx = x+dx, ny = y+dy;
                    if (nx>=0 && nx<COLS && ny>=0 && ny<ROWS && field[ny][nx].mine) c++;
                }
                field[y][x].count = c;
            }
        };

        this.updateUI = function () {
            root.find('.g-mines').text(minesLeft);
            root.find('.mine-diff b').text(this.diffName(difficulty));
        };

        this.draw = function () {
            var html = '<div class="mine-grid" style="grid-template-columns:repeat(' + COLS + ',1fr);">';
            for (var y=0; y<ROWS; y++) for (var x=0; x<COLS; x++) {
                var c = field[y][x];
                var cls = 'mine-cell';
                var content = '';
                if (cursor.x===x && cursor.y===y && !gameOver && !won) cls += ' mine-cursor';
                if (c.revealed) {
                    cls += ' mine-revealed';
                    if (c.mine) { cls += ' mine-bomb'; content = '💣'; }
                    else if (c.count > 0) { content = c.count; cls += ' mine-n' + c.count; }
                } else if (c.flagged) {
                    cls += ' mine-flag';
                    content = '🚩';
                }
                html += '<div class="' + cls + '" data-x="' + x + '" data-y="' + y + '">' + content + '</div>';
            }
            html += '</div>';
            root.find('.mine-board').html(html);
            var s = this;
            // тач — короткий тап = открыть, долгий = флажок
            var pressTimer = null;
            var longPressed = false;
            root.find('.mine-cell').on('touchstart mousedown', function(e){
                var x = parseInt($(this).attr('data-x'), 10);
                var y = parseInt($(this).attr('data-y'), 10);
                cursor.x = x; cursor.y = y;
                longPressed = false;
                pressTimer = setTimeout(function(){ longPressed = true; s.toggleFlag(); s.draw(); }, 500);
            });
            root.find('.mine-cell').on('touchend mouseup mouseleave', function(e){
                if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
                if (e.type === 'mouseleave') return;
                e.preventDefault && e.preventDefault();
                if (gameOver || won) { s.reset(); return; }
                if (!longPressed) s.reveal();
            });
        };

        this.reveal = function () {
            if (gameOver || won) return;
            var c = field[cursor.y][cursor.x];
            if (c.flagged || c.revealed) return;
            if (firstClick) {
                this.placeMines(cursor.x, cursor.y);
                firstClick = false;
                startTime = Date.now();
            }
            this.flood(cursor.x, cursor.y);
            if (c.mine) {
                gameOver = true;
                this.revealAll();
                this.draw();
                overlay.html(Lampa.Lang.translate('exploded')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
                if (timerId) clearInterval(timerId);
                return;
            }
            this.checkWin();
            this.draw();
        };

        this.flood = function (x, y) {
            var stack = [[x, y]];
            while (stack.length) {
                var p = stack.pop();
                var cx = p[0], cy = p[1];
                if (cx<0 || cy<0 || cx>=COLS || cy>=ROWS) continue;
                var cell = field[cy][cx];
                if (cell.revealed || cell.flagged) continue;
                cell.revealed = true;
                if (cell.mine) continue; // не раскрываем соседей мины
                if (cell.count === 0) {
                    for (var dy=-1; dy<=1; dy++) for (var dx=-1; dx<=1; dx++) {
                        if (dx===0 && dy===0) continue;
                        stack.push([cx+dx, cy+dy]);
                    }
                }
            }
        };

        this.toggleFlag = function () {
            if (gameOver || won) return;
            var c = field[cursor.y][cursor.x];
            if (c.revealed) return;
            c.flagged = !c.flagged;
            minesLeft += c.flagged ? -1 : 1;
            this.updateUI();
        };

        this.revealAll = function () {
            for (var y=0; y<ROWS; y++) for (var x=0; x<COLS; x++) {
                if (field[y][x].mine) field[y][x].revealed = true;
            }
        };

        this.checkWin = function () {
            for (var y=0; y<ROWS; y++) for (var x=0; x<COLS; x++) {
                if (!field[y][x].mine && !field[y][x].revealed) return;
            }
            won = true;
            if (timerId) clearInterval(timerId);
            var sec = Math.floor((Date.now() - startTime) / 1000);
            // рекорд = меньшее время для конкретной сложности
            var key = 'minesweeper_' + difficulty;
            var prev = Lampa.Storage.get('games_record_' + key, 0);
            if (!prev || sec < prev) Lampa.Storage.set('games_record_' + key, sec);
            overlay.html(Lampa.Lang.translate('game_victory')+'<br>'+Lampa.Lang.translate('time_label')+' '+sec+' '+Lampa.Lang.translate('seconds_short')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
        };

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){if(cursor.x>0){cursor.x--;s.draw();}},
                right: function(){if(cursor.x<COLS-1){cursor.x++;s.draw();}},
                up:    function(){if(cursor.y>0){cursor.y--;s.draw();}},
                down:  function(){if(cursor.y<ROWS-1){cursor.y++;s.draw();}},
                enter: function(){
                    if (gameOver || won) { s.reset(); return; }
                    s.reveal();
                }
            });
        };

        this.pause = function () {};
        this.destroy = function () { if (timerId) clearInterval(timerId); };
    };

    // ============================================================
    //                          ШАШКИ
    // ============================================================
    // Поле 8x8. Игрок — белые (внизу), компьютер — чёрные (сверху).
    // Простые шашки идут только вперёд по диагонали, дамки — в любую сторону.
    // Обязательное взятие. ИИ — простой минимакс на 3 хода.
    GAMES.checkers = function (root) {
        var info, overlay;
        var SIZE = 8;
        var board;       // [y][x]: 0=пусто, 1=белая, 2=чёрная, 3=белая дамка, 4=чёрная дамка
        var selected;    // {x,y} | null — выбранная шашка
        var validMoves;  // массив доступных ходов для выбранной шашки
        var mustCapture; // массив координат шашек, которые обязаны бить
        var cursor = {x:0, y:7};
        var phase = 'play'; // 'play' | 'win' | 'lose' | 'draw'
        var turn = 'white';

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span class="check-status">Ваш ход</span>' +
                    '<span class="g-hint">Стрелки — курсор, OK — выбрать/походить</span>' +
                  '</div>' +
                  '<div class="check-board"></div>' +
                  '<div class="game-overlay"></div>' +
                '</div>'
            );
            info = root.find('.check-status');
            overlay = root.find('.game-overlay');
            this.reset();
        };

        this.reset = function () {
            board = [];
            for (var y=0; y<SIZE; y++) {
                var row = [];
                for (var x=0; x<SIZE; x++) {
                    var dark = (x + y) % 2 === 1;
                    if (dark && y < 3) row.push(2);      // чёрные сверху
                    else if (dark && y > 4) row.push(1); // белые снизу
                    else row.push(0);
                }
                board.push(row);
            }
            selected = null;
            validMoves = [];
            cursor = { x: 0, y: 7 };
            // курсор — на первой белой шашке снизу
            for (var x=0; x<SIZE; x++) if (board[7][x] === 1) { cursor.x = x; cursor.y = 7; break; }
            phase = 'play';
            turn = 'white';
            mustCapture = this.getCaptures(board, 'white');
            info.text(Lampa.Lang.translate('turn_yours'));
            this.draw();
            overlay.removeClass('show').text('');
        };

        // вспомогательные функции
        this.isWhite = function (p) { return p === 1 || p === 3; };
        this.isBlack = function (p) { return p === 2 || p === 4; };
        this.isKing  = function (p) { return p === 3 || p === 4; };
        this.color   = function (p) { return p === 0 ? null : (this.isWhite(p) ? 'white' : 'black'); };

        // получить все взятия для цвета
        this.getCaptures = function (b, color) {
            var captures = [];
            for (var y=0; y<SIZE; y++) for (var x=0; x<SIZE; x++) {
                var p = b[y][x];
                if (this.color(p) !== color) continue;
                var caps = this.getPieceCaptures(b, x, y);
                if (caps.length) captures.push({ x: x, y: y, captures: caps });
            }
            return captures;
        };

        // взятия для конкретной шашки (без многократных за раз — упрощение)
        this.getPieceCaptures = function (b, x, y) {
            var p = b[y][x];
            var color = this.color(p);
            var king = this.isKing(p);
            var caps = [];
            var dirs = [[-1,-1],[1,-1],[-1,1],[1,1]];
            for (var i=0; i<dirs.length; i++) {
                var dx = dirs[i][0], dy = dirs[i][1];
                if (king) {
                    // дамка: ищет первую вражескую по диагонали, после неё — пустую клетку
                    var nx = x+dx, ny = y+dy;
                    var foundEnemy = null;
                    while (nx>=0 && ny>=0 && nx<SIZE && ny<SIZE) {
                        var v = b[ny][nx];
                        if (v !== 0) {
                            if (this.color(v) !== color && !foundEnemy) {
                                foundEnemy = { x: nx, y: ny };
                            } else {
                                break;
                            }
                        } else if (foundEnemy) {
                            caps.push({ tx: nx, ty: ny, capX: foundEnemy.x, capY: foundEnemy.y });
                        }
                        nx += dx; ny += dy;
                    }
                } else {
                    // обычная шашка: бьёт через одну в любом направлении
                    var ex = x+dx, ey = y+dy;
                    var tx = x+dx*2, ty = y+dy*2;
                    if (tx<0 || ty<0 || tx>=SIZE || ty>=SIZE) continue;
                    if (b[ty][tx] !== 0) continue;
                    var ev = b[ey][ex];
                    if (ev !== 0 && this.color(ev) !== color) {
                        caps.push({ tx: tx, ty: ty, capX: ex, capY: ey });
                    }
                }
            }
            return caps;
        };

        // обычные ходы (когда взятий нет)
        this.getPieceMoves = function (b, x, y) {
            var p = b[y][x];
            var color = this.color(p);
            var king = this.isKing(p);
            var moves = [];
            var dirs;
            if (king) dirs = [[-1,-1],[1,-1],[-1,1],[1,1]];
            else dirs = (color === 'white') ? [[-1,-1],[1,-1]] : [[-1,1],[1,1]]; // вперёд
            for (var i=0; i<dirs.length; i++) {
                var dx = dirs[i][0], dy = dirs[i][1];
                if (king) {
                    var nx = x+dx, ny = y+dy;
                    while (nx>=0 && ny>=0 && nx<SIZE && ny<SIZE && b[ny][nx]===0) {
                        moves.push({ tx: nx, ty: ny });
                        nx += dx; ny += dy;
                    }
                } else {
                    var nx2 = x+dx, ny2 = y+dy;
                    if (nx2>=0 && ny2>=0 && nx2<SIZE && ny2<SIZE && b[ny2][nx2]===0) {
                        moves.push({ tx: nx2, ty: ny2 });
                    }
                }
            }
            return moves;
        };

        // выполнить ход
        this.doMove = function (b, fromX, fromY, move) {
            var p = b[fromY][fromX];
            b[fromY][fromX] = 0;
            b[move.ty][move.tx] = p;
            if (move.capX !== undefined) {
                b[move.capY][move.capX] = 0;
            }
            // превращение в дамку
            if (p === 1 && move.ty === 0) b[move.ty][move.tx] = 3;
            if (p === 2 && move.ty === SIZE-1) b[move.ty][move.tx] = 4;
        };

        // выбор клетки
        this.selectCell = function () {
            if (phase !== 'play' || turn !== 'white') return;
            var p = board[cursor.y][cursor.x];
            if (selected) {
                // попытка хода в эту клетку
                for (var i=0; i<validMoves.length; i++) {
                    var m = validMoves[i];
                    if (m.tx === cursor.x && m.ty === cursor.y) {
                        var fromX = selected.x, fromY = selected.y;
                        this.doMove(board, fromX, fromY, m);
                        // проверка на цепочку взятий той же шашкой
                        if (m.capX !== undefined) {
                            var moreCaps = this.getPieceCaptures(board, m.tx, m.ty);
                            if (moreCaps.length) {
                                selected = { x: m.tx, y: m.ty };
                                cursor = { x: m.tx, y: m.ty };
                                validMoves = moreCaps;
                                this.draw();
                                return;
                            }
                        }
                        selected = null;
                        validMoves = [];
                        this.endPlayerTurn();
                        return;
                    }
                }
                // клик по другой своей шашке = смена выбора
                if (this.isWhite(p)) {
                    this.tryPickPiece(cursor.x, cursor.y);
                } else {
                    selected = null;
                    validMoves = [];
                }
                this.draw();
            } else {
                // выбор шашки
                if (this.isWhite(p)) this.tryPickPiece(cursor.x, cursor.y);
                this.draw();
            }
        };

        this.tryPickPiece = function (x, y) {
            // если есть обязательные взятия, можно выбрать только бьющую шашку
            if (mustCapture.length) {
                var found = false;
                for (var i=0; i<mustCapture.length; i++) {
                    if (mustCapture[i].x === x && mustCapture[i].y === y) {
                        selected = { x: x, y: y };
                        validMoves = mustCapture[i].captures;
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    selected = null;
                    validMoves = [];
                    info.text(Lampa.Lang.translate('sea_must_capture'));
                }
            } else {
                selected = { x: x, y: y };
                validMoves = this.getPieceMoves(board, x, y);
            }
        };

        this.endPlayerTurn = function () {
            // проверка на конец игры
            if (this.isGameOver(board, 'black')) {
                phase = 'win';
                info.text(Lampa.Lang.translate('game_victory'));
                overlay.html(Lampa.Lang.translate('game_you_won')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
                this.draw();
                return;
            }
            turn = 'black';
            info.text(Lampa.Lang.translate('turn_computer'));
            this.draw();
            var s = this;
            setTimeout(function () { s.aiMove(); }, 400);
        };

        this.isGameOver = function (b, color) {
            // у color закончились шашки или нет ходов
            for (var y=0; y<SIZE; y++) for (var x=0; x<SIZE; x++) {
                if (this.color(b[y][x]) === color) {
                    if (this.getPieceCaptures(b, x, y).length || this.getPieceMoves(b, x, y).length) return false;
                }
            }
            return true;
        };

        this.aiMove = function () {
            if (phase !== 'play') return;
            var best = this.findBestMove(board, 'black', 3);
            if (!best) {
                phase = 'win';
                info.text(Lampa.Lang.translate('game_victory'));
                overlay.html(Lampa.Lang.translate('comp_cant_move')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
                this.draw();
                return;
            }
            // выполняем ход (возможно цепочка)
            var fromX = best.fromX, fromY = best.fromY;
            this.doMove(board, fromX, fromY, best.move);
            // если было взятие — продолжаем брать той же шашкой жадно
            if (best.move.capX !== undefined) {
                var curX = best.move.tx, curY = best.move.ty;
                var safe = 0;
                while (safe++ < 10) {
                    var moreCaps = this.getPieceCaptures(board, curX, curY);
                    if (!moreCaps.length) break;
                    // выбираем любое (можно усложнить — лучшее)
                    var c = moreCaps[0];
                    this.doMove(board, curX, curY, c);
                    curX = c.tx; curY = c.ty;
                }
            }
            // проверка победы белых
            if (this.isGameOver(board, 'white')) {
                phase = 'lose';
                info.text(Lampa.Lang.translate('game_defeat'));
                overlay.html(Lampa.Lang.translate('game_you_lost')+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
                this.draw();
                return;
            }
            turn = 'white';
            mustCapture = this.getCaptures(board, 'white');
            info.text(mustCapture.length ? Lampa.Lang.translate('sea_yours_must_capture') : Lampa.Lang.translate('turn_yours'));
            this.draw();
        };

        // Минимакс
        this.findBestMove = function (b, color, depth) {
            var moves = this.getAllMoves(b, color);
            if (!moves.length) return null;
            var best = null;
            var bestScore = color === 'black' ? -Infinity : Infinity;
            for (var i=0; i<moves.length; i++) {
                var m = moves[i];
                var nb = this.cloneBoard(b);
                this.doMove(nb, m.fromX, m.fromY, m.move);
                var score = this.minimax(nb, color === 'black' ? 'white' : 'black', depth - 1, -Infinity, Infinity);
                if (color === 'black' && score > bestScore) { bestScore = score; best = m; }
                if (color === 'white' && score < bestScore) { bestScore = score; best = m; }
            }
            return best;
        };

        this.minimax = function (b, color, depth, alpha, beta) {
            if (depth === 0) return this.evaluate(b);
            var moves = this.getAllMoves(b, color);
            if (!moves.length) return color === 'black' ? -1000 : 1000;
            if (color === 'black') {
                var max = -Infinity;
                for (var i=0; i<moves.length; i++) {
                    var nb = this.cloneBoard(b);
                    this.doMove(nb, moves[i].fromX, moves[i].fromY, moves[i].move);
                    var v = this.minimax(nb, 'white', depth - 1, alpha, beta);
                    if (v > max) max = v;
                    if (max > alpha) alpha = max;
                    if (beta <= alpha) break;
                }
                return max;
            } else {
                var min = Infinity;
                for (var j=0; j<moves.length; j++) {
                    var nb2 = this.cloneBoard(b);
                    this.doMove(nb2, moves[j].fromX, moves[j].fromY, moves[j].move);
                    var v2 = this.minimax(nb2, 'black', depth - 1, alpha, beta);
                    if (v2 < min) min = v2;
                    if (min < beta) beta = min;
                    if (beta <= alpha) break;
                }
                return min;
            }
        };

        this.getAllMoves = function (b, color) {
            // если есть взятия — только они (по правилу)
            var caps = this.getCaptures(b, color);
            var result = [];
            if (caps.length) {
                for (var i=0; i<caps.length; i++) {
                    for (var j=0; j<caps[i].captures.length; j++) {
                        result.push({ fromX: caps[i].x, fromY: caps[i].y, move: caps[i].captures[j] });
                    }
                }
                return result;
            }
            for (var y=0; y<SIZE; y++) for (var x=0; x<SIZE; x++) {
                if (this.color(b[y][x]) === color) {
                    var moves = this.getPieceMoves(b, x, y);
                    for (var k=0; k<moves.length; k++) {
                        result.push({ fromX: x, fromY: y, move: moves[k] });
                    }
                }
            }
            return result;
        };

        this.cloneBoard = function (b) {
            var nb = [];
            for (var y=0; y<SIZE; y++) nb.push(b[y].slice());
            return nb;
        };

        this.evaluate = function (b) {
            // плюсы для чёрных, минусы для белых
            var score = 0;
            for (var y=0; y<SIZE; y++) for (var x=0; x<SIZE; x++) {
                var p = b[y][x];
                if (p === 1) score -= 1;
                else if (p === 2) score += 1;
                else if (p === 3) score -= 3;
                else if (p === 4) score += 3;
            }
            return score;
        };

        this.draw = function () {
            var html = '<div class="check-grid">';
            for (var y=0; y<SIZE; y++) for (var x=0; x<SIZE; x++) {
                var dark = (x + y) % 2 === 1;
                var cls = 'check-cell ' + (dark ? 'check-dark' : 'check-light');
                if (cursor.x === x && cursor.y === y && phase === 'play' && turn === 'white') cls += ' check-cursor';
                if (selected && selected.x === x && selected.y === y) cls += ' check-selected';
                // подсветка валидных ходов
                var isMove = false;
                if (selected && validMoves) {
                    for (var i=0; i<validMoves.length; i++) {
                        if (validMoves[i].tx === x && validMoves[i].ty === y) { isMove = true; break; }
                    }
                }
                if (isMove) cls += ' check-validmove';
                var p = board[y][x];
                var piece = '';
                if (p === 1) piece = '<div class="check-piece check-white"></div>';
                else if (p === 2) piece = '<div class="check-piece check-black"></div>';
                else if (p === 3) piece = '<div class="check-piece check-white check-king"></div>';
                else if (p === 4) piece = '<div class="check-piece check-black check-king"></div>';
                html += '<div class="' + cls + '" data-x="' + x + '" data-y="' + y + '">' + piece + '</div>';
            }
            html += '</div>';
            root.find('.check-board').html(html);
            var s = this;
            root.find('.check-cell').on('click touchend', function(e){
                e.preventDefault();
                if (phase !== 'play') { s.reset(); return; }
                if (turn !== 'white') return;
                cursor.x = parseInt($(this).attr('data-x'), 10);
                cursor.y = parseInt($(this).attr('data-y'), 10);
                s.selectCell();
            });
        };

        this.start = function () {
            var s = this;
            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){if(phase==='play'&&turn==='white'&&cursor.x>0){cursor.x--;s.draw();}},
                right: function(){if(phase==='play'&&turn==='white'&&cursor.x<SIZE-1){cursor.x++;s.draw();}},
                up:    function(){if(phase==='play'&&turn==='white'&&cursor.y>0){cursor.y--;s.draw();}},
                down:  function(){if(phase==='play'&&turn==='white'&&cursor.y<SIZE-1){cursor.y++;s.draw();}},
                enter: function(){
                    if (phase !== 'play') { s.reset(); return; }
                    if (turn !== 'white') return;
                    s.selectCell();
                }
            });
        };

        this.pause = function () {};
        this.destroy = function () {};
    };

    // ============================================================
    //                       ТРИ В РЯД (MATCH-3)
    // ============================================================
    GAMES.match3 = function (root) {
        var canvas, ctx, overlay;
        var COLS = 8, ROWS = 8, TILE;
        var COLORS = 6;     // количество цветов камней
        var grid;            // [y][x] = цвет (0..COLORS-1) или -1 (пусто)
        var cursor = {x:0, y:0};
        var selected = null; // выбранный камень {x, y} или null
        var animQueue = [];  // очередь анимаций
        var W, H;
        var score, combo;
        var loopTimer;
        var paused = false, gameOver = false, destroyed = false;
        var moves;           // сколько ходов осталось
        var MAX_MOVES = 30;

        // палитра камней с разными формами
        var GEMS = [
            { color: '#f44336', shape: 'circle' },    // красный
            { color: '#4caf50', shape: 'square' },    // зелёный
            { color: '#2196f3', shape: 'diamond' },   // синий
            { color: '#ffc107', shape: 'hexagon' },   // жёлтый
            { color: '#9c27b0', shape: 'triangle' },  // фиолетовый
            { color: '#ff9800', shape: 'star' }       // оранжевый
        ];

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>' + Lampa.Lang.translate('score') + ' <b class="g-score">0</b></span>' +
                    '<span>Ходов: <b class="g-moves">' + MAX_MOVES + '</b></span>' +
                    '<span>Комбо: <b class="g-combo">x1</b></span>' +
                    '<span>' + Lampa.Lang.translate('record') + ' <b class="g-record">' + getRecord('match3') + '</b></span>' +
                    '<span class="g-hint">Стрелки — курсор, OK — выбрать/поменять</span>' +
                  '</div>' +
                  '<div class="game-canvas-wrap"><canvas></canvas><div class="game-overlay"></div></div>' +
                '</div>'
            );
            canvas = root.find('canvas')[0];
            ctx = canvas.getContext('2d');
            overlay = root.find('.game-overlay');
        };

        this.resize = function () {
            var wrap = root.find('.game-canvas-wrap')[0];
            var rect = wrap.getBoundingClientRect();
            var maxH = rect.height;
            var maxW = rect.width;
            // поле квадратное, минимум сторона
            var size = Math.min(maxW, maxH);
            if (size < 200) size = 480;
            TILE = Math.floor(size / COLS);
            if (TILE < 30) TILE = 30;
            W = TILE * COLS;
            H = TILE * ROWS;
            canvas.width = W;
            canvas.height = H;
        };

        this.reset = function () {
            this.resize();
            // сгенерировать поле БЕЗ начальных совпадений
            grid = [];
            for (var y = 0; y < ROWS; y++) {
                var row = [];
                for (var x = 0; x < COLS; x++) {
                    var c;
                    var safe = 0;
                    do {
                        c = Math.floor(Math.random() * COLORS);
                        safe++;
                    } while (safe < 50 && this.wouldMatchAt(row, grid, x, y, c));
                    row.push(c);
                }
                grid.push(row);
            }
            // если нет вообще ни одного возможного хода — пересоздаём
            var safety = 0;
            while (!this.hasAnyMove() && safety++ < 5) {
                this.shuffleGrid();
            }
            cursor = { x: 0, y: 0 };
            selected = null;
            animQueue = [];
            score = 0;
            combo = 1;
            moves = MAX_MOVES;
            paused = false; gameOver = false;
            this.updateUI();
            this.draw();
            this.startLoop();
            overlay.removeClass('show').text('');
        };

        // помощник: будет ли совпадение если поставить цвет c в (x,y)
        // row = текущая строящаяся строка (ещё не в grid), grid — уже готовые строки
        this.wouldMatchAt = function (row, gridSoFar, x, y, c) {
            // горизонтально: 2 предыдущих в той же строке
            if (x >= 2 && row[x-1] === c && row[x-2] === c) return true;
            // вертикально: 2 предыдущих в столбце
            if (y >= 2 && gridSoFar[y-1][x] === c && gridSoFar[y-2][x] === c) return true;
            return false;
        };

        this.updateUI = function () {
            root.find('.g-score').text(score);
            root.find('.g-moves').text(moves);
            root.find('.g-combo').text('x' + combo);
            root.find('.g-record').text(getRecord('match3'));
        };

        this.startLoop = function () {
            this.stopLoop();
            var s = this;
            loopTimer = setInterval(function () { s.tick(); }, 1000/30);
        };
        this.stopLoop = function () { if (loopTimer) { clearInterval(loopTimer); loopTimer = null; } };

        this.tick = function () {
            if (paused || gameOver || destroyed) return;
            // если есть активные анимации — обрабатываем
            if (animQueue.length) {
                var anim = animQueue[0];
                anim.t++;
                if (anim.t >= anim.duration) {
                    // анимация закончена — выполняем эффект
                    if (anim.onDone) anim.onDone();
                    animQueue.shift();
                    // после каждой анимации проверяем дальше
                    this.processCascade();
                }
            }
            this.draw();
        };

        // Найти все совпадения 3+ в ряд
        this.findMatches = function () {
            var matches = [];
            var matched = {};
            // горизонтальные
            for (var y = 0; y < ROWS; y++) {
                var run = 1;
                for (var x = 1; x <= COLS; x++) {
                    if (x < COLS && grid[y][x] !== -1 && grid[y][x] === grid[y][x-1]) {
                        run++;
                    } else {
                        if (run >= 3) {
                            for (var k = x - run; k < x; k++) {
                                matched[k + ',' + y] = true;
                            }
                            matches.push({ kind: 'h', length: run, color: grid[y][x-1] });
                        }
                        run = 1;
                    }
                }
            }
            // вертикальные
            for (var xx = 0; xx < COLS; xx++) {
                var run2 = 1;
                for (var yy = 1; yy <= ROWS; yy++) {
                    if (yy < ROWS && grid[yy][xx] !== -1 && grid[yy][xx] === grid[yy-1][xx]) {
                        run2++;
                    } else {
                        if (run2 >= 3) {
                            for (var k2 = yy - run2; k2 < yy; k2++) {
                                matched[xx + ',' + k2] = true;
                            }
                            matches.push({ kind: 'v', length: run2, color: grid[yy-1][xx] });
                        }
                        run2 = 1;
                    }
                }
            }
            // собираем уникальные клетки
            var cells = [];
            for (var key in matched) {
                var p = key.split(',');
                cells.push({ x: parseInt(p[0],10), y: parseInt(p[1],10) });
            }
            return { cells: cells, matches: matches };
        };

        // Запускаем каскад: ищем совпадения, ставим в очередь анимацию исчезновения
        this.processCascade = function () {
            if (animQueue.length) return;
            var found = this.findMatches();
            if (!found.cells.length) {
                // нет совпадений — каскад окончен
                combo = 1;
                this.updateUI();
                // проверка: если ходов нет вообще — перемешиваем
                if (!this.hasAnyMove()) {
                    this.shuffleGrid();
                }
                // конец игры по ходам?
                if (moves <= 0) {
                    this.endGame();
                }
                return;
            }
            // подсчёт очков
            var pts = 0;
            for (var i = 0; i < found.matches.length; i++) {
                var m = found.matches[i];
                var base = [0, 0, 0, 30, 60, 100, 200][Math.min(m.length, 6)] || 200;
                pts += base;
            }
            pts *= combo;
            score += pts;
            setRecord('match3', score);
            this.updateUI();
            // ставим анимацию исчезновения
            var s = this;
            animQueue.push({
                kind: 'pop',
                cells: found.cells,
                t: 0,
                duration: 8,
                onDone: function () {
                    // удаляем камни
                    for (var i = 0; i < found.cells.length; i++) {
                        grid[found.cells[i].y][found.cells[i].x] = -1;
                    }
                    // обрушиваем сверху
                    s.collapse();
                    combo++;
                }
            });
        };

        // Падение камней сверху + заполнение новыми
        this.collapse = function () {
            for (var x = 0; x < COLS; x++) {
                // сжимаем колонку: ненулевые элементы вниз
                var stack = [];
                for (var y = ROWS - 1; y >= 0; y--) {
                    if (grid[y][x] !== -1) stack.push(grid[y][x]);
                }
                for (var y2 = ROWS - 1; y2 >= 0; y2--) {
                    var idx = ROWS - 1 - y2;
                    if (idx < stack.length) grid[y2][x] = stack[idx];
                    else grid[y2][x] = Math.floor(Math.random() * COLORS);
                }
            }
        };

        // Перемешивание поля если нет ходов
        this.shuffleGrid = function () {
            var all = [];
            for (var y = 0; y < ROWS; y++) for (var x = 0; x < COLS; x++) {
                all.push(grid[y][x]);
            }
            // перемешиваем
            for (var i = all.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = all[i]; all[i] = all[j]; all[j] = tmp;
            }
            var idx = 0;
            for (var y2 = 0; y2 < ROWS; y2++) for (var x2 = 0; x2 < COLS; x2++) {
                grid[y2][x2] = all[idx++];
            }
            // если опять есть начальные совпадения — пересоздаём целиком
            if (this.findMatches().cells.length > 0) {
                for (var y3 = 0; y3 < ROWS; y3++) for (var x3 = 0; x3 < COLS; x3++) {
                    grid[y3][x3] = Math.floor(Math.random() * COLORS);
                }
            }
        };

        // Есть ли вообще возможный ход? (пробуем все свапы и смотрим даст ли совпадение)
        this.hasAnyMove = function () {
            for (var y = 0; y < ROWS; y++) for (var x = 0; x < COLS; x++) {
                // вправо
                if (x < COLS - 1) {
                    this.swap(x, y, x+1, y);
                    var has = this.findMatches().cells.length > 0;
                    this.swap(x, y, x+1, y);
                    if (has) return true;
                }
                // вниз
                if (y < ROWS - 1) {
                    this.swap(x, y, x, y+1);
                    var has2 = this.findMatches().cells.length > 0;
                    this.swap(x, y, x, y+1);
                    if (has2) return true;
                }
            }
            return false;
        };

        this.swap = function (x1, y1, x2, y2) {
            var tmp = grid[y1][x1];
            grid[y1][x1] = grid[y2][x2];
            grid[y2][x2] = tmp;
        };

        // Попытка обмена двух соседних клеток
        this.trySwap = function (x1, y1, x2, y2) {
            if (animQueue.length) return; // во время анимации не трогаем
            // должны быть соседями
            var dx = Math.abs(x1 - x2), dy = Math.abs(y1 - y2);
            if (dx + dy !== 1) return;
            this.swap(x1, y1, x2, y2);
            var found = this.findMatches();
            if (!found.cells.length) {
                // откат
                this.swap(x1, y1, x2, y2);
                return;
            }
            moves--;
            combo = 1;
            this.updateUI();
            // запускаем каскад
            this.processCascade();
        };

        this.endGame = function () {
            gameOver = true;
            this.stopLoop();
            setRecord('match3', score);
            overlay.html(Lampa.Lang.translate('game_over')+'<br>'+Lampa.Lang.translate('score')+' '+score+'<br><span class="g-sub">'+Lampa.Lang.translate('ok_restart')+'</span>').addClass('show');
        };

        // Рисование
        this.draw = function () {
            ctx.fillStyle = '#1a1a2e';
            ctx.fillRect(0, 0, W, H);
            // фон ячеек
            for (var y = 0; y < ROWS; y++) for (var x = 0; x < COLS; x++) {
                ctx.fillStyle = (x + y) % 2 === 0 ? '#2a2a4e' : '#252548';
                ctx.fillRect(x * TILE, y * TILE, TILE, TILE);
            }
            // активная анимация — затемнение исчезающих клеток
            var popping = {};
            var popT = 0;
            if (animQueue.length && animQueue[0].kind === 'pop') {
                var a = animQueue[0];
                popT = a.t / a.duration;
                for (var p = 0; p < a.cells.length; p++) {
                    popping[a.cells[p].x + ',' + a.cells[p].y] = true;
                }
            }
            // камни
            for (var y2 = 0; y2 < ROWS; y2++) for (var x2 = 0; x2 < COLS; x2++) {
                var c = grid[y2][x2];
                if (c < 0 || c >= COLORS) continue;
                var isPop = popping[x2 + ',' + y2];
                var scale = isPop ? (1 - popT) : 1;
                var alpha = isPop ? (1 - popT) : 1;
                this.drawGem(x2, y2, c, scale, alpha);
            }
            // курсор и выбранный
            if (selected) {
                ctx.strokeStyle = '#4caf50';
                ctx.lineWidth = 4;
                ctx.strokeRect(selected.x * TILE + 2, selected.y * TILE + 2, TILE - 4, TILE - 4);
            }
            ctx.strokeStyle = '#ffeb3b';
            ctx.lineWidth = 3;
            ctx.strokeRect(cursor.x * TILE + 2, cursor.y * TILE + 2, TILE - 4, TILE - 4);
        };

        this.drawGem = function (x, y, colorIdx, scale, alpha) {
            var gem = GEMS[colorIdx];
            var cx = x * TILE + TILE / 2;
            var cy = y * TILE + TILE / 2;
            var r = (TILE * 0.4) * scale;
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = gem.color;
            ctx.strokeStyle = 'rgba(255,255,255,0.5)';
            ctx.lineWidth = 2;
            if (gem.shape === 'circle') {
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                // блик
                ctx.fillStyle = 'rgba(255,255,255,0.5)';
                ctx.beginPath();
                ctx.arc(cx - r*0.3, cy - r*0.3, r*0.25, 0, Math.PI*2);
                ctx.fill();
            } else if (gem.shape === 'square') {
                ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
                ctx.strokeRect(cx - r, cy - r, r * 2, r * 2);
                ctx.fillStyle = 'rgba(255,255,255,0.4)';
                ctx.fillRect(cx - r + 4, cy - r + 4, r * 0.5, r * 0.4);
            } else if (gem.shape === 'diamond') {
                ctx.beginPath();
                ctx.moveTo(cx, cy - r);
                ctx.lineTo(cx + r, cy);
                ctx.lineTo(cx, cy + r);
                ctx.lineTo(cx - r, cy);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = 'rgba(255,255,255,0.5)';
                ctx.beginPath();
                ctx.moveTo(cx, cy - r * 0.7);
                ctx.lineTo(cx + r * 0.4, cy - r * 0.2);
                ctx.lineTo(cx, cy);
                ctx.closePath();
                ctx.fill();
            } else if (gem.shape === 'hexagon') {
                ctx.beginPath();
                for (var i = 0; i < 6; i++) {
                    var a = Math.PI / 3 * i - Math.PI / 6;
                    var hx = cx + r * Math.cos(a);
                    var hy = cy + r * Math.sin(a);
                    if (i === 0) ctx.moveTo(hx, hy);
                    else ctx.lineTo(hx, hy);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = 'rgba(255,255,255,0.4)';
                ctx.beginPath();
                ctx.arc(cx - r*0.25, cy - r*0.25, r*0.2, 0, Math.PI*2);
                ctx.fill();
            } else if (gem.shape === 'triangle') {
                ctx.beginPath();
                ctx.moveTo(cx, cy - r);
                ctx.lineTo(cx + r * 0.87, cy + r * 0.5);
                ctx.lineTo(cx - r * 0.87, cy + r * 0.5);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = 'rgba(255,255,255,0.4)';
                ctx.beginPath();
                ctx.moveTo(cx, cy - r * 0.7);
                ctx.lineTo(cx + r * 0.3, cy - r * 0.1);
                ctx.lineTo(cx - r * 0.3, cy - r * 0.1);
                ctx.closePath();
                ctx.fill();
            } else if (gem.shape === 'star') {
                ctx.beginPath();
                for (var s = 0; s < 10; s++) {
                    var ang = Math.PI / 5 * s - Math.PI / 2;
                    var rad = s % 2 === 0 ? r : r * 0.45;
                    var sx = cx + rad * Math.cos(ang);
                    var sy = cy + rad * Math.sin(ang);
                    if (s === 0) ctx.moveTo(sx, sy);
                    else ctx.lineTo(sx, sy);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            ctx.restore();
        };

        this.start = function () {
            var s = this;

            function moveCursor(dx, dy) {
                if (gameOver) { s.reset(); return; }
                if (animQueue.length) return;
                if (selected) {
                    // если у нас выбрана соседняя — это ход
                    var nx = selected.x + dx, ny = selected.y + dy;
                    if (nx >= 0 && ny >= 0 && nx < COLS && ny < ROWS) {
                        var sx = selected.x, sy = selected.y;
                        selected = null;
                        s.trySwap(sx, sy, nx, ny);
                        cursor.x = nx; cursor.y = ny;
                    }
                } else {
                    var nx2 = cursor.x + dx, ny2 = cursor.y + dy;
                    if (nx2 >= 0) cursor.x = Math.min(COLS - 1, nx2);
                    if (ny2 >= 0) cursor.y = Math.min(ROWS - 1, ny2);
                    if (nx2 < 0) cursor.x = 0;
                    if (ny2 < 0) cursor.y = 0;
                }
                s.draw();
            }

            setupController({
                toggle: function(){Lampa.Controller.collectionSet(root);Lampa.Controller.collectionFocus(false,root);},
                left:  function(){moveCursor(-1, 0);},
                right: function(){moveCursor(1, 0);},
                up:    function(){moveCursor(0, -1);},
                down:  function(){moveCursor(0, 1);},
                enter: function(){
                    if (gameOver) { s.reset(); return; }
                    if (animQueue.length) return;
                    if (!selected) {
                        selected = { x: cursor.x, y: cursor.y };
                    } else {
                        // если на той же клетке — снимаем выделение
                        if (selected.x === cursor.x && selected.y === cursor.y) {
                            selected = null;
                        } else {
                            // если соседняя — пытаемся обменять
                            var dx = Math.abs(cursor.x - selected.x);
                            var dy = Math.abs(cursor.y - selected.y);
                            if (dx + dy === 1) {
                                var sx = selected.x, sy = selected.y;
                                selected = null;
                                s.trySwap(sx, sy, cursor.x, cursor.y);
                            } else {
                                // не соседняя — переносим выбор сюда
                                selected = { x: cursor.x, y: cursor.y };
                            }
                        }
                    }
                    s.draw();
                }
            });

            // Тач: тап = выбор/обмен с уже выбранным; свайп = обмен с соседом по направлению
            this._detachTouch = attachTouch(root, {
                onTap: function (x, y) {
                    if (gameOver) { s.reset(); return; }
                    if (animQueue.length) return;
                    var canvasRect = canvas.getBoundingClientRect();
                    var rootRect = root[0].getBoundingClientRect();
                    var cx = x - (canvasRect.left - rootRect.left);
                    var cy = y - (canvasRect.top - rootRect.top);
                    var gx = Math.floor(cx / TILE);
                    var gy = Math.floor(cy / TILE);
                    if (gx < 0 || gy < 0 || gx >= COLS || gy >= ROWS) return;
                    cursor.x = gx; cursor.y = gy;
                    if (!selected) {
                        selected = { x: gx, y: gy };
                    } else {
                        if (selected.x === gx && selected.y === gy) {
                            selected = null;
                        } else {
                            var dx2 = Math.abs(gx - selected.x);
                            var dy2 = Math.abs(gy - selected.y);
                            if (dx2 + dy2 === 1) {
                                var sx2 = selected.x, sy2 = selected.y;
                                selected = null;
                                s.trySwap(sx2, sy2, gx, gy);
                            } else {
                                selected = { x: gx, y: gy };
                            }
                        }
                    }
                    s.draw();
                },
                onSwipe: function (dir) {
                    if (gameOver) { s.reset(); return; }
                    if (animQueue.length) return;
                    // свайп от позиции курсора (или последнего тапа)
                    var sx = cursor.x, sy = cursor.y;
                    var nx = sx, ny = sy;
                    if (dir === 'left')  nx--;
                    if (dir === 'right') nx++;
                    if (dir === 'up')    ny--;
                    if (dir === 'down')  ny++;
                    if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS) return;
                    selected = null;
                    s.trySwap(sx, sy, nx, ny);
                    cursor.x = nx; cursor.y = ny;
                    s.draw();
                }
            });

            this._r = function(){s.resize();s.draw();};
            $(window).on('resize', this._r);
            setTimeout(function(){if(!destroyed) s.reset();},50);
        };

        this.pause = function(){};
        this.destroy = function(){destroyed=true;this.stopLoop();if(this._detachTouch)this._detachTouch();$(window).off('resize',this._r);};
    };

    // ============================================================
    //                          СУДОКУ
    // ============================================================
    // Классическое судоку 9x9. Один игрок.
    // Управление: ↑↓←→ — курсор, OK — попап выбора цифры,
    // 1..9 — ввод цифры напрямую, 0/Delete — очистка клетки,
    // 1/2/3 на стартовом экране — выбор сложности.
    GAMES.sudoku = function (root) {
        var info, overlay, popup;
        var solution;          // решение [9][9]
        var puzzle;             // исходная головоломка с нулями [9][9]
        var playerGrid;         // текущее состояние [9][9]
        var givenMask;          // [9][9] true = подсказка
        var cursor = { r: 0, c: 0 };
        var difficulty = 'easy';
        var startTime = null, timerId = null;
        var gameOver = false, won = false;
        var popupActive = false;
        var popupCursor = { r: 0, c: 0 }; // курсор внутри попапа: 0..2 ряды цифр, 3 ряд — очистка
        var selectingDifficulty = true;   // true — сейчас показывается выбор сложности
        var diffCursor = 0;               // 0=easy, 1=medium, 2=hard
        var DIFFICULTIES = {
            easy:   { empty: 35 },
            medium: { empty: 45 },
            hard:   { empty: 54 }
        };
        var DIFF_KEYS = ['easy', 'medium', 'hard'];

        // ---------- Утилиты генератора ----------
        function shuffleArr(arr) {
            for (var i = arr.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
            }
            return arr;
        }

        function generateSolution() {
            // Базовый паттерн с перетасовкой цифр и групп строк/столбцов
            var base = shuffleArr([1,2,3,4,5,6,7,8,9]);
            var pattern = [
                [1,2,3,4,5,6,7,8,9],[4,5,6,7,8,9,1,2,3],[7,8,9,1,2,3,4,5,6],
                [2,3,4,5,6,7,8,9,1],[5,6,7,8,9,1,2,3,4],[8,9,1,2,3,4,5,6,7],
                [3,4,5,6,7,8,9,1,2],[6,7,8,9,1,2,3,4,5],[9,1,2,3,4,5,6,7,8]
            ];
            var matrix = pattern.map(function (row) {
                return row.map(function (idx) { return base[idx-1]; });
            });
            // перемешиваем строки внутри каждой полосы из 3
            for (var band = 0; band < 3; band++) {
                var rows = [band*3, band*3+1, band*3+2];
                var sh = shuffleArr(rows.slice());
                var data = sh.map(function (r) { return matrix[r].slice(); });
                for (var i = 0; i < 3; i++) matrix[rows[i]] = data[i];
            }
            // перемешиваем сами полосы
            var bands = shuffleArr([0,1,2]);
            var bData = bands.map(function (b) {
                return [matrix[b*3].slice(), matrix[b*3+1].slice(), matrix[b*3+2].slice()];
            });
            for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) matrix[i*3+j] = bData[i][j].slice();
            // транспонируем, перемешиваем строки (т.е. столбцы), транспонируем обратно
            var trans = [];
            for (var i = 0; i < 9; i++) { trans[i] = []; for (var j = 0; j < 9; j++) trans[i][j] = matrix[j][i]; }
            matrix = trans;
            for (var band = 0; band < 3; band++) {
                var rows = [band*3, band*3+1, band*3+2];
                var sh = shuffleArr(rows.slice());
                var data = sh.map(function (r) { return matrix[r].slice(); });
                for (var i = 0; i < 3; i++) matrix[rows[i]] = data[i];
            }
            trans = [];
            for (var i = 0; i < 9; i++) { trans[i] = []; for (var j = 0; j < 9; j++) trans[i][j] = matrix[j][i]; }
            return trans;
        }

        function isValid(g, r, c, n) {
            for (var i = 0; i < 9; i++) if (g[r][i] === n || g[i][c] === n) return false;
            var br = Math.floor(r/3)*3, bc = Math.floor(c/3)*3;
            for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) if (g[br+i][bc+j] === n) return false;
            return true;
        }

        // Считает решения с лимитом — нужно для проверки уникальности (limit=2)
        function countSolutions(grid, limit) {
            var count = 0;
            function solve() {
                if (count >= limit) return;
                // ищем клетку с минимумом кандидатов
                var bestR = -1, bestC = -1, bestCands = null;
                for (var r = 0; r < 9; r++) {
                    for (var c = 0; c < 9; c++) {
                        if (grid[r][c] === 0) {
                            var cands = [];
                            for (var n = 1; n <= 9; n++) if (isValid(grid, r, c, n)) cands.push(n);
                            if (!bestCands || cands.length < bestCands.length) {
                                bestR = r; bestC = c; bestCands = cands;
                                if (cands.length === 0) return;
                            }
                        }
                    }
                }
                if (bestR === -1) { count++; return; }
                for (var i = 0; i < bestCands.length; i++) {
                    grid[bestR][bestC] = bestCands[i];
                    solve();
                    grid[bestR][bestC] = 0;
                    if (count >= limit) return;
                }
            }
            solve();
            return count;
        }

        function generatePuzzle(level) {
            var sol = generateSolution();
            var pz = sol.map(function (r) { return r.slice(); });
            var targetEmpty = DIFFICULTIES[level].empty;

            // Симметрично убираем клетки. Берём только верхнюю половину
            // (включая центр) и пару (8-r, 8-c) к ней.
            var cells = [];
            for (var r = 0; r <= 4; r++) {
                for (var c = 0; c < 9; c++) {
                    if (r === 4 && c > 4) continue;
                    cells.push({ r: r, c: c });
                }
            }
            shuffleArr(cells);

            var removed = 0;
            for (var i = 0; i < cells.length; i++) {
                if (removed >= targetEmpty) break;
                var r1 = cells[i].r, c1 = cells[i].c;
                var r2 = 8 - r1, c2 = 8 - c1;
                if (pz[r1][c1] === 0) continue;

                var b1 = pz[r1][c1], b2 = pz[r2][c2];
                pz[r1][c1] = 0; pz[r2][c2] = 0;

                // проверка уникальности (на копии, чтобы тест-функция не портила pz)
                var test = pz.map(function (row) { return row.slice(); });
                if (countSolutions(test, 2) !== 1) {
                    pz[r1][c1] = b1; pz[r2][c2] = b2;
                } else {
                    removed += (r1 === r2 && c1 === c2) ? 1 : 2;
                }
            }
            return { puzzle: pz, solution: sol };
        }

        // ---------- Игровые методы ----------
        this.diffName = function (d) {
            return d === 'easy' ? Lampa.Lang.translate('diff_easy')
                : (d === 'medium' ? Lampa.Lang.translate('diff_medium') : Lampa.Lang.translate('diff_hard'));
        };

        this.create = function () {
            root.html(
                '<div class="game-wrap sudoku-wrap">' +
                  '<div class="game-info">' +
                    '<span class="sudoku-diff">' + Lampa.Lang.translate('diff_label') + ' <b>' + this.diffName(difficulty) + '</b></span>' +
                    '<span>' + Lampa.Lang.translate('time_label') + ' <b class="g-time">0</b></span>' +
                    '<span class="g-hint">↑↓←→ — курсор, OK — выбор, 1-9 — ввод, 0/Del — очистить</span>' +
                  '</div>' +
                  '<div class="sudoku-board"></div>' +
                  '<div class="game-overlay"></div>' +
                '</div>'
            );
            info = root.find('.game-info');
            overlay = root.find('.game-overlay');
            this.showDiffSelect();
        };

        this.showDiffSelect = function () {
            selectingDifficulty = true;
            popupActive = false;
            won = false; gameOver = false;
            if (timerId) { clearInterval(timerId); timerId = null; }
            root.find('.g-time').text(0);
            // рисуем выбор сложности
            var s = this;
            var html = '<div class="sudoku-diff-select">' +
                '<div class="sudoku-diff-title">' + Lampa.Lang.translate('diff_label') + '</div>' +
                '<div class="sudoku-diff-list">';
            for (var i = 0; i < DIFF_KEYS.length; i++) {
                var key = DIFF_KEYS[i];
                var rec = Lampa.Storage.get('games_record_sudoku_' + key, 0);
                var recText = rec ? ' <span class="sudoku-diff-rec">' + Lampa.Lang.translate('record') + ' ' + rec + ' ' + Lampa.Lang.translate('seconds_short') + '</span>' : '';
                html += '<div class="sudoku-diff-btn' + (i === diffCursor ? ' sudoku-diff-focused' : '') + '" data-d="' + key + '">' +
                    this.diffName(key) + recText +
                    '</div>';
            }
            html += '</div></div>';
            root.find('.sudoku-board').html(html);
            // тачи
            root.find('.sudoku-diff-btn').on('touchend mouseup', function (e) {
                e.preventDefault && e.preventDefault();
                var d = $(this).attr('data-d');
                difficulty = d;
                diffCursor = DIFF_KEYS.indexOf(d);
                s.startGame();
            });
        };

        this.drawDiffSelect = function () {
            // только обновляем фокус
            root.find('.sudoku-diff-btn').each(function (i) {
                if (i === diffCursor) $(this).addClass('sudoku-diff-focused');
                else $(this).removeClass('sudoku-diff-focused');
            });
        };

        this.startGame = function () {
            selectingDifficulty = false;
            this.reset();
        };

        this.reset = function () {
            var gen = generatePuzzle(difficulty);
            puzzle = gen.puzzle;
            solution = gen.solution;
            playerGrid = puzzle.map(function (r) { return r.slice(); });
            givenMask = puzzle.map(function (r) { return r.map(function (v) { return v !== 0; }); });

            // ставим курсор на первую пустую клетку
            cursor = { r: 0, c: 0 };
            outer: for (var r = 0; r < 9; r++) {
                for (var c = 0; c < 9; c++) {
                    if (!givenMask[r][c]) { cursor.r = r; cursor.c = c; break outer; }
                }
            }
            gameOver = false; won = false;
            popupActive = false;
            startTime = Date.now();
            overlay.removeClass('show').text('');
            root.find('.sudoku-diff b').text(this.diffName(difficulty));
            this.draw();

            if (timerId) clearInterval(timerId);
            var s = this;
            timerId = setInterval(function () {
                if (!won && !gameOver && startTime) {
                    var sec = Math.floor((Date.now() - startTime) / 1000);
                    root.find('.g-time').text(sec);
                }
            }, 500);
        };

        this.draw = function () {
            var html = '<div class="sudoku-grid">';
            var blockRow = Math.floor(cursor.r/3)*3, blockCol = Math.floor(cursor.c/3)*3;
            for (var r = 0; r < 9; r++) {
                for (var c = 0; c < 9; c++) {
                    var cls = 'sudoku-cell';
                    if (c % 3 === 2 && c !== 8) cls += ' sudoku-box-right';
                    if (r % 3 === 2 && r !== 8) cls += ' sudoku-box-bottom';
                    // подсветка ряда/столбца/блока активной клетки
                    if (!won && !gameOver && (r === cursor.r || c === cursor.c ||
                        (r >= blockRow && r < blockRow+3 && c >= blockCol && c < blockCol+3))) {
                        cls += ' sudoku-highlighted';
                    }
                    var val = playerGrid[r][c];
                    var content = '';
                    if (val) {
                        content = val;
                        if (givenMask[r][c]) cls += ' sudoku-given';
                        else {
                            cls += ' sudoku-user';
                            if (val !== solution[r][c]) cls += ' sudoku-error';
                        }
                    }
                    if (r === cursor.r && c === cursor.c && !won && !gameOver) cls += ' sudoku-focused';
                    html += '<div class="' + cls + '" data-r="' + r + '" data-c="' + c + '">' + content + '</div>';
                }
            }
            html += '</div>';
            // попап выбора цифры (на CSS-сетке 3x3 + ряд "очистить")
            html += '<div class="sudoku-popup' + (popupActive ? ' show' : '') + '">';
            for (var n = 1; n <= 9; n++) {
                var pcls = 'sudoku-popup-btn';
                var pr = Math.floor((n-1)/3), pc = (n-1)%3;
                if (popupActive && popupCursor.r === pr && popupCursor.c === pc) pcls += ' sudoku-popup-focused';
                html += '<div class="' + pcls + '" data-n="' + n + '">' + n + '</div>';
            }
            var clearCls = 'sudoku-popup-btn sudoku-popup-clear';
            if (popupActive && popupCursor.r === 3) clearCls += ' sudoku-popup-focused';
            html += '<div class="' + clearCls + '" data-n="0">✕</div>';
            html += '</div>';

            root.find('.sudoku-board').html(html);

            // Тач: тап на клетке — переместить курсор и открыть попап
            var s = this;
            root.find('.sudoku-cell').on('touchend mouseup', function (e) {
                e.preventDefault && e.preventDefault();
                if (gameOver || won) { s.reset(); return; }
                var rr = parseInt($(this).attr('data-r'), 10);
                var cc = parseInt($(this).attr('data-c'), 10);
                cursor.r = rr; cursor.c = cc;
                if (givenMask[rr][cc]) { s.draw(); return; }
                s.openPopup();
            });
            root.find('.sudoku-popup-btn').on('touchend mouseup', function (e) {
                e.preventDefault && e.preventDefault();
                e.stopPropagation && e.stopPropagation();
                var n = parseInt($(this).attr('data-n'), 10);
                if (n === 0) s.clearCell();
                else s.setNumber(n);
                s.closePopup();
            });
        };

        this.openPopup = function () {
            if (gameOver || won) return;
            if (givenMask[cursor.r][cursor.c]) return;
            popupActive = true;
            popupCursor = { r: 0, c: 0 };
            this.draw();
        };
        this.closePopup = function () {
            popupActive = false;
            this.draw();
        };

        this.setNumber = function (n) {
            if (gameOver || won) return;
            if (givenMask[cursor.r][cursor.c]) return;
            playerGrid[cursor.r][cursor.c] = n;
            this.draw();
            if (this.checkWin()) {
                var sec = Math.floor((Date.now() - startTime) / 1000);
                won = true;
                if (timerId) clearInterval(timerId);
                // рекорд для каждой сложности — наименьшее время
                var key = 'sudoku_' + difficulty;
                var prev = Lampa.Storage.get('games_record_' + key, 0);
                if (!prev || sec < prev) Lampa.Storage.set('games_record_' + key, sec);
                this.draw();
                overlay.html(Lampa.Lang.translate('game_victory') + '<br>' +
                    Lampa.Lang.translate('time_label') + ' ' + sec + ' ' + Lampa.Lang.translate('seconds_short') +
                    '<br><span class="g-sub">' + Lampa.Lang.translate('ok_restart') + '</span>').addClass('show');
            }
        };
        this.clearCell = function () {
            if (gameOver || won) return;
            if (givenMask[cursor.r][cursor.c]) return;
            playerGrid[cursor.r][cursor.c] = 0;
            this.draw();
        };

        this.checkWin = function () {
            for (var r = 0; r < 9; r++) {
                for (var c = 0; c < 9; c++) {
                    if (playerGrid[r][c] !== solution[r][c]) return false;
                }
            }
            return true;
        };

        this.move = function (dr, dc) {
            if (gameOver || won) return;
            var nr = cursor.r + dr, nc = cursor.c + dc;
            if (nr >= 0 && nr < 9 && nc >= 0 && nc < 9) {
                cursor.r = nr; cursor.c = nc;
                this.draw();
            }
        };

        this.movePopup = function (dr, dc) {
            if (!popupActive) return;
            var nr = popupCursor.r + dr, nc = popupCursor.c + dc;
            // Ряд 3 — это кнопка "очистить" (одна на всю строку)
            if (nr === 3) { popupCursor.r = 3; popupCursor.c = 0; this.draw(); return; }
            if (popupCursor.r === 3 && dr < 0) { popupCursor.r = 2; popupCursor.c = 1; this.draw(); return; }
            if (nr < 0 || nr > 3) return;
            if (nc < 0) nc = 2;
            if (nc > 2) nc = 0;
            popupCursor.r = nr; popupCursor.c = nc;
            this.draw();
        };

        this.applyPopup = function () {
            if (popupCursor.r === 3) this.clearCell();
            else this.setNumber(popupCursor.r * 3 + popupCursor.c + 1);
            this.closePopup();
        };

        this.moveDiff = function (delta) {
            diffCursor = (diffCursor + delta + DIFF_KEYS.length) % DIFF_KEYS.length;
            this.drawDiffSelect();
        };

        this.start = function () {
            var s = this;
            setupController({
                toggle: function () {
                    Lampa.Controller.collectionSet(root);
                    Lampa.Controller.collectionFocus(false, root);
                },
                left:  function () {
                    if (selectingDifficulty) s.moveDiff(-1);
                    else if (popupActive) s.movePopup(0, -1);
                    else s.move(0, -1);
                },
                right: function () {
                    if (selectingDifficulty) s.moveDiff(1);
                    else if (popupActive) s.movePopup(0, 1);
                    else s.move(0, 1);
                },
                up:    function () {
                    if (selectingDifficulty) s.moveDiff(-1);
                    else if (popupActive) s.movePopup(-1, 0);
                    else s.move(-1, 0);
                },
                down:  function () {
                    if (selectingDifficulty) s.moveDiff(1);
                    else if (popupActive) s.movePopup(1, 0);
                    else s.move(1, 0);
                },
                enter: function () {
                    if (selectingDifficulty) {
                        difficulty = DIFF_KEYS[diffCursor];
                        s.startGame();
                        return;
                    }
                    if (gameOver || won) { s.showDiffSelect(); return; }
                    if (popupActive) s.applyPopup();
                    else s.openPopup();
                },
                back: function () {
                    if (popupActive) { s.closePopup(); return; }
                    Lampa.Activity.backward();
                }
            });
            // Цифровые клавиши: 1-9 — ввод цифры в клетку, 0/Del — очистка.
            // В режиме выбора сложности 1/2/3 — быстрый выбор сложности.
            this._keyHandler = function (e) {
                if (!root.is(':visible')) return;
                var k = e.key;
                if (selectingDifficulty) {
                    if (k === '1' || k === '2' || k === '3') {
                        diffCursor = parseInt(k, 10) - 1;
                        difficulty = DIFF_KEYS[diffCursor];
                        s.startGame();
                        e.preventDefault();
                    }
                    return;
                }
                if (k >= '1' && k <= '9') {
                    if (gameOver || won) return;
                    if (popupActive) { s.closePopup(); }
                    s.setNumber(parseInt(k, 10));
                    e.preventDefault();
                } else if (k === '0' || k === 'Delete' || k === 'Backspace') {
                    if (gameOver || won) return;
                    s.clearCell();
                    e.preventDefault();
                }
            };
            $(document).on('keydown.sudoku', this._keyHandler);
        };

        this.pause = function () {};
        this.destroy = function () {
            if (timerId) clearInterval(timerId);
            $(document).off('keydown.sudoku');
        };
    };

    // ============================================================
    //                          ГОНКА (RACE)
    // ============================================================
    // Top-down аркадная гонка. Игрок внизу, дорога скроллится вниз
    // (эффект движения вперёд). Сверху появляются встречные машины,
    // их нужно объезжать. Очки = пройденная дистанция. Скорость растёт.
    GAMES.race = function (root) {
        var canvas, ctx, overlay;
        var W, H;
        var ROAD_LEFT, ROAD_RIGHT, ROAD_W;     // границы дорожного полотна (в пикселях)
        var LANES = 3;                          // три полосы
        var laneCenters;                        // x-координаты центров полос
        var player;                             // {x, y, w, h, targetX}
        var enemies;                            // [{x, y, w, h, color, speed}]
        var trees;                              // [{x, y, side: 'L'|'R'}] декоративные деревья
        var dashOffset;                         // смещение пунктирной разметки (анимация)
        var roadSpeed;                          // скорость "встречи земли", растёт со временем
        var spawnTimer;                         // время до следующего спавна машины
        var score;                              // очки = условные метры
        var gameOver;
        var paused;
        var destroyed = false;
        var loopTimer;
        var keysHeld = { left: false, right: false, up: false, down: false };
        var boost = 0;     // +1 при ↑ (газ), -1 при ↓ (тормоз), 0 — обычно

        this.create = function () {
            root.html(
                '<div class="game-wrap">' +
                  '<div class="game-info">' +
                    '<span>' + Lampa.Lang.translate('score') + ' <b class="g-score">0</b></span>' +
                    '<span>' + Lampa.Lang.translate('record') + ' <b class="g-record">' + getRecord('race') + '</b></span>' +
                    '<span class="g-hint">←→ — руль, ↑ — газ, ↓ — тормоз, OK — старт/рестарт</span>' +
                  '</div>' +
                  '<div class="game-canvas-wrap"><canvas></canvas><div class="game-overlay"></div></div>' +
                '</div>'
            );
            canvas = root.find('canvas')[0];
            ctx = canvas.getContext('2d');
            overlay = root.find('.game-overlay');
        };

        this.resize = function () {
            var wrap = root.find('.game-canvas-wrap')[0];
            var rect = wrap.getBoundingClientRect();
            var newW = Math.floor(rect.width);
            var newH = Math.floor(rect.height);
            if (newW < 300) newW = 600;
            if (newH < 300) newH = 500;
            W = newW; H = newH;
            canvas.width = W; canvas.height = H;
            // дорога занимает центральные ~70% ширины
            ROAD_W = Math.min(Math.floor(W * 0.7), 520);
            ROAD_LEFT = Math.floor((W - ROAD_W) / 2);
            ROAD_RIGHT = ROAD_LEFT + ROAD_W;
            laneCenters = [];
            var laneW = ROAD_W / LANES;
            for (var i = 0; i < LANES; i++) laneCenters.push(ROAD_LEFT + laneW * (i + 0.5));
            // подгоняем игрока под новый размер если есть
            if (player) {
                player.w = Math.max(28, Math.floor(ROAD_W / 9));
                player.h = Math.floor(player.w * 1.7);
                player.y = H - player.h - 30;
                // переместим игрока в ближайшую полосу
                var nearestLane = 0, dmin = 1e9;
                for (var i = 0; i < LANES; i++) {
                    var d = Math.abs(player.x + player.w/2 - laneCenters[i]);
                    if (d < dmin) { dmin = d; nearestLane = i; }
                }
                player.x = laneCenters[nearestLane] - player.w/2;
                player.targetX = player.x;
                player.lane = nearestLane;
            }
        };

        this.reset = function () {
            this.resize();
            var pw = Math.max(28, Math.floor(ROAD_W / 9));
            var ph = Math.floor(pw * 1.7);
            player = {
                x: laneCenters[1] - pw/2, // средняя полоса
                y: H - ph - 30,
                w: pw, h: ph,
                lane: 1,
                targetX: laneCenters[1] - pw/2
            };
            enemies = [];
            trees = [];
            dashOffset = 0;
            roadSpeed = Math.max(4, Math.floor(H / 110));   // базовая скорость
            spawnTimer = 0;
            score = 0;
            gameOver = false;
            paused = true;          // ждём OK для старта
            keysHeld = { left: false, right: false, up: false, down: false };
            boost = 0;
            root.find('.g-score').text(0);
            root.find('.g-record').text(getRecord('race'));
            this.draw();
            this.startLoop();
            overlay.html(Lampa.Lang.translate('press_ok_to_start')).addClass('show');
        };

        this.startLoop = function () {
            this.stopLoop();
            var s = this;
            loopTimer = setInterval(function () { s.tick(); }, 1000/60);
        };
        this.stopLoop = function () { if (loopTimer) { clearInterval(loopTimer); loopTimer = null; } };

        this.spawnEnemy = function () {
            // Не спавним если последняя машина в этой полосе слишком близко к верху
            var lane = Math.floor(Math.random() * LANES);
            for (var i = 0; i < enemies.length; i++) {
                if (enemies[i].lane === lane && enemies[i].y < H * 0.35) return;
            }
            var ew = player.w, eh = player.h;
            var colors = ['#1976d2', '#fbc02d', '#388e3c', '#7b1fa2', '#455a64', '#f57c00'];
            enemies.push({
                lane: lane,
                x: laneCenters[lane] - ew/2,
                y: -eh - 10,
                w: ew, h: eh,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        };

        this.spawnTree = function () {
            // На случайной обочине
            var side = Math.random() < 0.5 ? 'L' : 'R';
            var tw = Math.max(20, Math.floor(W / 30));
            var x;
            if (side === 'L') x = Math.random() * (ROAD_LEFT - tw - 4) + 2;
            else              x = ROAD_RIGHT + 4 + Math.random() * (W - ROAD_RIGHT - tw - 4);
            // если обочина слишком узкая — пропускаем
            if (x < 0 || x + tw > W) return;
            trees.push({ x: x, y: -tw - 4, w: tw, side: side });
        };

        this.tick = function () {
            if (destroyed) return;
            if (paused || gameOver) { this.draw(); return; }

            // Плавное движение игрока к targetX (анимация смены полосы)
            var dx = player.targetX - player.x;
            if (Math.abs(dx) > 1) player.x += dx * 0.25;
            else player.x = player.targetX;

            // Эффективная скорость с учётом газа/тормоза
            var effSpeed = roadSpeed;
            if (boost > 0) effSpeed *= 1.6;
            else if (boost < 0) effSpeed *= 0.5;

            // Прокрутка дороги (разметка) и движение всех объектов вниз
            dashOffset = (dashOffset + effSpeed) % 40;
            for (var i = 0; i < enemies.length; i++) enemies[i].y += effSpeed;
            for (var i = 0; i < trees.length; i++)   trees[i].y   += effSpeed;

            // Удаление улетевших за нижний край
            enemies = enemies.filter(function (e) { return e.y < H + 50; });
            trees   = trees.filter  (function (t) { return t.y < H + 60; });

            // Спавн машин
            spawnTimer -= 1;
            if (spawnTimer <= 0) {
                this.spawnEnemy();
                // чем больше очков — тем чаще спавним, но не быстрее ~25 кадров
                var base = Math.max(25, 80 - Math.floor(score / 80));
                spawnTimer = base * (0.7 + Math.random() * 0.6);
            }
            // Деревья — реже, и не на каждом тике
            if (Math.random() < 0.06) this.spawnTree();

            // Очки = пройденная "дистанция"
            score += Math.max(1, Math.floor(effSpeed));
            // Очень плавный рост базовой скорости
            if (score > 0 && score % 200 < effSpeed) {
                roadSpeed = Math.min(roadSpeed + 0.2, H / 35);
            }

            // Столкновения (AABB)
            for (var i = 0; i < enemies.length; i++) {
                var e = enemies[i];
                if (player.x < e.x + e.w && player.x + player.w > e.x &&
                    player.y < e.y + e.h && player.y + player.h > e.y) {
                    this.crash();
                    return;
                }
            }

            root.find('.g-score').text(score);
            this.draw();
        };

        this.crash = function () {
            gameOver = true;
            paused = true;
            this.stopLoop();
            // рекорд
            setRecord('race', score);
            root.find('.g-record').text(getRecord('race'));
            this.draw();
            overlay.html(Lampa.Lang.translate('game_over') + '<br>' +
                Lampa.Lang.translate('score') + ' ' + score +
                '<br><span class="g-sub">' + Lampa.Lang.translate('ok_restart') + '</span>').addClass('show');
        };

        this.draw = function () {
            if (!ctx) return;
            // Трава по бокам
            ctx.fillStyle = '#2e7d32';
            ctx.fillRect(0, 0, W, H);
            // Дорога
            ctx.fillStyle = '#37474f';
            ctx.fillRect(ROAD_LEFT, 0, ROAD_W, H);
            // Бордюры
            ctx.fillStyle = '#fff';
            ctx.fillRect(ROAD_LEFT - 4, 0, 4, H);
            ctx.fillRect(ROAD_RIGHT,    0, 4, H);
            // Прерывистая разметка между полосами (две линии для 3 полос)
            ctx.fillStyle = '#fff';
            var laneW = ROAD_W / LANES;
            for (var i = 1; i < LANES; i++) {
                var lx = ROAD_LEFT + laneW * i - 2;
                for (var y = -40 + dashOffset; y < H; y += 40) {
                    ctx.fillRect(lx, y, 4, 22);
                }
            }
            // Деревья
            for (var i = 0; i < trees.length; i++) {
                var t = trees[i];
                ctx.fillStyle = '#1b5e20';
                ctx.beginPath();
                ctx.arc(t.x + t.w/2, t.y + t.w/2, t.w/2, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#3e2723';
                ctx.fillRect(t.x + t.w/2 - 2, t.y + t.w, 4, 8);
            }
            // Враги
            for (var i = 0; i < enemies.length; i++) {
                this.drawCar(enemies[i].x, enemies[i].y, enemies[i].w, enemies[i].h, enemies[i].color, false);
            }
            // Игрок
            this.drawCar(player.x, player.y, player.w, player.h, '#e53935', true);
        };

        this.drawCar = function (x, y, w, h, color, isPlayer) {
            // Кузов
            ctx.fillStyle = color;
            ctx.beginPath();
            // прямоугольник со скруглёнными углами
            var r = Math.min(6, w/4);
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + r);
            ctx.lineTo(x + w, y + h - r);
            ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            ctx.lineTo(x + r, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
            ctx.fill();
            // окна
            ctx.fillStyle = isPlayer ? '#1565c0' : '#263238';
            ctx.fillRect(x + 3, y + h * 0.18, w - 6, h * 0.20);     // лобовое
            ctx.fillRect(x + 3, y + h * 0.62, w - 6, h * 0.20);     // заднее
            // фары
            ctx.fillStyle = isPlayer ? '#fdd835' : '#fff59d';
            // если игрок — фары спереди (вверху), если враг — то же (он "лицом" к нам)
            ctx.fillRect(x + 2,         y + 2, w * 0.20, 3);
            ctx.fillRect(x + w - 2 - w*0.20, y + 2, w * 0.20, 3);
            // задние фонари
            ctx.fillStyle = '#c62828';
            ctx.fillRect(x + 2,         y + h - 5, w * 0.20, 3);
            ctx.fillRect(x + w - 2 - w*0.20, y + h - 5, w * 0.20, 3);
        };

        this.move = function (dir) {
            if (gameOver || paused) return;
            // переключаем полосу
            var newLane = player.lane + dir;
            if (newLane < 0) newLane = 0;
            if (newLane > LANES - 1) newLane = LANES - 1;
            player.lane = newLane;
            player.targetX = laneCenters[newLane] - player.w/2;
        };

        this.start = function () {
            var s = this;
            setupController({
                toggle: function () {
                    Lampa.Controller.collectionSet(root);
                    Lampa.Controller.collectionFocus(false, root);
                },
                left:  function () { s.move(-1); },
                right: function () { s.move( 1); },
                up:    function () { if (!gameOver && !paused) boost = 1; },
                down:  function () { if (!gameOver && !paused) boost = -1; },
                enter: function () {
                    if (gameOver) { s.reset(); return; }
                    if (paused) { paused = false; overlay.removeClass('show').text(''); return; }
                }
            });
            // Тач: тап слева/справа — рулим, тап посередине — старт/рестарт.
            // Свайп вверх — газ, свайп вниз — тормоз (импульс на ~0.6 сек).
            this._detachTouch = attachTouch(root, {
                onTap: function (x, y) {
                    if (gameOver) { s.reset(); return; }
                    if (paused) { paused = false; overlay.removeClass('show').text(''); return; }
                    var rect = root[0].getBoundingClientRect();
                    if (x < rect.width * 0.35) s.move(-1);
                    else if (x > rect.width * 0.65) s.move(1);
                },
                onSwipe: function (dir) {
                    if (gameOver || paused) return;
                    if (dir === 'left')  s.move(-1);
                    if (dir === 'right') s.move(1);
                    if (dir === 'up')    { boost = 1;  setTimeout(function(){ if (boost === 1) boost = 0; }, 600); }
                    if (dir === 'down')  { boost = -1; setTimeout(function(){ if (boost === -1) boost = 0; }, 600); }
                }
            });
            // Сброс boost при отпускании клавиши (обычные браузеры)
            this._keyUp = function (e) {
                if (e.key === 'ArrowUp' && boost === 1) boost = 0;
                if (e.key === 'ArrowDown' && boost === -1) boost = 0;
            };
            $(document).on('keyup.race', this._keyUp);

            this._r = function () { s.resize(); s.draw(); };
            $(window).on('resize', this._r);
            setTimeout(function () { if (!destroyed) s.reset(); }, 50);
        };

        this.pause = function () {};
        this.destroy = function () {
            destroyed = true;
            this.stopLoop();
            if (this._detachTouch) this._detachTouch();
            $(document).off('keyup.race');
            $(window).off('resize', this._r);
        };
    };


    function injectCSS() {
        var css =
        '<style>' +
        // Меню
        '.games-menu{padding:2em;color:#fff;height:100%;max-height:100vh;overflow-y:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;}' +
        '.games-menu__title{font-size:1.6em;margin-bottom:1em;opacity:.8;}' +
        '.games-menu__list{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1em;}' +
        '.games-menu__item{display:flex;align-items:center;gap:1em;padding:1em;background:rgba(255,255,255,0.05);border-radius:.6em;cursor:pointer;border:2px solid transparent;transition:all .2s;}' +
        '.games-menu__item.focus{border-color:#ffeb3b;background:rgba(255,235,59,0.12);transform:scale(1.03);}' +
        '.games-menu__icon{flex-shrink:0;width:64px;height:64px;border-radius:.5em;background:#1a1a2e;display:flex;align-items:center;justify-content:center;overflow:hidden;}' +
        '.games-menu__icon svg{width:60px;height:60px;}' +
        '.games-menu__body{flex:1;min-width:0;}' +
        '.games-menu__name{font-size:1.2em;font-weight:600;margin-bottom:.2em;}' +
        '.games-menu__desc{opacity:.6;font-size:.85em;}' +
        '.games-menu__rec{margin-top:.4em;font-size:.8em;color:#ffeb3b;}' +
        // Общая обёртка игр
        '.games-play{padding:0.2em;height:100%;box-sizing:border-box;}' +
        '.game-wrap{display:flex;flex-direction:column;align-items:center;color:#fff;height:100%;}' +
        '.game-info{display:flex;gap:0.6em;margin-bottom:0.3em;font-size:0.85em;flex-wrap:wrap;justify-content:center;line-height:1;}' +
        '.game-info span{padding:0.25em 0.5em;background:rgba(255,255,255,0.05);border-radius:.3em;}' +
        '.g-hint{opacity:.5;font-size:.9em;}' +
        '@media (max-height: 700px){.g-hint{display:none;}}' +
        '.game-canvas-wrap{position:relative;width:96vmin;height:calc(100vh - 60px);max-width:99vw;max-height:calc(100vh - 60px);display:flex;align-items:center;justify-content:center;touch-action:none;user-select:none;-webkit-user-select:none;}' +
        '.game-canvas-wrap canvas{display:block;background:#111;border-radius:.5em;box-shadow:0 0 20px rgba(0,0,0,.5);touch-action:none;}' +
        '.game-overlay{position:absolute;inset:0;display:none;align-items:center;justify-content:center;flex-direction:column;background:rgba(0,0,0,.7);font-size:2em;text-align:center;border-radius:.5em;z-index:10;}' +
        '.game-overlay.show{display:flex;}' +
        '.g-sub{font-size:.5em;opacity:.7;display:block;margin-top:.5em;}' +
        // Морской бой
        '.sea-wrap{padding:1em;}' +
        '.sea-boards{display:flex;gap:2em;justify-content:center;flex-wrap:wrap;}' +
        '.sea-side{text-align:center;}' +
        '.sea-title{margin-bottom:.5em;opacity:.7;}' +
        '.sea-table{border-collapse:collapse;}' +
        '.sea-cell{width:30px;height:30px;border:1px solid rgba(255,255,255,0.2);background:rgba(0,80,150,0.3);}' +
        '.sea-cell.sea-ship{background:#888;}' +
        '.sea-cell.sea-miss{background:rgba(255,255,255,0.15);}' +
        '.sea-cell.sea-miss::after{content:"·";color:#fff;display:flex;align-items:center;justify-content:center;height:100%;}' +
        '.sea-cell.sea-hit{background:#e53935;}' +
        '.sea-cell.sea-hit::after{content:"X";color:#fff;display:flex;align-items:center;justify-content:center;height:100%;font-weight:bold;}' +
        '.sea-cell.sea-cursor{outline:2px solid #ffeb3b;outline-offset:-2px;}' +
        // Крестики-нолики
        '.ttt-board{display:grid;grid-template-columns:repeat(3,100px);gap:6px;margin:1em 0;}' +
        '.ttt-cell{width:100px;height:100px;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:3em;font-weight:bold;border-radius:.4em;}' +
        '.ttt-cell.ttt-cursor{outline:3px solid #ffeb3b;}' +
        // Memory
        '.memory-board{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;width:min(80vmin,500px);margin:1em 0;}' +
        '.memory-card{aspect-ratio:1;background:#1976d2;border-radius:.5em;display:flex;align-items:center;justify-content:center;font-size:2.5em;cursor:pointer;transition:all .2s;border:3px solid transparent;}' +
        '.memory-card--open{background:#fff;color:#000;}' +
        '.memory-card--matched{background:#43a047;color:#fff;opacity:.7;}' +
        '.memory-card--cursor{border-color:#ffeb3b;transform:scale(1.05);}' +
        // Сапёр
        '.mine-board{margin:0.3em 0;display:flex;justify-content:center;}' +
        '.mine-grid{display:grid;gap:1px;background:#37474f;padding:2px;border-radius:.3em;}' +
        '.mine-cell{aspect-ratio:1;width:min(6vmin,40px);background:#cfd8dc;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:0.9em;cursor:pointer;border:1px outset #eceff1;}' +
        '.mine-cell.mine-revealed{background:#90a4ae;border:1px solid #455a64;}' +
        '.mine-cell.mine-bomb{background:#f44336;}' +
        '.mine-cell.mine-flag{background:#ffe082;}' +
        '.mine-cell.mine-cursor{outline:3px solid #ffeb3b;outline-offset:-3px;z-index:1;}' +
        '.mine-cell.mine-n1{color:#1976d2;}' +
        '.mine-cell.mine-n2{color:#388e3c;}' +
        '.mine-cell.mine-n3{color:#d32f2f;}' +
        '.mine-cell.mine-n4{color:#5e35b1;}' +
        '.mine-cell.mine-n5{color:#bf360c;}' +
        '.mine-cell.mine-n6{color:#00695c;}' +
        '.mine-cell.mine-n7{color:#000;}' +
        '.mine-cell.mine-n8{color:#37474f;}' +
        // Шашки
        '.check-board{margin:0.3em 0;display:flex;justify-content:center;}' +
        '.check-grid{display:grid;grid-template-columns:repeat(8,1fr);width:min(70vmin,560px);aspect-ratio:1;border:3px solid #3e2723;}' +
        '.check-cell{display:flex;align-items:center;justify-content:center;position:relative;}' +
        '.check-light{background:#e6c39a;}' +
        '.check-dark{background:#8d6e63;}' +
        '.check-cursor{outline:3px solid #ffeb3b;outline-offset:-3px;z-index:2;}' +
        '.check-selected{outline:3px solid #4caf50;outline-offset:-3px;z-index:1;}' +
        '.check-validmove::after{content:"";position:absolute;width:30%;height:30%;background:rgba(76,175,80,0.5);border-radius:50%;}' +
        '.check-piece{width:75%;height:75%;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:min(3vmin,1.4em);font-weight:bold;line-height:1;box-sizing:border-box;}' +
        '.check-white{background:radial-gradient(circle at 30% 30%,#fff,#bdbdbd);border:2px solid #757575;color:#b8860b;}' +
        '.check-black{background:radial-gradient(circle at 30% 30%,#616161,#212121);border:2px solid #000;color:#ffd700;}' +
        '.check-king{box-shadow:0 0 8px rgba(255,215,0,0.8);border-color:#ffd700 !important;}' +
        '.check-king::before{content:"★";}' +
        // Судоку
        '.sudoku-wrap{position:relative;}' +
        '.sudoku-board{margin:0.3em 0;display:flex;justify-content:center;position:relative;}' +
        '.sudoku-grid{display:grid;grid-template-columns:repeat(9,1fr);gap:1px;background:#fff;padding:2px;width:min(75vmin,560px);aspect-ratio:1;border:3px solid #fff;box-sizing:border-box;}' +
        '.sudoku-cell{background:#1a1a1a;display:flex;align-items:center;justify-content:center;font-size:min(4.5vmin,1.5em);font-weight:400;color:#ddd;position:relative;transition:background 0.1s;}' +
        '.sudoku-cell.sudoku-box-right{border-right:2px solid #fff;}' +
        '.sudoku-cell.sudoku-box-bottom{border-bottom:2px solid #fff;}' +
        '.sudoku-cell.sudoku-given{color:#ccc;font-weight:bold;}' +
        '.sudoku-cell.sudoku-user{color:#4fc3f7;}' +
        '.sudoku-cell.sudoku-error{color:#ff5252 !important;background:#3e1a1a;font-weight:bold;}' +
        '.sudoku-cell.sudoku-highlighted{background:#2a3f5f;}' +
        '.sudoku-cell.sudoku-focused{box-shadow:inset 0 0 0 3px #00e5ff;background:#004466;z-index:2;}' +
        '.sudoku-popup{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:none;grid-template-columns:repeat(3,1fr);gap:4px;background:#222;border:3px solid #00bfff;border-radius:0.6em;padding:0.6em;z-index:20;width:min(40vmin,200px);}' +
        '.sudoku-popup.show{display:grid;}' +
        '.sudoku-popup-btn{background:#2a2a2a;border:2px solid #555;border-radius:0.4em;font-size:min(4vmin,1.4em);color:#fff;display:flex;align-items:center;justify-content:center;padding:0.4em;font-weight:bold;cursor:pointer;}' +
        '.sudoku-popup-clear{grid-column:span 3;font-size:min(3vmin,1em) !important;color:#ff7043;}' +
        '.sudoku-popup-btn.sudoku-popup-focused{border-color:#00e5ff;box-shadow:0 0 12px #00bfff;background:#004466;}' +
        '.sudoku-diff-select{display:flex;flex-direction:column;align-items:center;justify-content:center;width:min(75vmin,560px);padding:2em 1em;background:rgba(255,255,255,0.03);border-radius:0.6em;}' +
        '.sudoku-diff-title{font-size:1.4em;margin-bottom:1em;opacity:0.85;}' +
        '.sudoku-diff-list{display:flex;flex-direction:column;gap:0.7em;width:100%;max-width:380px;}' +
        '.sudoku-diff-btn{font-size:1.2em;padding:0.7em 1em;background:#2a2a2a;border:3px solid #555;border-radius:0.4em;text-align:center;color:#fff;cursor:pointer;transition:all 0.15s;display:flex;justify-content:space-between;align-items:center;gap:1em;}' +
        '.sudoku-diff-btn.sudoku-diff-focused{border-color:#00e5ff;background:#004466;box-shadow:0 0 16px rgba(0,191,255,0.6);}' +
        '.sudoku-diff-rec{font-size:0.85em;color:#ffeb3b;opacity:0.9;}' +
        '</style>';
        $('body').append(css);
    }

    // ============================================================
    //                       ИНИЦИАЛИЗАЦИЯ
    // ============================================================
    function startPlugin() {
        injectCSS();

        Lampa.Component.add('games_menu', GamesMenuComponent);
        Lampa.Component.add('games_play', GamesPlayComponent);

        function addMenuItem() {
            var item = $(
                '<li class="menu__item selector games-menu-item">' +
                    '<div class="menu__ico">' + GAMES_ICON + '</div>' +
                    '<div class="menu__text">' + Lampa.Lang.translate('games_menu_title') + '</div>' +
                '</li>'
            );
            item.on('hover:enter', function () {
                Lampa.Activity.push({
                    url: '',
                    title: Lampa.Lang.translate('games_menu_title'),
                    component: 'games_menu',
                    page: 1
                });
            });
            $('.menu .menu__list').eq(0).append(item);
        }

        if (window.appready) addMenuItem();
        else Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') addMenuItem();
        });
    }

    if (window.Lampa && window.Lampa.Component) startPlugin();
    else {
        var iv = setInterval(function () {
            if (window.Lampa && window.Lampa.Component) {
                clearInterval(iv);
                startPlugin();
            }
        }, 200);
    }

})();
