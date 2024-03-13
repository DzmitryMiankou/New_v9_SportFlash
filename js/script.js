`use strict`;

window.addEventListener("load", function () {
  start();
});

const mainWrapper = document.querySelector(".main__wrapper");

/*
const sections = [...document.querySelectorAll("[scroll-el]")];
const text = [...document.querySelectorAll(".header-nav__link")];
const logoText = document.querySelector(".logo__text");
const header = document.querySelector(".header");
const rectLogo = document.querySelector(".logo__rect");
const homeArt = document.querySelector(".home-art");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const aside = document.querySelector(".aside");
const asideItems = document.querySelector(".aside-items");
const artItem = [...document.querySelectorAll(".artists-items__item")];
const HEADER_NAV = document.querySelector("." + "header-nav");
const HEADER_BLUER = document.querySelector(".header__bluer");
const whatDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
const whatEventUse = whatDevice ? "touchstart" : "click";
const SLIDER = document.querySelector("." + "reviews-slider__content");

const BUTTONS_SLIDERL = document.querySelector("#left");
const BUTTONS_SLIDERR = document.querySelector("#right");

let openW = false;
function openHeaderMenu(event) {
  if (event.target.closest("." + "header__button")) {
    openW = !openW;
    HEADER_NAV.classList.add("header-nav" + "--active");
    HEADER_BLUER.classList.add("header__bluer" + "--active");
  }
  if (
    event.target.closest(".header__bluer") ||
    event.target.closest(".header-nav__list")
  ) {
    openW = false;
    const timer = setTimeout(() => {
      HEADER_NAV.classList.remove("header-nav" + "--active");
      HEADER_BLUER.classList.remove("header__bluer" + "--active");
      HEADER_BLUER.classList.remove("header__bluer--clouse");
      HEADER_NAV.classList.remove("header-nav--clouse");
    }, 300);
    HEADER_BLUER.classList.add("header__bluer--clouse");
    HEADER_NAV.classList.add("header-nav--clouse");
    return () => clearTimeout(timer);
  }
}

function observeControl() {
  if (aside) {
    aside.style.height = main.offsetHeight - header.offsetHeight + "px";
    asideItems.style.height =
      main.offsetHeight - header.offsetHeight - 150 + "px";
  }
  if (homeArt) {
    const scrollRoot = homeArt.offsetHeight + header.offsetHeight;
    const options = {
      rootMargin: `${scrollRoot * -1}px 0px ${scrollRoot + 4}px 0px`,
      threshold: 0,
    };

    function handleIntersection(entries, options) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          text.forEach((e) => e.classList.add("header-nav__link--theme"));
          header.classList.add("header--theme");
          rectLogo.classList.add("logo__rect--theme");
          logoText.classList.add("logo__text--thema");
        }
        if (entry.isIntersecting) {
          text.forEach((e) => e.classList.remove("header-nav__link--theme"));
          header.classList.remove("header--theme");
          rectLogo.classList.remove("logo__rect--theme");
          logoText.classList.remove("logo__text--thema");
          homeArt.classList.remove("home-art--theme");
        }
      }, options);
    }

    const observer = new IntersectionObserver(handleIntersection, options);
    sections.forEach((section) => {
      observer.observe(section);
    });
  }
}

function focusController(el, className) {
  const addCass = (elem) => elem.forEach((st) => st.classList.add(className));
  const delCass = (elem) =>
    elem.forEach((st) => st.classList.remove(className));

  el.forEach((e) => {
    e.addEventListener("mousemove", () => addCass([e.children[0]]));
  });
  el.forEach((e) =>
    e.addEventListener("mouseout", () => delCass([e.children[0]]))
  );
}*/
const whatDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
const whatEventUse = whatDevice ? "touchstart" : "click";
const SLIDER = document.querySelector("." + "reviews-slider__content");
const buttonUp = document.querySelector("#up");
const BUTTONS_SLIDERL = document.querySelector("#left");
const BUTTONS_SLIDERR = document.querySelector("#right");

const formWrapper = document.querySelector(".form__wrapper");

const init = 320;
function onClickHandler() {
  if (!BUTTONS_SLIDERL || !BUTTONS_SLIDERR) return;
  BUTTONS_SLIDERL.addEventListener(
    whatEventUse,
    () => (SLIDER.scrollLeft += -init)
  );
  BUTTONS_SLIDERR.addEventListener(
    whatEventUse,
    () => (SLIDER.scrollLeft += init)
  );
}

function ubButtonController() {
  if (!buttonUp) return console.log("not buttonUp");
  const scr = (p) =>
    p > 20
      ? (buttonUp.style.display = "block")
      : (buttonUp.style.display = "none");

  buttonUp.addEventListener(whatEventUse, () => window.scrollTo(0, 0));
  window.addEventListener("scroll", () =>
    scr((window.scrollY / document.body.scrollHeight) * 100)
  );
}

function start() {
  if (mainWrapper || formWrapper) {
    mainWrapper.style.height = window.screen.availHeight - 60 + "px";
    formWrapper.style.height = window.screen.availHeight - 60 + "px";
  }

  onClickHandler();
  ubButtonController();

  /* window.addEventListener("resize", () => observeControl());
  observeControl();
  focusController(artItem, "artists-items__content--active");
  focusController([footer], "footer--theme");

  window.addEventListener(whatEventUse, (event) => {
    openHeaderMenu(event);
  });

  return () => window.addEventListener("resize", () => observeControl());*/
}
