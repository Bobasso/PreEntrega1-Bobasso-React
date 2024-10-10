const Item = ({ product }) => {
  return (
    <div className="mx-auto my-4 h-auto border rounded-lg">
        <img src={product.image} alt={product.name} className="h-32 w-32 sm:h-48 sm:w-48 px-2 py-2 border-b"/>
        <h2>{product.name}</h2>
        <p>${product.price}</p>
    </div>
  )
}

export default Item