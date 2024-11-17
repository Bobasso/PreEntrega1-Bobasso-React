import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"

const Checkout = () => {
    const[dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })
  
    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalPrice, deleteCart } = useContext(CartContext)

    const handleChangeDataForm = (event) => {
        setDataForm({...dataForm, [event.target.name]: event.target.value})
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()

        const order = {
            buyer: {...dataForm},
            items: [...cart],
            total: (totalPrice() + 99),
            date: Timestamp.fromDate(new Date())
        }

        uploadOrder(order)
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder)
            .then((response) => setIdOrder(response.id))
            .catch((error) => console.log(error))
            .finally(()=>{
                updateStock()
            })
    }

    const updateStock = () => {
        cart.map(({ id, quantity, ...dataProduct }) => {
            const productRef = doc(db, "products", id)
            setDoc(productRef, { ...dataProduct, stock: dataProduct.stock - quantity })
        })
        deleteCart()
    }

    return (
        <div>
            {
                idOrder === null ? (
                    <FormCheckout 
                    dataForm={dataForm} 
                    handleChangeDataForm={handleChangeDataForm} 
                    handleSubmitForm={handleSubmitForm} />
                ) : (
                    <div>
                        <h2>Orden creada con éxito</h2>
                        <p>Porfavor guarde su numero de seguimiento: {idOrder}</p>
                        <Link to="/">Volver al inicio</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Checkout