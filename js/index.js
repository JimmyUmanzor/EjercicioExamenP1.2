fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    let card = '<div class="row row-cols-1 row-cols-md-3 g-4">'
    
    for (let datos of data) {
        card += `<div class="col">
                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-header" text="center">${datos.title}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                <img src="${datos.image}" class="card-img-top" alt="Imagen" style="max-width: 100px; height: auto;"></li>
                            </ul>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Precio:<strong>${datos.price}</strong></li>
                                <li class="list-group-item">${datos.description}</li>
                                <li class="list-group-item">Categoría: <strong>${datos.category}</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>`
    }
    card += "</div>"

    document.getElementById("cardLista").innerHTML = card
    
})