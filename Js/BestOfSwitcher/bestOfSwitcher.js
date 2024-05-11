const bestOfSwitcher = async () => {
  let movieBtn = document.querySelector(".best_of .movies_btn");
  let seriesBtn = document.querySelector(".best_of .series_btn");
  let series = document.querySelector(".best_of .series");
  let movies = document.querySelector(".best_of .movies");

  movieBtn.addEventListener("click", () => {
    movieBtn.classList.add("bg-[#313131]", "font-IS_m"),
      seriesBtn.classList.remove("bg-[#313131]", "font-IS_m"),
      series.classList.add("!hidden"),
      movies.classList.remove("!hidden");
  });
  seriesBtn.addEventListener("click", () => {
    movieBtn.classList.remove("bg-[#313131]", "font-IS_m"),
      seriesBtn.classList.add("bg-[#313131]", "font-IS_m"),
      series.classList.remove("!hidden"),
      movies.classList.add("!hidden");
  });
};

export default bestOfSwitcher;
