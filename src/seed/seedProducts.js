import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
        id: "Ac1121",
        name: "Reloj de Pulsera Clásico",
        description: "Reloj analógico con diseño minimalista y correa de cuero, resistente al agua.",
        stock: 15,
        price: 3000,
        image: "/img/reloj-pulsera.png",
        category: "Accesorios"
    },      
    {
        id: "Ac2122",
        name: "Gafas de Sol Polarizadas",
        description: "Gafas de sol con lentes polarizados que reducen el deslumbramiento, ideales para actividades al aire libre.",
        stock: 25,
        price: 1200,
        image: "/img/gafas.webp",
        category: "Accesorios"
    }
]    

const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map(( { id, ...dataProduct} )=>{
        addDoc(productsRef, dataProduct)
    })

    console.log("Productos subidos")
    return
}

seedProducts()