import { Link } from 'react-router-dom'

export function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-5">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/inventario">Listar </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/inventario/crear">Crear </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}