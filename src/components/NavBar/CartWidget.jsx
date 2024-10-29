import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return(
        <Link to="/cart" className="flex flex-row text-white">
            <button className="h-8">
                <HiShoppingCart className="h-5 w-5 sm:h-8 sm:w-8"/>
            </button>
            <p className="text-sm hover:cursor-default">0</p>
        </Link>
    )
}

export default CartWidget