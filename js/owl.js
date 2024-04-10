const cards = document.querySelector(".cards");
moreSellers.forEach((element) => {
  cards.innerHTML += `<div onclick="goToDetailPage('${element.id}','${element.grupAdi}')"  class="item card">
                      <img src="${element.mainImg}" alt="" />
                      <div class="card-p">
                        <h4>${element.name}</h4>
                        <a href="javascript:void(0);">Daha ətraflı</a>
                      </div>
                    </div>`;
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeOut: 2000,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },

    400: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1100: {
      items: 3,
    },
    1300: {
      items: 4,
    },
  },
});
