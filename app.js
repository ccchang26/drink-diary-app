<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>手搖日記</title>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="手搖日記">
<meta name="theme-color" content="#6B3A22">
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@700;900&family=Noto+Sans+TC:wght@400;500;700&display=swap');

:root{
  --cream:#F8EFE1;
  --cream-2:#F1E3CC;
  --milk-tea:#D9B98A;
  --brown-sugar:#6B3A22;
  --brown-sugar-dark:#4A2716;
  --tapioca:#2B211C;
  --caramel:#C98A3E;
  --peach:#E39476;
  --ice-blue:#AFCFDA;
  --white:#FFFDF8;
  --danger:#B5533C;
  --shadow: 0 8px 24px rgba(75,39,22,0.14);
  --radius: 18px;
}

*{box-sizing:border-box; -webkit-tap-highlight-color: transparent;}
html,body{height:100%;}
body{
  margin:0;
  font-family:'Noto Sans TC', system-ui, sans-serif;
  background: var(--tapioca);
  color: var(--tapioca);
  display:flex;
  justify-content:center;
}

#app{
  width:100%;
  max-width:480px;
  min-height:100vh;
  background: var(--cream);
  position:relative;
  display:flex;
  flex-direction:column;
  overflow:hidden;
  background-image:
    repeating-linear-gradient(115deg, rgba(107,58,34,0.035) 0px, rgba(107,58,34,0.035) 2px, transparent 2px, transparent 26px);
}

/* ---------- Header ---------- */
header{
  padding: 22px 20px 16px;
  background: linear-gradient(180deg, var(--brown-sugar) 0%, var(--brown-sugar-dark) 100%);
  color: var(--cream);
  position:relative;
  overflow:hidden;
  flex-shrink:0;
}
header::after{
  content:"";
  position:absolute;
  left:0; right:0; bottom:-1px;
  height:14px;
  background: var(--cream);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}
.header-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  position:relative;
  z-index:1;
}
.brand{
  display:flex;
  align-items:center;
  gap:10px;
}
.brand h1{
  font-family:'Noto Serif TC', serif;
  font-weight:900;
  font-size:22px;
  margin:0;
  letter-spacing:1px;
}
.brand-sub{
  font-size:11px;
  opacity:0.75;
  margin-top:2px;
  letter-spacing:2px;
}
#cupIcon{ width:46px; height:52px; flex-shrink:0; }

/* ---------- Nav (bottom) ---------- */
nav{
  flex-shrink:0;
  display:flex;
  border-top: 1px solid rgba(107,58,34,0.12);
  background: var(--white);
  padding-bottom: env(safe-area-inset-bottom);
}
nav button{
  flex:1;
  border:none;
  background:none;
  padding: 10px 0 8px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:4px;
  font-family:'Noto Sans TC', sans-serif;
  font-size:11px;
  color: #B49A82;
  cursor:pointer;
  transition: color .2s ease;
}
nav button svg{ width:22px; height:22px; }
nav button.active{ color: var(--brown-sugar); font-weight:700; }
nav button.active svg{ filter: none; }

/* ---------- Content ---------- */
main{
  flex:1;
  overflow-y:auto;
  padding: 18px 18px 28px;
  -webkit-overflow-scrolling: touch;
}
.view{ display:none; animation: fadeUp .35s ease; }
.view.active{ display:block; }
@keyframes fadeUp{ from{opacity:0; transform:translateY(8px);} to{opacity:1; transform:translateY(0);} }

h2.section-title{
  font-family:'Noto Serif TC', serif;
  font-size:17px;
  font-weight:700;
  color: var(--brown-sugar-dark);
  margin: 4px 0 12px;
  display:flex;
  align-items:center;
  gap:8px;
}
h2.section-title::before{
  content:"";
  width:5px; height:16px;
  background: var(--caramel);
  border-radius:3px;
  display:inline-block;
}

/* ---------- Form card ---------- */
.card{
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 18px;
  margin-bottom: 16px;
}
.field{ margin-bottom: 14px; }
.field label{
  display:block;
  font-size:12.5px;
  font-weight:700;
  color: var(--brown-sugar);
  margin-bottom: 6px;
  letter-spacing:0.5px;
}
.field input, .field select{
  width:100%;
  padding: 11px 12px;
  border-radius: 12px;
  border: 1.5px solid #EADFCB;
  background: var(--cream);
  font-family:'Noto Sans TC', sans-serif;
  font-size:14.5px;
  color: var(--tapioca);
  outline:none;
  transition: border-color .15s ease;
  appearance:none;
  -webkit-appearance:none;
}
.field input:focus, .field select:focus{ border-color: var(--caramel); }
.field select{
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='9'><path d='M1 1l6 6 6-6' stroke='%236B3A22' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  background-repeat:no-repeat;
  background-position: right 14px center;
  padding-right: 34px;
}
.row2{ display:grid; grid-template-columns:1fr 1fr; gap:12px; }

