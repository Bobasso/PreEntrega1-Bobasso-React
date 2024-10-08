const Item = ({ product }) => {
  return (
    <div className="mx-auto my-4 h-auto">
        <img src={product.image} alt={product.name} className="h-32 w-32 sm:h-48 sm:w-48"/>
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
    </div>
  )
}

export default Item