import { HiShoppingCart } from "react-icons/hi";

const CartWidget = () => {
    return(
        <div className="flex flex-row text-white">
            <button className="h-8">
                <HiShoppingCart className="h-5 w-5 sm:h-8 sm:w-8"/>
            </button>
            <p className="text-sm hover:cursor-default">0</p>
        </div>
    )
}

export default CartWidget