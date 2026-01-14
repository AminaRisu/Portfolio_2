const text = "Python Full Stack Web Developer";
let index = 0;
let isDeleting = false;
const speed = 120;
const deleteSpeed = 80;
const delayAfterTyping = 1500;

function typeEffect() {
    const element = document.getElementById("typing-text");

    if (!isDeleting) {
        element.textContent = text.substring(0, index++);
        if (index > text.length) {
            setTimeout(() => isDeleting = true, delayAfterTyping);
        }
    } else {
        element.textContent = text.substring(0, index--);
        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, isDeleting ? deleteSpeed : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

