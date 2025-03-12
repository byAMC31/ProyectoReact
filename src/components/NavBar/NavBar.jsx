
import LogoNasa from '/src/assets/Nasa.png'
import './NavBar.css'
import Button from '../Button/Button'
import { NavLink, Link } from 'react-router'

function NavBar() {
    return (
        <nav className='navbar--container'>

            <div className='navbar--logo'>
                <Link to="/">
                <img src={LogoNasa} alt="logo nasa" />
                </Link> 
                {/* Link: no cambia los estados */}
            </div>


            {/* Menú y  botón*/}
            <div className='navbar--menu'>
                {/* Menus */}
                <div className='menu--links'>
                    <NavLink to="/astros">
                        Astros
                    </NavLink>
                     
                    <a href="">NASA</a>
                    <a href="">ISS</a>
                </div>

                {/* Botón */}
                <Link to="login">
                <Button texto="Entrar" />
                </Link>

            </div>
        </nav>

    )
}
export default NavBar