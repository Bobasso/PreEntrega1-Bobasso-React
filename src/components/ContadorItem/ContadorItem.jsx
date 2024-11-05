import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"

const ContadorItem = () => {
    const [count, setCount] = useState(1)
    const [stockProduct, setStockProduct] = useState(0)
    const { idProduct } = useParams()

    const getStock = () =>{
        const docRef = doc(db, "products", idProduct)
        getDoc(docRef)
            .then((dataDb) => {
                const productDb = { id: dataDb.id, ...dataDb.data()}
                setStockProduct(productDb.stock)
            })
    }

    useEffect(()=>{
        getStock()
    }, [])

    const handleClickAdd = () => {
        setCount((prevCount) => (prevCount < stockProduct ? prevCount + 1 : prevCount));
    };

    const handleClickRemove = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    };

  return (
    <div className="flex my-5">
        <button className="w-8 bg-blue-400" onClick={handleClickRemove}>-</button>
        <p className="bg-slate-300 w-20 text-center">{count}</p>
        <button className="w-8 bg-blue-400" onClick={handleClickAdd}>+</button>
    </div>
  )
}

export default ContadorItem