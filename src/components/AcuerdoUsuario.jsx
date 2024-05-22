import React, { useState } from 'react';
import './AcuerdoUsuario.scss';
import NavOut from "./NavBarLogOut";
import FooterBar from './FooterBar';

export default function AcuerdoUsuario() {
    const [dropdownOpen, setDropdownOpen] = useState({
        termConditions: false,
        useConditions: false,
        limitResponsibility: false,
        intellectualProperty: false,
        revocationRight: false,
    });

    const toggleDropdown = (dropdown) => {
        setDropdownOpen({
            [dropdown]: !dropdownOpen[dropdown],
        });
    };

    return (
        <>
            {/*--------------------NAV START--------------------*/}
            <NavOut />
            {/*--------------------NAV END--------------------*/}

            {/*--------------------MAIN START--------------------*/}
            <main className='acuerdo-main'>
                <h1 className='acuerdo-title'>Acuerdo con el usuario</h1>
                <h2 className='acuerdo-subtitle'>Términos y Condiciones Generales del uso del sitio.</h2>
                <div className='dropdown-container'>
                    <div className='drop-text-1' onClick={() => toggleDropdown('termConditions')}>
                        Términos y Condiciones generales y su aceptación
                    </div>
                    {dropdownOpen.termConditions && (
                        <div className="dropdown-content">
                            A continuación se describen los Términos y Condiciones Generales (en adelante las "Condiciones Generales") aplicables a la utilización de los servicios y contenidos suministrados por el Sitio de Internet www.medicar.com.ar (en adelante, el "SITIO") que MEDICAR pone a disposición de los Usuarios en general.
                            La utilización del SITIO implica la aceptación expresa, plena y sin reservas por parte del Usuario de todos y cada uno de los Términos y Condiciones Generales en la versión publicada por MEDICAR en el SITIO en el momento en que el Usuario acceda al mismo.
                            En consecuencia, el Usuario debe leer atentamente las Condiciones Generales previo a la utilización del SITIO.
                            Asimismo, la utilización del SITIO se encuentra sometida a todos los avisos, reglamentos de uso e instrucciones puestos en conocimiento del Usuario por MEDICAR, los que se integrarán a estas condiciones en cuanto estos no se opongan a ellos.
                            <br />
                            <br />
                            <br />
                            <br />
                            MEDICAR está constantemente innovando a fin de ofrecer el mejor servicio posible a sus Usuarios. Por el presente acuerdo, usted reconoce y acepta que el contenido y la naturaleza de los Servicios que proporciona MEDICAR pueden variar ocasionalmente sin previo aviso.
                            <br />
                            <br />
                            Como parte de esta permanente innovación, usted reconoce y acepta que MEDICAR pueda suspender, ya sea de forma permanente o temporal, los Servicios, o alguna de las funciones incluidas en estos, para usted o para los Usuarios en general, a discreción de MEDICAR y sin previo aviso. Usted podrá interrumpir el uso que haga de los Servicios en cualquier momento que lo desee. No es necesario que informe de ello a MEDICAR.
                            <br />
                            <br />
                            A fin de poder acceder a determinados Servicios, es posible que se le solicite información personal, por ejemplo, datos identificativos e información de contacto, como parte del proceso de registro en el Servicio o como parte del uso continuado de los Servicios. Usted se compromete a que cualquier información de registro que facilite a MEDICAR será precisa, correcta y actual.
                            <br />
                            <br />
                            <br />
                            <br />
                            Teniendo en cuenta que MEDICAR puede modificar en cualquier momento estos términos y condiciones, le sugerimos consultarlos periódicamente.
                        </div>
                    )}

                    <div className='drop-text-2' onClick={() => toggleDropdown('useConditions')}>
                        Condiciones de Utilización del sitio
                    </div>
                    {dropdownOpen.useConditions && (
                        <div className="dropdown-content">
                            Obligaciones del Usuario
                            <br />
                            <br />
                            Hacer uso correcto del SITIO
                            <br />
                            El Usuario se compromete a utilizar el SITIO de conformidad con la ley, estas Condiciones Generales, así como con la moral y buenas costumbres generalmente aceptadas y el orden público.
                            <br />
                            El Usuario se obliga a abstenerse de utilizar el SITIO con fines o efectos ilícitos, contrarios a lo establecido en estas Condiciones Generales, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar el SITIO o impedir la normal utilización o disfrute del SITIO por parte de los Usuarios.
                            <br />
                            <br /> 
                            <br />
                            Conducta general. 
                            <br />
                            <br />
                            Queda prohibido:
                            <br />
                            a) utilizar el SITIO, directa o indirectamente, para violar cualquier ley aplicable, cualquiera fuese su naturaleza, ya sea internacional, nacional, provincial o local;
                            <br />
                            b) transmitir material pornográfico u obsceno;
                            <br />
                            c) transmitir, distribuir o almacenar cualquier tipo de información, datos o materiales que violen leyes o regulaciones internacionales, nacionales o provinciales;
                            <br />
                            d) enviar o transmitir información cuyo contenido sea, directa o indirectamente, y sin que lo siguiente se considere una limitación, trasgresor, profano, abusivo, difamatorio y/o fraudulento, o que revele asuntos privados o personales que afecten a persona alguna, o que de alguna manera violen derechos de terceros;
                            <br />
                            e) utilizar los servicios utilizando un nombre falso, erróneo o inexistente, ya sea como persona física o jurídica;
                            <br />
                            f) transmitir material que el Usuario no tenga derecho a transmitir con arreglo a las leyes vigentes (ya sea de “Copyright”, marca registrada, secreto comercial, patentes u otros derechos de la propiedad de terceros) o con arreglo a relaciones contractuales o fiduciarias (tales como los contratos de no divulgación);
                            <br />
                            g) efectuar acciones que restrinjan, denieguen o impidan a cualquier individuo, grupo, entidad u organización, el uso de los contenidos o servicios ofrecidos a través del SITIO;
                            <br />
                            <br />
                            <br />
                            Seguridad. 
                            <br />
                            <br />
                            Queda prohibido:
                            <br />
                            a) intentar la violación de los sistemas de autenticación, verificación de identidad y seguridad del servidor, redes o cuentas de Usuarios; esto incluye, y no se limita, a tratar de acceder a datos no destinados al Usuario, intentar ingresar en el servidor o cuentas sin contar con la expresa autorización para hacerlo, o intentar probar la seguridad de nuestras redes,
                            utilizando herramientas para pruebas de intrusión u otras similares (por ejemplo de mapeo de rutas de red windows, de mapeo de rutas de red Unix, de mapeo de puertos, clientes DNS, browser SNMP, scanner de vulnerabilidades; Proxy de intercepción; Spider; Analizador de vulnerabilidades web, Suite completa de análisis de seguridad web; Sniffer de paquetes de red; Sniffer de passwords; Cliente TCP; Cliente y servidor TCP y UDP; analizador de redes inalámbricas para Linux; analizador de redes inalámbricas para windows; Sistemas de obtención de contraseñas WEP; etc.)
                            <br />
                            b) intentar interrupciones en las comunicaciones de Internet, tales como alterar información de ruteo, sobrecargar deliberadamente un servicio, efectuar ataques informáticos a otras computadoras sobre Internet, entre otros;
                            <br />
                            c) utilizar cualquier programa, comando o grupo de comandos, o enviar mensajes de cualquier tipo, destinados a interferir con la sesión establecida por un
                            Usuario en cualquier punto de Internet;
                            <br />
                            d) efectuar cualquier tipo de monitoreo que implique la intercepción de información no destinados al Usuario;
                            <br />
                            e) enviar o transmitir archivos que contengan virus u otras características destructivas que puedan afectar de manera adversa el funcionamiento de una computadora ajena y/o puedan afectar el correcto funcionamiento de las mismas y/o del SITIO;
                            <br />
                            <br />
                            <br /> 
                            Medios para la obtención de Contenidos
                            <br />
                            <br />
                            El Usuario deberá abstenerse de obtener e incluso de intentar obtener informaciones, mensajes, gráficos, dibujos, archivos de sonido y/o imagen, fotografías, grabaciones, software y, en general, cualquier clase de material accesibles a través del SITIO (en adelante, los "Contenidos") empleando para ello medios o procedimientos distintos de los que, según los casos, se hayan puesto a su disposición a este efecto o se hayan indicado a este efecto en las páginas web donde se encuentren los Contenidos o, en general, de los que se empleen habitualmente en Internet a este efecto y siempre que no entrañen un riesgo de daño o inutilización del SITIO y/o de los Contenidos.
                            <br />
                            <br />
                            <br />
                            Uso correcto de los Contenidos
                            <br />
                            <br />
                            El Usuario se obliga a usar los Contenidos y los Servicios ofrecidos de forma diligente, correcta y lícita y, en particular, se compromete a abstenerse de:
                            <br />
                            a) utilizarlos de forma, con fines o efectos contrarios a la ley, a la moral y a las buenas costumbres generalmente aceptadas o al orden público;
                            <br />
                            b) reproducir o copiar, distribuir, permitir el acceso del público a través de cualquier modalidad de comunicación pública, transformar o modificarlos, a menos que se cuente con la autorización del titular de los correspondientes derechos o ello resulte legalmente permitido;
                            <br />
                            c) suprimir, eludir o manipular el "Copyright" y demás datos identificativos de los derechos de MEDICAR o de sus titulares incorporados a los Contenidos, así como los dispositivos técnicos de protección, las huellas digitales o cualesquiera mecanismos de información que pudieren contener los Contenidos;
                            <br />
                            d) emplear los Contenidos y, en particular, la información de cualquier clase obtenida a través del SITIO o de los Servicios para comercializar o divulgar de cualquier modo dicha información.
                            <br />
                            <br />
                            <br />
                            Introducción de Hipervínculos
                            <br />
                            <br />
                            Los Usuarios y, en general, aquellas personas que se propongan establecer un hipervínculo entre su página web y el SITIO (en adelante, el "Hipervínculo") deberán cumplir las condiciones siguientes:
                            <br />
                            a) el Hipervínculo únicamente permitirá el acceso a las páginas web del SITIO, pero no podrá reproducirlas de ninguna forma;
                            <br />
                            b) no se establecerán Hipervínculos con las páginas web del SITIO distintas de la home-page o página primera del SITIO o de los Contenidos (deep linking);
                            <br />
                            c) no se creará un browser, ni un border enviroment, ni un frame sobre las páginas web del SITIO (framing);
                            <br />
                            d) no se realizarán manifestaciones o indicaciones falsas, inexactas o incorrectas sobre las páginas web del SITIO y de
                            los Contenidos y, en particular, no se declarará ni dará a entender que MEDICAR ha autorizado el Hipervínculo o que ha supervisado o asumido de cualquier forma los contenidos o servicios ofrecidos o puestos a disposición de la página web en la que se establece el Hipervínculo;
                            <br />
                            e) excepción hecha de aquellos signos que formen parte del mismo Hipervínculo, la página web en la que se establezca el Hipervínculo no contendrá ninguna marca, nombre comercial, rótulo de establecimiento, denominación, logotipo, eslogan u otros signos distintivos pertenecientes al SITIO;
                            <br />
                            f) la página web en la que se establezca el Hipervínculo no contendrá informaciones o contenidos ilícitos, contrarios a la moral y buenas costumbres generalmente aceptadas y al orden público, así como tampoco contendrá contenidos contrarios a cualesquiera derechos de terceros.
                            <br />
                            El establecimiento del Hipervínculo no implica en ningún caso la existencia de relaciones entre MEDICAR y el propietario del sitio web con el que se establezca, ni la aceptación y aprobación por parte de MEDICAR de sus contenidos o servicios salvo que dicha relación se encuentre plasmada en un acuerdo escrito entre ambas partes, rigiéndose en tal caso por las previsiones de dicho contrato.
                            <br />
                            <br />
                            <br />
                            Indemnidades
                            <br />
                            <br />
                            El Usuario defenderá y mantendrá indemne a MEDICAR, contra todo daño y/o perjuicio, cualquiera fuese su naturaleza, inclusive los gastos por honorarios de abogados, que pudieran surgir con motivo u ocasión de cualquier acción o demanda iniciada por un tercero como consecuencia del incumplimiento del Usuario de cualquiera de las cláusulas del presente contrato, o de la violación por el mismo de cualquier ley o derecho de un tercero.
                            <br />
                            De la misma manera, el Usuario mantendrá indemne a MEDICAR y las empresas del Grupo, así como también a sus funcionarios, directores, empleados, representantes, presentes o futuros, de y contra todo daño y/o perjuicio, cualquiera fuese su naturaleza, derivado u ocasionado, directa o indirectamente, por la utilización de los Servicios ofrecidos en el SITIO, cuando se deriven o sean ocasionados, directa o indirectamente, del incumplimiento del Usuario de cualquiera de las cláusulas del presente contrato, o de la violación por el mismo de cualquier ley o derecho de un tercero.
                            <br />
                            <br />
                            <br />
                            Utilización bajo exclusiva responsabilidad
                            <br />
                            <br />
                            El Usuario es consciente de y acepta voluntariamente que el uso del SITIO y de los Contenidos tiene lugar, en todo caso, bajo su única y exclusiva responsabilidad.
                            <br />
                            <br />
                            El Usuario reconoce y acepta que es el único responsable de mantener la confidencialidad de sus contraseñas asociadas a cualquiera de los Servicios a los que accede a través del Sitio.
                            <br />
                            <br />
                            En consecuencia, acepta que será el único responsable ante MEDICAR de todas y cada una de las actividades que se desarrollen mediante el acceso al Sitio a través de sus contraseñas.
                            <br />
                            <br />
                            Asimismo, el Usuario se compromete a notificar de inmediato a MEDICAR de cualquier uso no autorizado de sus contraseñas de que tenga conocimiento.
                            <br />
                            <br />
                            El Usuario comprende que dadas las condiciones de seguridad que ofrece hoy Internet, debe tener presente que al divulgar información personal en línea, ya sea al momento de suscribirse, contratar algún producto y/o servicio o utilizando algún tipo de chat o comunicación virtual, la misma puede ser recogida o utilizada por otros.
                        </div>
                    )}

                    <div className='drop-text-3' onClick={() => toggleDropdown('limitResponsibility')}>
                        Límite de Responsabilidad y Exclusión de Garantías
                    </div>
                    {dropdownOpen.limitResponsibility && (
                        <div className="dropdown-content">
                            EL SITIO
                            <br />
                            <br />
                            Funcionamiento del SITIO y los Servicios.
                            <br />
                            <br />
                            General.
                            <br />
                            MEDICAR contrata su acceso a Internet con un tercero proveedor del mismo. Usted acepta y reconoce que el SITIO puede no siempre estar disponible debido a dificultades técnicas o fallas de Internet, del proveedor, o por cualquier otro motivo ajeno a MEDICAR. En consecuencia, MEDICAR no garantiza la disponibilidad y continuidad del funcionamiento del SITIO; como tampoco garantiza la utilidad del SITIO para la realización de ninguna actividad en particular, ni su infalibilidad y, en particular, aunque no de modo exclusivo, que los Usuarios puedan efectivamente utilizar el SITIO y acceder a las distintas páginas web que forman el SITIO.
                            <br />
                            MEDICAR excluye cualquier responsabilidad por los daños y perjuicios de toda naturaleza que sean originados en forma directa, indirecta o remota, por la interrupción, suspensión, finalización, falta de disponibilidad o de continuidad del funcionamiento del SITIO, por la defraudación de la utilidad que los Usuarios hubieren podido atribuir al SITIO, a la falibilidad del SITIO, y en particular, aunque no de modo exclusivo, por los fallos en el acceso a las distintas páginas web del SITIO.
                            <br />
                            <br />
                            Cabe destacar que cualquier información o gestión disponible a través del Sitio puede ser también satisfecha en forma personal o telefónica a través de sus Centros de Atención Personalizada o a través de los números telefónicos que se informan en la cartilla médica.
                            <br />
                            <br />
                            MEDICAR no se responsabiliza por cualquier daño, perjuicio o pérdida en el equipo del Usuario originado por fallas en el sistema, servidor o en Internet.
                            <br />
                            <br />
                            CONTENIDOS
                            <br />
                            <br />
                            El Usuario acepta y entiende que el uso y o interpretación de la información brindada en este sitio y las decisiones que se tomen en razón de las mismas, son realizadas enteramente bajo su propio riesgo. 
                            <br />
                            En consecuencia, queda expresamente aclarado que las decisiones a que el Usuario arribe son producto de sus facultades discrecionales.
                            <br />
                            <br />
                            MEDICAR puede en cualquier momento modificar las opiniones y expresiones contenidas en el sitio sin previo aviso.
                            <br />
                            <br />
                            MEDICAR NO SE RESPONSABILIZA BAJO NINGUNA CIRCUNSTANCIA POR LA INTERPRETACIÓN Y/O POR LA INCORRECTA INTERPRETACIÓN DE LO EXPRESADO EN EL SITIO EN FORMA EXPLÍCITA O IMPLÍCITA, NI DE SU USO INDEBIDO, ASÍ COMO TAMPOCO SERÁ RESPONSABLE POR LOS PERJUICIOS DIRECTOS O INDIRECTOS CAUSADOS POR O A QUIENES FUERAN INDUCIDOS A TOMAR U OMITIR DECISIONES O MEDIDAS, AL CONSULTAR EL SITIO.
                            <br />
                            <br />
                            MEDICAR no asume responsabilidad de ninguna índole, si en razón del acceso al SITIO o por cualquier transferencia de datos, el equipo del Usuario se viese afectado por algún virus, o por la presencia de otros elementos en los contenidos que puedan producir alteraciones en el sistema informático, documentos electrónicos o ficheros de los Usuarios, siendo responsabilidad del Usuario contar con los sistemas antivirus adecuados para proteger su ordenador.
                            <br />
                            <br />
                            MEDICAR no se responsabiliza por los daños y perjuicios de toda naturaleza que puedan deberse a la transmisión, difusión, almacenamiento, puesta a disposición, recepción, obtención o acceso a los contenidos, y en particular, aunque no de modo exclusivo, por los daños y perjuicios que puedan deberse a:
                            <br />
                            a) el incumplimiento de la ley, la moral y las buenas costumbres generalmente aceptadas o el orden público como consecuencia de la transmisión, difusión, almacenamiento, puesta a disposición, recepción, obtención o acceso a los contenidos;
                            <br />
                            b) la infracción de los derechos de propiedad intelectual e industrial, de los secretos empresariales, de compromisos contractuales de cualquier clase, de los derechos al honor, a la intimidad personal y familiar y a la imagen de las personas, de los derechos de propiedad y de toda otra naturaleza pertenecientes a un tercero como consecuencia de la transmisión, difusión, almacenamiento, puesta a disposición, recepción, obtención o acceso a los contenidos;
                            <br />
                            c) la realización de actos de competencia desleal y publicidad ilícita como consecuencia de la transmisión, difusión, almacenamiento, puesta a disposición, recepción, obtención o acceso a los contenidos;
                            d) la inadecuación para cualquier clase de propósito y la defraudación de las expectativas generadas por los contenidos;
                            <br />
                            e) el incumplimiento, retraso en el cumplimiento, cumplimiento defectuoso o terminación por cualquier causa de las obligaciones contraídas por terceros y contratos realizados con terceros a través de o con motivo del acceso a los contenidos;
                            <br />
                            f) los vicios y defectos de toda clase de los contenidos transmitidos, difundidos, almacenados, puestos a disposición o de otra forma transmitidos o puestos a disposición, recibidos, obtenidos o a los que se haya accedido a través del SITIO.
                            <br />
                            <br />
                            Responsabilidad por los contenidos, productos y servicios alojados fuera del SITIO.
                            <br />
                            <br />
                            El SITIO, con el único objeto facilitarle a los Usuarios la búsqueda de y acceso a la información disponible en Internet, pone a disposición de los Usuarios dispositivos técnicos de enlace, directorios, buscadores, herramientas de búsqueda o cualquier otro tipo de vinculación telemática. Esto permite a los Usuarios acceder a sitios de Internet pertenecientes a y/o gestionados por Terceros (en adelante los "Sitios Enlazados").
                            <br />
                            <br />
                            MEDICAR no ofrece ni comercializa por sí ni por medio de terceros los productos y servicios disponibles en los Sitios Enlazados.
                            El Usuario acepta y entiende que Internet contiene materiales de todo tipo, editados y no editados, algunos de los cuales pueden contener escenas de sexo explícito o pueden ser ofensivos para con usted o su grupo familiar.
                            <br />
                            MEDICAR no controla previamente, aprueba, vigila ni hace propios los productos, y servicios, contenidos, información, datos, archivos, productos y cualquier clase de material existente en los Sitios Enlazados.
                            <br />
                            <br />
                            En consecuencia, su acceso, o el de su grupo familiar, a estos materiales es considerado a su exclusivo riesgo. El Usuario, por tanto, debe extremar la prudencia en la valoración y utilización de los servicios, información, datos, archivos, productos y cualquier clase de material existente en los Sitios Enlazados.
                            <br />
                            <br />
                            MEDICAR no asume ningún tipo de responsabilidad por los daños y perjuicios de toda clase que puedan deberse a:
                            <br />
                            a) el funcionamiento, disponibilidad, accesibilidad o continuidad de los sitios enlazados;
                            <br />
                            b) el mantenimiento de los servicios, información, datos, archivos, productos y cualquier clase de material existente en los sitios enlazados;
                            <br />
                            c) la prestación o transmisión de los servicios, información, datos, archivos, productos y cualquier clase de material existente en los sitios enlazados;
                            <br />
                            d) la calidad, licitud, fiabilidad y utilidad de los servicios, información, datos, archivos, productos y cualquier clase de material existente en los sitios enlazados, y de los servicios prestados por terceros a través del SITIO.
                        </div>
                    )}

                    <div className='drop-text-4' onClick={() => toggleDropdown('intellectualProperty')}>
                        Propiedad Intelectual
                    </div>
                    {dropdownOpen.intellectualProperty && (
                        <div className="dropdown-content">
                            Todos los contenidos de este sitio, incluyendo, sin carácter limitativo, los textos (incluyendo los comentarios, disertaciones, exposiciones y reproducciones), gráficos, logos, iconos, imágenes, archivos de audio y video, software y todas y cada una de las características que se encuentran en el SITIO son propiedad exclusiva de MEDICAR y/o de sus proveedores de Contenidos, y los mismos están protegidos por las leyes internacionales de propiedad intelectual. Las mejoras y/o modificaciones de los Contenidos del Sitio son propiedad exclusiva de MEDICAR. Todo el software utilizado en este Sitio es propiedad de MEDICAR y/o de sus proveedores de software. Su uso indebido, así como su reproducción serán objeto de las acciones judiciales que correspondan.
                            <br /> 
                            <br /> 
                            La utilización de los servicios brindados por MEDICAR no podrá, en ningún supuesto, ser interpretada como una autorización y/o concesión de licencia de los derechos intelectuales de MEDICAR y/o de un tercero.
                            <br />
                            <br /> 
                            Los Contenidos y el software del SITIO pueden ser utilizados como una herramienta de compra y/o comunicación, o una fuente de información. Cualquier otro uso, incluyendo la reproducción, modificación, distribución y/o transmisión, ya sea total o parcial, de los Contenidos del SITIO está estrictamente prohibido, sin la expresa autorización de MEDICAR.
                            <br />
                            <br /> 
                            MEDICAR es marca registrada en. Los gráficos, logos y nombres que identifican los Contenidos y los Servicios también son marca registrada de MEDICAR. Esta marca registrada no puede ser usada en conexión con productos o servicios que no pertenezcan a MEDICAR, en cualquier forma que pueda causar confusión entre los Usuarios y/o que desacredite a MEDICAR.
                            <br />
                            <br />
                            Todos los textos imágenes, diseños, compilaciones y cualquier tipo de material que aparezca en este sitio web están registrados © 2024 por " MEDICAR ". Todos los derechos reservados. Prohibida la duplicación, distribución o almacenamiento en cualquier medio. Este Sitio (o cualquier porción de este Sitio) no puede ser reproducido, duplicado, copiado, vendido, revendido o explotado con otros fines distintos de aquellos expresamente permitidos por MEDICAR. All rights reserved. Do not duplicate, distribute, or store in any form.
                        </div>
                    )}

                    <div className='drop-text-5' onClick={() => toggleDropdown('revocationRight')}>
                        Derecho de Revocación
                    </div>
                    {dropdownOpen.revocationRight && (
                        <div className="dropdown-content">
                            MEDICAR se reserva el derecho, en cualquier momento y sin necesidad de darle notificación previa, de denegar, retirar el acceso al SITIO, o dar por concluido su calidad de Usuario del SITIO por violación de las condiciones generales aquí descriptas.
                        </div>
                    )}
                </div>
            </main>
            {/*--------------------MAIN END--------------------*/}

            {/*--------------------FOOTER START--------------------*/}
            <FooterBar />
            {/*--------------------FOOTER END--------------------*/}
        </>
    );
}
