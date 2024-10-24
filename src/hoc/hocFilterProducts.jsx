import useProducts from "../hooks/useProducts"
import { useState } from "react"
import Filter from "../components/Filter/Filter"

const hocFilterProducts = (Component) => {
    return function () {
        const { products } = useProducts()
        const [query, setQuery] = useState("")
        const [typeOrder, setTypeOrder] = useState("")

        const changeInput = (event)=>{
            setQuery(event.target.value.toLowerCase())
        }

        const search = ()=>{
            let filterProducts = products.filter((product)=>(
                product.name.toLowerCase().includes(query)
            ))

            if(typeOrder === "minor"){
                filterProducts = filterProducts.sort((prevProduct, nextProduct)=> prevProduct.price - nextProduct.price)
            }else if(typeOrder === "mayor"){
                filterProducts = filterProducts.sort((prevProduct, nextProduct)=> nextProduct.price - prevProduct.price)
            }

            return filterProducts
        }

        return(
            <div className="sm:grid sm:grid-cols-4">
                <Filter query={query} changeInput={changeInput} setTypeOrder={setTypeOrder} />
                <Component product={search()}/>
            </div>
        )
    }
}

export default hocFilterProducts