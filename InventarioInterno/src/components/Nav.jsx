import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'

export function Nav() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authToken = sessionStorage.getItem('authToken');

        if (location.pathname === '/login') {
            setIsLoggedIn(false);
        } else {
            // Otras condiciones para establecer isLoggedIn en true
            // Puedes agregar más lógica según tus necesidades
            setIsLoggedIn(!!authToken);
        }
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem('authToken');
        setIsLoggedIn(false);
        navigate("/login");
        toast.success("Sesion finalizada!");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {isLoggedIn ? (
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item bg-primary rounded">
                                <Link className="nav-link" to="/inventario">Listar</Link>
                            </li>
                            <li className="nav-item bg-secondary rounded">
                                <Link className="nav-link" to="/inventario/crear">Crear</Link>
                            </li>
                        </ul>
                    </div>
                ) : (<div className="collapse navbar-collapse" id="navbarNav"></div>)
                }


                {isLoggedIn ? (
                    <div>
                        <div className="btn btn-dark" onClick={handleLogout}>Logout</div>
                    </div>
                ) : (
                    <div className="nav-item" >
                        <Link className="btn btn-dark" to="/login">Login</Link>
                    </div>
                )
                }
            </div>
        </nav>
    )
}