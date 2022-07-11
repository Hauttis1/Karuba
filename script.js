// ELEMENTIT

const peliContainer = document.getElementById("peli");

const lautaEl = document.querySelector(".pelilauta");
const nappulat = document.querySelectorAll(".nappula");
const ukot = document.querySelectorAll(".ukko");
const maalit = document.querySelectorAll(".maali");

const ukkoSininen = document.querySelector(".sininenukko");
const ukkoOranssi = document.querySelector(".oranssiukko");
const ukkoVioletti = document.querySelector(".violettiukko");
const ukkoRuskea = document.querySelector(".ruskeaukko");

const maaliSininen = document.querySelector(".sininenmaali");
const maaliOranssi = document.querySelector(".oranssimaali");
const maaliVioletti = document.querySelector(".violettimaali");
const maaliRuskea = document.querySelector(".ruskeamaali");

// Aloituspaikat

let sininenUkkoAloitus = 10;
let oranssiUkkoAloitus = 20;
let violettiUkkoAloitus = 30;
let ruskeaUkkoAloitus = 40;

let sininenMaaliAloitus = 10;
let oranssiMaaliAloitus = 20;
let violettiMaaliAloitus = 30;
let ruskeaMaaliAloitus = 40;

//Ruutu
let ruudunLeveys = document.body.clientWidth;
let ruudunKorkeus = document.body.clientHeight;

//Pelilaudan mitat

let lauta = {
  leveys: lautaEl.clientWidth,
  korkeus: lautaEl.clientHeight,
};

// TYHJÄ TILA

const tyhja = {
  yla: ruudunKorkeus / 150,
  vasen: (ruudunLeveys - lauta.leveys) / 2,
};

//Alotusnapin sijoitus
// peliContainer.insertAdjacentHTML(
//   "afterbegin",
//   `<button class="aloita">Aloita</button>`
// );
const aloitusNappi = document.querySelector(".aloita");

const aloitusnapinSijoitus = function () {
  aloitusNappi.style.top = `${lauta.korkeus * 0.237}px`;
  aloitusNappi.style.fontSize = `${lauta.leveys * 0.01}rem`;
  aloitusNappi.style.padding = `${lauta.leveys / 30}px`;
};

// Laske nappuloiden mitat
const nappuloidenMitat = function () {
  lauta = {
    leveys: lautaEl.clientWidth,
    korkeus: lautaEl.clientHeight,
  };

  for (const ukko of ukot) {
    ukko.style.height = `${lauta.korkeus * 0.097}px`;
  }
  for (const maali of maalit) {
    maali.style.height = `${lauta.korkeus * 0.061}px`;
  }
};

//Aloituspaikka pikseleinä
const start = function (yla, vasen) {
  return {
    yla: `${tyhja.yla + lauta.korkeus * yla}px`,
    vasen: `${tyhja.vasen + lauta.leveys * vasen}px`,
  };
};

// Sijoita nappulat
const sijoitaNappula = function (nappula, väri, numero) {
  väri.style.top = nappula[numero].yla;
  väri.style.left = nappula[numero].vasen;
};

// ARPOMISFUNKTIOT
const numeroArvonta = function () {
  return Math.floor(Math.random() * 11 + 1) * 10;
};

