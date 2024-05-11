(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const l=async()=>{try{let s=(await(await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json")).json()).menu.map(e=>`
            <a href="${e.href}">
              <img class="inline-block h-6 w-6" 
              src="${e.src}" 
              alt="${e.alt}" 
              />
              <span
                class="text-xs text-[#e0e0e0] duration-200 hover:text-[#f9ad03]"
                >${e.title}</span
              >
            </a>
            `);document.querySelector(".navbar .nav_links").insertAdjacentHTML("afterbegin",s.join(""))}catch(t){console.log(t.message)}},n=async()=>{try{let s=(await(await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json")).json()).bannerSlider.map(e=>`
            <div class="swiper-slide">
              <img
                class="h-full w-full"
                src="${e.src}"
                alt="${e.alt}"
              />
            </div>
            `);document.querySelector(".banner_slider .swiper-wrapper").insertAdjacentHTML("afterbegin",s.join(""))}catch(t){console.log(t.message)}},c=async()=>{let t=document.querySelector(".best_of .movies_btn"),r=document.querySelector(".best_of .series_btn"),s=document.querySelector(".best_of .series"),e=document.querySelector(".best_of .movies");t.addEventListener("click",()=>{t.classList.add("bg-[#313131]","font-IS_m"),r.classList.remove("bg-[#313131]","font-IS_m"),s.classList.add("!hidden"),e.classList.remove("!hidden")}),r.addEventListener("click",()=>{t.classList.remove("bg-[#313131]","font-IS_m"),r.classList.add("bg-[#313131]","font-IS_m"),s.classList.remove("!hidden"),e.classList.add("!hidden")})},d=async()=>{try{let s=(await(await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json")).json()).bestOfSeriesSlider.map(e=>`
            <div class="swiper-slide group overflow-hidden">
                <a href="#" class="relative"
                  ><img
                    class="poster h-full w-[180px] rounded-xl brightness-[62%] duration-500 group-hover:brightness-100 tablet:w-[158px] desktop:w-[182px]"
                    src="${e.src}"
                    alt="${e.alt}" /><img
                    class="exculisive_tag absolute bottom-[5%] left-1/2 z-20 w-4/5 -translate-x-1/2"
                    src="https://www.filimo.com/assets/web/ui/img-s353mw9fPKUZk5CZ8mOShw/campaigns/welcome-new/exclusive-fa.svg"
                    alt="" />
                  <div
                    class="absolute right-0 top-0 z-10 h-full w-full rounded-xl shadow"
                    style="
                      background: linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0) 30.31%,
                        rgba(0, 0, 0, 0.85) 90.92%
                      );
                    "
                  ></div
                ></a>
              </div>
            `);document.querySelector(".best_of .series .swiper-wrapper").insertAdjacentHTML("afterbegin",s.join(""))}catch(t){console.log(t.message)}},p=async()=>{try{let s=(await(await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json")).json()).bestOfMoviesSlider.map(e=>`
            <div class="swiper-slide group overflow-hidden">
                <a href="#" class="relative"
                  ><img
                    class="poster h-full w-[180px] rounded-xl brightness-[62%] duration-500 group-hover:brightness-100 tablet:w-[158px] desktop:w-[182px]"
                    src="${e.src}"
                    alt="${e.alt}" /><img
                    class="exculisive_tag absolute bottom-[5%] left-1/2 z-20 w-4/5 -translate-x-1/2"
                    src="https://www.filimo.com/assets/web/ui/img-s353mw9fPKUZk5CZ8mOShw/campaigns/welcome-new/exclusive-fa.svg"
                    alt="" />
                  <div
                    class="absolute right-0 top-0 z-10 h-full w-full rounded-xl shadow"
                    style="
                      background: linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0) 30.31%,
                        rgba(0, 0, 0, 0.85) 90.92%
                      );
                    "
                  ></div
                ></a>
              </div>
            `);document.querySelector(".best_of .movies .swiper-wrapper").insertAdjacentHTML("afterbegin",s.join(""))}catch(t){console.log(t.message)}},u=async()=>{try{let s=(await(await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json")).json()).movieDetails.map(e=>`
            <a class="name mb-4 font-IS_m font-extrabold"
              ><h2 class="cursor-pointer">${e.name}</h2></a
            >
            <div class="director text-[10px] text-[#797878]">
              <h2>کارگردان: ${e.director}</h2>
            </div>
            <div class="genre">
              <span
                class="ml-2 rounded-xl bg-[#282828] px-[15px] py-1 text-[10px]"
                >${e.genre.genre1}</span
              ><span class="rounded-xl bg-[#282828] px-[15px] py-1 text-[10px]"
                >${e.genre.genre2}</span
              >
            </div>
            <div class="description text-xs">
              <p>
                ${e.description}
              </p>
            </div>
            <div class="logo absolute left-[2%] top-[2%] ">
            <img
              class="w-[220px]"
              src="${e.logo}"
              alt=""
            />
          </div>
           
            `);document.querySelector(".best_of .movie_details").insertAdjacentHTML("afterbegin",s.join(""))}catch(t){console.log(t.message)}},b=async()=>{try{let s=(await(await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json")).json()).episodes.map(e=>`
            <div class="swiper-slide">
                    <a href="#" class="overflow-hidden rounded-xl text-right"
                      ><img
                        class="h-[75px] w-32 rounded-xl blur-sm desktop:h-40 desktop:w-72"
                        src="${e.src}"
                        alt=""
                      />
                      <div
                        class="lock_badge absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-2/3 items-center justify-center rounded-[50%] bg-[rgba(0,0,0,.4)] backdrop-blur-[14px]"
                      >
                        <img class="w-6" src="./Icons/lock.svg" alt="" />
                      </div>
                      <span class="season ml-4 text-xs font-extrabold"
                        >فصل ${e.season}</span
                      ><span class="episode text-xs font-extrabold"
                        >قسمت ${e.episode}</span
                      ></a
                    >
                  </div>
            `);document.querySelector(".episodes .swiper-wrapper").insertAdjacentHTML("afterbegin",s.join(""))}catch(t){console.log(t.message)}},f=async()=>{try{let s=(await(await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json")).json()).freeMovies.map(e=>`
            <div class="swiper-slide flex-col overflow-hidden">
              <img
                class="mb-2 w-full cursor-pointer rounded-xl brightness-75"
                src="${e.src}"
                alt="${e.alt}"
              />
              <h3 class="w-full text-xs tablet:text-right">${e.name}</h3>
              <div
                class="free_badge absolute top-[2%] left-[2%] flex h-6 w-16 items-center justify-center gap-x-1 rounded-2xl bg-[#1d2b1f]"
              >
                <img src="./Icons/play-2.svg" alt="" /><span
                  class="text-[10px] text-[#43924b]"
                  >رایگان</span
                >
              </div>
            </div>
            `);document.querySelector(".free_movies .swiper-wrapper").insertAdjacentHTML("afterbegin",s.join(""))}catch(t){console.log(t.message)}},w=async()=>{try{let s=(await(await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json")).json()).tickets.map(e=>`
            <div
            class="ticket_box w-full rounded-xl border border-solid border-gray-800 bg-[rgba(255,255,255,.06)] p-[10px] shadow-[0_10px_36px_#00000040] backdrop-blur-[32px] desktop:basis-[48%]"
          >
            <div
              class="top relative flex items-start justify-start gap-x-6 tablet:items-stretch"
            >
              <img
                class="w-[100px] cursor-pointer rounded-lg tablet:w-[165px]"
                src="${e.src}"
                alt=""
              />
              <div
                class="details flex w-auto flex-col items-start justify-start gap-y-4 tablet:justify-between"
              >
                <div class="name cursor-pointer text-sm font-extrabold">
                    ${e.name}
                </div>
                <div class="director text-xs text-[#c8c5c6]">
                  کارگردان: ${e.director}
                </div>
                <div class="genre">
                <span class="rounded-2xl bg-[#1b0c0f] px-[10px] py-1 text-xs text-[#c8c5c6] ml-2">${e.genre.genre1}</span>
                <span class="rounded-2xl bg-[#1b0c0f] px-[10px] py-1 text-xs text-[#c8c5c6]">${e.genre.genre2}</span>
                </div>
                <div class="take_ticket_btn mt-2 hidden tablet:inline-block">
                  <a
                    href="#"
                    class="take_ticket inline-block w-full rounded-lg border border-solid border-white bg-transparent px-4 py-[10px] text-sm duration-200 hover:bg-[#151515]"
                    >خرید بلیت</a
                  >
                </div>
              </div>
              <div
                class="badge absolute left-[1%] top-[2%] flex items-center justify-center rounded-2xl bg-[#1b0c0f] px-1.5 py-1"
              >
                <img class="h-4 w-4" src="./Icons/ticket.svg" alt="" />
                <span class="text-[10px] text-white">اکران آنلاین</span>
              </div>
            </div>
            <div class="bottom mt-2 w-full tablet:hidden">
              <a
                href="#"
                class="take_ticket inline-block w-full rounded-lg border border-solid border-white bg-transparent px-4 py-[10px] text-sm duration-200 hover:bg-[#151515]"
                >خرید بلیت</a
              >
            </div>
          </div>
            `);document.querySelector(".online_cinema .tickets").insertAdjacentHTML("afterbegin",s.join(""))}catch(t){console.log(t.message)}},g=async()=>{try{let s=(await(await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json")).json()).comments.map(e=>`
            <div
              class="swiper-slide !h-[210px] flex-col !justify-start gap-y-6 rounded-xl border border-solid border-[#33353d] bg-[#ffffff05] p-6 shadow-[0_10px_36px_#00000040]"
            >
              <div class="details flex w-full justify-between">
                <div class="quotation">
                  <img
                    class="h-[34px] w-10"
                    src="./Icons/quotation.svg"
                    alt=""
                  />
                </div>
                <div class="user flex items-center justify-start gap-x-2">
                  <span class="username text-sm text-[#7d8287]">${e.username}</span>
                  <img
                    class="h-6 w-6"
                    src="./Icons/user.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="comment_text h-full w-full overflow-y-auto" dir="rtl">
                <p class="text-right text-xs text-[#f9f9f9]">
                ${e.comment}
                </p>
              </div>
            </div>
            `);document.querySelector(".comments .swiper-wrapper").insertAdjacentHTML("afterbegin",s.join(""))}catch(t){console.log(t.message)}},m=async()=>{try{let s=(await(await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json")).json()).faq.map(a=>`
      <div class="accordion w-full rounded-xl border border-solid border-[#33353d] bg-[#ffffff05] p-4 tablet:w-4/5 desktop:w-full">
      <div class="accordion_question  cursor-pointer flex justify-between items-center text-[10px] tablet:text-xs font-semibold leading-7 duration-500">
          <span>${a.question}</span>
          <svg
            class="block size-5 duration-200"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff9800"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
      </div>
      <div class="accordion_answer max-h-0 overflow-hidden pt-2 duration-500"><p class="text-[10px] tablet:text-xs  leading-6 text-[rgb(182_182_182)]">${a.answer}</p></div>
    </div>
        `);document.querySelector(".faq .accordion_container").insertAdjacentHTML("afterbegin",s.join("")),document.querySelectorAll(".accordion_container .accordion_question").forEach(a=>{a.addEventListener("click",()=>{a.classList.toggle("text-[#f4843f]"),a.nextElementSibling.classList.toggle("max-h-52"),a.children[1].classList.toggle("rotate-45")})})}catch(t){console.log(t.message)}},x=()=>{new Swiper(".bannerSlider",{spaceBetween:0,centeredSlides:!0,autoplay:{delay:4e3,disableOnInteraction:!1}}),new Swiper(".bestOfSwiper",{freeMode:!0,scrollbar:{el:".swiper-scrollbar",hide:!1},breakpoints:{340:{slidesPerView:2.5,spaceBetween:10},640:{slidesPerView:5,spaceBetween:20},1200:{slidesPerView:6,spaceBetween:30}}}),new Swiper(".episodesSwiper",{freeMode:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:4,spaceBetween:20},1200:{slidesPerView:4,spaceBetween:30}}}),new Swiper(".freeMoviesSwiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:2,spaceBetween:10},640:{slidesPerView:5,spaceBetween:15},1200:{slidesPerView:6,spaceBetween:35}}}),new Swiper(".commentsSwiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:10},640:{slidesPerView:3,spaceBetween:15},1200:{slidesPerView:3,spaceBetween:20}}})};async function h(){await l(),await n(),await c(),await d(),await p(),await u(),await b(),await f(),await w(),await g(),await m(),x()}h();
