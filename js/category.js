let menuItems = document.querySelectorAll("#menu a");
console.log(menuItems);

// Iteramos sobre cada elemento del menú
menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("click", function(e) {

        let categoryText = menuItem.textContent  

        if (categoryText === "electronics" || categoryText === "jewelery") {
            e.preventDefault();  

            fetch(`https://fakestoreapi.com/products/category/${categoryText}`)
                .then(function(res) {
                    return res.json();
                })
                .then(function(data) {
                    let resultados = data;
                    console.log(resultados);

                    let caja = document.querySelector(".productos");
                    let caracteristicas = [];

                    for(let i = 0; i < resultados.length; i++) {
                        caracteristicas += `<div class="remera-hombre">,
                        <img class="producto-imagen" src = ${resultados[i].image} alt='${resultados[i].title}'/>
                        <p class="nombre-producto">${resultados[i].title}</p>
                        <p class="descripcion-producto">${resultados[i].description}</p>
                        <p class="precio-producto">$${resultados[i].price}</p>
                    </div>`     
                    }

                    caja.innerHTML = caracteristicas;

                })
                .catch(function(e) {
                    console.log(e);
                    console.log("Lo sentimos, esta categoria no se muestra correctamente, refresque la página e intente nuevamente.");
                });

        } else if (categoryText === "men" || categoryText === "women") {
            document.querySelector(".respuesta").innerText = "Esta categoría no está soportada para mostrar productos.";
        }
    });
});
