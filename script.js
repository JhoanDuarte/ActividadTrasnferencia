// script.js

// Abre el modal
function openModal() {
    document.getElementById("contactModal").style.display = "flex";
}

// Cierra el modal
function closeModal() {
    document.getElementById("contactModal").style.display = "none";
}

// Cierra el modal si el usuario hace clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById("contactModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
