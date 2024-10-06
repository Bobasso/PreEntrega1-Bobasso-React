import { HiShoppingCart } from "react-icons/hi";

const CartWidget = () => {
    return(
        <div className="cart">
            <button>
                <HiShoppingCart/>
            </button>
            <p>0</p>
        </div>
    )
}

export default CartWidget