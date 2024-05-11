const bannerSlider=async()=>{
    try {
        let data=await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json");
        let res=await data.json();
        let slide=res.bannerSlider.map((elem)=>{
            return `
            <div class="swiper-slide">
              <img
                class="h-full w-full"
                src="${elem.src}"
                alt="${elem.alt}"
              />
            </div>
            `
        })
        document.querySelector(".banner_slider .swiper-wrapper").insertAdjacentHTML("afterbegin",slide.join(""));
    } catch (error) {
        console.log(error.message);
    }
}

export default bannerSlider;