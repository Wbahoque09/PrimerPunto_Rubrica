document.addEventListener("DOMContentLoaded", function() {
    const carrito = document.getElementById("carrito-lista");
    const total = document.getElementById("total");
    let totalPrecio = 0;

    function agregarAlCarrito(nombre, precio) {
        const item = document.createElement("li");
        item.textContent = `${nombre} - $${precio.toFixed(2)}`;
        carrito.appendChild(item);
        totalPrecio += precio;
        total.textContent = `Total: $${totalPrecio.toFixed(2)}`;
    }

    const botonesAgregar = document.querySelectorAll(".producto button");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", function() {
            const producto = this.parentNode;
            const nombre = producto.querySelector("h3").textContent;
            const precio = parseFloat(producto.querySelector("p").textContent.replace("Precio: $", ""));
            agregarAlCarrito(nombre, precio);
        });
    });
});
