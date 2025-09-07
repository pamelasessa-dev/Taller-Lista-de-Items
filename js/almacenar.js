const item = document.getElementById("item");
const Agregar = document.getElementById("agregar");
const Limpiar = document.getElementById("limpiar");
const Contenedor = document.getElementById("contenedor");

function obtenerListado() {
  const stringListado = localStorage.getItem("listado");
  return stringListado ? JSON.parse(stringListado) : [];
}

function guardarListado(listado) {
  const stringListado = JSON.stringify(listado);
  localStorage.setItem("listado", stringListado);
}

function renderizarListado() {
  Contenedor.innerHTML = ""; 
  const listado = obtenerListado();
  listado.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("list-group-item"); 
    Contenedor.appendChild(li);
  });
}

Agregar.addEventListener("click", () => {
  const nuevaCancion = item.value.trim();
  if (nuevaCancion === "") return; 
  const listado = obtenerListado();
  listado.push(nuevaCancion);
  guardarListado(listado);
  renderizarListado();
  item.value = "";
});

Limpiar.addEventListener("click", () => {
  localStorage.removeItem("listado");
  renderizarListado();
});


renderizarListado();