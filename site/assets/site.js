// digitiska.com behaviour: kit catalogue, kit details, demo, estimator, enquiries.
const EMAIL = 'digitiska@tuta.io';
const ph = s => `<span class="ph">${s}</span>`;
const $ = s => document.querySelector(s);
const icon = id => `<svg aria-hidden="true"><use href="#${id}"/></svg>`;


// Enquiry dialog: builds an email; nothing is sent from the page itself
const ed = $('#enq-d');
document.addEventListener('click', e => {
  const t = e.target.closest('[data-enquire]');
  if (t) { const kd = $('#kit-d'); if (kd && kd.open) kd.close(); $('#enq-subject').value = t.dataset.enquire.replace(/<[^>]+>/g, ''); ed.showModal(); }
  if (e.target.closest('[data-close]')) e.target.closest('dialog').close();
  if (e.target.tagName === 'DIALOG') e.target.close();
});
document.querySelectorAll('form.enq').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(form);
  const body = `${f.get('msg')}\n\n${f.get('name')}`;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.get('subject') || 'Digitiska')}&body=${encodeURIComponent(body)}`;
  const d = form.closest('dialog'); if (d) d.close();
  toast('Your email app should open with the message ready to send.');
}));
$('#sub').addEventListener('submit', e => {
  e.preventDefault();
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Kit news: please add me')}&body=${encodeURIComponent($('#sub-e').value)}`;
  toast('Your email app should open. Send it to join the list.');
});

// Contact page: header links to the form focus its first field
document.querySelectorAll('a[href="#write"]').forEach(a => a.addEventListener('click', () => setTimeout(() => { const i = $('form.enq.inline input'); if (i) i.focus({ preventScroll: true }); }, 450)));

// Copy the email address (contact page)
const cm = $('#copy-mail');
if (cm) cm.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(EMAIL); toast('Address copied.'); } catch { toast(EMAIL); }
});

// Toast
let tt;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 4000); }

// Menu
const mb = $('.menu-btn'), dr = $('#drawer');
mb.addEventListener('click', () => { const o = dr.classList.toggle('open'); mb.setAttribute('aria-expanded', String(o)); });
dr.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { dr.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); }));


