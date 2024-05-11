const tickets=async()=>{
    try {
        let data=await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json");
        let res=await data.json();
        let ticket=res.tickets.map((elem)=>{
            return `
            <div
            class="ticket_box w-full rounded-xl border border-solid border-gray-800 bg-[rgba(255,255,255,.06)] p-[10px] shadow-[0_10px_36px_#00000040] backdrop-blur-[32px] desktop:basis-[48%]"
          >
            <div
              class="top relative flex items-start justify-start gap-x-6 tablet:items-stretch"
            >
              <img
                class="w-[100px] cursor-pointer rounded-lg tablet:w-[165px]"
                src="${elem.src}"
                alt=""
              />
              <div
                class="details flex w-auto flex-col items-start justify-start gap-y-4 tablet:justify-between"
              >
                <div class="name cursor-pointer text-sm font-extrabold">
                    ${elem.name}
                </div>
                <div class="director text-xs text-[#c8c5c6]">
                  کارگردان: ${elem.director}
                </div>
                <div class="genre">
                <span class="rounded-2xl bg-[#1b0c0f] px-[10px] py-1 text-xs text-[#c8c5c6] ml-2">${elem.genre.genre1}</span>
                <span class="rounded-2xl bg-[#1b0c0f] px-[10px] py-1 text-xs text-[#c8c5c6]">${elem.genre.genre2}</span>
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
            `
        })
        document.querySelector(".online_cinema .tickets").insertAdjacentHTML("afterbegin",ticket.join(""));
    } catch (error) {
        console.log(error.message);
    }
}

export default tickets;