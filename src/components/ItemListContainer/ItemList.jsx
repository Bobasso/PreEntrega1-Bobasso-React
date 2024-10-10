import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 md:m-1 lg:grid-cols-4 xl:grid-cols-5 w-4/6">
        {
            products.map((product)=>(
                <Item product={product} key={product.id}/>
            ))
        }
    </div>
  )
}

export default ItemList