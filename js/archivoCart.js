let url = 'https://fakestoreapi.com/products'

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        let resultados = data;
        console.log(resultados);
    })
    .catch(function(error){
        console.log("Error: " + error)
    })