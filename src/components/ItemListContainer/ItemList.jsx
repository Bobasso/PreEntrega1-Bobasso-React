import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
        {
            products.map((product)=>(
                <Item product={product} key={product.id}/>
            ))
        }
    </div>
  )
}

export default ItemList