window.addEventListener('DOMContentLoaded', function() {
  // header adaptive image
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
  }

  // burger 
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger').classList.toggle('header__burger_active');
    document.querySelector('.nav__list').classList.toggle('nav__list_active');
  });


  // Smooth scroll
  document.querySelectorAll('a[href^="#"').forEach(link => {
    
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.nav__link').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
  });

  // main-video custom button "play"
  const video = document.querySelector('.video-block__content');
  const playButton = document.querySelector('.video-block__play');

  // Event listener for the play/pause button
  playButton.addEventListener('click', function() {
    if (video.paused == true) {
      video.play();
      playButton.classList.add('video-block__play_active');
    } else {
      video.pause();
      playButton.classList.remove('video-block__play_active');
    }
  });
  
  // service mobile adaptive
  const serviceTitle = document.querySelector('.service__title');
  if (window.innerWidth <= 991) {
    serviceTitle.innerHTML = 'The Service&nbsp;We Provide For You';
  }
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 24,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
});