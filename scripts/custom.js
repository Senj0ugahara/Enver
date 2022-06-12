window.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 991) {
    const navList = document.querySelector('.nav__list');
    let navListDiv = document.createElement('div');
    let navListImage = document.createElement('img');
    let navListImageTitle = document.createElement('h3');

    navListDiv.classList.add('nav__list-logo');
    navListImage.src = 'images/logo.svg';
    navListImageTitle.classList.add('nav__list-title');
    navListImageTitle.innerHTML = 'Enver';

    navList.prepend(navListDiv);
    navListDiv.prepend(navListImage);
    navListDiv.append(navListImageTitle);
  } else {
    navList.remove(navListDiv);
  }

  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger').classList.toggle('header__burger_active');
    document.querySelector('.nav__list').classList.toggle('nav__list_active');
  });
});