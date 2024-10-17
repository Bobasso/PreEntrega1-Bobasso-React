const Item = ({ product }) => {
  return (
    <div className="mx-auto my-4 h-auto rounded-lg shadow-inner bg-gray-50 transition ease-in-out hover:scale-110 hover:cursor-pointer">
        <img src={product.image} alt={product.name} className="h-36 w-36 sm:h-48 sm:w-48 px-2 py-2 border-b border-gray-500"/>
        <h2>{product.name}</h2>
        <p>${product.price}</p>
    </div>
  )
}

export default Item