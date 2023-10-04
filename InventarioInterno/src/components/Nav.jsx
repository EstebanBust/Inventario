import {Link} from 'react-router-dom'

export function Nav(){
    return(
        <div>
            <Link to="/inventario">Listar </Link>
            
            <Link to="/inventario/crear">Crear </Link>
        </div>
    )
}