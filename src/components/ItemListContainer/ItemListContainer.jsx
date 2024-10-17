import ItemList from "./ItemList.jsx"
import hocFilterProducts from "../../hoc/hocFilterProducts.jsx"
import useProducts from "../../hooks/useProducts.jsx"
import Loading from "../Loading/Loading.jsx"

const ItemListContainer = ({product}) => {
    const { loading } = useProducts()
    return(
        <div className="text-center antialiased flex flex-col items-center col-span-3 mb-8">
            {
                loading === true ? <Loading/> : <ItemList products={product} />
            }
        </div>
    )
}

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc