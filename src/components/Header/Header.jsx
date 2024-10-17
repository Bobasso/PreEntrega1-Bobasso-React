import imgHeader from "../../assets/header.jpg"

const Header = () => {
  return (
    <div className="relative h-56 sm:h-80 md:h-96 bg-cover bg-center flex flex-col text-center justify-center gap-8" style={{ backgroundImage: `url(${imgHeader})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="relative font-bold text-4xl text-white z-10">Ropa sin Frontera</h2>
        <p className="relative font-semibold text-lg text-gray-100 z-10">La tienda que buscabas</p>
    </div>
  )
}

export default Header