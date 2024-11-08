import React from "react"
import { Link } from "react-router-dom"

const Item = React.memo( ({ product }) => {
  return (
    <Link to={"/product/" + product.id} className="mx-auto my-4 h-auto rounded-lg shadow-inner bg-gray-50 transition ease-in-out duration-500 hover:scale-110 hover:cursor-pointer">
        <img src={product.image} alt={product.name} className="h-36 w-36 sm:h-48 sm:w-48 px-2 py-2 border-b border-gray-500"/>
        <h2>{product.name}</h2>
        <p>{product.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
    </Link>
  )
}, (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps) )

export default Item