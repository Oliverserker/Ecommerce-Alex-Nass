const productos = [
    
   {
    id: "Alimento-01",
    titulo: "Alimento para perro 01",
    imagen: "./img/p01.jpg",
    categoria: {
        nombre: "Alimentos",
        id: "alimentos",
    },
    precio: 24675
   }, 
       
   {
    id: "Alimento-02",
    titulo: "Alimento para perro 02",
    imagen: "./img/p02.jpg",
    categoria: {
        nombre: "Alimentos",
        id: "alimentos",
    },
    precio: 7350
   }, 
       
   {
    id: "Alimento-03",
    titulo: "Alimento para perro 03",
    imagen: "./img/p03.jpg",
    categoria: {
        nombre: "Alimentos",
        id: "alimentos",
    },
    precio: 22600
   }, 
       
   {
    id: "Alimento-04",
    titulo: "Alimento para perro 04",
    imagen: "./img/p04.jpg",
    categoria: {
        nombre: "Alimentos",
        id: "alimentos",
    },
    precio: 7350
   }, 
       
   {
    id: "Alimento-05",
    titulo: "Alimento para perro 05",
    imagen: "./img/p05.jpg",
    categoria: {
        nombre: "Alimentos",
        id: "alimentos",
    },
    precio: 6575
   }, 
       
   {
    id: "Alimento-06",
    titulo: "Alimento para perro 06",
    imagen: "./img/p06.jpg",
    categoria: {
        nombre: "Alimentos",
        id: "alimentos",
    },
    precio: 6940
   }, 
       
   {
    id: "Alimento-07",
    titulo: "Alimento para gato 07",
    imagen: "./img/g07.jpg",
    categoria: {
        nombre: "Alimentos",
        id: "alimentos",
    },
    precio: 7450
   }, 
         
   {
    id: "Alimento-08",
    titulo: "Alimento para gato 08",
    imagen: "./img/g08.jpg",
    categoria: {
        nombre: "Alimentos",
        id: "alimentos",
    },
    precio: 10570
   }, 
         
   {
    id: "Alimento-09",
    titulo: "Alimento para gato 09",
    imagen: "./img/g09.jpg",
    categoria: {
        nombre: "Alimentos",
        id: "alimentos",
    },
    precio: 9400
   }, 
         
   {
    id: "Alimento-10",
    titulo: "Alimento para gato 10",
    imagen: "./img/g10.jpg",
    categoria: {
        nombre: "Alimentos",
        id: "alimentos",
    },
    precio: 8675
   }, 
         
   {
    id: "Alimento-11",
    titulo: "Alimento para gato 11",
    imagen: "./img/g11.jpg",
    categoria: {
        nombre: "Alimentos",
        id: "alimentos",
    },
    precio: 9360
   }, 
         
   {
    id: "Alimento-12",
    titulo: "Alimento para gato 12",
    imagen: "./img/g12.jpg",
    categoria: {
        nombre: "Alimentos",
        id: "alimentos",
    },
    precio: 8150
   }, 
         
   {
    id: "camas-01",
    titulo: "Cama 1",
    imagen: "./img/c01.jpg",
    categoria: {
        nombre: "Camas",
        id: "camas",
    },
    precio: 9500
   }, 
          
   {
    id: "camas-02",
    titulo: "Cama 2",
    imagen: "./img/c02.jpg",
    categoria: {
        nombre: "Camas",
        id: "camas",
    },
    precio: 12000
   }, 
           
   {
    id: "camas-03",
    titulo: "Cama 3",
    imagen: "./img/c03.jpg",
    categoria: {
        nombre: "Camas",
        id: "camas",
    },
    precio: 13500
   }, 
           
   {
    id: "juguetes-01",
    titulo: "Juguete 01",
    imagen: "./img/j01.jpg",
    categoria: {
        nombre: "Juguetes",
        id: "juguetes",
    },
    precio: 2350
   },

   {
    id: "juguetes-02",
    titulo: "Juguete 02",
    imagen: "./img/j02.jpg",
    categoria: {
        nombre: "Juguetes",
        id: "juguetes",
    },
    precio: 1999
   }, 
      
   {
    id: "juguetes-03",
    titulo: "Juguete 03",
    imagen: "./img/j03.jpg",
    categoria: {
        nombre: "Juguetes",
        id: "juguetes",
    },
    precio: 3200
   }, 
      
   {
    id: "juguetes-04",
    titulo: "Juguete 04",
    imagen: "./img/j04.jpg",
    categoria: {
        nombre: "Juguetes",
        id: "juguetes",
    },
    precio: 2999
   }, 
      
   {
    id: "juguetes-05",
    titulo: "Juguete 05",
    imagen: "./img/j05.jpg",
    categoria: {
        nombre: "Juguetes",
        id: "juguetes",
    },
    precio: 2700
   }  
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const btnCategorias = document.querySelectorAll(".btn-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let btnAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBtnAgregar();
}

cargarProductos(productos);

btnCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        btnCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "all"){
        
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton);
    } else{
        tituloPrincipal.innerText = "Todos los productos";
        cargarProductos(productos);
    }
    })
});

function actualizarBtnAgregar() {
    btnAgregar = document.querySelectorAll(".producto-agregar");

    btnAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}




