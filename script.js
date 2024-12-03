// Adiciona a funcionalidade do botão surpresa
document.getElementById("surpriseBtn").addEventListener("click", function() {
    const message = document.getElementById("surpriseMessage");
    message.classList.toggle("hidden");
});
