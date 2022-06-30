import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink className="btn btn-outline-primary" to="/inicio">
                    Lista de contactos
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/crear">
                     Crear Contacto
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/editar">
                    Editar Contacto
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/eliminar">
                    Eliminar Contacto
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
