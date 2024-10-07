import { HiShoppingCart } from "react-icons/hi";

const CartWidget = () => {
    return(
        <div className="flex flex-row text-white">
            <button className="h-8">
                <HiShoppingCart/>
            </button>
            <p className="text-s">0</p>
        </div>
    )
}

export default CartWidget