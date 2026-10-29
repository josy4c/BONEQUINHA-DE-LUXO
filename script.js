const WHATSAPP = '5577998338976';

const looks = [
  ['hero.jpg', 'Bordô com brilho', 'Um clássico marcante'],
  ['look-02.jpg', 'Bordô & pedrarias', 'Um toque de luxo'],
  ['look-03.jpg', 'Nude amendoado', 'Elegância natural'],
  ['look-04.jpg', 'Cuidado delicado', 'Beleza também nos pés'],
  ['look-05.jpg', 'Rosa com brilho', 'Delicadeza iluminada'],
  ['look-06.jpg', 'Francesinha', 'O clássico que encanta'],
  ['look-07.jpg', 'Vermelho elegante', 'Presença em cada detalhe'],
  ['look-08.jpg', 'Nail art floral', 'Detalhes especiais'],
  ['look-09.jpg', 'Rosa minimalista', 'Leve e sofisticado'],
  ['look-10.jpg', 'Francesinha moderna', 'Um clássico renovado'],
  ['look-11.jpg', 'Nude com detalhes', 'Sutileza e charme'],
  ['look-12.jpg', 'Rosa perolado', 'Brilho delicado']
];

const gallery = document.querySelector('#gallery');
if (gallery) {
  gallery.innerHTML = '';
  looks.forEach(([file, title, desc], i) => {
    const a = document.createElement('a');
    a.className = 'look-card';
    a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Oi! Vi a inspiração "${title}" no site da Bonequinha de Luxo e gostaria de saber se podemos fazer algo parecido.`)}`;
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', `Consultar pelo WhatsApp sobre ${title}`);

    const img = document.createElement('img');
    img.src = `assets/images/${file}`;
    img.alt = title;
    img.loading = i < 3 ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.onerror = () => { img.style.display = 'none'; a.classList.add('image-missing'); };

    const shade = document.createElement('span');
    shade.className = 'look-overlay';
    const no = document.createElement('small');
    no.textContent = String(i + 1).padStart(2, '0');
    const name = document.createElement('b');
    name.textContent = title;
    const sub = document.createElement('em');
    sub.textContent = desc;
    const arrow = document.createElement('i');
    arrow.textContent = '↗';
    shade.append(no, name, sub, arrow);
    a.append(img, shade);
    gallery.append(a);
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const intro = document.querySelector('#intro');
if (intro) {
  window.addEventListener('load', () => setTimeout(() => intro.classList.add('intro-out'), 550));
  setTimeout(() => intro.classList.add('intro-out'), 2400);
}

const header = document.querySelector('.header');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      reveal.unobserve(e.target);
    }
  }), { threshold: 0.12 });
  document.querySelectorAll('.service-card,.look-card,.section-title-row,.gallery-head,.experience-copy,.experience-image,.quote').forEach(el => {
    el.classList.add('reveal');
    reveal.observe(el);
  });
} else {
  document.querySelectorAll('.service-card,.look-card,.section-title-row,.gallery-head,.experience-copy,.experience-image,.quote').forEach(el => el.classList.add('visible'));
}
