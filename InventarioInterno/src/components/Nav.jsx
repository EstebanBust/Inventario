import { Link } from 'react-router-dom';

export function Nav() {
    const authToken = localStorage.getItem('authToken');
    // const elemento1 = document.getElementById('contoken');
    // const elemento2 = document.getElementById('sintoken');

    // if (authToken) {
        
    //     elemento1.style.display = 'block';
    //     elemento2.style.display = 'none'; 
    //   } else {
       
    //     elemento1.style.display = 'none';
    //     elemento2.style.display = 'block';
    //   }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container" id="contoken">
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
                </div>
                <div className="nav-item" id="sintoken">
                    <Link className="btn btn-dark" to="/login">Login</Link>
                </div>
            </div>
        </nav>
    )
}