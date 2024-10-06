import { HiShoppingCart } from "react-icons/hi";

const CartWidget = () => {
    return(
        <div className="cart">
            <HiShoppingCart size={30} color="white"/>
            <p>0</p>
        </div>
    )
}

export default CartWidget