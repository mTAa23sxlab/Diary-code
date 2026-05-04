// ============================================================
//  script.js  —  推し活日記 ナビゲーション・ページめくりロジック
// ============================================================

'use strict';

// ── 定数 ──────────────────────────────────────────────────
const VALID_RANGE = {
  2024: [6, 7, 8, 9, 10, 11, 12],
  2025: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  2026: [1, 2, 3, 4, 5, 6],
};

const MONTH_COLORS = {
  1: '#FFE36C', 2: '#DDD8F0', 3: '#FFC6E2',
  4: '#63AED9', 5: '#846FC7', 6: '#DDD8F0',
  7: '#DDD8F0', 8: '#DDD8F0', 9: '#DDD8F0',
  10: '#D8E9FC', 11: '#DDD8F0', 12: '#DDD8F0',
};

const MONTH_NAMES = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

// ページ順序リスト（TOC → 各月 → Anniversary）
const PAGE_LIST = (() => {
  const list = [{ type: 'toc' }];
  const years = [2024, 2025, 2026];
  years.forEach(y => {
    VALID_RANGE[y].forEach(m => {
      if (y === 2026 && m === 6) {
        list.push({ type: 'anniversary' });
      } else {
        list.push({ type: 'month', year: y, month: m });
      }
    });
  });
  return list;
})();

// ── 状態 ──────────────────────────────────────────────────
let currentIndex = 0;
let isFlipping = false;
let currentYear = 2024;
let currentMonth = 6;

// ── DOM 参照 ──────────────────────────────────────────────
const pageLeft   = document.getElementById('page-left-content');
const pageRight  = document.getElementById('page-right-content');
const navPrev    = document.getElementById('nav-prev');
const navNext    = document.getElementById('nav-next');
const yearTabsEl = document.getElementById('year-tabs');
const monthTabsEl = document.getElementById('month-tabs');
const flipContainer = document.getElementById('flip-container');

// ── 初期化 ────────────────────────────────────────────────
function init() {
  renderYearTabs();
  renderMonthTabs();
  renderPage(0, false);
}

// ── 年タブ描画 ────────────────────────────────────────────
function renderYearTabs() {
  yearTabsEl.innerHTML = '';
  [2024, 2025, 2026].forEach(y => {
    const btn = document.createElement('button');
    btn.className = 'year-tab' + (y === currentYear ? ' active' : '');
    btn.textContent = y + '年';
    btn.addEventListener('click', () => onYearTabClick(y));
    yearTabsEl.appendChild(btn);
  });
}

// ── 月タブ描画 ────────────────────────────────────────────
function renderMonthTabs() {
  monthTabsEl.innerHTML = '';
  const validMonths = VALID_RANGE[currentYear] || [];
  for (let m = 1; m <= 12; m++) {
    const isValid = validMonths.includes(m);
    const isActive = currentMonth === m && currentIndex > 0;
    const btn = document.createElement('button');
    btn.className = 'month-tab'
      + (isValid ? '' : ' disabled')
      + (isActive ? ' active' : '');
    btn.textContent = MONTH_NAMES[m - 1];
    btn.style.background = isValid ? MONTH_COLORS[m] : '';
    if (isValid) {
      btn.addEventListener('click', () => onMonthTabClick(m));
    }
    monthTabsEl.appendChild(btn);
  }
}

// ── 年タブクリック ────────────────────────────────────────
function onYearTabClick(year) {
  if (year === currentYear && currentIndex === 0) return;

  const prevYear = currentYear;
  currentYear = year;

  let targetMonth;
  const validMonths = VALID_RANGE[year];

  if (currentIndex === 0) {
    // 目次から → 案A（最初の有効月）
    targetMonth = validMonths[0];
    if (year === 2026 && targetMonth === 6) {
      navigateToAnniversary();
      return;
    }
  } else {
    // 月ページから → 案B（月を引き継ぎ、無効なら最初の有効月）
    if (validMonths.includes(currentMonth)) {
      targetMonth = currentMonth;
    } else {
      targetMonth = validMonths[0];
    }
    // 2026年6月 = 2周年記念ページ
    if (year === 2026 && targetMonth === 6) {
      navigateToAnniversary();
      return;
    }
  }

  const idx = findPageIndex(year, targetMonth);
  if (idx !== -1) {
    const direction = idx > currentIndex ? 'next' : 'prev';
    navigateTo(idx, direction);
  }
}

