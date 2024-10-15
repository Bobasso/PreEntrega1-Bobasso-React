const Filter = ({query, changeInput, setTypeOrder }) => {
  return (
    <div className="grid justify-items-center sm:h-44 my-3 sm:my-6 sm:mx-6 gap-2 sm:gap-4">
        <input type="text" placeholder="Buscar" value={query} onChange={changeInput} className="w-44 md:w-52 h-6 p-3 rounded-md border-2 border-black"/>
        <p>Ordernar por:</p>
        <button onClick={()=>setTypeOrder("minor")} className="p-1 w-32 rounded-md border-2 border-gray-500 text-sm transition ease-in-out hover:bg-gray-500 focus:bg-gray-500">Menor Precio</button>
        <button onClick={()=>setTypeOrder("mayor")} className="p-1 w-32 rounded-md border-2 border-gray-500 text-sm transition ease-in-out hover:bg-gray-500 focus:bg-gray-500">Mayor Precio</button>
    </div>
  )
}

export default Filter