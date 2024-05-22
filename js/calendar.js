import { eventos } from './eventos.js';

function updateCalendar() {
  console.log("Eventos " + eventos())

  for (const [key, value] of Object.entries(eventos())) {
      console.log(key, value);
      const para = document.createElement("p");
      para.innerText = value['data'] + " " + key;
      var el = document.getElementById("calendar") 
      el.appendChild(para);
    }
}