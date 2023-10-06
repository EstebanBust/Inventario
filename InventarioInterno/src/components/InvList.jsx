import { useEffect, useState } from "react";
import { getAllReg } from '../api/inv.api';
import { RegCard } from './RegCard';

export function InvList() {
    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        async function loadInv() {
            try {
                const res = await getAllReg();
                console.log("Respuesta de la consulta:", res);
                // Verifica si res.data es un arreglo válido antes de actualizar el estado.
                if (Array.isArray(res.data)) {
                    setRegistros(res.data);
                } else {
                    console.error("La respuesta no contiene datos válidos:", res);
                }
            } catch (error) {
                console.error("Error al cargar registros:", error);
            }
        }

        loadInv();
    }, []);

    return (
        <div>
            <h1>Lista de Registros</h1>
            {registros.map((registro) => (
                <RegCard key={registro.id} reg={registro} />
            ))}
        </div>
    );
}
