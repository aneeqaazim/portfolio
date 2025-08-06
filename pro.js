const textArray = ["Web Developer", "PHP Expert", "UI/UX Designer"];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typingText = document.querySelector(".typing-text");

function type() {
  if (index >= textArray.length) index = 0;
  currentText = textArray[index];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
    }
  } else {
    typingText.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();
