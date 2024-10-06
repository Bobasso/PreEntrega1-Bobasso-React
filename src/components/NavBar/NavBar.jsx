import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="brand">
                <h2>Ecommerce</h2>
            </div>

            <ul className="menu">
                <li><a href="">Inicio</a></li>
                <li><a href="">Periféricos</a></li>
                <li><a href="">Componentes PC</a></li>
                <li><a href="">Contacto</a></li>
            </ul>

            <CartWidget/>
        </nav>
    )
}

export default NavBar