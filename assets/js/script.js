let navLinks = document.querySelectorAll('a.inner-link');

navLinks.forEach((item) => {
  item.addEventListener('click', function () {
    console.log(item);
    document.querySelector('nav ul li a.active').classList.remove('active');
    document
      .querySelector(`nav ul li a[href='${item.getAttribute('href')}']`)
      .classList.add('active');
    document.querySelector('main > section.active').classList.remove('active');
    document
      .querySelector(`main > section${item.getAttribute('href')}`)
      .classList.add('active');
  });
});

// Add an event listener to the toggle button to open/close the sidebar
document
  .querySelector('#sidebar .toggle-sidebar')
  .addEventListener('click', function (event) {
    document.querySelector('#sidebar').classList.toggle('open');
    event.stopPropagation(); // Prevents the click from propagating to the document
  });

// Add an event listener to the document to close the sidebar when clicking outside
document.addEventListener('click', function (event) {
  const sidebar = document.querySelector('#sidebar');
  if (sidebar.classList.contains('open') && !sidebar.contains(event.target)) {
    sidebar.classList.remove('open');
  }
});

// Prevent clicks within the sidebar from closing it
document.querySelector('#sidebar').addEventListener('click', function (event) {
  event.stopPropagation();
});
var options = {
  strings: [
    'Front-End web developer',
    'User Experience Designer',
    'Web designer',
  ],
  loop: true,
  typeSpeed: 70,
  backSpeed: 10,
};

new Typed('.field h2', options);

for (let i = 1; i <= 15; i++) {
  let meteor = document.createElement('span');
  meteor.classList = 'meteor';
  document.querySelector('#home .meteor-shower').append(meteor);
}

const shuffleInstance = new Shuffle(
  document.querySelector('#my_work .work-items'),
  {
    itemSelector: '.item',
  }
);

const filterButtons = document.querySelectorAll('#my_work .filters button');

filterButtons.forEach((item) => {
  item.addEventListener('click', workFilter);
});

function workFilter() {
  const clickedButton = event.currentTarget;
  const clickedButtonGroup = clickedButton.getAttribute('data-group');
  const activeButton = document.querySelector(
    '#my_work .filters button.active'
  );

  activeButton.classList.remove('active');
  clickedButton.classList.add('active');

  shuffleInstance.filter(clickedButtonGroup);
}

var workModal = new bootstrap.Modal(document.getElementById('workModal'));
const workElements = document.querySelectorAll('#my_work .work-items .wrap');

workElements.forEach((item) => {
  item.addEventListener('click', function () {
    document
      .querySelector('#workModal .modal-body img')
      .setAttribute('src', item.getAttribute('data-image'));
    document.querySelector('#workModal .modal-body .title').innerText =
      item.getAttribute('data-title');
    document.querySelector('#workModal .modal-body .description').innerText =
      item.getAttribute('data-description');
    document.querySelector('#workModal .modal-body .client .value').innerText =
      item.getAttribute('data-client');
    document.querySelector(
      '#workModal .modal-body .completed .value'
    ).innerText = item.getAttribute('data-completed');
    document.querySelector('#workModal .modal-body .skills .value').innerText =
      item.getAttribute('data-skills');
    document
      .querySelector('#workModal .modal-body .project-link a')
      .setAttribute('href', item.getAttribute('data-project-link'));

    workModal.show();
  });
});

var workModalElement = document.getElementById('workModal');
workModalElement.addEventListener('show.bs.modal', function (event) {
  document.getElementById('my_work').classList.add('blur');
  document.getElementById('sidebar').classList.add('blur');
});

workModalElement.addEventListener('hide.bs.modal', function (event) {
  document.getElementById('my_work').classList.remove('blur');
  document.getElementById('sidebar').classList.remove('blur');
});

let testimonialImages = document.querySelectorAll('#testimonial .images img');

testimonialImages.forEach((item, index) => {
  let position = index + 1;

  item.addEventListener('click', function () {
    document
      .querySelector('#testimonial .images img.active')
      .classList.remove('active');
    document
      .querySelector(`#testimonial .images img:nth-child(${position})`)
      .classList.add('active');

    document
      .querySelector('#testimonial .comments .item.active')
      .classList.remove('active');
    document
      .querySelector(`#testimonial .comments .item:nth-child(${position})`)
      .classList.add('active');
  });
});

let contactFromItems = document.querySelectorAll(
  '#contact_me .form input, #contact_me .form textarea'
);

contactFromItems.forEach((item) => {
  item.addEventListener('focus', function () {
    item.parentElement.classList.add('focus');
  });

  item.addEventListener('blur', function () {
    if (!item.value) {
      item.parentElement.classList.remove('focus');
    }
  });
});

function toggleMode() {
  let theme = document.querySelector('html').getAttribute('theme');

  if (theme == 'dark') {
    theme = 'light';
    new Audio('./assets/audio/light.wav').play();
  } else {
    theme = 'dark';
    new Audio('./assets/audio/dark.wav').play();
  }

  document.querySelector('html').setAttribute('theme', theme);
}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

// This function retrieves the current theme and updates the color based on the theme
function getThemeColor() {
  let theme = document.querySelector('html').getAttribute('theme');
  return theme === 'dark' ? 'rgb(246,246,246)' : '#E9EFFF'; // Returns 'white' if 'dark' theme, 'blue' if 'light'
}

// Apply initial color based on the theme
let color = getThemeColor();

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = color; // Set initial background color
});

window.addEventListener('mousemove', function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  // Update color in case theme changes during interaction
  color = getThemeColor();

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + 'px';
    circle.style.top = y - 12 + 'px';
    circle.style.backgroundColor = color; // Update the background color on every frame
    circle.style.transform = `scale(${
      (circles.length - index) / circles.length
    })`;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
