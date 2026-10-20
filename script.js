
"use strict";

// DESPLAZARSE HASTA EL SOBRE
const goToLetterBtn = document.getElementById("goToLetterBtn");

goToLetterBtn.addEventListener("click", () => {
  document.getElementById("sobre").scrollIntoView({
    behavior: "smooth"
  });
});

// ABRIR EL SOBRE Y MOSTRAR LA CARTA
const envelope = document.getElementById("envelope");
const openEnvelopeBtn = document.getElementById("openEnvelopeBtn");
const envelopeHint = document.getElementById("envelopeHint");
const letter = document.getElementById("carta");

let envelopeOpened = false;

function openEnvelope() {
  if (envelopeOpened) {
    letter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    return;
  }

  envelopeOpened = true;

  envelope.classList.add("open");
  envelope.setAttribute("aria-expanded", "true");

  envelopeHint.textContent =
    "Una cartita escrita especialmente para ti 💗";

  // Esperar a que se abra el sobre antes de mostrar la carta
  window.setTimeout(() => {
    letter.hidden = false;

    letter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    makeHearts(10);
  }, 650);
}

// Permitir abrir el sobre con el botón o el teclado
envelope.addEventListener("click", openEnvelope);

envelope.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openEnvelope();
  }
});

openEnvelopeBtn.addEventListener("click", openEnvelope);

// REVELAR LA SORPRESA FINAL
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

let surpriseRevealed = false;

surpriseBtn.addEventListener("click", () => {
  if (surpriseRevealed) return;

  surpriseRevealed = true;
  surpriseMessage.hidden = false;

  surpriseBtn.textContent = "Te mando muchos besitos 💋";

  makeHearts(28);

  surpriseMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

// CREAR CORAZONES FLOTANTES
function makeHearts(amount = 1) {
  const symbols = ["💗", "💕", "💖", "♡", "💘"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.setAttribute("aria-hidden", "true");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random() * 22) + "px";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}

// PEQUEÑA LLUVIA DE CORAZONES AL CARGAR
window.addEventListener("load", () => {
  makeHearts(5);
});

/* REPRODUCTOR DE LOVER IS A DAY 🎵 */

const musicBtn = document.getElementById("musicBtn");
const musicPlayer = document.getElementById("musicPlayer");
const youtubePlayer = document.getElementById("youtubePlayer");
const musicNotes = document.getElementById("musicNotes");
const musicIcon = document.getElementById("musicIcon");

let musicStarted = false;

musicBtn.addEventListener("click", () => {
  if (!musicStarted) {
    musicStarted = true;

    // Mostrar el reproductor oficial de YouTube
    musicPlayer.hidden = false;

    // Iniciar la reproducción tras la interacción del usuario
    youtubePlayer.src =
       "https://open.spotify.com/embed/track/1ucnuV88gFTfR3BalmznDk?utm_source=generator";

    musicBtn.textContent = "💗 Nuestra canción";
    musicNotes.classList.add("playing");
    musicIcon.textContent = "💗";

    musicPlayer.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  } else {
    // Mostrar nuevamente el reproductor si se pulsa otra vez
    musicPlayer.hidden = false;

    musicPlayer.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});

/* ABRIR EL REGALO 💗 */
const welcomeScreen = document.getElementById("welcomeScreen");
const startGiftBtn = document.getElementById("startGiftBtn");

startGiftBtn.addEventListener("click", () => {
  // Activa el reproductor de Spotify existente
  if (typeof musicBtn !== "undefined") {
    musicBtn.click();
  }

  // Revela la página
  welcomeScreen.classList.add("hide");

  // Permite desplazarse por la página
  document.body.style.overflow = "";

  // Deja la página al inicio
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});