// ── 月タブクリック ────────────────────────────────────────
function onMonthTabClick(month) {
  if (currentYear === 2026 && month === 6) {
    navigateToAnniversary();
    return;
  }
  const idx = findPageIndex(currentYear, month);
  if (idx !== -1) {
    const direction = idx > currentIndex ? 'next' : 'prev';
    navigateTo(idx, direction);
  }
}

// ── ページインデックス検索 ────────────────────────────────
function findPageIndex(year, month) {
  return PAGE_LIST.findIndex(p => p.type === 'month' && p.year === year && p.month === month);
}

function navigateToAnniversary() {
  const idx = PAGE_LIST.findIndex(p => p.type === 'anniversary');
  if (idx !== -1) navigateTo(idx, idx > currentIndex ? 'next' : 'prev');
}

// ── ページ移動 ────────────────────────────────────────────
function navigateTo(index, direction) {
  if (isFlipping || index === currentIndex) return;
  flipPage(direction, () => {
    currentIndex = index;
    const page = PAGE_LIST[currentIndex];
    if (page.type === 'month') {
      currentYear = page.year;
      currentMonth = page.month;
    }
    renderPage(currentIndex, false);
    renderYearTabs();
    renderMonthTabs();
    updateNavButtons();
  });
}

// ── 前後ナビ ──────────────────────────────────────────────
navPrev.addEventListener('click', () => {
  if (currentIndex > 0) navigateTo(currentIndex - 1, 'prev');
});

navNext.addEventListener('click', () => {
  if (currentIndex < PAGE_LIST.length - 1) navigateTo(currentIndex + 1, 'next');
});

function updateNavButtons() {
  navPrev.classList.toggle('hidden', currentIndex === 0);
  navNext.classList.toggle('hidden', currentIndex === PAGE_LIST.length - 1);
}

// ── ページめくりアニメーション ────────────────────────────
function flipPage(direction, callback) {
  isFlipping = true;
  const panel = document.createElement('div');
  panel.className = 'flip-panel' + (direction === 'next' ? ' flip-right' : '');
  panel.style.cssText = `
    position: absolute;
    top: 0;
    ${direction === 'next' ? 'right: 0;' : 'left: 0;'}
    width: 50%;
    height: 100%;
    transform-origin: ${direction === 'next' ? 'left' : 'right'} center;
    transform-style: preserve-3d;
    transition: transform 0.65s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    z-index: 30;
    backface-visibility: hidden;
    background: var(--book-page);
    box-shadow: ${direction === 'next' ? '-4px' : '4px'} 0 12px rgba(80,60,120,0.18);
  `;
  flipContainer.appendChild(panel);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      panel.style.transform = direction === 'next'
        ? 'rotateY(-180deg)'
        : 'rotateY(180deg)';
    });
  });

  panel.addEventListener('transitionend', () => {
    flipContainer.removeChild(panel);
    isFlipping = false;
    callback();
  }, { once: true });
}

// ── ページ描画 ────────────────────────────────────────────
function renderPage(index) {
  const page = PAGE_LIST[index];
  updateNavButtons();

  if (page.type === 'toc') {
    renderToc();
  } else if (page.type === 'anniversary') {
    renderAnniversary();
  } else {
    renderMonthPage(page.year, page.month);
  }
}

// ── 目次ページ ────────────────────────────────────────────
function renderToc() {
  pageLeft.innerHTML = `
    <div class="toc-left">
      <div class="toc-title">Notice</div>
      <div class="toc-notice">
        このサイトは個人のファンが制作した<br>
        非公式のファン活動です。<br>
        ANYCOLOR株式会社・所属ライバーとは<br>
        一切関係ありません。<br><br>
        掲載しているキャラクター・映像・<br>
        スクリーンショットの著作権は<br>
        ANYCOLOR株式会社および各権利者に<br>
        帰属します。<br><br>
        ANYCOLOR二次創作ガイドライン<br>
        （2026年6月19日参照）に基づき<br>
        制作・公開しています。<br>
        <a href="https://www.anycolor.co.jp/guidelines/" target="_blank" rel="noopener">
          https://www.anycolor.co.jp/guidelines/
        </a><br><br>
        無断転載・二次配布はご遠慮ください。
      </div>
    </div>
  `;

  pageRight.innerHTML = `
    <div class="toc-right">
      <div class="toc-welcome">2nd Anniversary Memory Book</div>
      <div class="toc-desc">
        デビュー2周年を記念して制作した<br>
        推し活の思い出をまとめた個人制作の記念誌です。<br>
        2024年6月〜2026年5月までの記録をご覧いただけます。
      </div>
      <div class="toc-guide">
        <div style="font-size:10px; color:var(--text-muted); margin-bottom:12px; text-align:center;">
          — 使い方 —
        </div>
        <div style="position:relative; width:75%; margin:0 auto 16px;">
          <div class="guide-book-mini">
            <div class="guide-spine-mini"></div>
            <div class="guide-page guide-page-l"></div>
            <div class="guide-page"></div>
            <div class="guide-year-tab-mini">2024年　2025年　2026年</div>
            <div class="guide-month-tab-mini">1月<br>2月<br>3月</div>
          </div>
          <div class="guide-arrow" style="top:-28px; left:10px;">
            ↑ 年タブで年を選ぶ
          </div>
          <div class="guide-arrow" style="top:30%; left:-80px;">
            ← 月タブで月を選ぶ
          </div>
        </div>
        <div style="font-size:9px; color:var(--text-muted); text-align:center; line-height:1.8;">
          ◀ ▶ ボタンまたは月タブでページをめくれます<br>
          グレーのタブは記録のない月です<br>
          写真をクリックすると配信リンクが開きます
        </div>
      </div>
    </div>
  `;
}

