import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registrarse.scss';
import NavOut from "./NavBarLogOut";
import FooterBar from './FooterBar';
import { text } from '@fortawesome/fontawesome-svg-core';


export default function Registrarse() {

    const [nName, setNName] = useState("");
    const [nSurname, setNSurname] = useState("");
    const [nDni, setNDni] = useState("");
    const [nBirthdate, setNBirthdate] = useState("");
    const [nEmail, setNEmail] = useState("");
    const [nPassword, setNPassword] = useState("");
    const [nRpassword, setNRpassword] = useState("");
    const [nPassVerified, setNPassVerified] = useState("");

    
    const [pName, setPName] = useState("");
    const [pSurname, setPSurname] = useState("");
    const [pDni, setPDni] = useState("");
    const [pTuition, setPTuition] = useState("");
    const [pBirthdate, setPBirthdate] = useState("");
    const [pEmail, setPEmail] = useState("");
    const [pPassword, setPPassword] = useState("");
    const [pRpassword, setPRpassword] = useState("");
    const [pPassVerified, setPPassVerified] = useState("");


// Verificación de igualdad en contraseñas    
    const nVerifyPassword = () => {
        if (nPassword !== '' && nRpassword !== '') {
            if (nPassword !== nRpassword) {
                setNPassVerified(<p className="error"><strong>Error: </strong>¡Las contraseñas no coinciden!</p>);
            } else {
                setNPassVerified(<p className="correct"><strong>✓ Correcto: </strong>Los datos son correctos!</p>);
            }
        } else {
            setNPassVerified(<p className="error"><strong>Error: </strong>¡Los campos no deben estar vacíos!</p>);
        }
    }
    const nEnterSend = (e) => {
        if (e.key === 13) {
            nVerifyPassword();
        }
    };


    const pVerifyPassword = () => {
        if (pPassword !== '' && pRpassword !== '') {
            if (pPassword !== pRpassword) {
                setPPassVerified(<p className="error"><strong>Error: </strong>¡Las contraseñas no coinciden!</p>);
            } else {
                setPPassVerified(<p className="correct"><strong>✓ Correcto: </strong>Los datos son correctos!</p>);
            }
        } else {
            setPPassVerified(<p className="error"><strong>Error: </strong>¡Los campos no deben estar vacíos!</p>);
        }
    }
    const pEnterSend = (e) => {
        if (e.key === 13) {
            pVerifyPassword();
        }
    };

// Registro de Usuario Normal
    const handleNUserRegister = () => {
        fetch('http://localhost:5000/register/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nName: nName,
                nSurname: nSurname,
                nDni: nDni,
                nBirthdate: nBirthdate,
                nEmail: nEmail,
                nPassword: nPassword,
            }),
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.message) {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    };   