// Home only: catalogue, kit details, demo, estimator, nav highlight
if ($('#feature')) {
// Kits. The live kit is real; names marked ph are working titles.
const KITS = [
  { name: 'Motorcycle business launch kit', cat: 'Trade kits', aud: 'Trades', status: 'live', format: 'Template pack', tiers: 'Core or Complete', price: null,
    desc: 'Quote a job, get it approved and invoice it, without typing the same details twice.',
    inc: ['Quotes', 'Invoices', 'Forms', 'Two sizes: Core or Complete'], url: 'https://quote-to-invoice.digitiska.com' },
  { name: 'Solat Times', cat: 'Free apps', aud: 'Families', who: 'Muslims in Malaysia', status: 'free', format: 'Phone app', lang: 'Bahasa Malaysia', price: 'Free',
    desc: 'Prayer times for your zone in Malaysia, from the JAKIM e-Solat timetable, with a Qibla compass.',
    inc: ['Times for your JAKIM zone', 'Qibla compass', 'Works offline once installed'], url: 'https://solat.digitiska.com', cta: 'Open Solat Times',
    note: 'Free. Opens in your browser; choose Add to Home screen to install it.' },
  { name: 'Freelance template pack', cat: 'Business tools', aud: 'Freelancers', status: 'wip', format: 'Template pack', desc: 'Ready-made templates for freelancers, being built in Studio now.' },
  { name: ph('Xero setup checklist'), cat: 'Accounting', aud: 'Small businesses', status: 'works', format: 'Checklist' },
  { name: ph('QuickBooks month-end checklist'), cat: 'Accounting', aud: 'Small businesses', status: 'works', format: 'Checklist' },
  { name: ph('Chart of accounts template'), cat: 'Accounting', aud: 'Small businesses', status: 'works', format: 'Template pack' },
  { name: ph('Family budget planner'), cat: 'Family', aud: 'Families', status: 'works', format: 'Workbook' },
  { name: ph('Household bills tracker'), cat: 'Family', aud: 'Families', status: 'works', format: 'Small app' },
  { name: ph('School-term planner'), cat: 'Family', aud: 'Families', status: 'works', format: 'Workbook' },
  { name: ph('Home bakery order kit'), cat: 'Trade kits', aud: 'Trades', status: 'works', format: 'Template pack' },
  { name: ph('Cleaning service quote kit'), cat: 'Trade kits', aud: 'Trades', status: 'works', format: 'Template pack' },
  { name: ph('Photography booking kit'), cat: 'Trade kits', aud: 'Trades', status: 'works', format: 'Template pack' },
  { name: ph('Price and margin calculator'), cat: 'Business tools', aud: 'Product makers', status: 'works', format: 'Small app' },
];
const STATUS = { live: ['live', 'Live'], wip: ['wip', 'In progress'], works: ['works', 'In the works'], free: ['free', 'Free'] };
const CATS = ['All', 'Trade kits', 'Accounting', 'Family', 'Business tools', 'Free apps'];
const AUDS = ['All', 'Trades', 'Small businesses', 'Families', 'Freelancers', 'Product makers'];
let cat = 'All', aud = 'All';

const chip = k => { const [cls, label] = STATUS[k.status]; return `<span class="chip ${cls}">${label}</span>`; };

function render() {
  $('#feature').innerHTML = KITS.map((k, i) => {
    if (k.status === 'works') return '';
    const live = !!k.url;
    return `<article class="feat" data-cat="${k.cat}" data-aud="${k.aud}">
      <div>
        <h3>${k.name}</h3>
        <p class="meta">${chip(k)}<span>${k.format} · For ${k.who || k.aud.toLowerCase()}${k.tiers ? ' · ' + k.tiers : ''}</span>${k.rating ? `<span>${k.rating} rating</span>` : ''}</p>
        <p class="desc">${k.desc}</p>
        ${k.inc ? `<ul>${k.inc.slice(0, 3).map(x => `<li>${icon('i-check')}${x}</li>`).join('')}</ul>` : ''}
      </div>
      <div class="buy">${live
        ? `<p class="price-note">${k.note || 'Prices for Core and Complete are on the kit page.'}</p><a class="btn btn-primary" href="${k.url}">${k.cta || 'Open the kit page'} ${icon('i-out')}</a><button class="more" data-kit="${i}">See what is inside</button>`
        : `<button class="btn btn-ghost" data-enquire="Interest: ${k.name}">Register interest</button>`}</div>
    </article>`;
  }).join('');
  $('#works-rows').innerHTML = KITS.map(k => k.status !== 'works' ? '' :
    `<li data-cat="${k.cat}" data-aud="${k.aud}"><span><b>${k.name}</b></span><small>${k.format} · For ${k.aud.toLowerCase()}</small>${chip(k)}</li>`).join('');
  filter();
}
function pills(el, list, get, set) {
  list.forEach(v => {
    const b = document.createElement('button');
    b.textContent = v; b.setAttribute('aria-pressed', String(v === get()));
    b.addEventListener('click', () => { set(v); el.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === b))); filter(); });
    el.appendChild(b);
  });
}
function filter() {
  let shown = 0;
  document.querySelectorAll('#feature .feat, #works-rows li').forEach(c => {
    const ok = (cat === 'All' || c.dataset.cat === cat) && (aud === 'All' || c.dataset.aud === aud);
    c.hidden = !ok; if (ok) shown++;
  });
  const worksShown = [...document.querySelectorAll('#works-rows li')].some(li => !li.hidden);
  $('#works').hidden = !worksShown;
  $('#empty').hidden = shown > 0;
}
pills($('#f-cat'), CATS, () => cat, v => cat = v);
pills($('#f-aud'), AUDS, () => aud, v => aud = v);
render();

