const btn_search = document.querySelector(".btn-search");
const search_box = document.querySelector(".search-box");
const menu = document.querySelector(".menu");
btn_search.onclick = function () {
  search_box.classList.toggle("width");
  menu.classList.toggle("pah");
};
document.addEventListener("click", function (e) {
  if (!search_box.contains(e.target) && e.target !== btn_search) {
    search_box.classList.remove("width");
    menu.classList.remove("pah");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".input-search");
  const resultsContainer = document.querySelector(".results-container");

  //   searchInput.addEventListener("keyup", () => {
  //     const searchText = searchInput.value.toLowerCase();
  //     resultsContainer.innerHTML = "";

  //     if (searchText) {
  //       resultsContainer.style.display = "block";

  //       const searchResults = lazerGruplari
  //         .flatMap((group) => group.grupItem)
  //         .filter((item) => item.name.toLowerCase().includes(searchText));

  //       if (searchResults.length > 0) {
  //         searchResults.forEach((item) => {
  //           let resultDiv = `<div class="result-item" onclick="findItem('${item.id}')">${item.name}</div>`;
  //           resultsContainer.innerHTML += resultDiv;
  //         });
  //       } else {
  //         resultsContainer.innerHTML = `<div class="result-item">Axtardığınız məhsul tapılmadı</div>`;
  //       }
  //     } else {
  //       resultsContainer.style.display = "none";
  //     }
  //   });

  searchInput.addEventListener("keyup", () => {
    const searchText = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = "";

    if (searchText) {
      resultsContainer.style.display = "block";

      //   const searchResults = lazerGruplari
      //     .flatMap((group) => group.grupItem.map((item) => ({ ...item, grupAdi: group.grupAdi })))
      //     .filter((item) => item.name.toLowerCase().includes(searchText));
      const searchResults = lazerGruplari.flatMap(
        (group) =>
          group.grupItem
            .filter((item) => item.name.toLowerCase().includes(searchText))
            .map((item) => ({ ...item, grupAdi: group.grupAdi })) // Grup bilgisi ekleniyor
      );

      if (searchResults.length > 0) {
        searchResults.forEach((item) => {
          let resultDiv = `<div class="result-item" onclick="findItem(${item.id}, '${item.grupAdi}')">${item.name}</div>`;
          resultsContainer.innerHTML += resultDiv;
        });
      } else {
        resultsContainer.innerHTML = `<div class="result-item">Axtardığınız məhsul tapılmadı</div>`;
      }
    } else {
      resultsContainer.style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target)) {
      resultsContainer.style.display = "none";
      searchInput.value = "";
    }
  });
});
function findItem(id, grup) {
    window.location.href = `detail.html?id=${id}&grup=${grup}`;
}
