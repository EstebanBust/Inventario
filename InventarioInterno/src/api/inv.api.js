import axios from 'axios'

const urlApi = axios.create({ baseURL: 'http://127.0.0.1:8000/inventario/api/' })
const authToken = sessionStorage.getItem('authToken');
if (authToken) {
    urlApi.defaults.headers.common['Authorization'] = `Token ${authToken}`;
}

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

export const putUpdate = (id, reg) => {
    return urlApi.put("/reg/" + id + "/", reg)
}

export const getRegistroPorId = (id) => {
    return urlApi.get("/reg/" + id + "/")
}

export const login = (data) => {
    return urlApi.post("/login/", data)
}