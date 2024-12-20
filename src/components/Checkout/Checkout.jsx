import { useState, useEffect } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"

const Checkout = () => {
    const[dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate();

    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalPrice, deleteCart } = useContext(CartContext)

    const handleChangeDataForm = (event) => {
        setDataForm({...dataForm, [event.target.name]: event.target.value})
    }

    const handleSubmitForm = async(event) => {
        event.preventDefault()

        const order = {
            buyer: {...dataForm},
            items: [...cart],
            total: (totalPrice() + 99),
            date: Timestamp.fromDate(new Date())
        }

        try{
            const response = await validateForm(dataForm)
            if(response.status === "error") throw new Error(response.message)
            
            toast.success("Subiendo orden...")
            uploadOrder(order)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder)
            .then((response) => {
                setIdOrder(response.id)
                setShowAlert(true)
            })
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

    useEffect(() => {
        if (showAlert && idOrder) {
            Swal.fire({
                text: 'Orden creada con éxito',
                icon: 'success',
                text: "Por favor guarde su número de orden: " + idOrder,
                confirmButtonText: 'Volver al inicio',
                customClass: {
                    confirmButton: 'bg-white text-black hover:bg-gray-200 focus:ring-gray-300',
                }
            }).then((result) => {
                if (result) {
                    navigate('/');
                }
                setShowAlert(false);
            });
        }
    }, [showAlert, idOrder]);

    return (
        <div>
            <FormCheckout 
            dataForm={dataForm} 
            handleChangeDataForm={handleChangeDataForm} 
            handleSubmitForm={handleSubmitForm} />
        </div>
    )
}

export default Checkout