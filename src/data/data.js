const products = [
    {
        id: "Df2121",
        name: "Remera Roja",
        description: "",
        stock: 10,
        price: 2000,
        image: "/img/remera-roja.png",
        category: "remeras",
        sex: "hombre"
        // active: true => Lo utilizo para decir si esta disponible el producto o no
    },
    {
        id: "Gt2333",
        name: "Gorra Nike",
        description: "",
        stock: 2,
        price: 1000,
        image: "/img/gorra-nike.png",
        category: "gorras",
        sex: "unisex"
    },
    {
        id: "Le1040",
        name: "Zapatillas Verdes",
        description: "",
        stock: 5,
        price: 5000,
        image: "/img/zapatillas-verdes.webp",
        category: "zapatillas",
        sex: "mujer"
    },    
    {
        id: "Qw5648",
        name: "Pantalon Azul",
        description: "",
        stock: 20,
        price: 1500,
        image: "/img/pantalon-azul.png",
        category: "pantalon",
        sex: "hombre"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products)
        }, 3000)
    })
}

export { getProducts }