// Kit details dialog (kits and apps with a page)
const kd = $('#kit-d');
document.addEventListener('click', e => {
  const b = e.target.closest('[data-kit]'); if (!b) return;
  const k = KITS[+b.dataset.kit];
  $('#kd-t').innerHTML = k.name;
  $('#kd-chips').innerHTML = `${chip(k)}<span class="chip">${k.cat}</span>`;
  $('#kd-desc').textContent = k.desc;
  $('#kd-specs').innerHTML = `<div><small>Format</small><b>${k.format}</b></div><div><small>For</small><b>${k.who || k.aud}</b></div>${k.lang ? `<div><small>Language</small><b>${k.lang}</b></div>` : `<div><small>Sizes</small><b>${k.tiers || 'To be set'}</b></div>`}`;
  $('#kd-inc').innerHTML = (k.inc || []).map(x => `<li>${icon('i-check')}<span>${x}</span></li>`).join('');
  $('#kd-price').innerHTML = k.price || (k.url ? 'On the kit page' : 'To be set');
  $('#kd-act').innerHTML = k.url ? `<a class="btn btn-primary" href="${k.url}">${k.cta || 'Open the kit page'} ${icon('i-out')}</a>` : '';
  kd.showModal();
});

// Hero demo: one job from quote to invoice
const nodes = [...document.querySelectorAll('.node')], log = $('#log'), run = $('#run'), doc = $('.doc');
const STEPS = [['Quote written for a front tyre change.', 'Sent'], ['Customer approved. Job marked done.', 'Done'], ['Invoice filled from the quote. Nothing typed twice.', 'Ready']];
run.addEventListener('click', () => {
  if (run.disabled) return;
  run.disabled = true; run.textContent = 'Running';
  doc.hidden = true;
  nodes.forEach((n, i) => { n.classList.remove('done', 'active'); n.querySelector('em').textContent = i ? 'Waiting' : 'Ready'; });
  const step = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 800;
  STEPS.forEach(([msg, st], i) => setTimeout(() => {
    nodes.forEach(n => n.classList.remove('active'));
    nodes[i].classList.add('done', 'active'); nodes[i].querySelector('em').textContent = st;
    log.textContent = msg;
    if (i === 2) { doc.hidden = false; run.disabled = false; run.textContent = 'Run again'; setTimeout(() => nodes[i].classList.remove('active'), 500); }
  }, step * (i + 1)));
});

// Estimator (estimated prices in USD)
const opts = [...document.querySelectorAll('.opt input')];
let rush = false;
function estimate() {
  let cost = 0, days = 0;
  opts.forEach(o => { if (o.checked) { cost += +o.dataset.price; days += +o.dataset.days; } });
  if (rush) { cost *= 1.25; days = Math.ceil(days * .6); }
  $('#est-cost').textContent = `US$${Math.round(cost)}`;
  $('#est-days').textContent = days ? `${days} day${days > 1 ? 's' : ''}` : '–';
}
opts.forEach(o => o.addEventListener('change', estimate));
document.querySelectorAll('.pace button').forEach(b => b.addEventListener('click', () => {
  rush = b.dataset.rush === '1';
  document.querySelectorAll('.pace button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
  estimate();
}));
$('#est-ask').addEventListener('click', () => {
  const picked = opts.filter(o => o.checked).map(o => o.parentElement.textContent.trim()).join(', ') || 'Not sure yet';
  $('#enq-subject').value = `Setup: ${picked}${rush ? ' (rush)' : ''}`; ed.showModal();
});
estimate();

// Highlight the nav pill for the section in view; none while the hero is on screen
const links = [...document.querySelectorAll('.pills a')];
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links.forEach(l => l.classList.toggle('on', l.getAttribute('href').endsWith('#' + en.target.id))); }), { rootMargin: '-40% 0px -55% 0px' });
  ['kits', 'studio', 'services', 'works', 'about'].forEach(id => io.observe(document.getElementById(id)));
  const hero = document.querySelector('.hero');
  new IntersectionObserver(es => { if (es[0].isIntersecting) links.forEach(l => l.classList.remove('on')); }, { rootMargin: '-40% 0px -55% 0px' }).observe(hero);
}
}
