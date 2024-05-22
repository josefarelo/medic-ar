import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './IniciarSesion.scss';
import NavOut from "./NavBarLogOut";
import FooterBar from './FooterBar';

export default function IniciarSesion() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [selectedRadio, setSelectedRadio] = useState('nRadio');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    userType: selectedRadio
                }),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userType', selectedRadio);
                const redirectUrl = selectedRadio === 'nRadio' ? "/inicio" : "/inicio-profesional";
                window.location.href = redirectUrl;
            } else {
                alert(data.error || "El email o la contraseña ingresados son incorrectos");
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert("Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.");
        }
    };

    return (
        <>
            <NavOut />
            <main className='main-login'>
                <div className="sign-in-container">
                    <div className="heading">Iniciar Sesión</div>
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="user-or-pro-radio">
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="radio"
                                    id='nRadio'
                                    checked={selectedRadio === 'nRadio'}
                                    onChange={() => setSelectedRadio('nRadio')}
                                />
                                <span className="radio-name">Usuario</span>
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="radio"
                                    id='pRadio'
                                    checked={selectedRadio === 'pRadio'}
                                    onChange={() => setSelectedRadio('pRadio')}
                                />
                                <span className="radio-name">Profesional</span>
                            </label>
                        </div>
                        <input
                            className="input-form"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Correo Electrónico"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className="input-form"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <span className="forgot-password">
                            <a className="fpassword-link" href="#">Olvidaste tu contraseña ?</a>
                        </span>
                        <input
                            className="login-button"
                            type="submit"
                            value="Iniciar Sesión"
                        />
                    </form>
                    <div className="not-acc-container">
                        <span className="not-acc-title">¿No tenés cuenta?</span>
                        <Link to='/registrarse' className='not-acc-link'>Registrate</Link>
                    </div>
                    <span className="agreement">
                        <Link className='agreement-link' to="/acuerdo-con-el-usuario">Leer Acuerdo con el Usuario</Link>
                    </span>
                </div>
            </main>
            <FooterBar />
        </>
    );
}
