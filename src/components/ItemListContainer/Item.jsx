const Item = ({ product }) => {
  return (
    <div className="mx-auto my-4 h-auto border border-gray-500 rounded-lg shadow-lg bg-gray-50">
        <img src={product.image} alt={product.name} className="h-36 w-36 sm:h-48 sm:w-48 px-2 py-2 border-b border-gray-500"/>
        <h2>{product.name}</h2>
        <p>${product.price}</p>
    </div>
  )
}

export default Item