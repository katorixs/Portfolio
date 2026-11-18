(() => {
  const desktop = document.querySelector('.case129');
  if (!desktop) return;
  const asset = name => name === '60058' ? '../../assets/figma-60058.png' : `../../assets/project1-${name}.webp`;
  const vec = name => `../../assets/mobile144-${name}.svg`;
  const img = (name, cls = '') => `<img class="${cls}" src="${asset(name)}" alt="">`;
  const phones = (names, cls = '') => `<div class="m144-phones ${cls}">${names.map(name => img(name)).join('')}</div>`;
  const decor = name => `<img class="m144-decor" src="${vec(name)}" alt="">`;
  const card = (kind, content, vector = '') => `<div class="m144-shot m144-${kind}">${vector ? decor(vector) : ''}${content}</div>`;
  const callout = (text, cls, arrow) => `<span class="m144-callout ${cls}">${text}</span><img class="m144-arrow ${cls}-arrow" src="${vec(arrow)}" alt="">`;
  const sectionText = title => [...desktop.querySelectorAll('.case129-solution')].find(el => el.querySelector('.case129-chip')?.textContent.trim() === title)?.querySelector('p')?.innerHTML.trim() || '';
  const solution = (title, content, body = sectionText(title)) => `<section class="m144-solution"><h3>${title}</h3><p>${body}</p>${content}</section>`;
  const facts = [...desktop.querySelectorAll('.case129-fact')].map(el => `<div class="m144-fact"><h3>${el.querySelector('h3').textContent}</h3><p>${el.querySelector('p').textContent}</p></div>`).join('');
  const survey = [...desktop.querySelectorAll('.case129-survey-grid>div')].map(el => `<div class="m144-stat"><strong>${el.querySelector('strong').textContent}</strong><div class="m144-bar"><i style="width:${el.querySelector('strong').textContent}"></i></div><span>${el.querySelector('span').textContent}</span></div>`).join('');
  const mobile = document.createElement('main');
  mobile.className = 'project-mobile m144';
  mobile.innerHTML = `
    <header class="m144-header"><a href="../../index.html"><img src="${vec('54708')}" alt="">Назад</a><span>Екатерина Жиркова</span></header>
    <section class="m144-hero"><div class="m144-project-label">${img('0a785')}<span><b>Додо Пицца</b><small>case study, 2026</small></span></div><h1>Совместный заказ</h1><p>${desktop.querySelector('.case129-intro>p').textContent.trim()}</p><a class="m144-figma" href="${desktop.querySelector('.case129-figma').href}" target="_blank" rel="noopener noreferrer"><img src="../../assets/project1-figma-icon.png" alt="">посмотреть в фигме</a></section>
    <div class="m144-cover-scroll"><div class="m144-cover"><img class="is-current" src="../../assets/project1-cover-phone-hi.webp" alt=""><img src="../../assets/home-card-hover-1.png" alt=""><img src="../../assets/home-card-hover-2.png" alt=""></div></div>
    <section class="m144-about"><h2>О проекте</h2><div class="m144-facts">${facts}</div></section>
    <section class="m144-benchmark"><h2>Бенчмаркинг</h2><p>${desktop.querySelector('.case129-research p').textContent.trim()}</p><div class="m144-benchmark-track">${['3baa5','a9be8','07be4','19ca1','62a68','7f576','1090e'].map(name=>img(name)).join('')}</div><div class="m144-benchmark-meta"><span>Листайте →</span><span class="m144-benchmark-count">01 / 07</span></div></section>
    <section class="m144-survey"><h2>Опросы</h2><div class="m144-survey-copy">${[...desktop.querySelectorAll('.case129-survey>p')].map(el=>`<p>${el.textContent.trim()}</p>`).join('')}</div><div class="m144-stats">${survey}</div></section>
    <section class="m144-hypotheses"><h2>Гипотезы и решения</h2><div class="m144-solution"><h3>Онбординг</h3><p>${desktop.querySelector('.case129-hypotheses p').textContent.trim()}</p>${card('onboard',phones(['86a1c','f5ac1','4d5c9']),'f010a')}${card('onboard-two',phones(['3bba2','d95d8']),'a27e9')}</div></section>
    ${solution('Точки входа',card('entry',phones(['6e5a6','4da0b'])+img('0ee6f','m144-entry-story')+`<span class="m144-entry-banner"><strong>Заказывайте вместе!</strong><small>Создайте общую корзину и заказывайте вместе</small><img src="../../assets/project1-entry-basket.png" alt=""></span>`,'01491'))}
    ${solution('Создание корзины',card('create',phones(['ba44e','e0cdb','c39dd']),'99a30'))}
    ${solution('Приглашение',card('invite',phones(['6739b','5ca8f'])+callout('Активная<br>ссылка','m144-invite-left','5672f')+callout('Неактивная<br>ссылка','m144-invite-right','98f39')))}
    ${solution('Общая корзина',card('basket',phones(['57ea4','22f99'])+callout('Скрытый список участников','m144-basket-left','b11d1')+callout('Раскрытый список участников','m144-basket-right','1d243')))}
    ${solution('Дополнительный статус',card('additional',phones(['fb63d','d5fe8']),'5295e'))}
    ${solution('Оплата создателем',card('owner',phones(['ee861','a31f1'])+callout('Участник','m144-owner-left','b11d1')+callout('Создатель','m144-owner-right','1d243')))}
    ${solution('Напоминания',card('reminder',`<div class="m144-reminder-screens">${img('adb4a')}${img('28428')}</div><div class="m144-notice m144-notice-one">${img('0a785')}<span><b>Оплатите до 07:53 PM</b><small>Чтобы сохранить выбранное время доставки</small></span><time>07:43 PM</time></div><div class="m144-notice m144-notice-two">${img('0a785')}<span><b>Пора завершать заказ</b><small>Екатерина ждёт вас в совместном заказе</small></span><time>9:41 AM</time></div>${callout('Раздельная оплата','m144-reminder-left','5672f')}${callout('Оплата создателем','m144-reminder-right','f4e49')}`))}
    <footer class="m144-footer"><div><p>Буду рада стать частью<br> вашей команды!</p><a href="mailto:zhirkovakatya190517@yandex.ru" aria-label="Написать Екатерине"><img src="${vec('2c461')}" alt=""></a></div><span>Екатерина Жиркова</span></footer>`;
  desktop.after(mobile);
  const coverScroll = mobile.querySelector('.m144-cover-scroll');
  const coverImages = [...mobile.querySelectorAll('.m144-cover img')];
  const updateCover = () => {
    if (innerWidth > 700 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const pinTop = (innerHeight - mobile.querySelector('.m144-cover').offsetHeight) / 2;
    const progress = Math.max(0, Math.min(1, (pinTop - coverScroll.getBoundingClientRect().top) / 440));
    const frame = progress < .38 ? 0 : progress < .68 ? 1 : 2;
    coverImages.forEach((image, index) => image.classList.toggle('is-current', index === frame));
    mobile.querySelector('.m144-cover').style.setProperty('--cover-scale', String(1 + .03 * Math.min(1, progress / .24)));
  };
  window.addEventListener('scroll', updateCover, {passive:true});
  window.addEventListener('resize', updateCover);
  updateCover();
  const track = mobile.querySelector('.m144-benchmark-track');
  const count = mobile.querySelector('.m144-benchmark-count');
  track.addEventListener('scroll', () => { const step = track.querySelector('img').getBoundingClientRect().width + 16; count.textContent = `${String(Math.min(7,Math.round(track.scrollLeft/step)+1)).padStart(2,'0')} / 07`; }, {passive:true});
  const observer = new IntersectionObserver(entries => { if(entries.some(e=>e.isIntersecting)){mobile.querySelector('.m144-stats').classList.add('is-visible');observer.disconnect();} },{threshold:.2});
  observer.observe(mobile.querySelector('.m144-stats'));
})();
