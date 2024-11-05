import { useState, useEffect } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../db/db.js"
import { useParams } from "react-router-dom"

const useProducts = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    const getProducts = () =>{
        setTimeout(()=>{
            const productsRef = collection(db, "products")
            getDocs(productsRef)
                .then((dataDb)=>{
                    const productsDb = dataDb.docs.map((element) => {
                        return { id: element.id, ...element.data() }
                    })
                    setProducts(productsDb)
                })
                .finally(()=>{
                    setLoading(false)
                })
        }, 1500)
    }

    const getProductsbyCategory = () =>{
        setTimeout(()=>{
            const productsRef = collection(db, "products")
            const queryCategories = query(productsRef, where("category", "==", idCategory))
            getDocs(queryCategories)
                .then((dataDb)=>{
                    const productsDb = dataDb.docs.map((element) => {
                        return { id: element.id, ...element.data() }
                    })
                    setProducts(productsDb)
                })
                .finally(()=>{
                    setLoading(false)
                })
        }, 1500)
    }

    useEffect(()=>{
        setLoading(true)
        if(idCategory){
            getProductsbyCategory()
        } else {
            getProducts()
        }
    },[idCategory])

    return { products, loading }
}

export default useProducts