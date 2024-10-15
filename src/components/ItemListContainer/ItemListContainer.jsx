import ItemList from "./ItemList.jsx"
import hocFilterProducts from "../../hoc/hocFilterProducts.jsx"

const ItemListContainer = ({product}) => {
    return(
        <div className="text-center antialiased flex flex-col items-center col-span-3">
            <ItemList products={product} />
        </div>
    )
}

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc