// ナビゲーション（スマホ用ハンバーガーメニュー）
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// スクロールでふわっと表示
const revealTargets = document.querySelectorAll('.reveal');
const showAllReveals = () => revealTargets.forEach((el) => el.classList.add('is-visible'));

if ('IntersectionObserver' in window && revealTargets.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );
  revealTargets.forEach((el) => observer.observe(el));

  // 万一アニメーションが発火しない場合でも、内容が非表示のままにならないようにする保険
  window.addEventListener('load', () => setTimeout(showAllReveals, 2000));
} else {
  showAllReveals();
}

// お問い合わせフォーム（送信バックエンド未実装のため、案内メッセージのみ表示）
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formNote.textContent =
      'ただいま送信機能は準備中です。お手数ですが bigaku.fukuoka@gmail.com まで直接メールにてお問い合わせください。';
  });
}
