import { useState, useEffect } from "react"

const Contacto = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNumber(event.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const user = {name, email, number}
    console.log(user)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <label htmlFor="">Nombre Completo</label>
        <input type="text" value={name} onChange={handleChangeName}/>

        <label htmlFor="">Email</label>
        <input type="text" value={email} onChange={handleChangeEmail}/>

        <label htmlFor="">Telefono</label>
        <input type="text" value={number} onChange={handleChangeNumber}/>

        <label htmlFor="">Mensaje</label>
        <textarea name="" id="" rows="6" placeholder="Tu mensaje..."></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contacto