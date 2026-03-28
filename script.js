/* ════════════════════════════════════════════════════════════════
   ITZFIZZ — Hero Scroll Animation
   Author: Assignment Submission
   Stack: Vanilla JS + GSAP + ScrollTrigger
═══════════════════════════════════════════════════════════════ */

gsap.registerPlugin(ScrollTrigger);

/* ── Custom cursor ─────────────────────────────────────────── */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  gsap.to(cursor, { x: mx, y: my, duration: 0.08, ease: 'none' });
});

/* Lag the ring slightly for a cool trailing effect */
(function movRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  gsap.set(cursorRing, { x: rx, y: ry });
  requestAnimationFrame(movRing);
})();

/* Hover interactions */
document.querySelectorAll('a, button, .pill').forEach(el => {
  el.addEventListener('mouseenter', () => {
    gsap.to(cursor,     { scale: 3, duration: 0.3 });
    gsap.to(cursorRing, { scale: 0.4, opacity: 0.4, duration: 0.3 });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(cursor,     { scale: 1, duration: 0.3 });
    gsap.to(cursorRing, { scale: 1, opacity: 1, duration: 0.3 });
  });
});

/* ── Scroll progress bar ───────────────────────────────────── */
const progressBar = document.getElementById('progressBar');
ScrollTrigger.create({
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: self => {
    progressBar.style.width = (self.progress * 100) + '%';
  }
});

/* ── Generate speed lines ──────────────────────────────────── */
const speedLinesEl = document.getElementById('speedLines');
for (let i = 0; i < 14; i++) {
  const line = document.createElement('div');
  line.className = 'speed-line';
  line.style.cssText = `
    top: ${20 + Math.random() * 60}%;
    left: ${-10 + Math.random() * 30}%;
    width: ${60 + Math.random() * 180}px;
    opacity: ${0.2 + Math.random() * 0.5};
  `;
  speedLinesEl.appendChild(line);
}

/* ── Intro animation on page load ──────────────────────────── */
const tl = gsap.timeline({ delay: 0.25 });

// Corner brackets
tl.to(['#bTL','#bTR','#bBL','#bBR'], {
  opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out'
}, 0);

// Accent stripe
tl.to('#accentStripe', {
  opacity: 0.6, duration: 0.8, ease: 'power2.out'
}, 0.1);

// Headline letters — row 1 (WELCOME)
tl.to('.headline-row:first-child span', {
  y: '0%',
  opacity: 1,
  duration: 0.75,
  stagger: 0.05,
  ease: 'power3.out'
}, 0.3);

// Headline letters — row 2 (ITZFIZZ)
tl.to('.headline-row.accent-word span', {
  y: '0%',
  opacity: 1,
  duration: 0.75,
  stagger: 0.06,
  ease: 'power3.out'
}, 0.65);

// Car flies in from right
tl.fromTo('#heroCar',
  { x: 180, opacity: 0, rotateZ: -4, scale: 0.9 },
  { x: 0,   opacity: 1, rotateZ:  0, scale: 1,
    duration: 1.2, ease: 'power4.out' },
  0.5
);

// Vertical label
tl.to('#vertLabel', { opacity: 0.5, duration: 0.8 }, 1.2);

// Speed lines flash
tl.to('#speedLines', { opacity: 1, duration: 0.3 }, 0.8);
tl.to('#speedLines', { opacity: 0, duration: 0.8 }, 1.2);

// Stats one by one
const statItems = ['#s1','#s2','#s3','#s4'];
const statBars  = ['#bar1','#bar2','#bar3','#bar4'];
const statPcts  = [58, 23, 27, 40];

tl.to(statItems, {
  opacity: 1,
  y: 0,
  duration: 0.6,
  stagger: 0.14,
  ease: 'power2.out'
}, 1.0);

statBars.forEach((bar, i) => {
  tl.to(bar, {
    width: statPcts[i] + '%',
    duration: 1.0,
    ease: 'power2.inOut'
  }, 1.2 + i * 0.14);
});

