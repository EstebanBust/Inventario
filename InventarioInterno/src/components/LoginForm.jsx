import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import { login } from '../api/inv.api'

export function LoginForm() {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        try {
            const response = await login(data);
            sessionStorage.setItem('authToken', response.data.token);
            navigate("/inventario");
            window.location.reload();
            toast.success("Login con exito!");
        } catch {
            console.error(error);
        }

    });

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="user">Usuario</label>
                <input {...register("username")} type="user" className="form-control" id="user" aria-describedby="userHelp" placeholder="Ingrese user" />
                <small id="userHelp" className="form-text text-muted">No comparta sus datos de usuario.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input {...register("password")} type="password" className="form-control" id="password" placeholder="Contraseña" />
            </div>
            <div className="form-check">
                {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/> */}
                {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
            </div>
            <button type="submit" className="btn btn-dark">Login</button>
        </form>
    );
}