import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 md:m-1">
        {
            products.map((product)=>(
                <Item product={product} key={product.id}/>
            ))
        }
    </div>
  )
}

export default ItemList