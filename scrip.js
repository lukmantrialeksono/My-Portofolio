// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting me! I'll get back to you soon.");
    document.getElementById("contactForm").reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typewriter");
    const text = textElement.textContent;
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(type, 100); // Kecepatan pengetikan (ms)
        } else {
            textElement.style.borderRight = "none"; // Hilangkan kursor berkedip setelah selesai
        }
    }

    type(); // Jalankan animasi hanya sekali
});