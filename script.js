/* =========================================
   GASPAROTTI CONTABILIDADE — script.js
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ── CARROSSEL ───────────────────────────── */
  const initCarousel = (section) => {
    const track        = section.querySelector('.carousel-track');
    const cards        = section.querySelectorAll('.carousel-card');
    const nextBtn      = section.querySelector('.next');
    const prevBtn      = section.querySelector('.prev');
    const dotsContainer = section.querySelector('.carousel-dots');

    if (!track || cards.length === 0) return;

    let index    = 0;
    let startX   = 0;
    let dragging = false;
    let autoInterval;

    const update = () => {
      const w = cards[0].offsetWidth;
      track.style.transform = `translateX(-${index * w}px)`;

      if (dotsContainer) {
        dotsContainer.querySelectorAll('span').forEach((d, i) =>
          d.classList.toggle('active', i === index)
        );
      }
    };

    // Criar dots
    if (dotsContainer) {
      cards.forEach((_, i) => {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => { index = i; update(); resetAuto(); });
        dotsContainer.appendChild(dot);
      });
    }

    nextBtn?.addEventListener('click', () => { index = (index + 1) % cards.length; update(); resetAuto(); });
    prevBtn?.addEventListener('click', () => { index = (index - 1 + cards.length) % cards.length; update(); resetAuto(); });

    // Touch/swipe
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; dragging = true; }, { passive: true });
    track.addEventListener('touchmove',  (e) => {
      if (!dragging) return;
      const diff = startX - e.touches[0].clientX;
      if (Math.abs(diff) > 50) {
        index = diff > 0
          ? (index + 1) % cards.length
          : (index - 1 + cards.length) % cards.length;
        update();
        dragging = false;
        resetAuto();
      }
    }, { passive: true });
    track.addEventListener('touchend', () => { dragging = false; });

    // Autoplay
    const autoPlay = () => { index = (index + 1) % cards.length; update(); };
    autoInterval = setInterval(autoPlay, 4000);
    const resetAuto = () => { clearInterval(autoInterval); autoInterval = setInterval(autoPlay, 4000); };

    // Parar ao sair da janela
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clearInterval(autoInterval);
      else resetAuto();
    });

    update();
  };

  document.querySelectorAll('.carousel-section').forEach(initCarousel);


  /* ── HAMBURGER / MENU MOBILE ─────────────── */
  const hamburger  = document.querySelector('.hamburger');
  const mobileNav  = document.querySelector('.mobile-nav');
  const closeBtn   = document.querySelector('.close-btn');

  const openMenu  = () => { mobileNav?.classList.add('open');  hamburger?.classList.add('active');    document.body.style.overflow = 'hidden'; };
  const closeMenu = () => { mobileNav?.classList.remove('open'); hamburger?.classList.remove('active'); document.body.style.overflow = ''; };

  hamburger?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);

  // Fechar ao clicar em link
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Fechar ao clicar fora (overlay)
  document.addEventListener('click', (e) => {
    if (mobileNav?.classList.contains('open') && !mobileNav.contains(e.target) && e.target !== hamburger) {
      closeMenu();
    }
  });


  /* ── FORMULÁRIO DE CONTATO ───────────────── */
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('input[type="text"]')?.value.trim();
      showToast(`✅ Mensagem enviada! Em breve entraremos em contato, ${name || 'obrigado'}.`);
      form.reset();
    });
  }


  /* ── TOAST ───────────────────────────────── */
  const showToast = (msg, duration = 4000) => {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  };


  /* ── FADE-IN AO ROLAR ────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


  /* ── NÚMERO ANIMADO ─────────────────────── */
  const animateNumbers = () => {
    document.querySelectorAll('.stat h2[data-target]').forEach(el => {
      const target  = parseFloat(el.dataset.target);
      const prefix  = el.dataset.prefix  || '';
      const suffix  = el.dataset.suffix  || '';
      const isFloat = el.dataset.float === 'true';
      const duration = 1800;
      const start  = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        const current  = isFloat
          ? (eased * target).toFixed(1)
          : Math.round(eased * target);
        el.textContent = `${prefix}${current}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    });
  };

  const numSection = document.querySelector('.numbers');
  if (numSection) {
    const numObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateNumbers();
        numObserver.disconnect();
      }
    }, { threshold: 0.4 });
    numObserver.observe(numSection);
  }

});
