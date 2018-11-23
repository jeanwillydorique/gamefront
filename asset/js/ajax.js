
const play = document.querySelector('.play');
const pseudo = document.querySelector('.pseudo');
const body = document.querySelector('body');
const screen = document.querySelector('.screen'); 
const pierre = document.querySelector('.pierre');
const papier = document.querySelector('.papier');
const ciseaux = document.querySelector('.ciseaux');
const button = document.querySelector('.button');



// play.addEventListener('click', () => {
//     if ( pseudo.value !== "") {
//         const playerName = pseudo.value;
//         pseudo.value = "";
//         // http://192.168.33.10:8080/
//         // On fait la requete
//         let xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           if (this.readyState == 4 && this.status == 200) {
//             debugger;
//           }
//         };
//         xhttp.open("GET", "http://192.168.33.10:8080/", true);
//         xhttp.send();
//     }
// })


button.addEventListener('click', (el) => {
    screen.innerHTML = "";
    const element = el.target;
    if ( element.value == "papier" || element.value == "ciseaux" || element.value == "pierre") {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            screen.innerHTML = this.responseText; 
          }
        };
        xhttp.open("GET", "http://192.168.33.10:8080/move/" + element.value, true);
        xhttp.send();
    }
})

