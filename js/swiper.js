var swiper1 = new Swiper(".swiper", {
    renderProgressbar: function (progressbarFillClass) {
      return '<span class="' + progressbarFillClass + '"></span>';
    },
    // modules: [myPlugin],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "progressbar",
    },
    autoplay: {
      delay: 3000,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    debugger: true,
  });