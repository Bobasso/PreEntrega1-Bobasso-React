import { BarLoader } from "react-spinners"

const Loading = () => {
  return (
    <div className="my-24">
        <h2 className="my-3">Cargando...</h2>
        <BarLoader />
    </div>
  )
}

export default Loading