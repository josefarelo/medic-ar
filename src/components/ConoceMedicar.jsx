import React from "react";
import { Link } from 'react-router-dom';
import './ConoceMedicar.scss';
import Conoce1 from './imagenes/Conoce1.jpg';
import Conoce2 from './imagenes/Conoce2.jpg';
import Conoce3 from './imagenes/Conoce3.jpg';
import Conoce4 from './imagenes/Conoce4.jpg';
import NavOut from "./NavBarLogOut";
import FooterBar from "./FooterBar";

export default function ConoceMedicar() {
    return (
        <>
        {/*--------------------NAV START--------------------*/}
            { <NavOut /> }
        {/*--------------------NAV END--------------------*/}

        {/*--------------------MAIN START-------------------*/}
            <main>
                <div className="conoce-medicar-container">

            {/*--------------------TOP CONTAINER START--------------------*/}
                    <div className="top-container">
                        <div className="conociendo-container">
                            <div className="img-container">
                                <img 
                                    src= {Conoce1}
                                    alt="red-social"
                                    className="top-imagen-1"
                                />
                            </div>
                            <div className="desc-container">
                                <h3 className="desc-conoce-title">Conocé MedicAR</h3>
                                <h4 className="desc-conoce-subtitle">Elegí lo mejor para tu salud</h4>
                                <p className="desc-conoce-text">
                                    <b>MedicAR</b> es una red social de servicios médicos en Argentina que 
                                    brinda la posibilidad de elegir al profesional que otorgue la mejor 
                                    atención médica.
                                    <br />
                                    Con el objetivo de que cada persona encuentre lo mejor en salud, <b>MedicAR </b> 
                                    cuenta con un formato de elección de profesionales que se basa en un 
                                    sistema de puntuación, donde podrás evaluar los distintos aspectos y 
                                    de manera general, al médico con el que te atiendas.
                                </p>
                            </div>
                        </div>
                        <div className="conociendo-container">
                            <div className="img-container">
                                <img 
                                    src= {Conoce2}
                                    alt="red-social"
                                    className="top-imagen-2"
                                />
                            </div>
                            <div className="desc-container">
                                <h3>Nacimiento de MedicAR</h3>
                                <h4>¿Cómo nace MedicAR?</h4>
                                <p>
                                    En 2024 el grupo <b>MedicAR</b> se propuso crear un 
                                    servicio que facilite la elección de las personas al 
                                    momento de buscar un profesional de la salud con quien 
                                    atenderse, de manera sencilla y cómoda.
                                    <br />
                                    Basado en la reputación y referencias del médico, que 
                                    puedan guiar al usuario a una decisión más clara.
                                </p>
                            </div>
                        </div>
                        <div className="conociendo-container">
                            <div className="img-container">
                                <img 
                                    src= {Conoce3}
                                    alt="red-social"
                                    className="top-imagen-3"
                                />
                            </div>
                            <div className="desc-container">
                                <h3>Profesionales MedicAR</h3>
                                <h4>¿Quienes son los profesionales en Medicar?</h4>
                                <p>
                                En <b>MedicAR</b> encontrarás profesionales de la salud 
                                externos al servicio que brindamos, que buscan expandirse 
                                y formar parte de la cartilla médica <b>MedicAR</b>, donde se darán 
                                a conocer y podrán brindar atención a los usuarios de 
                                manera facil y rápida.
                                </p>
                            </div>
                        </div>
                    </div>
            {/*--------------------TOP CONTAINER END--------------------*/}

            {/*--------------------MID CONTAINER START--------------------*/}
                    <div className="mid-container">
                        <div className="politicas-container">
                            <h3 className="politicas-conoce-title">Acuerdo con el Usuario</h3>
                            <p className="politicas-conoce-text">
                                Lee los términos y condiciones del usuario para estar al tanto 
                                de la utilización de los servicios brindados.
                            </p>
                            <button className="politicas-conoce-button"><Link to="/acuerdo-con-el-usuario" className="conoce-link">VER MÁS</Link></button>
                        </div>
                        <div className="politicas-container">
                            <h3 className="politicas-conoce-title">Política de Privacidad</h3>
                            <p className="politicas-conoce-text">
                                Antes de registrarte y/o utilizar y/o brindar tus datos 
                                personales en el sitio web, por favor lee atentamente la 
                                presente Política de Privacidad.
                            </p>
                            <button className="politicas-conoce-button"><Link to="/politica-de-privacidad" className="conoce-link">VER MÁS</Link></button>
                        </div>
                        <div className="politicas-container">
                            <h3 className="politicas-conoce-title">Código de Conducta</h3>
                            <p className="politicas-conoce-text">
                                Te invitamos a leer los principios y valores que en MedicAR 
                                reconocemos y respetamos.
                            </p>
                            <button className="politicas-conoce-button"><Link to="/codigo-de-conducta" className="conoce-link">VER MÁS</Link></button>
                        </div>
                    </div>
            {/*--------------------MID CONTAINER END--------------------*/}

            {/*--------------------BOT CONTAINER START--------------------*/}
                    <div className="bot-container">
                        <div className="register-container">
                            <h2 className="conoce-register-title">Quiero registrarme</h2>
                            <p className="conoce-register-text">
                                Registrate como usuario o profesional y comenza a utilizar 
                                nuestros servicios
                            </p>
                            <button className="conoce-register-button">
                                <Link to="/registrarse" className="registrarse-conoce-button">Registrarse</Link>
                            </button>
                        </div>
                        <div className="bot-img-container">
                            <img
                                src={Conoce4}
                                alt="grupo-de-doctores"
                                className="bot-imagen-1"
                            />
                        </div>
                    </div>
            {/*--------------------BOT CONTAINER END--------------------*/}

                </div>
            </main>
        {/*--------------------MAIN END--------------------*/}

        {/*--------------------FOOTER START--------------------*/}
            { <FooterBar /> }
        {/*--------------------FOOTER END--------------------*/}
        </>        
    );
}