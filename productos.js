let listaProductos = [
    {
        name:"Pack agujas x4",
        precio:"Cop 30.000",
        descripcion:"Pack de cuatro agujas para tatuar",
        img: "https://m.media-amazon.com/images/I/61p3KN9e4dL._AC_UF350,350_QL80_.jpg",
    },
    {
        name:"",
        precio: "Cop 30.000",
        descripcion:"",
        img:"",
    },
    {
        name:"",
        precio:"Cop 30.000",
        descripcion:"",
        img:"",
    },
];

function mostrarProductos(){
    let productosCodigoHTML = "";
    for (let i = 0; i < listaProductos.length; i++){
        let producto = `<div class="col">
        <div class="card shadow-sm">
          <img src="${listaProductos[i].img}"
          <p class="text-white text-center">${listaProductos[i].name}</p>
          <div class="card-body">
            <p class="card-text text-white">${listaProductos[i].descripcion}</p>
            <div class="d-flex justify-content-between align-items-ce, nter">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">Añadir al carrito</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
              </div>
              <small class="text-white">${listaProductos[i].precio}</small>
            </div>
          </div>
        </div>
      </div>`;
      productosCodigoHTML += producto;       
    }
    document.getElementById("catalogo-productos").innerHTML = productosCodigoHTML
}

mostrarProductos();