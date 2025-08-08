// Mammoth52 Website Main JS

document.addEventListener('DOMContentLoaded', () => {
  // Navigation logic
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Special handling for Memory Wall overlay
      if (link.getAttribute('href') === '#wall') {
        e.preventDefault();
        // Open the overlay
        const wallOverlay = document.getElementById('wall-overlay');
        if (wallOverlay) {
          wallOverlay.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        return;
      }
      // Default navigation
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const target = link.getAttribute('href').replace('#', '');
      // Show only the selected section
      sections.forEach(sec => {
        if (sec.id === target) {
          sec.style.display = 'block';
          sec.classList.add('active');
        } else {
          sec.style.display = 'none';
          sec.classList.remove('active');
        }
      });
      // Optionally scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Wall Overlay Close Logic
  const wallOverlay = document.getElementById('wall-overlay');
  const closeWallOverlay = document.getElementById('close-wall-overlay');
  if (wallOverlay && closeWallOverlay) {
    closeWallOverlay.addEventListener('click', () => {
      wallOverlay.classList.remove('open');
      document.body.style.overflow = '';
      // Remove active state from nav
      const memoryWallLink = document.getElementById('memory-wall-link');
      if (memoryWallLink) memoryWallLink.classList.remove('active');
    });
    // Optional: close overlay on outside click
    wallOverlay.addEventListener('click', (e) => {
      if (e.target === wallOverlay) {
        wallOverlay.classList.remove('open');
        document.body.style.overflow = '';
        const memoryWallLink = document.getElementById('memory-wall-link');
        if (memoryWallLink) memoryWallLink.classList.remove('active');
      }
    });
    // Optional: close overlay on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && wallOverlay.classList.contains('open')) {
        wallOverlay.classList.remove('open');
        document.body.style.overflow = '';
        const memoryWallLink = document.getElementById('memory-wall-link');
        if (memoryWallLink) memoryWallLink.classList.remove('active');
      }
    });
  }

  // Animated inspiring text for Mammoth52
  const inspireText = document.getElementById('inspire-text');
  const inspiringPhrases = [
    'Unleash Your Greatness',
    'Together We Roar',
    'Future Leaders, One Spirit',
    'Strength in Unity',
    'Dream Big. Act Bold.',
    'Mammoth52: Born to Inspire',
    'Courage. Excellence. Brotherhood.',
    'Changing the World, Step by Step',
    'Shine Beyond Limits',
    'We Are Mammoth52'
  ];
  let phraseIndex = 0;
  function animatePhrase() {
    if (!inspireText) return;
    let i = 0;
    const phrase = inspiringPhrases[phraseIndex];
    inspireText.textContent = '';
    function typeWriter() {
      if (i < phrase.length) {
        inspireText.textContent += phrase.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        setTimeout(() => {
          phraseIndex = (phraseIndex + 1) % inspiringPhrases.length;
          animatePhrase();
        }, 2200);
      }
    }
    typeWriter();
  }
  animatePhrase();

  // Interactive Logo
  const logo = document.getElementById('mammoth52-logo');
  const logoTooltip = document.getElementById('logo-tooltip');
  if (logo && logoTooltip) {
    logo.addEventListener('mouseenter', () => {
      logoTooltip.style.opacity = '1';
    });
    logo.addEventListener('mouseleave', () => {
      logoTooltip.style.opacity = '0';
    });
    logo.addEventListener('click', () => {
      logo.classList.add('spin');
      setTimeout(() => logo.classList.remove('spin'), 900);
    });
  }

  // Editable SVG Mammoth
  const mammothSVG = document.getElementById('editable-mammoth');
  const bodyColorInput = document.getElementById('mammoth-body-color');
  const earColorInput = document.getElementById('mammoth-ear-color');
  if (mammothSVG && bodyColorInput && earColorInput) {
    bodyColorInput.addEventListener('input', (e) => {
      // Body: 2nd ellipse, Legs: 3rd and 4th ellipse
      mammothSVG.children[1].setAttribute('fill', e.target.value);
      mammothSVG.children[2].setAttribute('fill', e.target.value);
      mammothSVG.children[3].setAttribute('fill', e.target.value);
    });
    earColorInput.addEventListener('input', (e) => {
      // Main body: 1st ellipse, Head: 10th ellipse
      mammothSVG.children[0].setAttribute('fill', e.target.value);
      mammothSVG.children[10].setAttribute('fill', e.target.value);
    });
  }

  // Editable Welcome Message
  const welcomeInput = document.getElementById('welcome-input');
  const saveWelcomeBtn = document.getElementById('save-welcome');
  if (welcomeInput && saveWelcomeBtn && inspireText) {
    saveWelcomeBtn.addEventListener('click', () => {
      inspireText.textContent = welcomeInput.value;
    });
    welcomeInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        inspireText.textContent = welcomeInput.value;
      }
    });
  }

  // (Removed countdown logic)

  // Floating Stars
  const starsContainer = document.querySelector('.floating-stars');
  if (starsContainer) {
    for (let i = 0; i < 32; i++) {
      const star = document.createElement('span');
      star.style.left = Math.random() * 100 + '%';
      star.style.top = (Math.random() * 100) + '%';
      star.style.animationDelay = (Math.random() * 12) + 's';
      star.style.width = star.style.height = (6 + Math.random() * 8) + 'px';
      starsContainer.appendChild(star);
    }
  }

  // Achievements Modal
  const achievementsBtn = document.getElementById('achievements-btn');
  const achievementsModal = document.getElementById('achievements-modal');
  const closeModal = document.querySelector('.close-modal');
  if (achievementsBtn && achievementsModal && closeModal) {
    achievementsBtn.addEventListener('click', () => {
      achievementsModal.classList.add('active');
    });
    closeModal.addEventListener('click', () => {
      achievementsModal.classList.remove('active');
    });
    achievementsModal.addEventListener('click', (e) => {
      if (e.target === achievementsModal) {
        achievementsModal.classList.remove('active');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        achievementsModal.classList.remove('active');
      }
    });
  }

  // Music toggle (placeholder)
  let musicPlaying = false;
  let audio = null;
  const musicToggle = document.getElementById('music-toggle');
  if (musicToggle) {
    musicToggle.addEventListener('click', () => {
      if (!audio) {
        audio = new Audio('assets/background-music.mp3');
        audio.loop = true;
      }
      if (musicPlaying) {
        audio.pause();
        musicPlaying = false;
        musicToggle.textContent = '🎵 Toggle Music';
      } else {
        audio.play();
        musicPlaying = true;
        musicToggle.textContent = '⏸️ Pause Music';
      }
    });
  }

  // Memory Wall Lightbox
  const gallery = document.querySelector('.memory-gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox .close');

  if (gallery && lightbox && lightboxImg && lightboxCaption && closeBtn) {
    gallery.addEventListener('click', (e) => {
      const card = e.target.closest('.memory-card');
      if (!card) return;
      const img = card.querySelector('img');
      const caption = card.querySelector('.memory-caption').textContent;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption;
      lightbox.classList.add('active');
    });
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      lightboxImg.src = '';
      lightboxCaption.textContent = '';
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
        lightboxCaption.textContent = '';
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
        lightboxCaption.textContent = '';
      }
    });
  }

  // Mammoth Wall Toggle
  const showMammothWallBtn = document.getElementById('show-mammoth-wall');
  const hideMammothWallBtn = document.getElementById('hide-mammoth-wall');
  const mammothWall = document.getElementById('mammoth-wall');
  if (showMammothWallBtn && hideMammothWallBtn && mammothWall) {
    showMammothWallBtn.addEventListener('click', () => {
      mammothWall.style.display = 'block';
      showMammothWallBtn.style.display = 'none';
    });
    hideMammothWallBtn.addEventListener('click', () => {
      mammothWall.style.display = 'none';
      showMammothWallBtn.style.display = 'inline-block';
    });
  }
});
