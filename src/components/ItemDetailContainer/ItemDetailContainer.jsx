import { useState, useEffect } from "react"
import { getProductsWithoutTimeout } from "../../data/data.js"
import ItemDetail from "./ItemDetail.jsx" 
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct]= useState({})
    const { idProduct } = useParams()

    useEffect(()=>{
        getProductsWithoutTimeout()
            .then((data)=>{
                const findProduct = data.find( (product)=> product.id === idProduct )
                setProduct(findProduct)
            })
    }, [idProduct])

    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer