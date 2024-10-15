const Filter = ({query, changeInput, setTypeOrder }) => {
  return (
    <div>
        <input type="text" placeholder="Buscar" value={query} onChange={changeInput}/>

        <button onClick={()=>setTypeOrder("minor")}>Menor Precio</button>
        <button onClick={()=>setTypeOrder("mayor")}>Mayor Precio</button>
    </div>
  )
}

export default Filter