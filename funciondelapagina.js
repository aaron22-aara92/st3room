const imagenes = document.querySelectorAll(".logos");
let listaAbierta = null;

imagenes.forEach(img => {
  img.addEventListener("click", () => {

    // Su lista (la que está justo debajo)
    const lista = img.nextElementSibling;

    // Si hay una lista abierta y no es la misma → cerrarla
    if (listaAbierta && listaAbierta !== lista) {
      listaAbierta.classList.add("oculto");
    }

    // Abrir/cerrar la lista actual
    lista.classList.toggle("oculto");

    // Guardar la lista abierta
    listaAbierta = lista.classList.contains("oculto") ? null : lista;
  });
});

self.addEventListener("install", () => {
  console.log("Service Worker instalado");
});

let eventoInstalacion;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  eventoInstalacion = e;
  document.getElementById("instalar").style.display = "block";
});

document.getElementById("instalar").addEventListener("click", () => {
  eventoInstalacion.prompt();
});
