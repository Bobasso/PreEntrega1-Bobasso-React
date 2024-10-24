const ItemDetail = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row w-4/5 mx-auto my-5 justify-around italic min-h-full">
        <img src={product.image} alt="" className="w-48 h-56 md:w-64 lg:w-96 md:h-full self-center"/>
        <div className="text-left flex flex-col w-4/5 py-10 md:p-10">
            <p className="text-gray-600 opacity-40">{product.category}</p>
            <h2 className="text-3xl">{product.name}</h2>
            <p className="my-3 tracking-wide text-sm leading-7">{product.description}</p>
            <p className="not-italic">Precio: ${product.price}</p>
        </div>
    </div>
  )
}

export default ItemDetail