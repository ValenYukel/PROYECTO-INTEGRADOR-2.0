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

        if (recuperarStorage === null) {
            let detalle = document.querySelector('.detlle');
            detalle.innerHTML = "Su carrito esta vacio"
        }
        else if (recuperarStorage) {
            
        }
    })
    .catch(function(error){
        console.log("Error: " + error)
    })