import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getArma, getCamara, getCarabina, getEscopeta, getFuncionario, postReg, deleteReg, putUpdate, getRegistroPorId } from '../api/inv.api';
import { useNavigate, useParams } from 'react-router-dom';

export function InvCrear() {
    const [funcionarios, setFuncionarios] = useState([]);
    const [armas, setArmas] = useState([]);
    const [escopetas, setEscopetas] = useState([]);
    const [camaras, setCamaras] = useState([]);
    const [carabinas, setCarabinas] = useState([]);

    const params = useParams();
    console.log(params.funcionario)
    const navigate = useNavigate();

    useEffect(() => {
        // Realizar una solicitud al servidor para obtener datos de funcionarios, armas, escopetas, cámaras y carabinas
        async function fetchData() {
            try {
                const funcionariosResponse = await getFuncionario();
                const armasResponse = await getArma();
                const escopetasResponse = await getEscopeta();
                const camarasResponse = await getCamara();
                const carabinasResponse = await getCarabina();

                setFuncionarios(funcionariosResponse.data);
                setArmas(armasResponse.data);
                setEscopetas(escopetasResponse.data);
                setCamaras(camarasResponse.data);
                setCarabinas(carabinasResponse.data);
            } catch (error) {
                console.error('Error al obtener datos del servidor:', error);
            }
            if (params.id) {
                const response = await getRegistroPorId(params.id);
                console.log(response);

                // Llenar los campos del formulario con los valores obtenidos
                const {
                    servicio,
                    funcionario,
                    arma_puno,
                    escopeta,
                    escopeta_relacion,
                    camara,
                    camara_relacion,
                    carabina_lanza_gases,
                    carabina_lanza_gases_relacion,
                    extra
                } = response.data;

                // Usa los nombres de los campos exactamente como los registraste en useForm
                setValue('servicio', servicio);
                setValue("funcionario", funcionario);
                setValue("arma_puno", arma_puno);
                setValue("escopeta", escopeta);
                setValue("escopeta_relacion", escopeta_relacion);
                setValue("camara", camara);
                setValue("camara_relacion", camara_relacion);
                setValue("carabina_lanza_gases", carabina_lanza_gases);
                setValue("carabina_lanza_gases_relacion", carabina_lanza_gases_relacion);
                setValue("extra", extra);
            }
        }

        fetchData();
    }, [params.id]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            putUpdate(params.id, data)

        } else {
            try {
                const response = await postReg(data);

            } catch (error) {
                console.error(error);
            }
        }
    });


    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="servicio">Servicio:</label>
                    <input {...register("servicio", { required: true })} type="text" id="servicio" placeholder="Servicio" />
                    {errors.servicio && <span>Este campo es requerido</span>}
                </div>

                <div>
                    <label htmlFor="funcionario">Funcionario:</label>
                    <select {...register("funcionario")} id="funcionario" default="----">
                        <option value="">-----------</option>
                        {funcionarios.map((funcionario) => (
                            <option key={funcionario.id} value={funcionario.id}>
                                {funcionario.grado + " " + funcionario.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="arma">Arma:</label>
                    <select {...register("arma_puno")} id="arma_puno">
                        <option value="">-----------</option>
                        {armas.map((arma) => (
                            <option key={arma.numero_serie} value={arma.numero_serie}>
                                {arma.numero_serie}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="escopeta">¿Tiene Escopeta?:</label>
                    <input type='checkbox' id='escopeta'{...register("escopeta")}></input>
                    <select {...register("escopeta_relacion")} id="escopeta_relacion">
                        <option value="">-----------</option>
                        {escopetas.map((arma) => (
                            <option key={arma.numero_serie} value={arma.numero_serie}>
                                {arma.numero_serie}
                            </option>
                        ))}</select>
                </div>

                <div>
                    <label htmlFor="camara">¿Tiene Cámara?:</label>
                    <input type='checkbox' id='camara'{...register("camara")}></input>
                    <select {...register("camara_relacion")} id="camara_relacion">
                        <option value="">-----------</option>
                        {camaras.map((arma) => (
                            <option key={arma.numero_serie} value={arma.numero_serie}>
                                {arma.numero_serie}
                            </option>
                        ))}</select>
                </div>

                <div>
                    <label htmlFor="carabina">¿Tiene Carabina?:</label>
                    <input type='checkbox' id='carabina_lanza_gases'{...register("carabina_lanza_gases")}></input>
                    <select {...register("carabina_lanza_gases_relacion")} id="carabina_lanza_gases_relacion">
                        <option value="">-----------</option>
                        {carabinas.map((arma) => (
                            <option key={arma.numero_serie} value={arma.numero_serie}>
                                {arma.numero_serie}
                            </option>
                        ))}</select>
                </div>

                <div>
                    <label htmlFor="extra">Otro cargo(requerido):</label>
                    <textarea {...register("extra")} id="extra" cols="30" rows="10" placeholder="Otro cargo"></textarea>
                    {errors.extra && <span>Este campo es requerido</span>}
                    {console.log(errors.extra)}
                </div>

                <button type="submit">Guardar</button>
                {params.id && <button onClick={() => {
                    const accepted = window.confirm('estas seguro?')
                    if (accepted) {
                        deleteReg(params.id)
                        navigate("/inventario/")
                    }
                }} >Borrar</button>}
            </form>
        </div>
    );
}
