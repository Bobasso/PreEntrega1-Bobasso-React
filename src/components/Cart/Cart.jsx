import { Link } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

  return (
    <div>
      <section className="bg-gray-100 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                  {
                    cart.length === 0 ? (
                      <p className="text-center text-gray-500">Tu carrito está vacío. <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 underline hover:no-underline">¿Te gustaría agregar productos?</Link></p>
                    ) : (
                      cart.map((productCart) => (
                        <div key={productCart.id} className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <img className="h-20 w-20 my-5" src={productCart.image} alt={productCart.name} />
                        
                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                            <div className="flex items-center">
                              <p>Cantidad: {productCart.quantity}</p>
                            </div>
                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-base text-gray-300">c/u: {productCart.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
                            </div>
                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-base font-bold text-gray-900">{(productCart.quantity * productCart.price).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
                            </div>
                          </div>

                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <Link to={"/product/" + productCart.id} className="text-base font-medium text-gray-900 hover:underline">{productCart.name}</Link>
                            <div className="flex items-center gap-4">
                              <button type="button" onClick={() => deleteProductById(productCart.id)} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline">
                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )
                  }
                </div>
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-xl font-semibold text-gray-900">Resumen del pedido</p>
                    {
                      cart.length === 0 ? (
                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-gray-500">Aquí verás los importes de tu compra una vez que agregues productos.</dt>
                        </dl>
                      ) : (
                        <>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500">Precio Original</dt>
                                <dd className="text-base font-medium text-gray-900">{totalPrice().toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</dd>
                              </dl>
                              <dl className="flex items-center justify-between gap-4">
                                <dt className="text-base font-normal text-gray-500">Pickup Tienda</dt>
                                <dd className="text-base font-medium text-gray-900">$ 99</dd>
                              </dl>
                            </div>
                            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                              <dt className="text-base font-bold text-gray-900">Precio Total</dt>
                              <dd className="text-base font-bold text-gray-900">{(totalPrice() + 99).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</dd>
                            </dl>
                          </div>
                          <button className="flex w-full items-center justify-center rounded-lg bg-amber-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300">Ir a pagar</button>
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                            <Link to="/" title="" className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 underline hover:no-underline">
                              Continue Shopping
                              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                              </svg>
                            </Link>
                          </div>
                        </>
                      )
                    }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart