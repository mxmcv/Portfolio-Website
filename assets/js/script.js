let navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((item) => {
  item.addEventListener('click', function () {
    document.querySelector('nav ul li a.active').classList.remove('active');
    item.classList.add('active');
    document
      .querySelector(`nav li a[href='${item.getAttribute('href')}']`)
      .classList.remove('active');
    document.querySelector('main > section.active').classList.remove('active');
    document
      .querySelector(`main > section${item.getAttribute('href')}`)
      .classList.add('active');
  });
});

document
  .querySelector('#sidebar .toggle-sidebar')
  .addEventListener('click', function () {
    document.querySelector('#sidebar').classList.toggle('open');
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
