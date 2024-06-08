let hombres = document.querySelectorAll(".remera-hombre");

fetch('https://fakestoreapi.com/products/category/men%27s%20clothing')
    .then(function(res){
        return res.json()
    })
    .then(function(data){

        let resultados = data;
        console.log(resultados);
        
        for(let i = 0; i < resultados.length; i++) {
            if (i < hombres.length) { 
                let nombreProd = resultados[i].title;
                let descripcionProd = resultados[i].description;
                let precioProd = resultados[i].price;
                let imagenProd = resultados[i].image;
                
                let nombre = hombres[i].querySelector(".nombre-producto");
                let descripcion = hombres[i].querySelector(".descripcion-producto");
                let precio = hombres[i].querySelector(".precio-producto");
                let imagen = hombres[i].querySelector(".producto-imagen");
                
                nombre.innerText = nombreProd;
                descripcion.innerText = descripcionProd;
                precio.innerText = `$${precioProd}`;
                imagen.src = imagenProd;
            }
        }

    })
    .catch(function(e){
        console.log(e);
        console.log("Lo sentimos, este item no se muestra correctamente, refresque la página e intente nuevamente.");
    });