/* =========================================================
   1. PROJECT CONTENT
   - key      must match data-project="..." in the HTML
   - shape    'phone' for tall app screenshots, 'wide' for
              desktop screenshots / designs / game scenes
   - images   { src, caption } — caption appears on hover
   ========================================================= */
var PROJECTS = {

  safeseiz: {
    kicker: 'Graduation Project',
    title: 'SafeSeiz — Seizure Detection & Prediction',
    desc: "SafeSeiz is an AI-powered mobile health system developed as my graduation project to help detect and predict epileptic seizures in real time. The system combines a smartwatch, a mobile application, and artificial intelligence to continuously monitor users, provide seizure insights, and automatically notify caregivers during emergencies with the user's live location. Designed with privacy and reliability in mind, SafeSeiz allows users to track seizure history, manage medications, and access personalized health summaries. This project brought together my skills in mobile development, artificial intelligence, UI/UX design, and cloud technologies to create a practical solution that can improve the safety and quality of life of people living with epilepsy.",
    tags: ['Machine Learning', 'Flutter', 'Wear OS', 'Supabase'],
    shape: 'phone',
    images: [
      { src: 'images/safeseiz/splash.png',        caption: 'Splash screen introducing SafeSeiz as a personal seizure management companion.' },
      { src: 'images/safeseiz/register.png',      caption: 'Account creation — step one of the three-part onboarding flow.' },
      { src: 'images/safeseiz/personal-info.png', caption: 'Personal information screen for profile and emergency contact details.' },
      { src: 'images/safeseiz/medical-info.png',  caption: 'Medical information screen recording seizure type and treatment history.' },
      { src: 'images/safeseiz/home.png',          caption: "Home dashboard with a seizure calendar, quick actions, and today's status." },
      { src: 'images/safeseiz/alert.png',         caption: 'Emergency SOS with a countdown, contacts notified, and live location sharing.' },
      { src: 'images/safeseiz/log.png',           caption: 'Seizure log capturing date, type, duration, and optional notes.' },
      { src: 'images/safeseiz/summary.png',       caption: 'Health summary with weekly frequency charts and average duration.' },
      { src: 'images/safeseiz/medication.png',    caption: 'Medication manager with reminders and daily adherence tracking.' }
    ]
  },

  parking: {
    kicker: 'UI/UX Case Study',
    title: 'ASC Smart Parking',
    desc: 'A mobile application designed in Figma for Alex Sporting Club, helping visitors find available spaces faster and navigate parking areas with less congestion. The design came out of a human-centered process of user research, prototyping, and usability testing.',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    shape: 'phone',
    images: [
      { src: 'images/parking/home.png',      caption: 'Home screen showing total available spots and a breakdown by parking zone.' },
      { src: 'images/parking/map.png',       caption: 'Live parking map with colour-coded availability across the club grounds.' },
      { src: 'images/parking/map-alert.png', caption: 'Spot detail sheet with walking time and distance to the selected space.' },
      { src: 'images/parking/profile.png',   caption: 'Profile screen with notification preferences, dark mode and account settings.' }
    ]
  },

  fitpal: {
    kicker: 'Desktop Application',
    title: 'FitPal — Fitness Tracking App',
    desc: 'A JavaFX desktop application with separate admin and user flows, covering login and sign-up, a BMI calculator, a daily info form, and management panels. Built with a focus on a clean, accessible interface throughout.',
    tags: ['Java', 'JavaFX', 'SceneBuilder'],
    shape: 'wide',
    images: [
      { src: 'images/fitpal/splash.png',    caption: 'Splash screen and app entry point.' },
      { src: 'images/fitpal/welcome.png',   caption: 'Welcome screen with login and sign-up options for users.' },
      { src: 'images/fitpal/log.png',       caption: 'Login form with input validation and error handling.' },
      { src: 'images/fitpal/bmi.png',       caption: 'BMI calculator returning a category and guidance based on the result.' },
      { src: 'images/fitpal/welcome-a.png', caption: 'Admin welcome screen separating the management flow from the user flow.' },
      { src: 'images/fitpal/admin.png',     caption: 'Admin dashboard for managing registered users and their records.' },
      { src: 'images/fitpal/admin-q.png',   caption: 'Admin query panel for searching and filtering user data.' },
      { src: 'images/fitpal/new-admin.png', caption: 'Form for adding a new administrator account to the system.' }
    ]
  },

  scribble: {
    kicker: 'Android Application',
    title: 'Scribble — Notes App',
    desc: 'A native Android notes application built in Kotlin, letting users create, edit, and organize notes through a clean and intuitive interface. Notes are stored locally so they stay available offline.',
    tags: ['Kotlin', 'Android', 'Room'],
    shape: 'phone',
    images: [
      { src: 'images/scribble/wel.png',  caption: 'Welcome screen introducing the app on first launch.' },
      { src: 'images/scribble/home.png', caption: 'Notes list with quick access to recent entries and note creation.' }
    ]
  },

  ogretek: {
    kicker: 'Design & Branding',
    title: 'Ogretek — Transportation Management System',
    desc: 'A complete design set for a safe ride-booking service for women, spanning the mobile app interface, logo and brand identity, advertising concepts, and feature ideas. The visual language was built to feel trustworthy and approachable.',
    tags: ['UI Design', 'Branding', 'Figma'],
    shape: 'wide',
    images: [
      { src: 'images/ogretek/logo.png',        caption: 'Logo and brand mark for the service.' },
      { src: 'images/ogretek/page-1.png',      caption: 'Advertising concept for the launch campaign.' },
      { src: 'images/ogretek/page-2.png',      caption: 'Feature overview highlighting the core service benefits.' },
      { src: 'images/ogretek/bus-station.png', caption: 'Bus station signage design.' },
      { src: 'images/ogretek/bus-arabic.png',  caption: 'Arabic version of the bus station signage.' }
    ]
  },

  wild: {
    kicker: 'Game Development',
    title: 'Into the Wild — 3D Unity Game',
    desc: 'A 3D collectible game built in Unity where players explore a handcrafted terrain gathering gems while managing health and lives. The project covers terrain design, collectible mechanics, and C# scripting for a complete game loop.',
    tags: ['C#', 'Unity', '3D'],
    shape: 'wide',
    images: [
      { src: 'images/wild/splash.png', caption: 'Title screen and main menu for the game.' },
      { src: 'images/wild/1.png',      caption: 'Gameplay view showing gem collection, health bar and remaining lives.' },
      { src: 'images/wild/pause.png',  caption: 'Pause menu with resume, restart and quit options.' },
      { src: 'images/wild/win.png',    caption: 'Win screen shown after all gems are collected.' },
      { src: 'images/wild/lose.png',   caption: 'Game-over screen closing the full game loop.' }
    ]
  }

};


