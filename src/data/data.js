const products = [
    {
        id: "Df2121",
        name: "Remera Roja",
        description: "desc",
        stock: 10,
        price: 2000,
        image: "/img/remera-roja.png",
        category: "Ropa",
        subcategory: "remera"
        // active: true => Lo utilizo para decir si esta disponible el producto o no
    },
    {
        id: "Gt2333",
        name: "Gorra Nike",
        description: "desc",
        stock: 2,
        price: 1000,
        image: "/img/gorra-nike.png",
        category: "Accesorios",
        subcategory: "gorra"
    },
    {
        id: "Le1040",
        name: "Zapatillas Verdes",
        description: "desc",
        stock: 5,
        price: 5000,
        image: "/img/zapatillas-verdes.webp",
        category: "Zapatillas",
        subcategory: "mujer"
    },    
    {
        id: "Qw5648",
        name: "Pantalon Azul",
        description: "desc",
        stock: 20,
        price: 1500,
        image: "/img/pantalon-azul.png",
        category: "Ropa",
        subcategory: "pantalon"
    },
    {
        id: "Nj8902",
        name: "Pantalon Azul",
        description: "desc",
        stock: 20,
        price: 1500,
        image: "/img/pantalon-azul.png",
        category: "Ropa",
        subcategory: "pantalon"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products)
        },1000)
    })
}

export { getProducts }