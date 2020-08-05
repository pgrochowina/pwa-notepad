import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const notepad = document.querySelector(".notepad--js");
const load = document.querySelector(".load--js");
const save = document.querySelector(".save--js");
const entry = localStorage.getItem("myMemo");

if (entry) {
  notepad.value = localStorage.getItem("myMemo");
}


save.addEventListener("click", () => {
  localStorage.setItem("myMemo", notepad.value);
  //e.preventDefault(); //zapobiega odświeżaniu formularza, u mnie się to nie dzieje - nie wiem, dlaczego
});

load.addEventListener("click", () => {
  notepad.value = localStorage.getItem("myMemo");
  //e.preventDefault(); //zapobiega odświeżaniu formularza, u mnie się to nie dzieje - nie wiem, dlaczego
});
