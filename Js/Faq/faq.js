const faq = async () => {
  try {
    let data = await fetch("https://e-soleimani.github.io/Filimo-JSON/db.json");
    let res = await data.json();
    let accordion = res.faq.map((elem) => {
      return `
      <div class="accordion w-full rounded-xl border border-solid border-[#33353d] bg-[#ffffff05] p-4 tablet:w-4/5 desktop:w-full">
      <div class="accordion_question  cursor-pointer flex justify-between items-center text-[10px] tablet:text-xs font-semibold leading-7 duration-500">
          <span>${elem.question}</span>
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
      <div class="accordion_answer max-h-0 overflow-hidden pt-2 duration-[800ms]"><p class="text-[10px] tablet:text-xs  leading-6 text-[rgb(182_182_182)]">${elem.answer}</p></div>
    </div>
        `;
    });
    document
      .querySelector(".faq .accordion_container")
      .insertAdjacentHTML("afterbegin", accordion.join(""));
      
      // Accordion Scripts
      let question=document.querySelectorAll(".accordion_container .accordion_question");
        question.forEach(question=>{
        question.addEventListener("click",()=>{
        question.classList.toggle("text-[#f4843f]")
        question.nextElementSibling.classList.toggle("max-h-52")
        question.children[1].classList.toggle("rotate-45")
    })
})
  } catch (error) {
    console.log(error.message);
  }
};

export default faq;
