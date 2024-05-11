const movieDetails=async()=>{
    try {
        let data=await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json");
        let res=await data.json();
        let detail=res.movieDetails.map((elem)=>{
            return `
            <a class="name mb-4 font-IS_m font-extrabold"
              ><h2 class="cursor-pointer">${elem.name}</h2></a
            >
            <div class="director text-[10px] text-[#797878]">
              <h2>کارگردان: ${elem.director}</h2>
            </div>
            <div class="genre">
              <span
                class="ml-2 rounded-xl bg-[#282828] px-[15px] py-1 text-[10px]"
                >${elem.genre.genre1}</span
              ><span class="rounded-xl bg-[#282828] px-[15px] py-1 text-[10px]"
                >${elem.genre.genre2}</span
              >
            </div>
            <div class="description text-xs">
              <p>
                ${elem.description}
              </p>
            </div>
            <div class="logo absolute left-[2%] top-[2%] ">
            <img
              class="w-[220px]"
              src="${elem.logo}"
              alt=""
            />
          </div>
           
            `
        })
        document.querySelector(".best_of .movie_details").insertAdjacentHTML("afterbegin",detail.join(""));
    } catch (error) {
        console.log(error.message);
    }
}

export default movieDetails;