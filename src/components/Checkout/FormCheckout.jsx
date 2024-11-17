const FormCheckout = ({dataForm, handleChangeDataForm, handleSubmitForm}) => {
  return (
    <div className="flex items-center justify-center mt-20">
        <form onSubmit={handleSubmitForm} className="max-w-xl w-full mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">Nombre Completo</label>
                <input 
                    type="text" 
                    name="fullname" 
                    value={dataForm.fullname} 
                    onChange={handleChangeDataForm} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Ingresa tu nombre completo" 
                />
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Número de Teléfono</label>
                <input 
                    type="number" 
                    name="phone" 
                    value={dataForm.phone} 
                    onChange={handleChangeDataForm} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Ingresa tu número de teléfono" 
                />
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={dataForm.email} 
                    onChange={handleChangeDataForm} 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Ingresa tu email" 
                />
            </div>
            
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Enviar mi orden
            </button>
        </form>
    </div>
  )
}

export default FormCheckout