// Scroll hint
tl.to('#scrollHint', { opacity: 1, duration: 0.8, ease: 'power2.out' }, 1.8);

/* ── Idle float on car (hero) ──────────────────────────────── */
gsap.to('#carSvg', {
  y: -10,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
  delay: 2
});

/* ── SCROLL-DRIVEN ANIMATION ───────────────────────────────── */

// Phase definitions for scroll-driven text
const phases = [
  { headline: 'PRECISION DELIVERY',  sub: 'Scroll-driven logistics intelligence' },
  { headline: 'SMART ROUTING',        sub: 'AI-powered path optimization' },
  { headline: 'REAL-TIME TRACKING',   sub: 'Every package, every moment' },
  { headline: 'ZERO FRICTION',        sub: 'Seamless last-mile experience' },
];

let lastPhase = -1;

// Main scroll animation
ScrollTrigger.create({
  trigger: '#scrollSection',
  start: 'top top',
  end: 'bottom bottom',
  pin: false,
  scrub: false,
  onUpdate: self => {
    const p = self.progress; // 0 → 1

    // 1. Car: moves left-to-right and rotates as you scroll
    const xMove  = gsap.utils.interpolate(-200, 200, p);
    const rotate = gsap.utils.interpolate(-12,   12, p);
    const scale  = gsap.utils.interpolate(0.9,  1.15, Math.sin(p * Math.PI));

    gsap.to('#scrollCarWrap', {
      x: xMove,
      rotationZ: rotate,
      scale: scale,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: 'auto'
    });

    // 2. Phase-based text reveal (4 phases)
    const phaseIdx = Math.min(3, Math.floor(p * 4));
    if (phaseIdx !== lastPhase) {
      lastPhase = phaseIdx;
      const ph = phases[phaseIdx];

      gsap.to('#phaseHeadline', {
        opacity: 0, y: -20, duration: 0.2,
        onComplete: () => {
          document.getElementById('phaseHeadline').textContent = ph.headline;
          gsap.to('#phaseHeadline', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
        }
      });

      gsap.to('#phaseSubline', {
        opacity: 0, duration: 0.15,
        onComplete: () => {
          document.getElementById('phaseSubline').textContent = ph.sub;
          gsap.to('#phaseSubline', { opacity: 1, duration: 0.3, delay: 0.1 });
        }
      });
    }

    // 3. Background glow color shift
    const hue = gsap.utils.interpolate(65, 0, p); // lime → red
    document.documentElement.style.setProperty('--current-hue', hue);
  }
});

// Reveal scroll text on entering scroll section
ScrollTrigger.create({
  trigger: '#scrollSection',
  start: 'top 80%',
  onEnter: () => {
    gsap.to('#phaseHeadline', { opacity: 1, y: 0, duration: 0.7, ease: 'back.out(1.5)' });
    gsap.to('#phaseSubline',  { opacity: 1, duration: 0.7, delay: 0.2 });
  }
});

/* ── Parallax on hero car while in hero section ─────────── */
ScrollTrigger.create({
  trigger: '#hero',
  start: 'top top',
  end: 'bottom top',
  scrub: 1.5,
  onUpdate: self => {
    const p = self.progress;
    gsap.set('#heroCar', {
      y: p * -80,
      scale: 1 + p * 0.08,
      overwrite: 'auto'
    });
    gsap.set('#scrollHint', { opacity: 1 - p * 3 });
  }
});

/* ── Content section reveal ────────────────────────────────── */
gsap.from('.content-section > div', {
  scrollTrigger: {
    trigger: '.content-section',
    start: 'top 75%',
    toggleActions: 'play none none reverse'
  },
  opacity: 0,
  y: 50,
  duration: 0.9,
  stagger: 0.2,
  ease: 'power3.out'
});

gsap.from('.pill', {
  scrollTrigger: {
    trigger: '.content-pills',
    start: 'top 85%',
    toggleActions: 'play none none reverse'
  },
  opacity: 0,
  x: -20,
  duration: 0.5,
  stagger: 0.08,
  ease: 'power2.out'
});