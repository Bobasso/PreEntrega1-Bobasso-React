import { useState } from "react";

const ContadorItem = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

    const handleClickAdd = () => {
        setCount((prevCount) => (prevCount < stock ? prevCount + 1 : prevCount));
    };

    const handleClickRemove = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    };

    return(
        <div className="flex flex-col">
            <div className="flex items-center my-5">
                <button className="w-8 bg-amber-700 hover:bg-amber-800 active:bg-amber-800 text-white" onClick={handleClickRemove}>-</button>
                <p className="bg-slate-100 w-20 text-center">{count}</p>
                <button className="w-8 bg-amber-700 hover:bg-amber-800 active:bg-amber-800 text-white" onClick={handleClickAdd}>+</button>
            </div>
            <button className="bg-amber-700 hover:bg-amber-800 active:bg-amber-800 text-white py-2 px-4 rounded w-full md:w-4/5 xl:w-2/5" onClick={ () => addProduct(count) }>Agregar al carrito</button>
        </div>
    )
}

export default ContadorItem