// swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:
        {slidesPerView:1,
        spaceBetween: 10,
        },
        320:
        {slidesPerView:2,
        spaceBetween: 10,
        },
        510:{slidesPerView:2,
        spaceBetween: 10,
        },
        758:{slidesPerView:3,
        spaceBetween: 15,
        },
        900:{slidesPerView:4,
            spaceBetween: 20,
            },
        
        
    }
  });
  let playMovies=document.querySelector('.play-movies');
  let video=document.querySelector('.video-container');
  let myvideo=document.querySelector('#myvideo');
  let xmark=document.querySelector('.fa-xmark');
  playMovies.onclick=function(){
    video.classList.add('show-video');
    myvideo.play()
  }
xmark.onclick=function(){
    video.classList.remove('show-video');
    myvideo.pause()
  }
 