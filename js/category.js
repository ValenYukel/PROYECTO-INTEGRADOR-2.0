let menuItems = document.querySelectorAll("#menu a");
console.log(menuItems);

// Itera sobre cada elemente de  un array, lo aprendi en YouYube
menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("click", function(e) {

        let categoryText = menuItem.textContent 
        
        let titulo = document.querySelector(".ult_nov")
        titulo.innerText = categoryText

        if (categoryText == "electronics" || categoryText == "jewelery") {
            e.preventDefault();  

            fetch(`https://fakestoreapi.com/products/category/${categoryText}`)
                
            .then(function(res) {
                    return res.json();
                })
            
            .then(function(data) {
                    let resultados = data;
                    console.log("resultados: ",resultados);

                    let caja = document.querySelector(".productos");

                    let caracteristicas = "";

                    for(let i = 0; i < resultados.length; i++) {
                        caracteristicas += 
                        `<div class="remera-hombre">
                            <div class="remera-img">
                                <a href="producto.html"><img class="producto-imagen" src=${resultados[i].image} alt=${resultados[i].title}></a>
                                <div class="info">
                                    <p class="nombre-producto">${resultados[i].title}</p>
                                    <p class="descripcion-producto">${resultados[i].description}</p>
                                    <p class="precio-producto">$${resultados[i].price}</p>
                                </div>
                            </div>
                        </div>` 
                    }
                    caja.innerHTML = caracteristicas;


                })
            
            .catch(function(e) {
                    console.log(e);
                    console.log("Lo sentimos, esta categoria no se muestra correctamente, refresque la página e intente nuevamente.");
                });

        } else if (categoryText == "men" || categoryText == "women") {
            e.preventDefault();  

            fetch(`https://fakestoreapi.com/products/category/${categoryText}%27s%20clothing`)
                
            .then(function(res) {
                    return res.json();
                })
            
            .then(function(data) {
                    let resultados = data;
                    console.log("resultados: ",resultados);

                    let caja = document.querySelector(".productos");

                    let caracteristicas2 = "";

                    for(let i = 0; i < resultados.length; i++) {
                        caracteristicas2 += 
                        `<div class="remera-hombre">
                            <div class="remera-img">
                                <a href="producto.html"><img class="producto-imagen" src=${resultados[i].image} alt=${resultados[i].title}></a>
                                <div class="info">
                                    <p class="nombre-producto">${resultados[i].title}</p>
                                    <p class="descripcion-producto">${resultados[i].description}</p>
                                    <p class="precio-producto">$${resultados[i].price}</p>
                                </div>
                            </div>
                        </div>` 
                    }
                    caja.innerHTML = caracteristicas2;


                })
            
            .catch(function(e) {
                    console.log(e);
                    console.log("Lo sentimos, esta categoria no se muestra correctamente, refresque la página e intente nuevamente.");
                });

        }

    }); 
});
