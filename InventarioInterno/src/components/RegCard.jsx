import { useNavigate } from "react-router-dom"
export function RegCard({ reg }) {

    const navigate = useNavigate()

    return (
        <div key={reg.id} style={{ background: "#000000" }} onClick={() => {
            navigate('/inventario/' + reg.id)
        }}>
            <h2>Servicio: {reg.servicio}</h2>
            <p>Funcionario: {reg.funcionario_nombre}</p>
            <hr />
        </div>
    )
}