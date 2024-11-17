const FormCheckout = ({dataForm, handleChangeDataForm, handleSubmitForm}) => {
  return (
    <div>
        <form onSubmit={handleSubmitForm}>
            <label>Nombre Completo</label>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeDataForm}/>

            <label>Número de telefono</label>
            <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeDataForm}/>

            <label>Email</label>
            <input type="email" name="email" value={dataForm.email} onChange={handleChangeDataForm}/>

            <button>Enviar mi orden</button>
        </form>
    </div>
  )
}

export default FormCheckout