/* =========================================================
   2. MOBILE MENU
   ========================================================= */
var btn = document.getElementById('menuBtn');
var links = document.getElementById('navLinks');

btn.addEventListener('click', function () {
  var open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

links.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
});


/* =========================================================
   3. PROJECT MODAL
   ========================================================= */
var modal       = document.getElementById('projectModal');
var closeBtn    = document.getElementById('modalClose');
var elKicker    = document.getElementById('modalKicker');
var elTitle     = document.getElementById('modalTitle');
var elDesc      = document.getElementById('modalDesc');
var elTags      = document.getElementById('modalTags');
var elGallery   = document.getElementById('modalGallery');
var elHint      = document.getElementById('galleryHint');
var lastFocused = null;

function buildGallery(project) {
  elGallery.innerHTML = '';
  elGallery.className = 'gallery' + (project.shape === 'phone' ? ' gallery-phone' : '');

  var images = project.images || [];

  if (!images.length) {
    elHint.style.display = 'none';
    var empty = document.createElement('p');
    empty.className = 'gallery-empty';
    empty.textContent = 'Images for this project are coming soon.';
    elGallery.appendChild(empty);
    return;
  }

  elHint.style.display = '';

  images.forEach(function (item) {
    var fig = document.createElement('figure');
    fig.className = 'gitem';
    fig.tabIndex = 0;

    var shot = document.createElement('div');
    shot.className = 'gshot';

    var img = document.createElement('img');
    img.src = item.src;
    img.alt = item.caption || project.title;
    img.loading = 'lazy';
    img.addEventListener('error', function () {
      shot.classList.add('broken');
      img.remove();
    });

    var cap = document.createElement('figcaption');
    cap.className = 'gcap';
    cap.textContent = item.caption || '';

    shot.appendChild(img);
    shot.appendChild(cap);
    fig.appendChild(shot);
    elGallery.appendChild(fig);
  });
}

function openModal(key) {
  var project = PROJECTS[key];
  if (!project) return;

  lastFocused = document.activeElement;

  elKicker.textContent = project.kicker || '';
  elTitle.textContent  = project.title || '';
  elDesc.textContent   = project.desc || '';

  elTags.innerHTML = '';
  (project.tags || []).forEach(function (t) {
    var span = document.createElement('span');
    span.className = 'tag';
    span.textContent = t;
    elTags.appendChild(span);
  });

  buildGallery(project);

  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.scrollTop = 0;
  closeBtn.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}

document.querySelectorAll('.project[data-project]').forEach(function (card) {
  card.addEventListener('click', function () {
    openModal(card.getAttribute('data-project'));
  });
  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      openModal(card.getAttribute('data-project'));
    }
  });
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', function (e) {
  if (e.target.hasAttribute('data-close')) closeModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
});

modal.addEventListener('keydown', function (e) {
  if (e.key !== 'Tab') return;
  var focusable = modal.querySelectorAll('button, [href], figure.gitem');
  if (!focusable.length) return;
  var first = focusable[0];
  var last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});