.price-wrap{ position:relative; }
.price-wrap span{
  position:absolute; left:12px; top:50%; transform:translateY(-50%);
  color:var(--caramel); font-weight:700; font-size:14px;
}
.price-wrap input{ padding-left: 30px; }
.price-wrap input:disabled{ opacity:0.45; }

.treated-toggle{
  display:flex;
  align-items:center;
  gap:8px;
  margin-top:9px;
  cursor:pointer;
  user-select:none;
}
.treated-toggle input{
  width:18px; height:18px;
  accent-color: var(--caramel);
  cursor:pointer;
}
.treated-toggle span{
  font-size:12.5px;
  color:#8A7660;
  font-weight:500;
}
.treated-toggle span b{ color:var(--brown-sugar); font-weight:700; }

button.primary{
  width:100%;
  padding: 14px;
  border:none;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--caramel), var(--brown-sugar));
  color: var(--white);
  font-family:'Noto Serif TC', serif;
  font-weight:700;
  font-size:15.5px;
  letter-spacing:1px;
  cursor:pointer;
  box-shadow: 0 6px 16px rgba(107,58,34,0.35);
  transition: transform .12s ease;
}
button.primary:active{ transform: scale(0.97); }

/* ---------- Toast ---------- */
#toast{
  position:fixed;
  left:50%; bottom:96px;
  transform: translateX(-50%) translateY(20px);
  background: var(--tapioca);
  color: var(--cream);
  padding: 10px 20px;
  border-radius: 30px;
  font-size:13px;
  opacity:0;
  pointer-events:none;
  transition: all .3s ease;
  z-index:50;
  white-space:nowrap;
}
#toast.show{ opacity:1; transform: translateX(-50%) translateY(0); }

