function animateDots() {
    let dots = "";
    let dotElement = document.getElementById("dots");
    let count = 0;
    setInterval(() => {
        count = (count + 1) % 4; // Alterna entre 0, 1, 2, 3
        dots = ".".repeat(count);
        dotElement.innerText = dots;
    }, 400); // Velocidad rápida (0.4s por punto)
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
        confetti.style.animationDelay = `${Math.random()}s`;
        document.body.appendChild(confetti);
    }
}

function finalizarCarga() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".message").innerText = "¡Bienvenido!";
    createConfetti();
    setTimeout(() => {
        window.location.href = "inicio.html"; // Redirige después de la animación
    }, 5000);
}

setTimeout(finalizarCarga, 10000);
animateDots();