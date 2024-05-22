import React from 'react';
import { Link } from 'react-router-dom';
import './InicioProfesional.scss';
import NavPIn from './NavBarPLogIn'
import turnosP from './imagenes/turnosP.jpg';
import historialesP from './imagenes/historialesP.jpg';
import perfilP from './imagenes/perfilP.jpg';
import chatP from './imagenes/chatP.jpg';

export default function InicioProfesional() {

    return (
        <>
            <nav className='nav-professional'>
                <NavPIn />
            </nav>
            
            <main className='main-professional'>
                <div>
                    <div className='professional-imgs-container'>
                        <Link to="/perfil-profesional" className='professional-imgs-title'>Perfil</Link>
                        <div className='professional-imgs-text'>
                            Modificá tu perfil profesional para actualizar tus datos y que los usuarios puedan encontrarte facilmente.
                        </div>
                        <img 
                            src={ perfilP }
                            className='professional-imgs'
                            alt='perfil-de-profesional'
                        />
                    </div>
                </div>
                <div>
                    <div className='professional-imgs-container'>
                        <Link to="/turnos" className='professional-imgs-title'>Turnos</Link>
                        <div className='professional-imgs-text'>
                            Administrá los turnos que brindás para organizarte de manera eficiente y atender a tus pacientes en la fecha registrada.
                        </div>
                        <img 
                            src={ turnosP }
                            className='professional-imgs'
                            alt='turnos-del-profesional'
                        />
                    </div>
                </div>
                <div>
                    <div className='professional-imgs-container'>
                        <Link to="/historial-de-pacientes" className='professional-imgs-title'>Historiales</Link>
                        <div className='professional-imgs-text'>
                            Accedé al historial médico de cada paciente que hayas atendido anteriormente y del cual tengas su información.
                        </div>
                        <img 
                            src={ historialesP }
                            className='professional-imgs'
                            alt='historiales-de-pacientes'
                        />
                    </div>
                </div>
                <div>
                    <div className='professional-imgs-container'>
                        <Link to="/chat-profesional" className='professional-imgs-title'>Chat</Link>
                        <div className='professional-imgs-text'>
                            Ponete en contacto con pacientes que hayas tenido para hacerles una consulta, informarles alguna novedad o brindarles documentación.
                        </div>
                        <img 
                            src={ chatP }
                            className='professional-imgs'
                            alt='contacta-con-tus-pacientes'
                        />
                    </div>
                </div>
            </main>
        </>
    )
}