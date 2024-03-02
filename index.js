let cantidadSpan = document.querySelector(".cantidad");
let precioInicialSpan = document.querySelector(".precio-inicial");
let valorTotalSpan = document.querySelector(".valor-total");
let sumaButton = document.getElementById("suma");
let restaButton = document.getElementById("resta");
let precioBase = 400000;
let cantidad = 0;

precioInicialSpan.textContent = precioBase;
cantidadSpan.textContent = cantidad;

// Funcion para actualizar el valor total
function actualizarTotal() {
    let total = precioBase * cantidad;
    valorTotalSpan.textContent = total;
}

// SUMA
sumaButton.addEventListener("click", function() {
    cantidad++;
    cantidadSpan.textContent = cantidad;
    actualizarTotal();
});

// RESTA
restaButton.addEventListener("click", function() {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.textContent = cantidad;
        actualizarTotal();
    }
});