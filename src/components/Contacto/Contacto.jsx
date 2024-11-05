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
<div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
  <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
    <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Contáctanos</h2>
    <form onSubmit="{handleSubmit}" class="space-y-4">
      <div>
        <label for="name" class="block text-gray-700 font-semibold">Nombre Completo</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange="{handleChangeName}"
          class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 transition"
          placeholder="Ingresa tu nombre"
          required
        />
      </div>

      <div>
        <label for="email" class="block text-gray-700 font-semibold">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange="{handleChangeEmail}"
          class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 transition"
          placeholder="Ingresa tu correo"
          required
        />
      </div>

      <div>
        <label for="number" class="block text-gray-700 font-semibold">Teléfono</label>
        <input
          type="tel"
          id="number"
          value={number}
          onChange="{handleChangeNumber}"
          class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 transition"
          placeholder="Ingresa tu teléfono"
        />
      </div>

      <div>
        <label for="message" class="block text-gray-700 font-semibold">Mensaje</label>
        <textarea
          id="message"
          rows="4"
          placeholder="Tu mensaje..."
          class="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 transition"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-amber-700 text-white font-semibold py-3 rounded-lg hover:bg-amber-800 transition"
      >
        Enviar
      </button>
    </form>
  </div>
</div>
  )
}

export default Contacto