//Näytä tulokset
const naytaSinisetTulokset = function () {
  if (document.querySelector(".arvontaboksi")) {
    const arvontaboksi = document.querySelector(".arvontaboksi");
    arvontaboksi.parentNode.removeChild(arvontaboksi);
  }
  peliContainer.insertAdjacentHTML(
    "afterbegin",
    `<div class="arvontaboksi">
    <div class="arvontataulukko">
        <div class="arvontakuvat arvonta">
            <img class="arvonta-ukko-sininen arvonta-ukko" src="./img/Ukko-sininen.png" alt="Ukko">
            <img class="arvonta-maali-sininen arvonta-maali" src="./img/Maali-sininen.png" alt="Maali">
        </div>
        <div class="arvontatekstit arvonta">
            <h1 class="arvontateksti">${sininenUkkoAloitus}</h1>
            <h1 class="arvontateksti">${sininenMaaliAloitus}</h1>
        </div>
    </div>
    <div class="arvontataulukko">
        <div class="arvontakuvat arvonta">
            <img class="arvonta-ukko-oranssi arvonta-ukko" src="./img/Ukko-oranssi.png" alt="Ukko">
            <img class="arvonta-maali-oranssi arvonta-maali" src="./img/Maali-oranssi.png" alt="Maali">
        </div>
        <div class="arvontatekstit arvonta">
            <h1 class="arvontateksti">${oranssiUkkoAloitus}</h1>
            <h1 class="arvontateksti">${oranssiMaaliAloitus}</h1>
        </div>
    </div>
    <div class="arvontataulukko">
        <div class="arvontakuvat arvonta">
            <img class="arvonta-ukko-violetti arvonta-ukko" src="./img/Ukko-violetti.png" alt="Ukko">
            <img class="arvonta-maali-violetti arvonta-maali" src="./img/Maali-violetti.png" alt="Maali">
        </div>
        <div class="arvontatekstit arvonta">
            <h1 class="arvontateksti">${violettiUkkoAloitus}</h1>
            <h1 class="arvontateksti">${violettiMaaliAloitus}</h1>
        </div>
    </div>
    <div class="arvontataulukko">
        <div class="arvontakuvat arvonta">
            <img class="arvonta-ukko-ruskea arvonta-ukko" src="./img/Ukko-ruskea.png" alt="Ukko">
            <img class="arvonta-maali-ruskea arvonta-maali" src="./img/Maali-ruskea.png" alt="Maali">
        </div>
        <div class="arvontatekstit arvonta">
            <h1 class="arvontateksti">${ruskeaUkkoAloitus}</h1>
            <h1 class="arvontateksti">${ruskeaMaaliAloitus}</h1>
        </div>
    </div>
    </div>`
  );

  const arvontaboksi = document.querySelector(".arvontaboksi");
  // arvontaboksi.style.top = tyhja.yla + lauta.korkeus * 0.13 + "px";
  arvontaboksi.style.width = lauta.leveys * 0.6 + "px";

  document
    .querySelectorAll(".arvontateksti")
    .forEach((el) => (el.style.color = "white"));
};

///////////////////////////////////
////////// NAPPULOIDEN ARVONTA

const arvonta = function () {
  // Ukkojen arpominen
  sininenUkkoAloitus = numeroArvonta();
  oranssiUkkoAloitus = numeroArvonta();
  violettiUkkoAloitus = numeroArvonta();
  ruskeaUkkoAloitus = numeroArvonta();

  while (oranssiUkkoAloitus === sininenUkkoAloitus) {
    oranssiUkkoAloitus = numeroArvonta();
  }
  while (
    violettiUkkoAloitus === sininenUkkoAloitus ||
    violettiUkkoAloitus === oranssiUkkoAloitus
  ) {
    violettiUkkoAloitus = numeroArvonta();
  }
  while (
    ruskeaUkkoAloitus === sininenUkkoAloitus ||
    ruskeaUkkoAloitus === oranssiUkkoAloitus ||
    ruskeaUkkoAloitus === violettiUkkoAloitus
  ) {
    ruskeaUkkoAloitus = numeroArvonta();
  }

  // Maalien arpominen
  sininenMaaliAloitus = numeroArvonta();
  oranssiMaaliAloitus = numeroArvonta();
  violettiMaaliAloitus = numeroArvonta();
  ruskeaMaaliAloitus = numeroArvonta();

  while (
    (sininenUkkoAloitus <= 20 && sininenMaaliAloitus <= 20) ||
    (sininenUkkoAloitus >= 100 && sininenMaaliAloitus >= 100)
  ) {
    sininenMaaliAloitus = numeroArvonta();
  }
  while (
    (oranssiUkkoAloitus <= 20 && oranssiMaaliAloitus <= 20) ||
    (oranssiUkkoAloitus >= 100 && oranssiMaaliAloitus >= 100) ||
    oranssiMaaliAloitus === sininenMaaliAloitus
  ) {
    oranssiMaaliAloitus = numeroArvonta();
  }
  while (
    (violettiUkkoAloitus <= 20 && violettiMaaliAloitus <= 20) ||
    (violettiUkkoAloitus >= 100 && violettiMaaliAloitus >= 100) ||
    violettiMaaliAloitus === sininenMaaliAloitus ||
    violettiMaaliAloitus === oranssiMaaliAloitus
  ) {
    violettiMaaliAloitus = numeroArvonta();
  }
  while (
    (ruskeaUkkoAloitus <= 20 && ruskeaMaaliAloitus <= 20) ||
    (ruskeaUkkoAloitus >= 100 && ruskeaMaaliAloitus >= 100) ||
    ruskeaMaaliAloitus === sininenMaaliAloitus ||
    ruskeaMaaliAloitus === oranssiMaaliAloitus ||
    ruskeaMaaliAloitus === violettiMaaliAloitus
  ) {
    ruskeaMaaliAloitus = numeroArvonta();
  }

  //Näytä tulokset
  naytaSinisetTulokset();
};

