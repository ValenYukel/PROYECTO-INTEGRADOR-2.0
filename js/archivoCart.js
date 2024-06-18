let url = 'https://fakestoreapi.com/products'

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        let resultados = data;
        console.log(resultados);

        let recuperarStorage = lacalStorage.getItem('');
        let productosRecuperados = json.parse();

        if (!productosRecuperados.length === 0) {
            let detalle = document.querySelector('.detlle');
            detalle.innerHTML = "Su carrito esta vacio"
        }
        else {
            // Si hay productos en el carrito, recuperar los IDs y consultar la API
            let lista = document.querySelector('.contenedor');

            productosRecuperados.forEach(id => {
                let producto = resultados.find(item => item.id === id);

                if (producto) {
                    let productoDiv = document.createElement('div');
                    productoDiv.className = 'producto';
                    productoDiv.innerHTML = `
                        <div class="foto-producto">
                            <img src="${producto.image}" alt="${producto.title}">
                        </div>
                        <div class="detalle">
                            <p>Nombre: ${producto.title}</p>
                            <p>Descripción: ${producto.description}</p>
                            <p>Precio: $${producto.price}</p>
                        </div>
                    `;
                }
            });
        }
    })
    .catch(function(error){
        console.log("Error: " + error)
    })