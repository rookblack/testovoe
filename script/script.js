const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  autoplay: {
   delay: 4000,
  },
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    320: {
    slidesPerView: 1,
    spaceBetween: 0
    },
  
    576: {
    slidesPerView: 2,
    spaceBetween: 15
    },
    880: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  
}
});

const butPrev = document.querySelector('.prevBut');
const butNext = document.querySelector('.nextBut');
const slide = document.querySelector('.stagesSlider');
const svgPrev = document.querySelector('.prevButSvg');
const svgNext = document.querySelector('.nextButSvg');
const slideWrapper = document.querySelector('.stagesSliderPagination');
const slides = Array.from(slideWrapper.querySelectorAll('span'));

let i = 0
let x = 0;

function nextSlide(event) {
  x = x + 1;
  if (i == -1005) {
    svgNext.style.fillOpacity = '0.2'
  }

  slides[x].style.background = '#313131'
  slides[x-1].style.background = '#D9D9D9'

  if (i == -1340) {
    
    slide.style.transform = 'translateX(-1340px)';
    
  }
   else {
    i = i - 335
    slide.style.transform = `translateX(${i}px)`;
  
}

svgPrev.style.fillOpacity = '1'
}

function prevSlide(event) {
  x = x - 1;
  slides[x].style.background = '#313131'
  slides[x+1].style.background = '#D9D9D9'
   if (i == -335) {
    svgPrev.style.fillOpacity = '0.2'
    svgNext.style.fillOpacity = '1'
  }
    if (i == 0) {
    slide.style.transform = 'translateX(0px)';
    
  }
   else {
    i = i + 335
    slide.style.transform = `translateX(${i}px)`;  
}
  
}

butNext.addEventListener('click', nextSlide)
butPrev.addEventListener('click', prevSlide)