/* ---------- History ---------- */
.day-group{ margin-bottom: 18px; }
.day-label{
  font-size:12px;
  font-weight:700;
  color:#A9835D;
  margin: 0 0 8px 2px;
  letter-spacing:1px;
}
.entry{
  background: var(--white);
  border-radius: 14px;
  padding: 13px 14px;
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:9px;
  box-shadow: 0 3px 10px rgba(75,39,22,0.08);
  position:relative;
}
.entry .dot{
  width:38px; height:38px; border-radius:50%;
  background: linear-gradient(135deg, var(--milk-tea), var(--brown-sugar));
  flex-shrink:0;
  display:flex; align-items:center; justify-content:center;
  color:var(--white); font-size:15px;
}
.entry .info{ flex:1; min-width:0; }
.entry .info .store{ font-weight:700; font-size:14.5px; color:var(--tapioca); }
.entry .info .item{ font-size:12.5px; color:#8A7660; margin-top:1px; }
.entry .tags{ display:flex; gap:5px; margin-top:5px; flex-wrap:wrap; }
.tag{
  font-size:10.5px;
  padding: 2px 7px;
  border-radius: 20px;
  background: var(--cream-2);
  color: var(--brown-sugar);
  font-weight:700;
}
.entry .price{ font-weight:900; font-family:'Noto Serif TC', serif; color: var(--brown-sugar); font-size:15px; flex-shrink:0; }
.entry .del{
  position:absolute; top:6px; right:6px;
  width:22px; height:22px;
  border:none; background:transparent; color:#C9B79C;
  cursor:pointer; font-size:14px; line-height:1;
}
.empty{
  text-align:center;
  padding: 50px 20px;
  color:#B49A82;
}
.empty svg{ width:56px; height:56px; opacity:0.5; margin-bottom:10px; }
.empty p{ font-size:13.5px; margin:0; }

/* ---------- Stats ---------- */
.stat-grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:12px;
  margin-bottom:18px;
}
.stat-card{
  background: var(--white);
  border-radius: 16px;
  padding: 16px 14px;
  box-shadow: var(--shadow);
  position:relative;
  overflow:hidden;
}
.stat-card .label{ font-size:11.5px; color:#A9835D; font-weight:700; letter-spacing:0.5px; }
.stat-card .value{
  font-family:'Noto Serif TC', serif;
  font-weight:900;
  font-size:24px;
  color: var(--brown-sugar-dark);
  margin-top:4px;
}
.stat-card .value small{ font-size:13px; font-weight:700; }

.rank-list{ list-style:none; margin:0; padding:0; }
.rank-row{ margin-bottom:11px; }
.rank-row .rlabel{
  display:flex; justify-content:space-between;
  font-size:13px; margin-bottom:5px;
  color: var(--tapioca);
}
.rank-row .rlabel b{ font-weight:700; }
.rank-row .rlabel span{ color:#A9835D; font-weight:700; }
.bar-track{ height:9px; background:var(--cream-2); border-radius:6px; overflow:hidden; }
.bar-fill{ height:100%; background: linear-gradient(90deg, var(--caramel), var(--brown-sugar)); border-radius:6px; transition: width .5s ease; }

.sweet-dist{ display:flex; align-items:flex-end; gap:8px; height:100px; padding-top:10px; }
.sweet-col{ flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; height:100%; }
.sweet-col .bar{ width:100%; background: linear-gradient(180deg, var(--peach), var(--caramel)); border-radius:6px 6px 3px 3px; min-height:4px; }
.sweet-col .n{ font-size:10.5px; color:#A9835D; margin-top:4px; font-weight:700; }
.sweet-col .l{ font-size:10px; color:#8A7660; margin-top:2px; }
</style>
</head>
<body>
<div id="app">

  <header>
    <div class="header-row">
      <div class="brand">
        <svg id="cupIcon" viewBox="0 0 46 52" fill="none">
          <path d="M8 12h30l-3.5 34a4 4 0 01-4 3.6H15.5a4 4 0 01-4-3.6L8 12z" fill="#F8EFE1" stroke="#F8EFE1" stroke-width="1"/>
          <rect id="cupFill" x="9.5" y="30" width="27" height="18" fill="url(#teaGrad)" />
          <circle cx="17" cy="34" r="2.1" fill="#4A2716"/>
          <circle cx="23" cy="38" r="2.1" fill="#4A2716"/>
          <circle cx="29" cy="33" r="2.1" fill="#4A2716"/>
          <circle cx="20" cy="43" r="2.1" fill="#4A2716"/>
          <circle cx="27" cy="44" r="2.1" fill="#4A2716"/>
          <path d="M6 12h34" stroke="#F8EFE1" stroke-width="3" stroke-linecap="round"/>
          <path d="M14 12c0-5 3-9 9-9s9 4 9 9" stroke="#F8EFE1" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <defs>
            <linearGradient id="teaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#C98A3E"/>
              <stop offset="1" stop-color="#8A5A2E"/>
            </linearGradient>
          </defs>
        </svg>
        <div>
          <h1>手搖日記</h1>
          <div class="brand-sub">SHAKE DIARY</div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <!-- 紀錄 -->
    <section class="view active" id="view-record">
      <h2 class="section-title">今天喝了什麼？</h2>
      <div class="card">
        <div class="field">
          <label>日期</label>
          <input type="date" id="f-date">
        </div>
        <div class="field">
          <label>店家</label>
          <input type="text" id="f-store" list="storeList" placeholder="例如：五十嵐、迷客夏">
          <datalist id="storeList"></datalist>
        </div>
        <div class="field">
          <label>品項</label>
          <input type="text" id="f-item" list="itemList" placeholder="例如：珍珠奶茶">
          <datalist id="itemList"></datalist>
        </div>
        <div class="row2">
          <div class="field">
            <label>甜度</label>
            <select id="f-sweet">
              <option>全糖</option>
              <option>少糖</option>
              <option selected>半糖</option>
              <option>微糖</option>
              <option>無糖</option>
            </select>
          </div>
          <div class="field">
            <label>冰塊</label>
            <select id="f-ice">
              <option>正常冰</option>
              <option>少冰</option>
              <option selected>微冰</option>
              <option>去冰</option>
              <option>熱飲</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label>價錢</label>
          <div class="price-wrap">
            <span>NT$</span>
            <input type="number" id="f-price" placeholder="0" min="0" step="1">
          </div>
          <label class="treated-toggle">
            <input type="checkbox" id="f-treated">
            <span><b>別人請的</b>（不計入花費與平均）</span>
          </label>
        </div>
        <button class="primary" id="saveBtn">＋ 儲存紀錄</button>
      </div>
    </section>

    <!-- 歷史 -->
    <section class="view" id="view-history">
      <h2 class="section-title">歷史紀錄</h2>
      <div id="historyList"></div>
    </section>

    <!-- 統計 -->
    <section class="view" id="view-stats">
      <h2 class="section-title">我的手搖統計</h2>
      <div class="stat-grid">
        <div class="stat-card">
          <div class="label">總杯數</div>
          <div class="value" id="statCount">0 <small>杯</small></div>
        </div>
        <div class="stat-card">
          <div class="label">總花費</div>
          <div class="value" id="statTotal">NT$0</div>
        </div>
        <div class="stat-card">
          <div class="label">本月花費</div>
          <div class="value" id="statMonth">NT$0</div>
        </div>
        <div class="stat-card">
          <div class="label">平均每杯</div>
          <div class="value" id="statAvg">NT$0</div>
        </div>
      </div>

      <div class="card">
        <h2 class="section-title" style="margin-top:0;">最常喝的店家</h2>
        <ul class="rank-list" id="storeRank"></ul>
      </div>

      <div class="card">
        <h2 class="section-title" style="margin-top:0;">最常喝的品項</h2>
        <ul class="rank-list" id="itemRank"></ul>
      </div>

      <div class="card">
        <h2 class="section-title" style="margin-top:0;">甜度分布</h2>
        <div class="sweet-dist" id="sweetDist"></div>
      </div>
    </section>
  </main>

  <nav>
    <button class="active" data-view="record">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 8h14l-1.5 11.5a2 2 0 01-2 1.7H8.5a2 2 0 01-2-1.7L5 8z"/><path d="M9 8c0-2.5 1.3-5 3-5s3 2.5 3 5"/></svg>
      紀錄
    </button>
    <button data-view="history">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
      歷史
    </button>
    <button data-view="stats">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>
      統計
    </button>
  </nav>

  <div id="toast"></div>
</div>

<script>
const STORAGE_KEY = 'shakeDiaryEntries_v1';

function loadEntries(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch(e){ return []; }
}
function saveEntries(entries){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}
let entries = loadEntries();

function uid(){
  return (crypto.randomUUID ? crypto.randomUUID() : 'id-' + Date.now() + '-' + Math.random().toString(16).slice(2));
}

// ---------- Nav switching ----------
const navButtons = document.querySelectorAll('nav button');
const views = document.querySelectorAll('.view');
navButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    navButtons.forEach(b=>b.classList.remove('active'));
    views.forEach(v=>v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('view-' + btn.dataset.view).classList.add('active');
    if(btn.dataset.view === 'history') renderHistory();
    if(btn.dataset.view === 'stats') renderStats();
  });
});

// ---------- Record form ----------
const dateInput = document.getElementById('f-date');
function todayStr(){
  const d = new Date();
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off*60000).toISOString().slice(0,10);
}
dateInput.value = todayStr();

