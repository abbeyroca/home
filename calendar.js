var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
var now = new Date();
var events = {
    "Abbey Indie Fest": {
        data: "11/05/2024",
        descricao: "Abbey Indie Fest"
    },
    "Arraiabbey": {
        data: "08/06/2024",
        descricao: "Arraiabbey"
    },
    "Evento 2": {
        data: "20/07/2024",
        descricao: "Evento 2"
    },
}



for (e in events) {
    console.log(e)
    const para = document.createElement("p");
    para.innerText = e["data"] + " " + e;
    var el = document.getElementById("calendar") 
    el.appendChild(para);
}
