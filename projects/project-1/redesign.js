(() => {
  const root = document.querySelector('.project');
  if (!root) return;
  const asset = name => name.endsWith('.png')
    ? `../../assets/project1-${name.slice(0, -4)}.webp`
    : `../../assets/figma-${name}`;
  const image = (name, style = '', cls = '') => `<img class="${cls}" src="${asset(name)}" alt="" style="${style}">`;
  const at = (top, left, content, cls = '', extra = '') => `<section class="case129-block ${cls}" style="top:${top}px;left:${left}px;${extra}">${content}</section>`;
  const text = (title, body) => `<h2>${title}</h2><p>${body}</p>`;
  const chip = (title, body, top) => at(top, 130, `<h2 class="case129-chip">${title}</h2><p>${body}</p>`, 'case129-solution');
  const phone = (name, x, y, w = 282, h = 611) => image(name, `left:${x}px;top:${y}px;width:${w}px;height:${h}px`, 'case129-phone');
  const shot = (top, kind, content, extra = '') => at(top, 30, `<div class="case129-shot-inner">${content}</div>`, `case129-shot ${kind}`, extra);
  const decor = (name, x, y, w, h, transform = '') => `<img class="case129-decor" src="../../assets/project1-${name}.svg" alt="" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;transform:${transform || 'none'}">`;
  const callout = (label, x, y, arrow, dx, dy, w, h, transform) => `<div class="case129-callout" style="left:${x}px;top:${y}px"><span class="case129-note">${label}</span><img class="case129-callout-arrow" src="../../assets/project1-${arrow}.svg" alt="" style="left:${dx}px;top:${dy}px;width:${w}px;height:${h}px;transform:${transform}"></div>`;
  const arrow = (name, x, y, boxW, boxH, w, h, transform) => `<span class="case129-figma-arrow" style="left:${x}px;top:${y}px;width:${boxW}px;height:${boxH}px"><img src="../../assets/project1-${name}.svg" alt="" style="width:${w}px;height:${h}px;transform:${transform}"></span>`;
  const label = (name, x, y) => `<span class="case129-figma-label case129-note" style="left:${x}px;top:${y}px">${name}</span>`;
  const notification = (heading, body, time, x, y) => `<div class="case129-notification" style="left:${x}px;top:${y}px"><img src="../../assets/project1-0a785.webp" alt=""><span><strong>${heading}</strong><small>${body}</small></span><time>${time}</time></div>`;
  const facts = [
    ['Задача', 'Спроектировать функцию «Совместный заказ» для Додо Пиццы, чтобы пользователи могли одновременно собирать корзину, добавлять свои блюда и удобно оплачивать заказ вместе'],
    ['Вводные', 'Сейчас заказ рассчитан на одного человека: при заказе на компанию приходится обсуждать блюда в переписке, вручную собирать общую корзину и отдельно договариваться об оплате'],
    ['Миссия пользователя', 'Упростить совместный заказ: дать каждому участнику возможность самостоятельно добавлять блюда в общую корзину, видеть выбор остальных и удобно оплачивать свою часть заказа'],
    ['Цель бизнеса', 'Повысить средний чек за счёт совместных заказов, привлечь новых пользователей через приглашения в общую корзину, увеличить удержание аудитории и её долгосрочную ценность для бизнеса'],
    ['Сегменты', 'Офисные сотрудники, студенты, компании друзей, семьи и пары, которые заказывают еду вместе: им важно быстро собрать общую корзину, учесть предпочтения каждого и удобно разделить оплату'],
    ['Критерии успеха', 'Увеличение среднего чека, рост популярности совместных заказов среди пользователей и сохранение конверсии в оформление заказа, оценка востребованности функции после запуска']
  ];
  const survey = [
    ['47%', 'Неудобно ждать, пока все определятся', 47],
    ['77%', 'Хотят самостоятельно добавлять блюда', 77],
    ['61%', 'Хотят оплачивать только свою часть заказа', 61],
    ['72%', 'Считают общую корзину полезной', 72]
  ];
  root.className = 'project case129';
  root.style.height = '13548px';
  root.innerHTML = `
    <header class="case129-header"><a href="../../index.html" aria-label="Назад на главную"><span class="case129-back">‹</span> Назад</a><span>Екатерина Жиркова</span></header>
    ${at(180,130,`<div class="case129-title"><img src="${asset('0a785.png')}" alt=""><span><b>Додо Пицца</b><small>case study, 2026</small></span></div><h1>Совместный заказ</h1><p>Учебный проект по разработке фичи совместного заказа в приложении доставки еды Додо Пицца, которая позволяет создавать общую корзину, приглашать друзей, добавлять товары каждому участнику и выбирать удобный способ оплаты – за всех или каждый за себя</p><a class="case129-figma" target="_blank" rel="noopener noreferrer" href="https://www.figma.com/design/EmcM6BuNpGsSieiQiuiYVW/%D0%94%D0%BE%D0%B4%D0%BE-%D0%9F%D0%B8%D1%86%D1%86%D0%B0-%D0%9A%D0%B5%D0%B9%D1%81?node-id=1-12569&t=W89phi8FiZFuYzn0-1"><img class="case129-figma-symbol" src="../../assets/project1-figma-icon.png" alt="">посмотреть в фигме</a>`,'case129-intro')}
    ${at(723,30,`<div class="case129-cover-glow"></div><img src="../../assets/project-1-cover-phone.webp" alt="Макет совместного заказа Додо Пиццы">`,'case129-cover')}
    ${at(1502,130,`<h2>О проекте</h2><div class="case129-facts">${facts.map(([title,body])=>`<div class="case129-fact"><h3>${title}</h3><p>${body}</p></div>`).join('')}</div>`,'case129-about')}
    ${at(2302,130,text('Бенчмаркинг','В ходе анализа российского рынка не было найдено сервисов доставки с полноценной функцией совместного заказа, поэтому в качестве референса рассмотрена Яндекс Лавка, где можно поделиться собранной корзиной. Также были изучены зарубежные сервисы доставки, поддерживающие групповые заказы – Wolt и Uber Eats'),'case129-research')}
    ${at(2566,0,`<div class="case129-benchmark-track">${['3baa5.png','a9be8.png','07be4.png','19ca1.png','62a68.png','7f576.png','1090e.png'].map(n=>image(n)).join('')}</div>`,'case129-benchmark')}
    ${at(3298,130,`<h2>Опросы</h2><p>Провела небольшой опрос через Google Forms, чтобы узнать, как пользователи сейчас собирают совместные заказы и какие сложности возникают в процессе</p><p>Опрос показал, что основная сложность заказа совместно на данный момент – это необходимость согласовывать выбор блюд между участниками. Наиболее полезными возможностями по мнению респондентов стали самостоятельное добавление позиций и раздельная оплата. Большинство опрошенных положительно оценили идею общей корзины</p><div class="case129-survey-grid">${survey.map(([num,label,width])=>`<div><strong>${num}</strong><div class="case129-bar"><i style="width:${width}%"></i></div><span>${label}</span></div>`).join('')}</div>`,'case129-survey')}
    ${at(4006,130,`<h2>Гипотезы и решения</h2><h3 class="case129-chip">Онбординг</h3><p>При запуске функции пользователям будут доступны истории, знакомящие с механикой совместного заказа. Также перед первым созданием общей корзины можно будет подробнее ознакомиться с правилами её использования</p>`,'case129-hypotheses')}
    ${shot(4322,'case129-soft',phone('86a1c.png',87,114)+phone('f5ac1.png',469,144)+phone('4d5c9.png',851,174))}
    ${shot(5092,'case129-orange',decor('bg-onboard2',-34,-35,1288,906,'rotate(180deg)')+phone('3bba2.png',278,144)+phone('d95d8.png',660,144))}
    ${chip('Точки входа','Пользователь может создать общую корзину с главного экрана приложения или из корзины. На этапе запуска функции на главном экране временно появятся истории и баннер, которые помогут познакомить пользователей с новой возможностью',5952)}
    ${shot(6164,'case129-orange',decor('bg-entry',-118,74,1455,1023)+phone('6e5a6.png',251,343,327,708)+phone('4da0b.png',668,144,282,611)+image('0ee6f.png','left:213px;top:380px;width:234px;height:289px','case129-overlay')+`<div class="case129-entry-banner"><div class="case129-entry-banner-copy"><strong>Заказывайте вместе!</strong><span>Создайте общую корзину и заказывайте вместе</span></div><img src="../../assets/project1-entry-basket.png" alt=""><span class="case129-entry-banner-close" aria-hidden="true">×</span></div>`)}
    ${chip('Создание корзины','При создании общей корзины пользователь выбирает способ оплаты и адрес доставки, а также может изменить её название и установить аватарку, чтобы сделать совместный заказ более персонализированным',7024)}
    ${shot(7236,'case129-orange',decor('bg-create',-120,-44,1455,1023)+phone('ba44e.png',87,114)+phone('e0cdb.png',469,144)+phone('c39dd.png',851,174))}
    ${chip('Приглашение','Участники заходят в общую корзину по ссылке или QR-коду<br>Если пользователь перейдёт по приглашению после оформления заказа, он увидит информационный экран с возможностью создать новый совместный заказ',8096)}
    ${shot(8308,'case129-soft',phone('6739b.png',278,144)+phone('5ca8f.png',660,144)+label('Активная ссылка',60,437)+arrow('invite2',103,322,148,135,78,134,'rotate(55.1deg) scaleY(-1)')+label('Неактивная ссылка',999,538)+arrow('invite3',959,449,126,99,56,116,'rotate(128.39deg) scaleY(.99) skewX(6.98deg)'))}
    ${chip('Общая корзина','В общей корзине отображается название, аватарка созданной группы, а также можно отслеживать статусы о готовности всех участников',9168)}
    ${shot(9332,'case129-soft',phone('57ea4.png',271,130,320,890)+phone('22f99.png',691,-280,257,1672)+callout('Скрытый список участников',60,494,'basket2',48,37,78,134,'rotate(-30deg)')+callout('Раскрытый список участников',919,444,'basket3',50,-117,56,116,'rotate(152deg) skewX(7deg)'))}
    ${chip('Дополнительный статус','При раздельной оплате появляется дополнительный статус ожидания оплаты участников. Выбранное создателем время доставки сохраняется в течение 10 минут. После оплаты всеми участниками заказ передаётся на кухню или его можно отменить',10192)}
    ${shot(10404,'case129-orange',decor('bg-additional',-118,-123,1455,1023,'rotate(180deg)')+phone('d5fe8.png',272,174)+phone('fb63d.png',658,114))}
    ${chip('Оплата создателем','Если заказ оплачивает создатель корзины, каждый участник должен подтвердить завершение выбора блюд кнопкой «Я готов». Если кто-то не подтвердил готовность, создатель может отправить напоминание или оформить заказ без этих участников',11264)}
    ${shot(11476,'case129-soft',phone('ee861.png',227,-96,350,758)+phone('a31f1.png',643,-97,350,759)+label('Участник',358,722)+arrow('payment2',115,574,243,217,120,219,'rotate(-56.16deg) scaleY(-1)')+label('Создатель',769,752)+arrow('payment3',867,597,216,216,103,214,'rotate(-121.51deg) scaleY(.99) skewX(6.98deg)'))}
    ${chip('Напоминания','Создатель общей корзины может напомнить участникам об оплате, чтобы сохранить выбранное время доставки',12336)}
    ${shot(12500,'case129-soft',phone('adb4a.png',475,-143,271,583)+phone('28428.png',475,460,271,580)+notification('Пора завершать заказ','Екатерина ждёт вас в совместном заказе','9:41 AM',409,623)+notification('Оплатите до 07:53 PM','Чтобы сохранить выбранное время доставки','07:43 PM',409,280)+label('Раздельная оплата',108,338)+arrow('reminder1',186,161,231,211,120,204,'rotate(55.1deg) scaleY(-1)')+label('Оплата создателем',929,662)+arrow('reminder2',812,517,198,155,87,176,'rotate(128.39deg) scaleY(.99) skewX(6.98deg)'))}
    ${at(13363,30,`<p>Буду рада стать частью вашей команды! <a href="mailto:zhirkovakatya190517@yandex.ru" aria-label="Написать Екатерине Жирковой по электронной почте"><img src="../../assets/home-96-footer-bubble.svg" alt=""></a></p>`,'case129-footer')}
  `;
  // The reference row extends beyond the frame; wheel gestures move it horizontally.
  const row = root.querySelector('.case129-benchmark');
  row.addEventListener('wheel', event => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      const limit = row.scrollWidth - row.clientWidth;
      const next = Math.max(0, Math.min(limit, row.scrollLeft + event.deltaY));
      if (next !== row.scrollLeft) {
        row.scrollLeft = next;
        event.preventDefault();
      }
    }
  }, {passive:false});
  const surveyGrid = root.querySelector('.case129-survey-grid');
  const surveyObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      surveyGrid.classList.add('is-animated');
      surveyObserver.disconnect();
    }
  }, {threshold: 0.2});
  surveyObserver.observe(surveyGrid);
  const syncTabletHeight = () => {
    const app = document.querySelector('#app');
    const tablet = window.innerWidth > 700 && window.innerWidth < 1280;
    const scale = window.innerWidth / 1280;
    app.style.height = tablet ? `${13548 * scale}px` : '';
    root.querySelector('.case129-footer').style.transform = tablet ? `scale(${1 / scale})` : '';
    root.querySelector('.case129-footer').style.transformOrigin = tablet ? 'top left' : '';
  };
  syncTabletHeight();
  window.addEventListener('resize', syncTabletHeight);
})();