function refreshDatalists(){
  const storeList = document.getElementById('storeList');
  const itemList = document.getElementById('itemList');
  const stores = [...new Set(entries.map(e=>e.store))];
  const items = [...new Set(entries.map(e=>e.item))];
  storeList.innerHTML = stores.map(s=>`<option value="${escapeHtml(s)}">`).join('');
  itemList.innerHTML = items.map(i=>`<option value="${escapeHtml(i)}">`).join('');
}
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

const treatedCheckbox = document.getElementById('f-treated');
const priceInput = document.getElementById('f-price');
treatedCheckbox.addEventListener('change', ()=>{
  priceInput.disabled = treatedCheckbox.checked;
  if(treatedCheckbox.checked) priceInput.value = '';
});

document.getElementById('saveBtn').addEventListener('click', ()=>{
  const store = document.getElementById('f-store').value.trim();
  const item = document.getElementById('f-item').value.trim();
  const treated = treatedCheckbox.checked;
  const price = treated ? 0 : parseFloat(priceInput.value);

  if(!store || !item){
    showToast('請填寫店家與品項喔！');
    return;
  }
  if(!treated && (isNaN(price) || price < 0)){
    showToast('請輸入正確的價錢！');
    return;
  }

  const entry = {
    id: uid(),
    date: dateInput.value || todayStr(),
    store, item,
    sweet: document.getElementById('f-sweet').value,
    ice: document.getElementById('f-ice').value,
    price,
    treated
  };
  entries.unshift(entry);
  saveEntries(entries);
  refreshDatalists();

  document.getElementById('f-item').value = '';
  priceInput.value = '';
  treatedCheckbox.checked = false;
  priceInput.disabled = false;

  showToast(treated ? '已記錄一杯（別人請的）🎁' : '已記錄一杯 🧋');
});

let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 1800);
}

