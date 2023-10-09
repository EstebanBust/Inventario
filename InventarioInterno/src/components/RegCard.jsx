import { useNavigate } from "react-router-dom"
export function RegCard({ reg }) {

    const navigate = useNavigate()

    return (
        <div className="card bg-success" key={reg.id} style={{ background: "#000000" }} onClick={() => {
            navigate('/inventario/' + reg.id)
        }}>
            <div className="card-body">
                <h2 className="card-tittle">Servicio: {reg.servicio}</h2>
                <p className="card-text">Funcionario: {reg.funcionario_nombre}</p>
            </div>
        </div>
    )
}