// ── 月別ページ ────────────────────────────────────────────
function renderMonthPage(year, month) {
  const data = (typeof DIARY_DATA !== 'undefined')
    ? DIARY_DATA.find(d => d.year === year && d.month === month)
    : null;

  const monthLabel = `${year}年 ${MONTH_NAMES[month - 1]}`;
  const isFivePhotos = data && data.photos && data.photos.length >= 5;

  // 左ページ：メンバー写真
  const photosHTML = data && data.photos
    ? data.photos.map(p => `
        <div class="photo-item" ${p.url ? `onclick="openUrl('${p.url}')"` : ''} style="${p.url ? 'cursor:pointer;' : 'cursor:default;'}">
          <img class="photo-img" src="${p.file}" alt="${p.name || ''}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="photo-placeholder" style="display:none;">📷</div>
          ${p.name ? `<div class="photo-name">${p.name}</div>` : ''}
        </div>
      `).join('')
    : `<div style="color:var(--text-muted);font-size:12px;text-align:center;margin:auto;">
        写真を data.js に追加してください
      </div>`;

  pageLeft.innerHTML = `
    <div style="height:100%;">
      <div class="photo-grid ${isFivePhotos ? 'five-photos' : ''}" style="height:100%;">
        ${photosHTML}
      </div>
    </div>
  `;

  // 右ページ：ピックアップ
  const pickup = data && data.pickup;
  pageRight.innerHTML = `
    <div class="pickup-area">
      <div class="pickup-month-label">${monthLabel}</div>
      <div class="pickup-photo" ${pickup && pickup.url ? `onclick="openUrl('${pickup.url}')"` : ''}>
        ${pickup
          ? `<img class="pickup-img" src="${pickup.file}" alt=""
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
             <div class="pickup-placeholder" style="display:none;">🌸</div>`
          : `<div class="pickup-placeholder">🌸</div>`
        }
      </div>
      <div class="pickup-message">
        ${pickup ? pickup.message : 'ここにこの月の一言コメントを入れてください。'}
      </div>
    </div>
  `;
}

// ── 2周年記念ページ ───────────────────────────────────────
function renderAnniversary() {
  pageLeft.innerHTML = `
    <div class="anniversary-page">
      <div class="anniversary-deco">✦ ✦ ✦</div>
      <div class="anniversary-title">2nd Anniversary</div>
      <div class="anniversary-main">
        デビュー2周年<br>おめでとう
      </div>
      <div class="anniversary-deco">✦ ✦ ✦</div>
    </div>
  `;

  pageRight.innerHTML = `
    <div class="anniversary-page">
      <div class="anniversary-message">
        ここにお祝いのメッセージを<br>
        自由に書いてください。<br><br>
        2年間ありがとう。<br>
        これからもずっと応援しています。
      </div>
      <div class="anniversary-deco" style="font-size:14px;">❋ ❋ ❋</div>
    </div>
  `;
}

// ── URLを新しいタブで開く ─────────────────────────────────
function openUrl(url) {
  if (url) window.open(url, '_blank', 'noopener');
}

// ── キーボード操作 ────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft' && currentIndex < PAGE_LIST.length - 1) {
    navigateTo(currentIndex + 1, 'next');
  }
  if (e.key === 'ArrowRight' && currentIndex > 0) {
    navigateTo(currentIndex - 1, 'prev');
  }
});

// ── 起動 ──────────────────────────────────────────────────
init();