// ---------- History ----------
function renderHistory(){
  const container = document.getElementById('historyList');
  if(entries.length === 0){
    container.innerHTML = `
      <div class="empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="#B49A82" stroke-width="1.5"><path d="M5 8h14l-1.5 11.5a2 2 0 01-2 1.7H8.5a2 2 0 01-2-1.7L5 8z"/><path d="M9 8c0-2.5 1.3-5 3-5s3 2.5 3 5"/></svg>
        <p>還沒有任何紀錄，去喝一杯吧！</p>
      </div>`;
    return;
  }
  const sorted = [...entries].sort((a,b)=> b.date.localeCompare(a.date) || 0);
  const groups = {};
  sorted.forEach(e=>{
    (groups[e.date] = groups[e.date] || []).push(e);
  });

  let html = '';
  Object.keys(groups).sort((a,b)=>b.localeCompare(a)).forEach(date=>{
    html += `<div class="day-group"><div class="day-label">${formatDate(date)}</div>`;
    groups[date].forEach(e=>{
      html += `
        <div class="entry">
          <div class="dot">🧋</div>
          <div class="info">
            <div class="store">${escapeHtml(e.store)}</div>
            <div class="item">${escapeHtml(e.item)}</div>
            <div class="tags"><span class="tag">${e.sweet}</span><span class="tag">${e.ice}</span>${e.treated ? '<span class="tag" style="background:#F3DCC7;">🎁 別人請的</span>' : ''}</div>
          </div>
          <div class="price">${e.treated ? '—' : '$' + e.price}</div>
          <button class="del" data-id="${e.id}">✕</button>
        </div>`;
    });
    html += `</div>`;
  });
  container.innerHTML = html;

  container.querySelectorAll('.del').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      entries = entries.filter(e=> e.id !== btn.dataset.id);
      saveEntries(entries);
      refreshDatalists();
      renderHistory();
    });
  });
}
function formatDate(dstr){
  const d = new Date(dstr + 'T00:00:00');
  const wk = ['日','一','二','三','四','五','六'][d.getDay()];
  return `${d.getMonth()+1}月${d.getDate()}日 (週${wk})`;
}

// ---------- Stats ----------
function renderStats(){
  const count = entries.length;
  const paidEntries = entries.filter(e=> !e.treated);
  const total = paidEntries.reduce((s,e)=> s + e.price, 0);
  const avg = paidEntries.length ? Math.round(total / paidEntries.length) : 0;

  const now = new Date();
  const ym = now.toISOString().slice(0,7);
  const monthTotal = paidEntries.filter(e=> e.date.startsWith(ym)).reduce((s,e)=> s + e.price, 0);

  document.getElementById('statCount').innerHTML = `${count} <small>杯</small>`;
  document.getElementById('statTotal').textContent = `NT$${total}`;
  document.getElementById('statMonth').textContent = `NT$${monthTotal}`;
  document.getElementById('statAvg').textContent = `NT$${avg}`;

  renderRank('storeRank', tally(entries, 'store'), count);
  renderRank('itemRank', tally(entries, 'item'), count);
  renderSweetDist();
}

function tally(list, key){
  const map = {};
  list.forEach(e=>{ map[e[key]] = (map[e[key]]||0) + 1; });
  return Object.entries(map).sort((a,b)=> b[1]-a[1]).slice(0,5);
}

function renderRank(elId, rankArr, total){
  const el = document.getElementById(elId);
  if(rankArr.length === 0){
    el.innerHTML = `<p style="color:#B49A82; font-size:13px; margin:0;">還沒有資料</p>`;
    return;
  }
  const max = rankArr[0][1];
  el.innerHTML = rankArr.map(([name, n])=> `
    <li class="rank-row">
      <div class="rlabel"><b>${escapeHtml(name)}</b><span>${n} 杯</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${(n/max*100).toFixed(0)}%"></div></div>
    </li>
  `).join('');
}

function renderSweetDist(){
  const order = ['全糖','少糖','半糖','微糖','無糖'];
  const map = {};
  order.forEach(k=> map[k] = 0);
  entries.forEach(e=>{ if(map[e.sweet] !== undefined) map[e.sweet]++; });
  const max = Math.max(1, ...Object.values(map));
  const el = document.getElementById('sweetDist');
  el.innerHTML = order.map(k=>{
    const h = Math.round((map[k]/max) * 80) + (map[k]>0 ? 6 : 0);
    return `
      <div class="sweet-col">
        <div class="n">${map[k]}</div>
        <div class="bar" style="height:${h}px"></div>
        <div class="l">${k}</div>
      </div>`;
  }).join('');
}

// ---------- Init ----------
refreshDatalists();
</script>
</body>
</html>
