document.addEventListener("DOMContentLoaded", function() {
    const textoGuardado = localStorage.getItem("textoUsuario");
    if (textoGuardado) {
        document.getElementById("textInput").value = textoGuardado;
        document.getElementById("output").textContent = textoGuardado;
    }
});

function guardarTexto() {
    const texto = document.getElementById("textInput").value;
    localStorage.setItem("textoUsuario", texto);
    document.getElementById("output").textContent = texto;
}