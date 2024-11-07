import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to="/cart" className="flex flex-row text-white">
            <button className="h-8">
                <HiShoppingCart className="h-5 w-5 sm:h-8 sm:w-8"/>
            </button>
            <p className="text-sm hover:cursor-default">{ totalQuantity() }</p>
        </Link>
    )
}

export default CartWidget