const typedTextElement = document.querySelector(".typed-text");
const cursorElement = document.querySelector(".cursor");
const typeSound = document.getElementById("typedsound");
const deleteSound = document.getElementById("deletesound");
const enableSoundButton = document.getElementById("enable-sound");

const btn = document.getElementById('btn');

const phrases = ["Better Than C++", "Faster Than Python","One of the most used Language is the World in "];
let isSoundEnabled = false;

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const typingSpeed = 100; 
const deletingSpeed = 50; 
const pauseTime = 1000; // Time to pause at the end of a phrase

// isSoundEnabled = true;
btn.addEventListener("click",()=>{
    isSoundEnabled= !isSoundEnabled;
    if (!isSoundEnabled) {
        typeSound.pause();
        typeSound.currentTime = 0;
        deleteSound.pause();
        deleteSound.currentTime = 0;
    }
    btn.textContent = isSoundEnabled ? "🔇" : "🔊";
})

function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        // Deleting text
        playSound(true);
        typedTextElement.textContent = currentPhrase.substring(0, letterIndex - 1);
        letterIndex--;

        if (letterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, pauseTime / 2);
            return;
        }

        setTimeout(type, deletingSpeed);
    } else {
        // Typing text
        playSound(false);
        typedTextElement.textContent = currentPhrase.substring(0, letterIndex + 1);
        letterIndex++;

        if (letterIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, pauseTime);
            return;
        }

        setTimeout(type, typingSpeed);
    }
}

function playSound(isDeleting = false) {
    if (isSoundEnabled) {
        if (isDeleting) {
            deleteSound.currentTime = 0;
            deleteSound.play().catch((err) => console.error("Delete Sound Error:", err));
        } else {
            typeSound.currentTime = 0;
            typeSound.play().catch((err) => console.error("Type Sound Error:", err));
        }
    }
}

// Start the typing animation
setTimeout(type, pauseTime);
