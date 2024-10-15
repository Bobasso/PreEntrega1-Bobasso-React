import { PulseLoader } from "react-spinners"

const Loading = () => {
  return (
    <div className="my-24">
        <h2>Cargando...</h2>
        <PulseLoader />
    </div>
  )
}

export default Loading