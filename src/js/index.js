import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const notepad = document.querySelector(".notepad--js");
const copy = document.querySelector(".copy--js")
const load = document.querySelector(".load--js");
const save = document.querySelector(".save--js");
const entry = localStorage.getItem("myMemo");

if (entry) {
  notepad.value = localStorage.getItem("myMemo");
}


save.addEventListener("click", () => {
  localStorage.setItem("myMemo", notepad.value);
  e.preventDefault(); //zapobiega odświeżaniu formularza
});

load.addEventListener("click", () => {
  notepad.value = localStorage.getItem("myMemo");
  //e.preventDefault(); //zapobiega odświeżaniu formularza
});

copy.addEventListener("click", () => {
  notepad.select();
  document.execCommand('copy');
  //e.preventDefault(); //zapobiega odświeżaniu formularza
});

//tryb jasny-ciemny

let isDark = false;

const viewMode = document.querySelector(".button__toggle--js");
const mainHeader = document.querySelector(".header--js");

viewMode.addEventListener("click", () => {
  if (isDark == false) {
    document.documentElement.style.setProperty("--primary-color", "#282c35");
    document.documentElement.style.setProperty("--secondary-color", "#ffa7c4");
    isDark = true;
    console.log(`zmieniono tryb na ciemny, wartość isDark = ${isDark}`);
  } else if (isDark == true) {
    document.documentElement.style.setProperty("--primary-color", "white");
    document.documentElement.style.setProperty("--secondary-color", "#d23669");
    isDark = false;
    console.log(`zmieniono tryb na jasny, wartość isDark = ${isDark}`);
  }
});
