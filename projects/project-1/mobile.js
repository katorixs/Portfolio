// The 393 px Figma frame has a different composition from the desktop case.
// Keep its markup separate so the desktop layout and its animations stay intact.
(() => {
  const asset = name => `../../assets/figma-${name}`;
  const desktop = document.querySelector('.project');
  if (!desktop) return;
  const caseText = title => [...desktop.querySelectorAll('.case-text')]
    .find(section => section.querySelector('h2')?.textContent.trim().toLowerCase() === title.toLowerCase())
    ?.querySelector('p')?.textContent.trim() || '';
  const facts = [...desktop.querySelectorAll('.project-fact')].map(fact => ({
    title: fact.querySelector('h3').textContent,
    body: fact.querySelector('p').textContent
  }));
  const picture = (name, extra = '') => `<img src="${asset(name)}" alt="" ${extra}>`;
  const phones = (names, kind = '') => `<div class="mobile-phones ${kind}">${names.map(name => picture(name)).join('')}</div>`;
  const shot = (kind, vector, names, callouts = '') => `<div class="mobile-shot ${kind}">${vector ? picture(vector, 'class="mobile-shot-vector"') : ''}${phones(names)}${callouts}</div>`;
  const chipSection = (title, body, illustration) => `<section class="mobile-solution mobile-reveal"><h3 class="mobile-chip">${title}</h3><p>${body}</p>${illustration}</section>`;
  const mobile = document.createElement('main');
  mobile.className = 'project-mobile';
  mobile.innerHTML = `
    <header class="mobile-cover mobile-reveal">
      <nav class="mobile-project-nav"><a href="../../index.html">${picture('ec69c.svg')}<span>Назад</span></a><span>Екатерина Жиркова</span></nav>
      <h1>Додо Пицца</h1>
      ${picture('0a785.png', 'class="mobile-cover-icon"')}
      <div class="mobile-cover-phone">${picture('60058.png')}</div>
    </header>
    <section class="mobile-description">
      <div class="mobile-intro mobile-reveal"><h2>описание проекта</h2><p>${caseText('описание проекта')}</p><a class="mobile-link-pill" href="https://www.figma.com/design/FHBGMOD15cEvTpsb3DM7at/Untitled?node-id=1-94" target="_blank" rel="noopener noreferrer">фигма</a></div>
      <div class="mobile-opening-shot mobile-reveal">${picture('9d543.svg', 'class="mobile-opening-vector"')}${picture('8083c.png', 'class="mobile-opening-art"')}</div>
      <div class="mobile-facts">${facts.map(fact => `<div class="mobile-fact mobile-reveal"><h3>${fact.title}</h3><p>${fact.body}</p></div>`).join('')}</div>
    </section>
    <section class="mobile-research">
      <div class="mobile-benchmark mobile-reveal"><h2>Бенчмаркинг</h2><p>${caseText('Бенчмаркинг')}</p><div class="mobile-benchmark-track" tabindex="0" aria-label="Скриншоты сервисов, прокрутка по горизонтали">${['3baa5.png','a9be8.png','07be4.png','19ca1.png','62a68.png','7f576.png','1090e.png'].map(name => picture(name)).join('')}</div></div>
      <div class="mobile-surveys mobile-reveal"><h2>Опросы</h2><p>${caseText('Опросы')}</p><div class="mobile-survey-results">${[['47%','Неудобно ждать, пока все определятся'],['77%','Хотят самостоятельно добавлять блюда'],['61%','Хотят оплачивать только свою часть заказа'],['72%','Считают общую корзину полезной']].map(([number,label]) => `<div class="mobile-survey-result"><strong>${number}</strong><div class="mobile-survey-bar"><i style="width:${number}"></i></div><span>${label}</span></div>`).join('')}</div><p class="mobile-survey-conclusion">${desktop.querySelector('.survey-conclusion')?.textContent || ''}</p><button class="mobile-link-pill" type="button">результаты опроса</button></div>
    </section>
    <section class="mobile-hypotheses"><h2 class="mobile-reveal">Гипотезы и решения</h2>
      ${chipSection('Онбординг', caseText('Онбординг'), shot('shot-onboarding', 'e5a7a.svg', ['86a1c.png','4d5c9.png','f5ac1.png']))}
      <div class="mobile-shot shot-onboarding-extra mobile-reveal">${picture('19b2f.svg', 'class="mobile-shot-vector"')}${phones(['d95d8.png','3bba2.png'])}</div>
    </section>
    ${chipSection('Точки входа', caseText('Точки входа'), `<div class="mobile-shot shot-entry">${picture('1ccd7.svg','class="mobile-shot-vector"')}${phones(['6e5a6.png','4da0b.png'])}${picture('66732.png','class="shot-entry-story"')}${picture('0a9fb.png','class="shot-entry-banner"')}${picture('2ece9.png','class="shot-entry-promo"')}</div>`)}
    ${chipSection('Создание корзины', caseText('Создание корзины'), shot('shot-create', '500e4.svg', ['ba44e.png','e0cdb.png','c39dd.png']))}
    ${chipSection('Приглашение', caseText('Приглашение'), shot('shot-invite', 'a940c.svg', ['6739b.png','5ca8f.png'], `<span class="mobile-callout invite-active">Активная<br>ссылка</span><span class="mobile-callout invite-inactive">Неактивная<br>ссылка</span>${picture('a6b30.svg','class="mobile-arrow invite-arrow-left"')}${picture('bc20d.svg','class="mobile-arrow invite-arrow-right"')}`))}
    ${chipSection('Общая корзина', caseText('Общая корзина'), shot('shot-basket', '6a6ab.svg', ['57ea4.png','22f99.png'], `<span class="mobile-callout basket-hidden">Скрытый список участников</span><span class="mobile-callout basket-open">Раскрытый список участников</span>${picture('891b9.svg','class="mobile-arrow basket-arrow-left"')}${picture('99e79.svg','class="mobile-arrow basket-arrow-right"')}`))}
    <section class="mobile-payment">
      ${chipSection('Раздельная оплата', caseText('Раздельная оплата'), shot('shot-split', '317be.svg', ['fb63d.png','d5fe8.png']))}
      ${chipSection('Оплата создателем', caseText('Оплата создателем').replace('отправить напоминание', 'отправить<br class="owner-mobile-break">напоминание').replace('этих участников', 'этих<br class="owner-mobile-break">участников'), shot('shot-owner', '59e3d.svg', ['ee861.png','a31f1.png'], `<span class="mobile-callout owner-user">Участник</span><span class="mobile-callout owner-creator">Создатель</span>${picture('891b9.svg','class="mobile-arrow owner-arrow-left"')}${picture('99e79.svg','class="mobile-arrow owner-arrow-right"')}`))}
    </section>
    ${chipSection('Напоминания', caseText('Напоминания'), `<div class="mobile-shot shot-reminders">${picture('f8106.svg','class="mobile-shot-vector"')}<div class="reminder-screen reminder-screen-top">${picture('adb4a.png')}</div><div class="reminder-screen reminder-screen-bottom">${picture('28428.png')}</div>${picture('94f0e.png','class="reminder-notification reminder-first"')}${picture('3f1c4.png','class="reminder-notification reminder-second"')}<span class="mobile-callout reminder-split">Раздельная оплата</span><span class="mobile-callout reminder-owner">Оплата создателем</span>${picture('a6b30.svg','class="mobile-arrow reminder-arrow-left"')}${picture('43403.svg','class="mobile-arrow reminder-arrow-right"')}</div>`)}
    <footer class="mobile-project-footer mobile-reveal"><p>Буду рада стать частью вашей команды!</p><nav><a href="../../assets/ekaterina-zhirkova-resume.pdf" target="_blank" rel="noopener noreferrer">CV</a><a href="https://t.me/eekaterinass" target="_blank" rel="noopener noreferrer">Telegram</a><a href="mailto:zhirkovakatya190517@yandex.ru">zhirkovakatya190517@yandex.ru</a></nav></footer>
  `;
  desktop.after(mobile);
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window)) mobile.querySelectorAll('.mobile-reveal').forEach(el => el.classList.add('is-visible'));
  else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: .08, rootMargin: '0px 0px 35px 0px' });
    mobile.querySelectorAll('.mobile-reveal').forEach(el => observer.observe(el));
  }
})();
