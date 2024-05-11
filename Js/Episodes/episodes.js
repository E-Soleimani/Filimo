const episodes=async()=>{
    try {
        let data=await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json");
        let res=await data.json();
        let slide=res.episodes.map((elem)=>{
            return `
            <div class="swiper-slide">
                    <a href="#" class="overflow-hidden rounded-xl text-right"
                      ><img
                        class="h-[75px] w-32 rounded-xl blur-sm desktop:h-40 desktop:w-72"
                        src="${elem.src}"
                        alt=""
                      />
                      <div
                        class="lock_badge absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-2/3 items-center justify-center rounded-[50%] bg-[rgba(0,0,0,.4)] backdrop-blur-[14px]"
                      >
                        <img class="w-6" src="./Icons/lock.svg" alt="" />
                      </div>
                      <span class="season ml-4 text-xs font-extrabold"
                        >فصل ${elem.season}</span
                      ><span class="episode text-xs font-extrabold"
                        >قسمت ${elem.episode}</span
                      ></a
                    >
                  </div>
            `
        })
        document.querySelector(".episodes .swiper-wrapper").insertAdjacentHTML("afterbegin",slide.join(""));
    } catch (error) {
        console.log(error.message);
    }
}

export default episodes;