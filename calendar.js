var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
var now = new Date();
var events = {
    'Abbey Indie Fest': {
        data: '11/05/2024',
        descricao: 'Abbey Indie Fest'
    },
    'Arraiabbey': {
        data: '08/06/2024',
        descricao: 'Arraiabbey'
    },
    'Evento 2': {
        data: '20/07/2024',
        descricao: 'Evento 2'
    },
}

for (const [key, value] of Object.entries(events)) {
    console.log(key, value);
    const para = document.createElement("p");
    para.innerText = value['data'] + " " + key;
    var el = document.getElementById("calendar") 
    el.appendChild(para);
  }
