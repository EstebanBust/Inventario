import axios from 'axios'

const urlApi = axios.create({ baseURL: 'http://127.0.0.1:8000/inventario/api/' }) 

export const getAllReg = () => {
    return urlApi.get("/reg/") 
}

export const getArma = () => {
    return urlApi.get("/arma/") 
}

export const getCamara = () => {
    return urlApi.get("/camara/") 
}

export const getEscopeta = () => {
    return urlApi.get("/escopeta/") 
}

export const getCarabina = () => {
    return urlApi.get("/carabina/") 
}

export const getFuncionario = () => {
    return urlApi.get("/funcionario/") 
}

export const postReg = (reg) => {
    return urlApi.post("/reg/", reg) 
}

export const deleteReg = (id) => {
    return urlApi.delete('/reg/' + id)
}