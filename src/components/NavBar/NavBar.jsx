import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="brand">
                <h2>Ecommerce</h2>
            </div>

            <ul className="menu">
                <li>Inicio</li>
                <li>Periféricos</li>
                <li>Componentes PC</li>
                <li>Contacto</li>
            </ul>

            <CartWidget/>
        </nav>
    )
}

export default NavBar