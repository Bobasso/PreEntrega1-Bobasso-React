import { useState, useEffect } from "react"
import { getProducts } from "../data/data.js"
import { useParams } from "react-router-dom"

const useProducts = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(()=>{
        setLoading(true)

        getProducts()
        .then((data)=>{ // El metodo .then, nos ayuda con los resultados asincronos
            if(idCategory){
                const filterProducts = data.filter( (product) => product.category === idCategory)
                setProducts(filterProducts)
            }else{
                setProducts(data)
            }
        })
        .catch((error)=>{ // El metodo .cacth, nos ayuda para tomar el error de nuestra promesa
            console.error(error)
        })
        .finally(()=>{ // El metodo .finally, independientemente de si se resuelve o no, se ejecuta cuando la promesa termina
            setLoading(false)
        })
    },[idCategory])

    return { products, loading }
}

export default useProducts