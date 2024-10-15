import { useState, useEffect } from "react"
import { getProducts } from "../data/data.js"

const useProducts = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)

        getProducts()
        .then((data)=>{ // El metodo .then, nos ayuda con los resultados asincronos
            setProducts(data)
        })
        .catch((error)=>{ // El metodo .cacth, nos ayuda para tomar el error de nuestra promesa
            console.error(error)
        })
        .finally(()=>{ // El metodo .finally, independientemente de si se resuelve o no, se ejecuta cuando la promesa termina
            setLoading(false)
        })
    },[])

    return { products, loading }
}

export default useProducts