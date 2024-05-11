const menu=async()=>{
    try {
        let data=await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json");
        let res=await data.json();
        let navLinks=res.menu.map((elem)=>{
            return `
            <a href="${elem.href}">
              <img class="inline-block h-6 w-6" 
              src="${elem.src}" 
              alt="${elem.alt}" 
              />
              <span
                class="text-xs text-[#e0e0e0] duration-200 hover:text-[#f9ad03]"
                >${elem.title}</span
              >
            </a>
            `
        })
        document.querySelector(".navbar .nav_links").insertAdjacentHTML("afterbegin",navLinks.join(""));
    } 
    catch (error) {
        console.log(error.message);
    }
};

export default menu;

