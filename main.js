const isProject=location.pathname.includes('/projects/project-1');
if(!isProject)document.documentElement.classList.add('home-animations');
const A=isProject?'../../assets/':'assets/';
const homeUrl='../../index.html';
const projectUrl='projects/project-1/index.html';
const app=document.getElementById('app');
const contacts=`<nav class="contacts"><a href="${A}ekaterina-zhirkova-resume.pdf" target="_blank" rel="noopener noreferrer">CV</a><a href="https://t.me/eekaterinass" target="_blank" rel="noopener noreferrer">Telegram</a><a href="mailto:zhirkovakatya190517@yandex.ru">zhirkovakatya190517@yandex.ru</a></nav>`;
const hero=`<div class="hero-art"><div class="hero-word">Додо<br><span>Пицца</span></div><div class="hero-phone"><img src="${A}figma-60058.png" alt="Экран приложения Додо Пицца"></div><img class="hero-icon" src="${A}figma-0a785.png" alt=""></div>`;
function home(){document.title='Екатерина Жиркова — продуктовый дизайнер';app.innerHTML=`<main class="home"><header class="home-header"><button class="avatar-trigger" type="button" aria-label="Увеличить фотографию Екатерины Жирковой"><img class="avatar" src="${A}figma-5faa8.png" alt=""></button><span class="name">Екатерина Жиркова</span><span class="availability"><img src="${A}figma-12f7d.svg" alt="">Открыта к сотрудничеству</span>${contacts}</header><div class="intro"><span>Привет! Я дизайнер интерфейсов. Мне интересно иссле</span>довать пользовательские проблемы, разбираться в задачах бизнеса <br>и находить решения, которые <br>делают продукт удобнее.</div><a class="home-card" href="${projectUrl}" aria-label="Открыть проект Додо Пицца">${hero}</a><div class="card-caption"><a class="case-caption-link" href="${projectUrl}" aria-label="Открыть кейс Додо Пицца"><span class="case-caption-title">Додо Пицца</span><span class="case-caption-arrow" aria-hidden="true">↗</span></a></div><footer class="home-footer"><p>Буду рада стать частью вашей команды!</p>${contacts}</footer></main>`}
function initHomeTextMotion(){
  const intro=document.querySelector('.home .intro');
  const footer=document.querySelector('.home-footer');
  const originalText=intro.textContent;
  const lines=[''];
  for(const node of [...intro.childNodes]){
    if(node.nodeName==='BR')lines.push('');
    else lines[lines.length-1]+=node.textContent;
  }
  intro.setAttribute('role','text');
  intro.setAttribute('aria-label',originalText);
  const fragment=document.createDocumentFragment();
  const characters=[];
  lines.forEach((line,lineIndex)=>{
    if(lineIndex)fragment.append(document.createElement('br'));
    for(const token of line.match(/\S+|\s+/gu)||[]){
      if(/^\s+$/u.test(token)){fragment.append(document.createTextNode(token));continue}
      const word=document.createElement('span');
      word.className='intro-word';
      word.setAttribute('aria-hidden','true');
      for(const character of token){
        const letter=document.createElement('span');
        letter.className='intro-char';
        letter.textContent=character;
        word.append(letter);
        characters.push(letter);
      }
      fragment.append(word);
    }
  });
  intro.replaceChildren(fragment);
  const layoutHome=()=>{
    const homePage=document.querySelector('.home');
    const card=document.querySelector('.home-card');
    const caption=document.querySelector('.card-caption');
    if(window.innerWidth<1280){
      homePage.style.height='';
      homePage.style.marginBottom='';
      card.style.top='';
      caption.style.top='';
      footer.style.top='';
      return;
    }
    const delta=intro.offsetHeight-348;
    homePage.style.height=`${1805+delta}px`;
    card.style.top=`${698+delta}px`;
    caption.style.top=`${1373+delta}px`;
    footer.style.top=`${1567+delta}px`;
    homePage.style.marginBottom='';
  };
  layoutHome();
  document.fonts.ready.then(layoutHome);
  window.addEventListener('resize',layoutHome,{passive:true});
  const fixedCount=[...intro.querySelectorAll('.intro-word')].slice(0,6).reduce((count,word)=>count+word.querySelectorAll('.intro-char').length,0);
  const animatedCount=characters.length-fixedCount;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  app.insertAdjacentHTML('beforeend',`<div class="avatar-overlay" role="dialog" aria-modal="true" aria-label="Фотография Екатерины Жирковой" tabindex="-1" hidden><img class="avatar-portrait" src="${A}ekaterina-portrait.png" alt="Екатерина Жиркова"></div>`);
  const avatarTrigger=document.querySelector('.avatar-trigger');
  const avatarOverlay=document.querySelector('.avatar-overlay');
  const avatarPortrait=avatarOverlay.querySelector('.avatar-portrait');
  let avatarClosing=false;
  const finishAvatarClose=()=>{
    avatarOverlay.hidden=true;
    avatarOverlay.classList.remove('is-opening','is-closing');
    document.body.classList.remove('avatar-open');
    avatarClosing=false;
    avatarTrigger.focus();
  };
  const closeAvatar=()=>{
    if(avatarOverlay.hidden||avatarClosing)return;
    if(reduced.matches){finishAvatarClose();return}
    avatarClosing=true;
    avatarOverlay.classList.replace('is-opening','is-closing');
  };
  avatarPortrait.addEventListener('animationend',event=>{
    if(avatarClosing&&event.animationName==='avatar-photo-close')finishAvatarClose();
  });
  avatarTrigger.addEventListener('click',()=>{
    if(!avatarOverlay.hidden)return;
    avatarOverlay.hidden=false;
    avatarOverlay.classList.add('is-opening');
    document.body.classList.add('avatar-open');
    avatarOverlay.focus({preventScroll:true});
  });
  avatarOverlay.addEventListener('click',event=>{if(event.target===avatarOverlay)closeAvatar()});
  window.addEventListener('keydown',event=>{
    if(avatarOverlay.hidden)return;
    if(event.key==='Escape')closeAvatar();
    if(event.key==='Tab'){event.preventDefault();avatarOverlay.focus({preventScroll:true})}
  });
  let frame=0;
  const render=()=>{
    frame=0;
    const rect=intro.getBoundingClientRect();
    const sectionTop=rect.top+window.scrollY;
    const start=Math.max(0,sectionTop-window.innerHeight*.35);
    const end=Math.max(start+1,sectionTop+rect.height*.2);
    const noScroll=document.documentElement.scrollHeight<=window.innerHeight+1;
    const progress=reduced.matches?1:noScroll?0:Math.max(0,Math.min(1,(window.scrollY-start)/(end-start)));
    characters.forEach((letter,index)=>{
      const active=index<fixedCount?1:Math.max(0,Math.min(1,(progress-(index-fixedCount)/animatedCount)/.006));
      const channel=Math.round(198-173*active);
      letter.style.color=`rgb(${channel},${channel},${channel})`;
    });
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(render)};
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule,{passive:true});
  const card=document.querySelector('.home-card');
  const revealTargets=[document.querySelector('.home-header'),intro,card,document.querySelector('.card-caption'),footer];
  reduced.addEventListener('change',()=>{schedule();if(reduced.matches)revealTargets.forEach(element=>element.classList.add('is-visible'))});
  render();
  if(reduced.matches||!('IntersectionObserver' in window))revealTargets.forEach(element=>element.classList.add('is-visible'));
  else{
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(entry.intersectionRatio>=.35){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
      }
    },{threshold:.35,rootMargin:'0px 0px -8% 0px'});
    revealTargets.filter(element=>element!==intro&&element!==card).forEach(element=>observer.observe(element));
    const earlyObserver=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(entry.intersectionRatio>=.2){entry.target.classList.add('is-visible');earlyObserver.unobserve(entry.target)}
      }
    },{threshold:.2,rootMargin:'0px 0px 55px 0px'});
    earlyObserver.observe(intro);
    earlyObserver.observe(card);
  }
  if('IntersectionObserver' in window){
    const mobileCardObserver=new IntersectionObserver(entries=>{
      for(const entry of entries){
        card.classList.toggle('is-scroll-active',entry.intersectionRatio>=.2);
      }
    },{threshold:.2});
    mobileCardObserver.observe(card);
  }
}
const sections=[
['Онбординг','При запуске функции пользователям будут доступны истории, знакомящие с механикой совместного заказа. Также перед первым созданием общей корзины можно будет подробнее ознакомиться с правилами её использования.',5039],
['Точки входа','Пользователь может создать общую корзину с главного экрана приложения или из корзины. На этапе запуска функции на главном экране временно появятся истории и баннер, которые помогут познакомить пользователей с новой возможностью.',6905],
['Создание корзины','При создании общей корзины пользователь выбирает способ оплаты и адрес доставки, а также может изменить её название и установить аватарку, чтобы сделать совместный заказ более персонализированным.',7991],
['Раздельная оплата','При раздельной оплате появляется дополнительный статус ожидания оплаты участников. Выбранное создателем время доставки сохраняется в течение 10 минут. После оплаты всеми участниками заказ передаётся на кухню или его можно отменить.',11232],
['Оплата создателем','Если заказ оплачивает создатель корзины, каждый участник должен подтвердить завершение выбора блюд кнопкой «Я готов». Если кто-то не подтвердил готовность, создатель может отправить напоминание или оформить заказ без этих участников.',12320],
['Напоминания','Создатель общей корзины может напомнить участникам об оплате, чтобы сохранить выбранное время доставки',13408]
];
function project(){document.title='Додо Пицца — Екатерина Жиркова';app.innerHTML=`<main class="project"><div class="project-top">${hero}<a class="back" href="${homeUrl}"><span>‹</span>Назад</a><span class="project-author">Екатерина Жиркова</span></div><section class="case-text" style="top:1099px"><h2>описание проекта</h2><p>Учебный проект по разработке фичи совместного заказа в приложении доставки еды Додо Пицца, которая позволяет создавать общую корзину, приглашать друзей, добавлять товары каждому участнику и выбирать удобный способ оплаты – за всех или каждый за себя.</p></section><div class="figma-pill">фигма</div><section class="case-text" style="top:3096px"><h2>Бенчмаркинг</h2><p>В ходе анализа российского рынка не было найдено сервисов доставки с полноценной функцией совместного заказа. В качестве референса рассмотрена Яндекс Лавка, где можно поделиться собранной корзиной. Также были изучены зарубежные сервисы доставки, поддерживающие групповые заказы – Wolt и Uber Eats.</p></section><section class="case-text" style="top:4105px"><h2>Опросы</h2><p>Провела небольшой опрос через Google Forms, чтобы узнать, как пользователи сейчас собирают совместные заказы и какие сложности возникают в процессе.</p></section><h2 class="hypotheses">Гипотезы и решения</h2>${sections.map(([title,body,y])=>`<section class="case-text" style="top:${y}px"><h2 class="section-chip">${title}</h2><p>${body}</p></section>`).join('')}<footer class="project-footer"><p>Буду рада стать частью вашей команды!</p>${contacts}</footer></main>`}
const visualShots=[
  [1466,760,'#ff7aa5',[['8083c.png',74,-32,1072,804]]],
  [5275,740,'linear-gradient(#ddf2ff,#37b0ff)',[['86a1c.png',87,35,282,611],['f5ac1.png',469,65,282,611],['4d5c9.png',851,95,282,611]]],
  [6045,740,'linear-gradient(#37b0ff,#ddf2ff)',[['3bba2.png',306,64,282,611],['d95d8.png',688,64,282,611]]],
  [7131,740,'linear-gradient(#37b0ff,#ddf2ff)',[['6e5a6.png',251,243,327,708],['4da0b.png',668,64,282,611],['0ee6f.png',213,280,234,289]]],
  [8219,740,'#ff7aa5',[['e0cdb.png',87,32,282,611],['c39dd.png',469,62,282,611],['ba44e.png',851,92,282,611]]],
  [9309,740,'#eff2f7',[['6739b.png',278,62,282,611],['5ca8f.png',660,62,282,611]]],
  [10372,740,'#eff2f7',[['57ea4.png',271,50,320,890],['22f99.png',691,-360,257,1672]]],
  [11460,740,'#eff2f7',[['fb63d.png',276,92,282,611],['d5fe8.png',658,32,282,611]]],
  [12548,740,'#eff2f7',[['ee861.png',227,-196,350,758],['a31f1.png',643,-197,350,759]]],
  [13587,740,'#eff2f7',[['adb4a.png',475,-223,271,583],['28428.png',475,380,271,580]]]
];
const shotDecor=[
  ['3b062.svg',1242,873,180,'#ff7aa5'],
  ['af493.svg',1277,898,-0.12,'linear-gradient(180deg,#ddf2ff,#37b0ff)'],
  ['42c4b.svg',1288,906,180,'linear-gradient(180deg,#37b0ff,#ddf2ff)'],
  ['6741e.svg',1455,1023,-46.5,'linear-gradient(180deg,#37b0ff,#ddf2ff)'],
  ['b18de.svg',1455,1023,0,'#ff7aa5'],
  ['9b7a7.svg',1455,1023,21.52,'linear-gradient(180deg,#ddf2ff,#37b0ff)'],
  ['f4438.svg',1455,1023,-50,'linear-gradient(180deg,#ddf2ff,#37b0ff)'],
  ['d0b44.svg',1455,1023,-160,'linear-gradient(37deg,#ddf2ff 11%,#37b0ff 89%)'],
  ['ebb8c.svg',1318,926,0,'#ff7aa5'],
  ['d3b78.svg',1455,1023,21.52,'linear-gradient(180deg,#ddf2ff,#37b0ff)']
];
if(isProject){
  project();
  const projectFacts=[
    ['Задача','Спроектировать функцию «Совместный заказ» для Додо Пиццы, чтобы пользователи могли одновременно собирать корзину, добавлять свои блюда и удобно оплачивать заказ вместе.'],
    ['Вводные','Сейчас заказ рассчитан на одного человека. При заказе на компанию приходится обсуждать блюда в переписке, вручную собирать общую корзину и отдельно договариваться об оплате.'],
    ['Миссия','Упростить совместный заказ: дать каждому участнику возможность самостоятельно добавлять блюда в общую корзину, видеть выбор остальных и удобно оплачивать свою часть заказа.'],
    ['Сегменты','Офисные сотрудники, студенты, компании друзей, семьи и пары, которые заказывают еду вместе. Им важно быстро собрать общую корзину, учесть предпочтения каждого и удобно разделить оплату.'],
    ['Критерии успеха','Увеличение среднего чека, рост популярности совместных заказов среди пользователей и сохранение конверсии в оформление заказа. Оценка востребованности функции после запуска.']
  ];
  document.querySelector('.project').insertAdjacentHTML('beforeend',`<section class="project-facts">${projectFacts.map(([title,description])=>`<div class="project-fact"><h3>${title}</h3><p>${description}</p></div>`).join('')}</section>`);
  document.querySelector('.back span').outerHTML=`<img src="${A}figma-3de1a.svg" alt="">`;
  const page=document.querySelector('.project');
  page.insertAdjacentHTML('beforeend',visualShots.map(([y,h,bg,images],index)=>{
    const [vector,w,vh,rotation,background]=shotDecor[index];
    return `<div class="visual-shot" style="top:${y}px;height:${h}px;background:${background}"><img class="shot-background-vector" src="${A}figma-${vector}" style="width:${w}px;height:${vh}px;transform:translate(-50%,-50%) rotate(${rotation}deg)" alt="">${images.map(([file,x,iy,iw,ih])=>`<img class="${index===0?'case-composite':'interface-screen'}" src="${A}figma-${file}" style="left:${x}px;top:${iy}px;width:${iw}px;height:${ih}px" alt="">`).join('')}</div>`;
  }).join(''));
  const shotEls=page.querySelectorAll('.visual-shot');
  const arrow=(file,x,y,w,h,rotation,extra='')=>`<div class="callout-arrow" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px"><img src="${A}figma-${file}" style="transform:rotate(${rotation}deg) ${extra}" alt=""></div>`;
  const label=(caption,x,y,color='#ff7aa5',rotation=-1)=>`<span class="shot-callout" style="left:${x}px;top:${y}px;background:${color};transform:rotate(${rotation}deg)">${caption}</span>`;
  shotEls[5].insertAdjacentHTML('beforeend',
    arrow('7dd5a.svg',103,222,148,135,55.1,'scaleY(-1)')+
    arrow('fe333.svg',962,319,126,99,128.39,'skewX(6.98deg)')+
    label('Активная ссылка',60,337)+label('Неактивная ссылка',999,438,'#ff7aa5',1));
  shotEls[6].insertAdjacentHTML('beforeend',
    arrow('faa07.svg',108,447,130,148,-30.16)+
    arrow('43732.svg',969,237,110,114,152.15,'skewX(6.98deg)')+
    label('Скрытый список участников',60,414)+label('Раскрытый список участников',919,364,'#ff7aa5',1));
  shotEls[8].insertAdjacentHTML('beforeend',
    arrow('0e7ea.svg',115,474,243,217,-56.16,'scaleY(-1)')+
    arrow('205ac.svg',867,497,216,216,-121.51,'skewX(6.98deg)')+
    label('Участник',358,622,'#019bff')+label('Создатель',769,652,'#019bff',1));
  page.querySelectorAll('.visual-shot')[9].insertAdjacentHTML('beforeend',`<div class="callout-arrow" style="left:186px;top:80px;width:231px;height:211px"><img src="${A}figma-90827.svg" style="transform:rotate(55.1deg) scaleY(-1)" alt=""></div><div class="callout-arrow" style="left:812px;top:437px;width:198px;height:155px"><img src="${A}figma-38a89.svg" style="transform:rotate(128.39deg) skewX(6.98deg)" alt=""></div><span class="shot-callout callout-left">Раздельная оплата</span><span class="shot-callout callout-right">Оплата создателем</span><div class="shot-notification top-notification"><img src="${A}figma-0a785.png" alt=""><div><strong>Оплатите до 07:53 PM</strong><span>Чтобы сохранить выбранное время доставки</span></div><time>07:43 PM</time></div><div class="shot-notification"><img src="${A}figma-0a785.png" alt=""><div><strong>Пора завершать заказ</strong><span>Екатерина ждет вас в совместном заказе</span></div><time>9:41 AM</time></div>`);
  page.insertAdjacentHTML('beforeend',`<div class="benchmark" tabindex="0" aria-label="Скриншоты бенчмаркинга, прокрутка по горизонтали">${['3baa5.png','a9be8.png','07be4.png','19ca1.png','62a68.png','7f576.png','1090e.png'].map(f=>`<img src="${A}figma-${f}" alt="">`).join('')}</div><div class="survey">${[['47%','Неудобно ждать, пока все определятся',47],['77%','Хотят самостоятельно добавлять блюда',77],['61%','Хотят оплачивать только свою часть заказа',61],['72%','Считают общую корзину полезной',72]].map(([n,t,p])=>`<div><strong>${n}</strong><i><b style="width:${p}%"></b></i><span>${t}</span></div>`).join('')}</div><p class="survey-conclusion">Опрос показал, что основная сложность заказа совместно на данный момент – это необходимость согласовывать выбор блюд между участниками. Наиболее полезными возможностями по мнению респондентов стали самостоятельное добавление позиций и раздельная оплата. Большинство опрошенных положительно оценили идею общей корзины.</p><button class="survey-button" type="button">результаты опроса</button>`);
  page.insertAdjacentHTML('beforeend',`<section class="case-text added-section" style="top:9079px"><h2 class="section-chip">Приглашение</h2><p>Участники заходят в общую корзину по ссылке или QR-коду. Если пользователь перейдёт по приглашению после оформления заказа, он увидит информационный экран с возможностью создать новый совместный заказ.</p></section><section class="case-text added-section" style="top:10169px"><h2 class="section-chip">Общая корзина</h2><p>В общей корзине отображается название, аватарка созданной группы, а также можно отслеживать статусы о готовности всех участников</p></section>`);
  const layoutHypotheses=()=>{
    const sections=[...page.querySelectorAll('.case-text:has(.section-chip)')].sort((a,b)=>parseFloat(a.style.top)-parseFloat(b.style.top));
    const shots=[...page.querySelectorAll('.visual-shot')].slice(1);
    const heading=page.querySelector('.hypotheses');
    let y=heading.offsetTop+heading.offsetHeight+60;
    let shotIndex=0;
    sections.forEach((section,index)=>{
      section.style.top=`${y}px`;
      y+=section.offsetHeight+60;
      const shot=shots[shotIndex++];
      shot.style.top=`${y}px`;
      y+=shot.offsetHeight;
      if(index===0){
        y+=30;
        const secondShot=shots[shotIndex++];
        secondShot.style.top=`${y}px`;
        y+=secondShot.offsetHeight;
      }
      y+=120;
    });
    page.querySelector('.project-footer').style.top=`${y+39}px`;
    page.style.height=`${y+275}px`;
  };
  layoutHypotheses();
  document.fonts.ready.then(layoutHypotheses);
  const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const parallaxImages=[...page.querySelectorAll('.visual-shot > .case-composite, .visual-shot > .interface-screen')];
  let parallaxFrame=0;
  const renderParallax=()=>{
    parallaxFrame=0;
    const viewportHeight=window.innerHeight;
    for(const image of parallaxImages){
      if(motionPreference.matches){image.style.setProperty('--parallax-y','0px');continue}
      const container=image.parentElement;
      const rect=container.getBoundingClientRect();
      if(rect.bottom<0||rect.top>viewportHeight)continue;
      const containerHeight=container.clientHeight;
      const imageHeight=image.offsetHeight;
      const top=image.offsetTop;
      const travel=Math.min(imageHeight*.12,110);
      let min=-travel,max=travel;
      if(imageHeight>=containerHeight&&top<=0&&top+imageHeight>=containerHeight){
        min=Math.max(min,containerHeight-top-imageHeight);
        max=Math.min(max,-top);
      }else if(top>=0&&top+imageHeight<=containerHeight){
        min=Math.max(min,-top);
        max=Math.min(max,containerHeight-top-imageHeight);
      }
      const progress=Math.max(0,Math.min(1,(viewportHeight-rect.top)/(viewportHeight+rect.height)));
      const offset=progress<.5?min*(1-progress*2):max*(progress*2-1);
      image.style.setProperty('--parallax-y',`${offset.toFixed(2)}px`);
    }
  };
  const scheduleParallax=()=>{if(!parallaxFrame)parallaxFrame=requestAnimationFrame(renderParallax)};
  window.addEventListener('scroll',scheduleParallax,{passive:true});
  window.addEventListener('resize',scheduleParallax,{passive:true});
  motionPreference.addEventListener('change',scheduleParallax);
  scheduleParallax();
  const revealTargets=[
    page.querySelector('.project-top'),
    ...page.querySelectorAll('.case-text > h2, .case-text > p, .project-fact, .hypotheses, .visual-shot, .benchmark, .survey > div, .survey-conclusion, .survey-button, .figma-pill, .project-footer > p, .project-footer > .contacts')
  ].filter(Boolean);
  if(!motionPreference.matches&&'IntersectionObserver' in window){
    document.documentElement.classList.add('project-animations');
    revealTargets.forEach(element=>element.classList.add('project-reveal'));
    const revealObserver=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(!entry.isIntersecting)continue;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    },{threshold:0.08,rootMargin:'0px 0px 35px 0px'});
    revealTargets.forEach(element=>revealObserver.observe(element));
    motionPreference.addEventListener('change',()=>{
      if(!motionPreference.matches)return;
      revealTargets.forEach(element=>element.classList.add('is-visible'));
      revealObserver.disconnect();
    },{once:true});
  }
}else {home();initHomeTextMotion()}