// Registro de Usuario Profesional
    const handlePUserRegister = () => {
        fetch('http://localhost:5000/register/professional', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pName: pName,
                pSurname: pSurname,
                pDni: pDni,
                pTuition: pTuition,
                pBirthdate: pBirthdate,
                pEmail: pEmail,
                pPassword: pPassword,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.message) {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    };


    const handleNRegisterClick = () => {
        nVerifyPassword();
        if (nPassword === nRpassword) {
            handleNUserRegister();
        }else {
            alert('Las contraseñas no coinciden');
        }
    };
    const handlePRegisterClick = () => {
        pVerifyPassword();
        if (pPassword === pRpassword) {
            handlePUserRegister();
        }else {
            alert('Las contraseñas no coinciden');
        }
    };
    
    return (
        <>
    {/*--------------------NAV START--------------------*/}
            { <NavOut /> }
    {/*--------------------NAV END--------------------*/}

    {/*--------------------MAIN START--------------------*/}
            <main className='main-signup'>

                {/*--------------------USER REGISTER START--------------------*/}
                <div className="sign-up-container">
                    <div className="heading">Registrarse</div>

                    <form className="signup-form" method="POST">
                        <input 
                            className="input-form" 
                            type="name" 
                            id="nname" 
                            placeholder="Nombre"
                            value={nName}
                            onChange={e => setNName(e.target.value)}                                     
                        />
                        <input 
                            className="input-form" 
                            type="text" 
                            id="nsurname" 
                            placeholder="Apellido" 
                            value={nSurname}
                            onChange={e => setNSurname(e.target.value)}   
                        />
                        <div className='dni-birth-container'>
                            <input 
                                className="input-form" 
                                type="text" 
                                id="ndni" 
                                placeholder="DNI" 
                                value={nDni}
                                onChange={e => setNDni(e.target.value)}   
                            />
                            <input 
                                className="input-form" 
                                type="date" 
                                id="nbirthday" 
                                placeholder="asd" 
                                min="1924-01-01" 
                                max="2006-01-01" 
                                value={nBirthdate}
                                onChange={e => setNBirthdate(e.target.value)} 
                            />
                        </div>
                        <input 
                            className="input-form" 
                            type="email" 
                            id="nemail" 
                            placeholder="Correo Electrónico"
                            value={nEmail}
                            onChange={e => setNEmail(e.target.value)} 
                        />
                        <div id="passwordsForm" onKeyDown={nEnterSend}>
                            <input 
                                className="input-form" 
                                type="password" 
                                id="npassword" 
                                placeholder="Contraseña" 
                                value={nPassword}
                                onChange={e => setNPassword(e.target.value)} 
                                autoComplete="nueva-contraseña"                               
                            />
                            <input 
                                className="input-form" 
                                type="password" 
                                id="nr-password" 
                                placeholder="Repetir Contraseña"
                                value={nRpassword}
                                onChange={e => setNRpassword(e.target.value)} 
                                autoComplete="nueva-contraseña"    
                            />
                            <div id="passVerified">{nPassVerified}</div>                        
                            <input 
                                className="signup-button" 
                                type="button" 
                                value="Registrarse"
                                onClick={handleNRegisterClick}
                            />
                        </div>
                    </form>

                    <div className="have-acc-container">
                        <span className="have-acc-title">¿Ya tienes una cuenta?</span>
                        <Link to='/iniciar-sesion' className='have-acc-link'>Inicia Sesión</Link>
                    </div>

                    <span className="polit-container">
                        <Link className='polit-link' to="/politica-de-privacidad">Leer Política de Privacidad</Link>
                    </span>
                </div>
                {/*--------------------USER REGISTER END--------------------*/}


                {/*--------------------PROFESSIONAL REGISTER START--------------------*/}                
                <div className="sign-up-container">
                    <div className="heading">Registrarse como Profesional</div>

                    <form className="signup-form" method="POST">
                        <input 
                            className="input-form" 
                            type="text" 
                            id="pname" 
                            placeholder="Nombre" 
                            value={pName}
                            onChange={e => setPName(e.target.value)}                                    
                        />
                        <input 
                            className="input-form" 
                            type="text" 
                            id="psurname" 
                            placeholder="Apellido" 
                            value={pSurname}
                            onChange={e => setPSurname(e.target.value)}  
                        />
                        <div className='dni-birth-container'>
                            <input 
                                className="input-form" 
                                type="text" 
                                id="pdni" 
                                placeholder="DNI" 
                                value={pDni}
                                onChange={e => setPDni(e.target.value)}   
                            />
                            <input 
                                className="input-form" 
                                type="date" 
                                id="pbirthday" 
                                placeholder="asd" 
                                min="1924-01-01" 
                                max="2006-01-01" 
                                value={pBirthdate}
                                onChange={e => setPBirthdate(e.target.value)} 
                            />
                        </div>
                        <input 
                            className="input-form" 
                            type="integer" 
                            id="ptuition" 
                            placeholder="N° de Matrícula"  
                            value={pTuition}
                            onChange={e => setPTuition(e.target.value)}                                
                        /> 
                        <input 
                            className="input-form" 
                            type="email" 
                            id="pemail" 
                            placeholder="Correo Electrónico"  
                            value={pEmail}
                            onChange={e => setPEmail(e.target.value)}                            
                        />
                        <div id="passwordsForm" onKeyDown={pEnterSend}>
                            <input 
                                className="input-form" 
                                type="password" 
                                id="ppassword" 
                                placeholder="Contraseña"     
                                value={pPassword}
                                onChange={e => setPPassword(e.target.value)} 
                                autoComplete="nueva-contraseña"                           
                            />
                            <input 
                                className="input-form" 
                                type="password" 
                                id="pr-password" 
                                placeholder="Repetir Contraseña"
                                value={pRpassword}
                                onChange={e => setPRpassword(e.target.value)} 
                                autoComplete="nueva-contraseña"    
                            />
                            <div id="ppassVerified">{pPassVerified}</div>   
                            <input 
                                className="signup-button" 
                                type="button"  
                                value="Registrarse"  
                                onClick={handlePRegisterClick}
                            />                                                                  
                        </div>
                    </form>


                    <div className="have-acc-container">
                        <span className="have-acc-title">¿Ya tienes una cuenta?</span>
                        <Link to='/iniciar-sesion' className='have-acc-link'>Inicia Sesión</Link>
                    </div>

                    <span className="polit-container">
                        <Link className='polit-link' to="/politica-de-privacidad">Leer Política de Privacidad</Link>
                    </span>
                </div>
                {/*--------------------PROFESSIONAL REGISTER END--------------------*/}
            </main>
    {/*--------------------MAIN END--------------------*/}

    {/*--------------------FOOTER START--------------------*/}
            { <FooterBar /> }
    {/*--------------------FOOTER END--------------------*/}
        </>
    );
}