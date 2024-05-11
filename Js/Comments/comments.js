const comments=async()=>{
    try {
        let data=await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json");
        let res=await data.json();
        let slide=res.comments.map((elem)=>{
            return `
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
                  <span class="username text-sm text-[#7d8287]">${elem.username}</span>
                  <img
                    class="h-6 w-6"
                    src="./Icons/user.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="comment_text h-full w-full overflow-y-auto" dir="rtl">
                <p class="text-right text-xs text-[#f9f9f9]">
                ${elem.comment}
                </p>
              </div>
            </div>
            `
        })
        document.querySelector(".comments .swiper-wrapper").insertAdjacentHTML("afterbegin",slide.join(""));
    } catch (error) {
        console.log(error.message);
    }
}

export default comments;