///////////////////////////////////
////////// RENDERÖINTIFUNKTIO

const render = function () {
  ruudunLeveys = document.body.clientWidth;
  ruudunKorkeus = document.body.clientHeight;

  // Laske uudelleen pelilaudan mitat

  lauta.leveys = lautaEl.clientWidth;
  lauta.korkeus = lautaEl.clientHeight;

  tyhja.yla = ruudunKorkeus / 150;
  tyhja.vasen = (ruudunLeveys - lauta.leveys) / 2;

  // ALOITUSPAIKAT

  const startUkko = {
    10: start(0.11, 0.16),
    20: start(0.28, 0.16),
    30: start(0.45, 0.16),
    40: start(0.62, 0.16),
    50: start(0.79, 0.16),
    60: start(0.89, 0.25),
    70: start(0.89, 0.37),
    80: start(0.89, 0.49),
    90: start(0.89, 0.615),
    100: start(0.89, 0.74),
    110: start(0.89, 0.86),
  };

  const startMaali = {
    10: start(0.001, 0.25),
    20: start(0.001, 0.37),
    30: start(0.001, 0.49),
    40: start(0.001, 0.615),
    50: start(0.001, 0.74),
    60: start(0.001, 0.86),
    70: start(0.13, 0.93),
    80: start(0.29, 0.93),
    90: start(0.455, 0.93),
    100: start(0.62, 0.93),
    110: start(0.78, 0.93),
  };

  // Laske nappuloiden mitat uudelleen
  nappuloidenMitat();

  sijoitaNappula(startUkko, ukkoSininen, sininenUkkoAloitus);
  sijoitaNappula(startUkko, ukkoOranssi, oranssiUkkoAloitus);
  sijoitaNappula(startUkko, ukkoVioletti, violettiUkkoAloitus);
  sijoitaNappula(startUkko, ukkoRuskea, ruskeaUkkoAloitus);

  sijoitaNappula(startMaali, maaliSininen, sininenMaaliAloitus);
  sijoitaNappula(startMaali, maaliOranssi, oranssiMaaliAloitus);
  sijoitaNappula(startMaali, maaliVioletti, violettiMaaliAloitus);
  sijoitaNappula(startMaali, maaliRuskea, ruskeaMaaliAloitus);
};

//////////// RENDERÖINTIFUNKTIO LOPPUU
/////////////////////////////////////////////////

// aloitusnapinSijoitus();
nappuloidenMitat();
render();

//Aloitusnapin painallus
window.addEventListener("click", function () {
  aloitusNappi.style.visibility = "hidden";
  arvonta();
  document
    .querySelectorAll(".arvontataulukko")
    .forEach((el) => el.classList.add("flash"));
  render();
});

// Käynnistä käynnistysfunktio, kun ikkunan koko muuttuu
window.addEventListener(
  "resize",
  function () {
    // aloitusnapinSijoitus();
    render();
    document.querySelector(".arvontaboksi") ? naytaSinisetTulokset() : "";
  },
  true
);
