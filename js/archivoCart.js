document.addEventListener("DOMContentLoaded", function() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let contenedor = document.querySelector('.contenedor');
    
    if (cartItems.length === 0) {
        document.querySelector('.detalle').innerHTML = "Su carrito está vacío";
    } else {
        let contenidoHTML = ''; // Inicializar contenido HTML

        for (let i = 0; i < cartItems.length; i++) {
            let id = cartItems[i];
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(response => response.json())
                .then(product => {
                    contenidoHTML += `
                        <div class="producto">
                            <div class="foto-producto">
                                <img src="${product.image}" alt="${product.title}">
                            </div>
                            <div class="detalle">
                                <p>Nombre: ${product.title}</p>
                                <p>Precio: $${product.price}</p>
                            </div>
                        </div>
                    `;

                    // Si es el último producto, agregar el botón de finalizar compra
                    if (i === cartItems.length - 1) {
                        contenidoHTML += `
                            <button class="finalizar-compra" onclick="finalizarCompra()">Finalizar Compra</button>
                        `;
                        contenedor.innerHTML = contenidoHTML; // Agregar todo el contenido HTML al contenedor
                    }
                })
                .catch(error => {
                    console.error("Error fetching product data:", error);
                });
        }
    }
});

function finalizarCompra() {
    localStorage.removeItem('cart');
    alert('Gracias por su compra');
    window.location.href = 'index.html';
}
