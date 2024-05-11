const bestOfMoviesSlider=async()=>{
    try {
        let data=await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json");
        let res=await data.json();
        let slide=res.bestOfMoviesSlider.map((elem)=>{
            return `
            <div class="swiper-slide group overflow-hidden">
                <a href="#" class="relative"
                  ><img
                    class="poster h-full w-[180px] rounded-xl brightness-[62%] duration-500 group-hover:brightness-100 tablet:w-[158px] desktop:w-[182px]"
                    src="${elem.src}"
                    alt="${elem.alt}" /><img
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
            `
        })
        document.querySelector(".best_of .movies .swiper-wrapper").insertAdjacentHTML("afterbegin",slide.join(""));
    } catch (error) {
        console.log(error.message);
    }
}

export default bestOfMoviesSlider;