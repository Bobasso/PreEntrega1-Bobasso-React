import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"

const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        getProducts()
        .then((data)=>{ // El metodo .then, nos ayuda con los resultados asincronos
            setProducts(data)
        })
        .catch((error)=>{ // El metodo .cacth, nos ayuda para tomar el error de nuestra promesa
            console.error(error)
        })
        .finally(()=>{ // El metodo .finally, independientemente de si se resuelve o no, se ejecuta cuando la promesa termina
            console.log("Finalizo la promesa")
        })
    },[])

    return(
        <div className="text-center antialiased">
            <h1 className="mx-0 my-4 underline">
                {saludo}
            </h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer