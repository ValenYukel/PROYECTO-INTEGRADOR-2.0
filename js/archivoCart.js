document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let contenedor = document.querySelector('.contenedor');

    if (cartItems.length === 0) {
        document.querySelector('.detalle').innerHTML = "Su carrito está vacío";
    } else {
        contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos elementos

        for (let i = 0; i < cartItems.length; i++) {
            let id = cartItems[i];
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(function (res) {
                    return res.json();
                })
                .then(function(product) {
                    console.log(product)
                    let productDiv = document.createElement('div');
                    productDiv.className = 'producto';
                    productDiv.innerHTML = `
                        <div class="foto-producto">
                            <img src="${product.image}" alt="${product.title}">
                        </div>
                        <div class="detalle">
                            <p>Nombre: ${product.title}</p>
                            <p>Precio: $${product.price}</p>
                        </div>
                    `;
                    contenedor.appendChild(productDiv);
                })
                .catch(function (e) {
                    console.error('Error al seleccionar el producto:', e)
                })
        }
    }
});
