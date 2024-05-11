import menu from "./Menu/menu";
import bannerSlider from "./BannerSlider/bannerSlider";
import bestOfSwitcher from "./BestOfSwitcher/bestOfSwitcher";
import bestOfSeriesSlider from "./BestOfSeriesSlider/bestOfSeriesSlider";
import bestOfMoviesSlider from "./BestOfMoviesSlider/bestOfMoviesSlider";
import movieDetails from "./MovieDetails/movieDetails";
import episodes from "./Episodes/episodes";
import freeMovies from "./FreeMovies/freeMovies";
import tickets from "./OnlineCinemaTickets/tickets";
import comments from "./Comments/comments";
import faq from "./Faq/faq";


// All Swiper Sliders Scripts
const allSwipers = () => {
  // Banner Swiper
  var swiper = new Swiper(".bannerSlider", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
  // Banner Swiper!!

  // Best Of Top Swiper
  var swiper = new Swiper(".bestOfSwiper", {
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    breakpoints: {
      340: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });
  // Best Of Top Swiper!!

  // Best Of Bottom Episodes Swiper
  var swiper = new Swiper(".episodesSwiper", {
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  // Best Of Bottom Episodes Swiper!!

  // Free Movies Swiper
  var swiper = new Swiper(".freeMoviesSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 35,
      },
    },
  });
  // Free Movies Swiper!!

  // Comments Swiper
  var swiper = new Swiper(".commentsSwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  // Comments Swiper!!
};


// All JS Components Function
async function allComponent() {
  await menu();
  await bannerSlider();
  await bestOfSwitcher();
  await bestOfSeriesSlider();
  await bestOfMoviesSlider();
  await movieDetails();
  await episodes();
  await freeMovies();
  await tickets();
  await comments();
  await faq();
  allSwipers();
}

allComponent();
