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
  }

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
  
});