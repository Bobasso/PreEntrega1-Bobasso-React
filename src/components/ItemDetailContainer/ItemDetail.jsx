import ContadorItem from "../ContadorItem/ContadorItem"

const ItemDetail = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row w-4/5 mx-auto px-10 my-5 justify-around italic min-h-full">
        <img src={product.image} alt={product.name} className="w-48 h-56 md:w-64 lg:w-96 md:h-full self-center my-10"/>
        <div className="text-left flex flex-col w-4/5 py-10 md:p-10">
            <p className="text-gray-600 opacity-40">{product.category}</p>
            <h2 className="text-3xl">{product.name}</h2>
            <p className="my-3 tracking-wide text-sm leading-7 w-3/5">{product.description}</p>
            <p className="not-italic"><span className="underline">Precio</span>: ${product.price}</p>
            <ContadorItem product={product}/>
        </div>
    </div>
  )
}

export default ItemDetail