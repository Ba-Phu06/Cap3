/**
 * app.js - Xử lý tương tác, Polaroid gallery, lưu bút & hiệu ứng thanh xuân
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'thanhxuan_notes_v1';
  const AMBIENT_KEY = 'thanhxuan_ambient_mode';

  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
  }

  function initAmbientMode() {
    const toggleBtn = document.getElementById('ambient-toggle');
    if (localStorage.getItem(AMBIENT_KEY) === 'true') {
      document.body.classList.add('ambient-golden');
    }
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const isGolden = document.body.classList.toggle('ambient-golden');
        localStorage.setItem(AMBIENT_KEY, String(isGolden));
        toggleBtn.setAttribute('aria-pressed', String(isGolden));
      });
    }
    createFallingPetals();
  }

  function createFallingPetals() {
    const layer = document.getElementById('petal-layer');
    if (!layer) return;
    layer.innerHTML = '';
    for (let i = 0; i < 18; i++) {
      const petal = document.createElement('span');
      petal.className = 'petal';
      const left = Math.random() * 100;
      const size = 12 + Math.random() * 14;
      petal.style.cssText = `left:${left}%;width:${size}px;height:${size * 1.3}px;animation-duration:${6 + Math.random() * 8}s;animation-delay:-${Math.random() * 5}s;`;
      layer.appendChild(petal);
    }
  }

  function initGalleryFilters() {
    const container = document.getElementById('filter-buttons');
    if (!container || !window.CATEGORY_FILTERS) return;

    container.innerHTML = window.CATEGORY_FILTERS.map((cat, idx) => `
      <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-category="${cat.id}">
        ${escapeHtml(cat.label)}
      </button>
    `).join('');

    renderGallery('all');

    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.category);
    });
  }

  function renderGallery(category) {
    const grid = document.getElementById('gallery-grid');
    if (!grid || !window.MEMORIES_DATA) return;

    const items = category === 'all'
      ? window.MEMORIES_DATA
      : window.MEMORIES_DATA.filter(m => m.category === category);

    grid.innerHTML = items.map(item => `
      <article class="polaroid-card reveal" data-id="${item.id}" data-category="${item.category}" tabindex="0" role="button">
        <div class="polaroid-media" style="background:${item.gradient};">
          <span class="polaroid-icon" aria-hidden="true">${item.icon}</span>
        </div>
        <div class="polaroid-caption">
          <span class="polaroid-tag">${escapeHtml(item.categoryLabel)}</span>
          <h3 class="polaroid-title">${escapeHtml(item.title)}</h3>
          <p class="polaroid-date">${escapeHtml(item.date)}</p>
        </div>
      </article>
    `).join('');
    observeReveals();
  }

  function initLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const closeBtn = document.getElementById('lightbox-close');
    const grid = document.getElementById('gallery-grid');
    if (!modal) return;

    const imgBox = document.getElementById('lightbox-image');
    const titleEl = document.getElementById('lightbox-title');
    const captionEl = document.getElementById('lightbox-caption');
    const tagEl = document.getElementById('lightbox-tag');

    const toggle = (isOpen, item) => {
      modal.classList.toggle('is-open', isOpen);
      modal.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
      if (isOpen && item) {
        if (imgBox) {
          imgBox.style.background = item.gradient;
          imgBox.innerHTML = `<span class="lightbox-hero-icon">${item.icon}</span>`;
        }
        if (titleEl) titleEl.textContent = item.title;
        if (captionEl) captionEl.textContent = item.caption;
        if (tagEl) tagEl.textContent = `${item.categoryLabel} • ${item.date}`;
      }
    };

    if (grid) {
      grid.addEventListener('click', (e) => {
        const card = e.target.closest('.polaroid-card');
        if (!card) return;
        const memory = window.MEMORIES_DATA.find(m => String(m.id) === card.dataset.id);
        if (memory) toggle(true, memory);
      });
    }

    if (closeBtn) closeBtn.addEventListener('click', () => toggle(false));
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-overlay')) toggle(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) toggle(false);
    });
  }

  function initTimeline() {
    const list = document.getElementById('timeline-list');
    if (!list || !window.TIMELINE_DATA) return;

    list.innerHTML = window.TIMELINE_DATA.map((item, idx) => `
      <li class="timeline-item reveal" data-step="${idx + 1}">
        <div class="timeline-badge">${escapeHtml(item.grade)}</div>
        <div class="timeline-card">
          <span class="timeline-year">${escapeHtml(item.year)}</span>
          <h3 class="timeline-title">${escapeHtml(item.title)}</h3>
          <p class="timeline-desc">${escapeHtml(item.description)}</p>
          <div class="timeline-highlight">${escapeHtml(item.highlight)}</div>
        </div>
      </li>
    `).join('');
  }

  function getNotes() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : window.DEFAULT_NOTES;
    } catch {
      return window.DEFAULT_NOTES || [];
    }
  }

  function renderNotes(notes) {
    const wall = document.getElementById('notes-wall');
    if (!wall) return;
    wall.innerHTML = notes.map(note => `
      <div class="yearbook-note ${escapeHtml(note.colorTheme || 'note-pastel-pink')} reveal">
        <div class="note-header">
          <strong class="note-author">${escapeHtml(note.author)}</strong>
          <span class="note-class">${escapeHtml(note.className)}</span>
        </div>
        <p class="note-quote">“${escapeHtml(note.message)}”</p>
        <div class="note-date">${escapeHtml(note.date)}</div>
      </div>
    `).join('');
    observeReveals();
  }

  function initYearbookForm() {
    const form = document.getElementById('note-form');
    if (!form) return;
    let notes = getNotes();
    renderNotes(notes);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('note-author')?.value.trim();
      const className = document.getElementById('note-class')?.value.trim() || 'Thanh Xuân';
      const message = document.getElementById('note-message')?.value.trim();
      if (!author || !message) return;

      const themes = ['note-pastel-pink', 'note-pastel-blue', 'note-pastel-yellow', 'note-pastel-green'];
      const now = new Date();
      const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;

      notes = [{
        id: `note-${Date.now()}`,
        author,
        className,
        message,
        date: dateStr,
        colorTheme: themes[Math.floor(Math.random() * themes.length)]
      }, ...notes];

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
      } catch {}

      renderNotes(notes);
      form.reset();
    });
  }

  function observeReveals() {
    const items = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    items.forEach(el => obs.observe(el));
  }

  function init() {
    initAmbientMode();
    initGalleryFilters();
    initLightbox();
    initTimeline();
    initYearbookForm();
    observeReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
