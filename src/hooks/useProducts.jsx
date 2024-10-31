import { useState, useEffect } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../db/db.js"
import { useParams } from "react-router-dom"

const useProducts = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    const getProducts = () =>{
        const productsRef = collection(db, "products")
        getDocs(productsRef)
            .then((dataDb)=>{
                const productsDb = dataDb.docs.map((element) => {
                    return { id: element.id, ...element.data() }
                })
                setProducts(productsDb)
            })
    }

    const getProductsbyCategory = () =>{
        const productsRef = collection(db, "products")
        const queryCategories = query(productsRef, where("category", "==", idCategory))
        getDocs(queryCategories)
            .then((dataDb)=>{
                const productsDb = dataDb.docs.map((element) => {
                    return { id: element.id, ...element.data() }
                })
                setProducts(productsDb)
            })
    }

    useEffect(()=>{
        //setLoading(true)

        if(idCategory){
            getProductsbyCategory()
        } else {
            getProducts()
        }
        /*.then((data)=>{ // El metodo .then, nos ayuda con los resultados asincronos
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
        })*/
    },[idCategory])

    return { products, loading }
}

export default useProducts