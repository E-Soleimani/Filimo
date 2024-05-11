const freeMovies=async()=>{
    try {
        let data=await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json");
        let res=await data.json();
        let slide=res.freeMovies.map((elem)=>{
            return `
            <div class="swiper-slide flex-col overflow-hidden">
              <img
                class="mb-2 w-full cursor-pointer rounded-xl brightness-75"
                src="${elem.src}"
                alt="${elem.alt}"
              />
              <h3 class="w-full text-xs tablet:text-right">${elem.name}</h3>
              <div
                class="free_badge absolute top-[2%] left-[2%] flex h-6 w-16 items-center justify-center gap-x-1 rounded-2xl bg-[#1d2b1f]"
              >
                <img src="./Icons/play-2.svg" alt="" /><span
                  class="text-[10px] text-[#43924b]"
                  >رایگان</span
                >
              </div>
            </div>
            `
        })
        document.querySelector(".free_movies .swiper-wrapper").insertAdjacentHTML("afterbegin",slide.join(""));
    } catch (error) {
        console.log(error.message);
    }
}

export default freeMovies;