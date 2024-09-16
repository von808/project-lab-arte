document.addEventListener('DOMContentLoaded', () => {

  //============================================================HEADER-FIXED-START
  window.onscroll = function headerFixed() {
    let header = document.querySelector('.header');

    if (window.scrollY > 100) {
      header.classList.add('header-fixed');
    } else {
      header.classList.remove('header-fixed');
    }
  }
  //============================================================HEADER-FIXED-END

  //============================================================VARIETY-LOUPE-START
  Fancybox.bind('[data-fancybox]', {
    contentClick: "toggleCover",
    Images: {
      zoom: false,
      initialSize: "fit",
      Panzoom: {
        panMode: "mousemove",
        mouseMoveFactor: 1.1,
        mouseMoveFriction: 0.12,
      },
    },
  });

  const loupeBtn = document.querySelectorAll('.variety__info-loupe');

  loupeBtn.forEach((el) => {
    el.addEventListener('click', () => {
      el.closest('.variety__info-images').querySelector('.variety__gallery-link').click();
    })
  });

  //============================================================VARIETY-LOUPE-END

  //============================================================CATALOG-START
  const catalogBtn = document.querySelector('.catalog__btn')
  const catalogMenu = document.querySelector('.catalog__menu')

  function catalog() {
    catalogBtn.classList.toggle('catalog-active');
    catalogMenu.classList.toggle('catalog-active');
  }

  function catalogHidden() {
    catalogBtn.classList.remove('catalog-active');
    catalogMenu.classList.remove('catalog-active');
  }

  catalogBtn.onclick = function (e) {
    e.stopPropagation()
  }

  catalogMenu.onclick = function (e) {
    e.stopPropagation()
  }

  catalogBtn.addEventListener('click', catalog)

  document.body.addEventListener('click', catalogHidden)

  document.querySelectorAll('.search__btn').forEach((el) => {
    el.addEventListener('click', () => {
      catalogBtn.classList.remove('catalog-active');
      catalogMenu.classList.remove('catalog-active');
    })
  });
  //============================================================CATALOG-END

  //============================================================SEARCH-START
  const searchBtn = document.querySelectorAll('.search__btn')
  const searchBox = document.querySelector('.search__box')

  searchBox.onclick = function (e) {
    e.stopPropagation()
  }

  searchBtn.forEach((el) => {

    el.addEventListener('click', () => {
      el.classList.add('search-active');
      searchBox.classList.toggle('search-active');

      burgerBtn.classList.remove('burger-active');
      burgerMenu.classList.remove('burger-active');
    });

    el.onclick = function (e) {
      e.stopPropagation()
    }

    function searchHidden() {
      el.classList.remove('search-active');
      searchBox.classList.remove('search-active');
    }

    catalogBtn.addEventListener('click', searchHidden)

    document.body.addEventListener('click', searchHidden)
  });
  //============================================================SEARCH-END

  //============================================================BURGER-START
  const burgerBtn = document.querySelector('.burger__btn')
  const burgerMenu = document.querySelector('.burger__menu')

  function burger() {
    burgerBtn.classList.toggle('burger-active');
    burgerMenu.classList.toggle('burger-active');
  }

  function burgerHidden() {
    burgerBtn.classList.remove('burger-active');
    burgerMenu.classList.remove('burger-active');
  }

  burgerBtn.onclick = function (e) {
    e.stopPropagation()

    searchBtn.forEach((el) => {
      el.classList.remove('search-active');
      searchBox.classList.remove('search-active');
    });
  }

  burgerMenu.onclick = function (e) {
    e.stopPropagation()
  }

  burgerBtn.addEventListener('click', burger)

  document.body.addEventListener('click', burgerHidden)
  //============================================================BURGER-END

  //============================================================SMOOTH-SCROLL-START
  const anchors = document.querySelectorAll('.btn-up[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
  //============================================================SMOOTH-SCROLL-END

  //============================================================ACCARDION-START
  document.querySelectorAll('.catalog__accardion-head').forEach((el) => {
    el.addEventListener('click', () => {
      let content = el.nextElementSibling;

      if (content.style.maxHeight) {
        document.querySelectorAll('.catalog__accardion-content').forEach((el) => el.style.maxHeight = null)
        el.closest('.catalog__accardion').classList.remove('accardion-show');
      } else {
        document.querySelectorAll('.catalog__accardion-content').forEach((el) => el.style.maxHeight = null)
        content.style.maxHeight = content.scrollHeight + 'px';
        el.closest('.catalog__accardion').classList.add('accardion-show');
      }
    })
  });
  //============================================================ACCARDION-END
  //============================================================SWIPER-START
  var swiper = new Swiper(".intro__swiper", {
    a11y: false,
    slidesPerView: 1,
    spaceBetween: 40,
    effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.intro-swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  });

  var swiper = new Swiper(".category__swiper", {
    a11y: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      768: {
        spaceBetween: 40,
      },
    },
  });

  var swiper = new Swiper(".card__swiper", {
    a11y: false,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
    thumbs: {
      swiper: {
        el: '.card__swiper-thumbs',
        slidesPerView: 'auto',
        spaceBetween: 15,
      }
    }
  });

  var swiper = new Swiper(".analogs__swiper", {
    a11y: false,
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".additionally__swiper", {
    a11y: false,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  //============================================================SWIPER-END

  //============================================================TAB-START
  const tabBtn = document.querySelectorAll('.tab-btn')
  const tabItem = document.querySelectorAll('.tab-item')

  tabBtn.forEach(tabClick);

  function tabClick(item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('tab-active')) {

        tabBtn.forEach(function (item) {
          item.classList.remove('tab-active');
        });

        tabItem.forEach(function (item) {
          item.classList.remove('tab-active');
        });

        currentBtn.classList.add('tab-active');
        currentTab.classList.add('tab-active');
      }
    })
  }
  //============================================================TAB-END

  //============================================================DROPDOWN-START
  // Полифилл для метода forEach для NodeList
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener('click', function (e) {
      dropDownList.classList.toggle('dropdown__list--visible');
      this.classList.add('dropdown__button--active');
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible');
      });
    });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
      }
    });
  });
  //============================================================DROPDOWN-END

  //============================================================CONTACTS-TAB-START
  const tabBtnC = document.querySelectorAll('.tab-btn')
  const tabItemC = document.querySelectorAll('.tab-item')

  tabBtnC.forEach(tabClick);

  function tabClick(item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelectorAll(tabId);

      currentTab.forEach((el) => {
        if (!currentBtn.classList.contains('tab-active')) {

          tabBtnC.forEach(function (item) {
            item.classList.remove('tab-active');
          });

          tabItemC.forEach(function (item) {
            item.classList.remove('tab-active');
          });

          currentBtn.classList.add('tab-active');
        }
        el.classList.add('tab-active');
      })
    })
  }
  //============================================================CONTACTS-TAB-END

  //============================================================MAP-START
  const map = document.querySelector('.contacts__maps');

  if (map) {
    function init1() {
      let map = new ymaps.Map('contacts-map-1', {
        center: [55.722911, 37.617000],
        zoom: 14,
      });

      let placemark1 = new ymaps.Placemark([55.727094, 37.609925], {
        balloonContent: `

      <div class="city__item">
        <h3 class="city__item-title">НАЗВАНИЕ САЛОНА</h3>
        <ul class="city__item-list">
          <li>Страна: Lorem Ipsum</li>
          <li>Город: Lorem Ipsum</li>
          <li>Адрес: Lorem Ipsum lorem Ipsum</li>
          <li>Email: Lorem Ipsum</li>
          <li>Телефон: Lorem Ipsum</li>
        </ul>
        <button class="btn">ЗАЯВКА</button>
      </div>

      `
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/marker.svg',
        iconImageSize: [50, 67],
        iconImageOffset: [-40, 0],
      });
      let placemark2 = new ymaps.Placemark([55.729349, 37.631469], {
        balloonContent: `

      <div class="city__item">
        <h3 class="city__item-title">НАЗВАНИЕ САЛОНА</h3>
        <ul class="city__item-list">
          <li>Страна: Lorem Ipsum</li>
          <li>Город: Lorem Ipsum</li>
          <li>Адрес: Lorem Ipsum lorem Ipsum</li>
          <li>Email: Lorem Ipsum</li>
          <li>Телефон: Lorem Ipsum</li>
        </ul>
        <button class="btn">ЗАЯВКА</button>
      </div>

      `
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/marker.svg',
        iconImageSize: [50, 67],
        iconImageOffset: [-20, -70],
      });
      let placemark3 = new ymaps.Placemark([55.714425, 37.602061], {
        balloonContent: `

      <div class="city__item">
        <h3 class="city__item-title">НАЗВАНИЕ САЛОНА</h3>
        <ul class="city__item-list">
          <li>Страна: Lorem Ipsum</li>
          <li>Город: Lorem Ipsum</li>
          <li>Адрес: Lorem Ipsum lorem Ipsum</li>
          <li>Email: Lorem Ipsum</li>
          <li>Телефон: Lorem Ipsum</li>
        </ul>
        <button class="btn">ЗАЯВКА</button>
      </div>

      `
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/marker.svg',
        iconImageSize: [50, 67],
        iconImageOffset: [-20, -70],
      });

      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

      map.geoObjects.add(placemark1);
      map.geoObjects.add(placemark2);
      map.geoObjects.add(placemark3);
    }
    function init2() {
      let map = new ymaps.Map('contacts-map-2', {
        center: [55.722911, 37.617000],
        zoom: 14,
      });

      let placemark1 = new ymaps.Placemark([55.727094, 37.609925], {
        balloonContent: `

      <div class="city__item">
        <h3 class="city__item-title">НАЗВАНИЕ САЛОНА</h3>
        <ul class="city__item-list">
          <li>Страна: Lorem Ipsum</li>
          <li>Город: Lorem Ipsum</li>
          <li>Адрес: Lorem Ipsum lorem Ipsum</li>
          <li>Email: Lorem Ipsum</li>
          <li>Телефон: Lorem Ipsum</li>
        </ul>
        <button class="btn">ЗАЯВКА</button>
      </div>

      `
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/marker.svg',
        iconImageSize: [50, 67],
        iconImageOffset: [-40, 0],
      });
      let placemark2 = new ymaps.Placemark([55.729349, 37.631469], {
        balloonContent: `

      <div class="city__item">
        <h3 class="city__item-title">НАЗВАНИЕ САЛОНА</h3>
        <ul class="city__item-list">
          <li>Страна: Lorem Ipsum</li>
          <li>Город: Lorem Ipsum</li>
          <li>Адрес: Lorem Ipsum lorem Ipsum</li>
          <li>Email: Lorem Ipsum</li>
          <li>Телефон: Lorem Ipsum</li>
        </ul>
        <button class="btn">ЗАЯВКА</button>
      </div>

      `
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/marker.svg',
        iconImageSize: [50, 67],
        iconImageOffset: [-20, -70],
      });

      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

      map.geoObjects.add(placemark1);
      map.geoObjects.add(placemark2);
    }

    ymaps.ready(init1);
    ymaps.ready(init2);
  }
  //============================================================MAP-END

});