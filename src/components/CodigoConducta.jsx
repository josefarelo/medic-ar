import React from "react";
import './CodigoConducta.scss';
import NavOut from "./NavBarLogOut";
import FooterBar from "./FooterBar";



export default function CodigoConducta() {
    return(
        <>
            {/*--------------------NAV START--------------------*/}
                { <NavOut /> }
            {/*--------------------NAV END--------------------*/}

            {/*--------------------MAIN START-------------------*/}
                <main className="conducta-main">
                    <h1 className="conducta-title">Código de conducta</h1>
                    <h2 className="conducta-subtitle">Estos son los principios y valores que nuestra Organización reconoce y respeta.</h2>
                    <div className="conducta-text-container">
                        <p className="conducta-text">
                            Su aceptación y cumplimiento es condición necesaria para formar parte de MEDICAR y abarca a todos quienes formamos parte de la Organización
                        </p>

                        <h2 className="conducta-third-title">Nuestro ambiente laboral</h2>
                        <p className="conducta-text">
                            En MEDICAR privilegiamos las relaciones internas de compromiso, confianza y colaboración, lo que nos da ese “sentido de familiaridad” que nos hace distintos.
                            <br />
                            <br />
                            Debemos comprometernos con los objetivos perseguidos por MEDICAR, siendo responsabilidad de nuestros líderes transmitirlos oportuna y claramente.
                            <br />
                            <br />
                            En MEDICAR no toleramos ningún tipo de conducta discriminatoria u hostil, ni cualquier forma de acoso psicológico, físico o sexual entre nosotros o con terceros. Tampoco el abuso de autoridad, ni ninguna forma de acoso laboral, amenazas o exigencias indebidas.
                            <br />
                            <br />
                            Rechazamos todo tipo de comportamiento inadecuado u ofensivo dentro o fuera de nuestras oficinas e instalaciones, así como cualquier conducta que deba estar reservada al ámbito privado, ya sea por parte de nuestros colaboradores o directivos.
                            <br />
                            <br />
                            MEDICAR cumple con todas las normas vigentes en materia de seguridad e higiene en el trabajo; no obstante, es obligación de cada uno de nosotros asumir el compromiso de cumplir con las normas y prácticas de seguridad y de alertar sobre situaciones riesgosas en el ámbito laboral.
                        </p>
                        
                        <br />

                        <h2 className="conducta-third-title"> Uso de herramientas de trabajo y recursos informáticos</h2>
                        <p className="conducta-text">
                            Todos los recursos necesarios para desarrollar nuestras actividades, incluso la cuenta de correo electrónico, son propiedad de MEDICAR y debemos utilizarlos eficiente y responsablemente, aplicándolos exclusivamente a desarrollar nuestras tareas. 
                            <br />
                            <br />
                            Evita usar la cuenta de correo que te fue asignada para enviar o recibir información que no se relacione con tu trabajo y recordá que no debes usarla para registrarte como usuario en aplicaciones o sitios web que no tengan conexión con tu actividad laboral. 
                            <br />
                            <br />
                            MEDICAR podrá acceder a la cuenta de correo que te fue asignada, a los dispositivos o aplicaciones puestos a nuestra disposición, para realizar pruebas de seguridad, auditorias o incluso para eliminar cualquier tipo de software archivo que no tengan relación con nuestras tareas laborales. 
                            <br />
                            <br />
                            MEDICAR tiene los derechos de propiedad intelectual sobre sus marcas, nombres, nombres de dominio, planos, sistemas, aplicaciones, procedimientos, métodos, diseños, etc., como así también sobre todos los conocimientos que desarrolles en ocasión y en razón de tu trabajo.
                        </p>

                        <br />

                        <h2 className="conducta-third-title"> Protección de la información</h2>
                        <p className="conducta-text">
                            En MEDICAR cumplimos celosamente con la Ley de Protección de Datos Personales y con la Ley de Derechos del Paciente, guardando estricta reserva respecto de la información a la que accedemos, usándola exclusivamente para garantizar a nuestros socios el acceso a los servicios que requieran. 
                            <br />
                            <br />
                            Debemos tratar confidencialmente los datos y la información de nuestros socios, como así también la de MEDICAR y la nuestra; nunca compartas tus datos de usuario y contraseña.
                            <br />
                            <br />
                            La omisión de estas pautas implica no solo violar éste Código, sino que también puede implicar una violación de las normas vigentes, debiendo recordar que la obligación de confidencialidad permanece vigente aún cuando hubiese finalizado nuestra relación con MEDICAR, en cuyo caso deberemos reintegrar los documentos e información -en cualquier formato- a los que hayamos tenido acceso durante nuestra relación con MEDICAR.
                        </p>

                        <br />

                        <h2 className="conducta-third-title"> Nuestra comunicación institucional</h2>
                        <p className="conducta-text">
                            En MEDICAR gestionamos nuestra comunicación institucional de forma unificada, de acuerdo a los principios de veracidad, transparencia, integridad y confidencialidad.
                            <br />
                            <br />
                            Contamos con voceros expresamente autorizados para responder cualquier solicitud de información requerida por personas ajenas al Grupo MEDICAR o por los medios de comunicación. Por eso, si te contacta algún medio o periodista, o sos invitado a participar en un evento -público o privado- en representación de MEDICAR, previamente debes comunicarte con la Gerencia de Relaciones Institucionales. 
                            <br />
                            <br />
                            Está vedado participar, en nombre de MEDICAR, en redes sociales o en plataformas digitales, como así también usar la imagen visual de la entidad o la propia con el uniforme de MEDICAR.
                        </p>

                        <br />

                        <h2 className="conducta-third-title"> Como nos relacionamos con los demás</h2>
                        <p className="conducta-text">
                            En MEDICAR nos caracterizamos por proceder siempre ajustándonos a las normas legales, gestionando nuestra actividad con respeto, lealtad, cordialidad, cercanía y compromiso social solidario. Así ha sido siempre nuestra conducta y de tal manera nos hemos relacionado con nuestro entorno.
                            <br />
                            <br />
                            <b className="conducta-fourth-title">Destinatarios de nuestros servicios</b>
                            <br />
                            Quienes optan por MEDICAR nos han honrado con su elección y han confiado en que seamos nosotros quienes cuidemos de su salud y la de sus familias. Ellos son los verdaderos protagonistas del sistema solidario de salud y los destinatarios de los servicios organizados por MEDICAR; es nuestro deber dedicar todo nuestro esfuerzo en brindarles un servicio de excelencia y también transmitirles la importancia de que hagan un uso responsable de estos.
                            <br />
                            <br />
                            <b className="conducta-fourth-title">Nuestra competencia comercial</b>
                            <br />
                            En MEDICAR siempre hemos sabido competir lealmente. Sin mentir, sin engañar, sin ocultamientos, cuidándonos de emitir publicidad engañosa o grandilocuente acerca de nuestros servicios, proporcionando sólo información justa, correcta, precisa y equilibrada.
                            <br />
                            <br />
                            En MEDICAR no divulgamos información falsa sobre las empresas de la competencia ni realizamos prácticas tendientes a desprestigiar a nuestros competidores.
                            <br />
                            <br />
                            En MEDICAR rechazamos utilizar métodos ilegales o reñidos con la ética, ya sea para obtener información sobre la competencia, para mejorar nuestra posición en el mercado, para captar nuevos afiliados, para influenciar a funcionarios públicos a fin de lograr beneficios para MEDICAR en desmedro de nuestros competidores, para limitar la libre competencia, fijar precios o para repartir el mercado.
                            <br />
                            <br />
                            <b className="conducta-fourth-title">Prestadores</b>
                            <br />
                            Los prestadores de MEDICAR han sido y son fundamentales en la estrategia del servicio que brindamos a nuestros socios. El éxito de nuestro desempeño y el nivel de satisfacción de los asociados depende, de manera significativa, del trabajo y la alta profesionalidad de los Prestadores.
                            <br />
                            <br />
                            MEDICAR ha crecido en un ámbito de responsabilidad, compromiso y lealtad por haber sabido establecer relaciones de confianza, transparencia y acompañamiento mutuo con su elenco de Prestadores.
                            <br />
                            <br />
                            <b className="conducta-fourth-title">Comunidad</b>
                            <br />
                            MEDICAR es percibido como un importante y comprometido agente social, ya que supimos crear vínculos cercanos y responsables con las comunidades en las que operamos, promoviendo su integración y el mejoramiento de su calidad de vida.
                            <br/ >
                            <br />
                            En MEDICAR siempre nos ocupamos de generar distintas actividades tendientes al fomento del cuidado de la salud, incluso poniéndolas a disposición de quienes no eligen nuestros servicios.
                            <br/ >
                            <br />
                            En nuestra relación con la comunidad médica contribuimos a la formación continua de los profesionales de la salud para que puedan brindar una atención de excelencia a nuestros socios. 
                            <br/ >
                            <br />
                            <b className="conducta-fourth-title">Sector Público</b>
                            <br />
                            MEDICAR, por su propio estatuto social, tiene vedado participar en cuestiones políticopartidarias y acata fielmente dicha prohibición.
                            <br />
                            <br />
                            MEDICAR se relaciona institucionalmente con los distintos niveles del Sector Público en forma fluida y responsable, con pleno conocimiento y respeto de las normas vigentes, asegurando la veracidad y transparencia en nuestras declaraciones o en la información que suministramos.
                        </p>

                        <br />

                        <h2 className="conducta-third-title"> Conflictos de intereses</h2>
                        <p className="conducta-text">
                            No debes llevar a cabo prácticas que puedan generar de manera real, potencial o aparente beneficios o ventajas indebidas a tu favor o de terceros, ni que compitan con las actividades que desarrolla MEDICAR. Tampoco debes utilizar información a la que hayas accedido en ocasión o razón de las tareas que llevas a cabo en MEDICAR, ni utilizar los recursos o las instalaciones de la entidad para tu beneficio particular.
                        </p>

                    </div>
                </main>
            {/*--------------------MAIN END-------------------*/}
            
            {/*--------------------FOOTER START--------------------*/}
                { <FooterBar /> }
            {/*--------------------FOOTER END--------------------*/}
        </>
    );
}