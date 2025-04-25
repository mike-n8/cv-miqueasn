
let btnDes0 = document.querySelector("#breve-des-0");
let btnDes1 = document.querySelector(".breve-des-1");
let btnDes2 = document.querySelector(".breve-des-2");
let btnDes3 = document.querySelector(".breve-des-3");
let btnDes4 = document.querySelector(".breve-des-4");

function verParrafo() {
    if (btnDes0.style.display == "none") {
        btnDes0.style.display="block";
    } else {
        btnDes0.style.display="none";
    }
}

function verParrafo1() {
    if (btnDes1.style.display == "none") {
        btnDes1.style.display="block";
    } else {
        btnDes1.style.display="none";
    }
}

function verParrafo2() {
    if (btnDes2.style.display == "none") {
        btnDes2.style.display="block";
    } else {
        btnDes2.style.display="none";
    }
}

function verParrafo3() {
    if (btnDes3.style.display == "none") {
        btnDes3.style.display="block";
    } else {
        btnDes3.style.display="none";
    }
}

function verParrafo4() {
    if (btnDes4.style.display == "none") {
        btnDes4.style.display="block";
    } else {
        btnDes4.style.display="none";
    }
}

/* ***IMAGENES CERTIFICADO*** */

const fulImgBox = document.querySelector("#fulImgBox");
let fulImg = document.querySelector("#fulImg");

let PCertificado = document.querySelector("#certif1");
let SCertificado = document.querySelector("#certif2");
let TCertificado = document.querySelector("#certif3");
let CCertificado = document.querySelector("#certif4");
let QCertificado = document.querySelector("#certif5");

PCertificado.onclick = function () {
  fulImgBox.style.display = "block";
  fulImg.src = "./assets/pictures/certificado-se-programar.png";
}

SCertificado.onclick = function () {
  fulImgBox.style.display = "block";
  fulImg.src = "";
}

TCertificado.onclick = function () {
  fulImgBox.style.display = "block";
  fulImg.src = "./assets/pictures/certificado-digitalers.png";
}

CCertificado.onclick = function () {
  fulImgBox.style.display = "block";
  fulImg.src = "./assets/pictures/certificado-alura.png";
}

QCertificado.onclick = function () {
  fulImgBox.style.display = "block";
  fulImg.src = "./assets/pictures/certificado-ticmas.png";
}

// let todosBtn = document.querySelectorAll(".messi");
//let imgBtn = todosBtn[0].childNodes[1];


/*function openFulImg(reference) {
  fulImgBox.style.display = "block";
  fulImg.src = reference;
}*/

function closeImg() {
  fulImgBox.style.display = "none";
}


/* ***ESCRITURA EFECTO*** */

const typed = new Typed('.typed', {
  strings: [
    'Buenas!! Me presento, soy:',
    'Mucho gusto, me llamo:',
    'Un placer conocerte, mi nombre es:'
  ],

//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
typeSpeed: 75, // Velocidad en milisegundos para poner letra.
startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar.
backSpeed: 75, // Velocidad en milisegundos para borrar una letra.
smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
shuffle: false, // Alterar el orden en el que escribe las palabras.
backDelay: 3000, // Teimpo de espera despues de que termina de escribir una palabra.
loop: true, // Repetir el array de strings.
loopCount: false, // Cantidad de veces a repetir el array. false = infinite.
showCursor: true, // Mostrar cursor palpitando.
cursorChar: '|', // Caracter para el cursor.
contentType: 'html', // 'html' o 'null' para texto sin formato.
})