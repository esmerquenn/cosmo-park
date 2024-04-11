const carouselim = document.querySelector(".carouselim");
const carouselim2 = document.querySelector(".carouselim2");
const carouselim3 = document.querySelector(".carouselim3");
const h3 = document.querySelector(".h3");
const h32 = document.querySelector(".h32");
const h33 = document.querySelector(".h33");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  return { cat };
}
let dat = [];
document.addEventListener("DOMContentLoaded", () => {
  const { cat } = getQueryParams();
  if (cat) {
    num2.style.display = "none";
    num3.style.display = "none";
    const category = lazerGruplari.find((item) => item.gruptag == cat);
    h3.innerHTML = category.grupAdi;
    category.grupItem.forEach((item) => {
     
      carouselim.innerHTML += `<div onclick="goToDetailPage('${item.id}','${category.grupAdi}')" class=" cat-card">
      <img src="${item.mainImg}" alt="" />
      <div class="cat-card-p">
        <p>${category?.grupAdi}</p>
        <h5>${item.name}</h5>
      </div>
    </div>`;
    });
    
  } else {
    num2.style.display = "block";
    num3.style.display = "block";
    let name1 = lazerGruplari[0];
    h3.innerHTML = name1.grupAdi;
    name1.grupItem.forEach((item) => {
      carouselim.innerHTML += `<div onclick="goToDetailPage('${item.id}','${name1.grupAdi}')" class=" cat-card">
      <img src="${item.mainImg}" alt="" />
      <div class="cat-card-p">
        <p>${name1.grupAdi}</p>
        <h5>${item.name}</h5>
      </div>
    </div>`;
    });
    let name2 = lazerGruplari[1];
    h32.innerHTML = name2.grupAdi;
    name2.grupItem.forEach((item) => {
      carouselim2.innerHTML += `<div onclick="goToDetailPage('${item.id}','${name2.grupAdi}')" class=" cat-card">
      <img src="${item.mainImg}" alt="" />
      <div class="cat-card-p">
        <p>${name2.grupAdi}</p>
        <h5>${item.name}</h5>
      </div>
    </div>`;
    });
    let name3 = lazerGruplari[2];
    h33.innerHTML = name3.grupAdi;
    name3.grupItem.forEach((item) => {
      carouselim3.innerHTML += `<div onclick="goToDetailPage('${item.id}','${name3.grupAdi}')" class=" cat-card">
      <img src="${item.mainImg}" alt="" />
      <div class="cat-card-p">
        <p>${name3.grupAdi}</p>
        <h5>${item.name}</h5>
      </div>
    </div>`;
    });

   
  }
});
function goToDetailPage(id, grup) {
  window.location.href = `detail.html?id=${id}&grup=${grup}`;
}
