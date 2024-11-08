import { useState, useEffect } from "react"

const Contacto = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [message, setMessage] = useState("")

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNumber(event.target.value)
  }

  const handleMessage = (event) => {
    setMessage(event.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setName("")
    setEmail("")
    setNumber("")
    setMessage("")
  }

  return (
    <div className="min-h-20 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">Nombre Completo</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChangeName}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 transition"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 transition"
              placeholder="Ingresa tu correo"
              required
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-gray-700 font-semibold">Teléfono</label>
            <input
              type="tel"
              id="number"
              value={number}
              onChange={handleChangeNumber}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 transition"
              placeholder="Ingresa tu teléfono"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold">Mensaje</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={handleMessage}
              placeholder="Tu mensaje..."
              className="w-full min-h-28 max-h-60 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 transition"
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-amber-700 text-white font-semibold py-3 rounded-lg hover:bg-amber-800 transition">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contacto