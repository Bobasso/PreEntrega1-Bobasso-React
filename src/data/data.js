const products = [
    {
        id: "Df2121",
        name: "Remera Roja",
        description: "Esta remera roja es la prenda perfecta para destacar en cualquier ocasión. Confeccionada con algodón suave y transpirable, garantiza comodidad durante todo el día. Su color vibrante añade un toque de energía y estilo a tu look, mientras que el corte clásico y el cuello redondo ofrecen un ajuste versátil que complementa cualquier atuendo. Ideal para combinar con jeans o shorts, esta remera es un básico que no puede faltar en tu guardarropa.",
        stock: 10,
        price: 2000,
        image: "/img/remera-roja.png",
        category: "Ropa"
        // active: true => Lo utilizo para decir si esta disponible el producto o no
    },
    {
        id: "Gt2333",
        name: "Gorra Negra",
        description: "Esta gorra negra es el accesorio ideal para un look casual y moderno. Fabricada con materiales de alta calidad, ofrece durabilidad y comodidad, perfecta para usar a diario. Su diseño clásico con visera curva y ajuste trasero ajustable se adapta a cualquier estilo y tamaño, mientras que el color negro aporta una versatilidad que combina fácilmente con cualquier atuendo. Ya sea para protegerte del sol o completar tu outfit, esta gorra es un imprescindible en tu colección.",
        stock: 2,
        price: 1000,
        image: "/img/gorra-nike.png",
        category: "Accesorios"
    },
    {
        id: "Le1040",
        name: "Zapatillas Verdes",
        description: "Estas zapatillas verdes combinan estilo y comodidad en un solo par. Con un diseño moderno y deportivo, son perfectas tanto para entrenamientos como para el día a día. Su exterior está confeccionado en materiales transpirables y resistentes, asegurando frescura y durabilidad, mientras que la suela de goma proporciona tracción y amortiguación en cada paso. El vibrante color verde añade un toque fresco y único a tu look, ideal para quienes buscan destacar con personalidad y estilo.",
        stock: 5,
        price: 5000,
        image: "/img/zapatillas-verdes.webp",
        category: "Zapatillas"
    },    
    {
        id: "Qw5648",
        name: "Pantalon Azul",
        description: "Este pantalón azul es la elección perfecta para un look elegante y cómodo. Confeccionado en tela suave y de alta calidad, ofrece un ajuste relajado que se adapta a cualquier ocasión. Su diseño versátil, con bolsillos laterales y cierre clásico, lo convierte en una prenda ideal tanto para eventos formales como para un estilo casual. El color azul profundo aporta un toque sofisticado que combina fácilmente con camisas, camisetas o chaquetas, haciendo de este pantalón un imprescindible en cualquier armario.",
        stock: 20,
        price: 1500,
        image: "/img/pantalon-azul.png",
        category: "Ropa"
    },
    {
        id: "Nj8902",
        name: "Pantalon Azul",
        description: "Este pantalón azul es la elección perfecta para un look elegante y cómodo. Confeccionado en tela suave y de alta calidad, ofrece un ajuste relajado que se adapta a cualquier ocasión. Su diseño versátil, con bolsillos laterales y cierre clásico, lo convierte en una prenda ideal tanto para eventos formales como para un estilo casual. El color azul profundo aporta un toque sofisticado que combina fácilmente con camisas, camisetas o chaquetas, haciendo de este pantalón un imprescindible en cualquier armario.",
        stock: 20,
        price: 1500,
        image: "/img/pantalon-azul.png",
        category: "Ropa"
    }
]
/*
const getProducts = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}

const getProductsWithoutTimeout = () => {
    return new Promise((resolve, reject)=>{
            resolve(products)
    })
}*/

export { getProducts, getProductsWithoutTimeout }