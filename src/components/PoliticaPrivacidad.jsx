import React, { useState } from 'react';
import './PoliticaPrivacidad.scss';
import NavOut from "./NavBarLogOut";
import FooterBar from './FooterBar';

export default function PoliticaPrivacidad() {
    const [dropdownOpen, setDropdownOpen] = useState({
        dataMed: false,
        responsibilityData: false,
        dataHarvest: false,
        dataUse: false,
        dataSharing: false,
        storageTime: false,
        dataConfidentiality: false,
        dataRights: false,
        cookiesPolicy: false,
        securityAndStorage: false,
        policyChanges: false,
    });

    const toggleDropdown = (dropdown) => {
        setDropdownOpen({
//            ...dropdownOpen,
            [dropdown]: !dropdownOpen[dropdown],
        });
    };

    return (
        <>
{/*--------------------NAV START--------------------*/}
            <NavOut />
{/*--------------------NAV END--------------------*/}


{/*--------------------MAIN START--------------------*/}
            <main className='politica-main'>
                <h1 className='politica-title'>Política de Privacidad y Datos Personales de MedicAR</h1>
                <h2 className='politica-subtitle'>Antes de registrarte y/o utilizar y/o brindar tus datos personales en el sitio web o en la App, por favor lee atentamente la presente Política de Privacidad.</h2>
                <div className='dropdown-container'>
                    <div className='drop-text-1' onClick={() => toggleDropdown('dataMed')}>
                        Tus datos en MedicAR
                    </div>
                    {dropdownOpen.dataMed && (
                        <div className="dropdown-content">
                            En MEDICAR consideramos que la protección de los datos y la privacidad de las personas es uno de los pilares que forman parte del desarrollo de sus actividades y de la entrega de sus servicios. Es nuestra prioridad cuidar la información de socios, proveedores, prestadores, colaboradores y otras terceras partes con las cuales nos relacionamos y, para ello, trabajamos día a día buscando la mejora continua.
                            <br />
                            <br />
                            En la presente Política de Privacidad y Datos Personales (en adelante, “Política de Privacidad”) te contamos cómo y para qué MEDICAR recolecta, administra, y trata todos tus datos, así como también los casos específicos en que se comparten datos con terceros, tus derechos como titular de datos personales y cómo MEDICAR protege los datos en todo su ciclo de vida. 
                            <br />
                            <br />
                            La presente Política de Privacidad aplica a todos los servicios y operaciones de tratamientos de datos de MEDICAR, ya sea que el tratamiento se realice por sus filiales, las empresas de Grupo MEDICAR, todos los sitios web, la aplicación MEDICAR y demás aplicaciones móviles disponibilizadas, y a los servicios que MEDICAR brinda.
                            <br />
                            <br />
                            Para lograr su objetivo de brindar el acceso directo al mejor servicio de salud, todas las plataformas antes mencionadas, sitios y Apps conforman un todo y son necesarias e indispensables para brindarte los servicios de MEDICAR con la eficiencia y calidad esperada. Este punto será ampliado en la <b>Sección ¿Con quién compartimos tus Datos Personales?</b>, donde podrás encontrar más información respecto a esto último.
                            <br />
                            <br />
                            En MEDICAR recolectamos tus datos para brindarte acceso directo al servicio de salud con la eficiencia y calidad esperada, y mejorar nuestros servicios continuamente. 
                        </div>
                    )}

                    <div className='drop-text-2' onClick={() => toggleDropdown('responsibilityData')}>
                        ¿Cuál es la responsabilidad de MedicAR sobre el tratamiento de tus datos?
                    </div>
                    {dropdownOpen.responsibilityData && (
                        <div className="dropdown-content">
                            MEDICAR es el responsable del tratamiento de los datos de sus socios y de los usuarios de sus plataformas, sitio web, o Apps. 
                            <br />
                            <br />
                            El responsable de tratamiento es quien decide sobre la recolección y todo tratamiento de los datos personales, y quien determina los fines o usos para los que se utilizarán los datos recabados, así como también los medios utilizados para ese tratamiento. Este punto será ampliado en la <b>Sección ¿Con quién compartimos tus Datos Personales? </b>, donde podrás encontrar más información respecto a esto último.
                            <br />
                            <br />
                            Asimismo, el responsable es quien velará por la seguridad y confidencialidad de los datos personales, y dará cumplimiento al ejercicio de derechos de los socios y usuarios. Estos aspectos pueden ser ampliados en la <b>Sección ¿Cuáles son tus derechos sobre tus datos personales?</b> y en la <b>Sección  Seguridad y almacenamiento de la información personal. </b>
                        </div>
                    )}

                    <div className='drop-text-3' onClick={() => toggleDropdown('dataHarvest')}>
                        ¿Qué datos recolectamos y tratamos?
                    </div>
                    {dropdownOpen.dataHarvest && (
                        <div className="dropdown-content">
                            En MEDICAR recolectamos tus datos para brindarte acceso directo al servicio de salud con la eficiencia y calidad esperada, y mejorar nuestros servicios continuamente. 
                            <br />
                            <br />
                            El tratamiento que en MEDICAR realizamos de los datos personales tiene por objetivo en todos los casos brindar servicio a nuestros socios y mejorarlo en el tiempo, para lo cual también gestionamos datos de prestadores y proveedores quienes forman parte de la entrega de dicho servicio.
                            <br />
                            <br />
                            Recolectamos los siguientes datos:
                            <br />
                            <br />
                            •	Datos de identificación personal: nombre completo, DNI, CUIT, datos biométricos, credenciales de acceso, ocupación, profesión
                            <br />
                            •	Datos de contacto: dirección, código postal, números de teléfono, dirección de correo electrónico
                            <br />
                            •	Datos de salud: consumos, enfermedades crónicas, condiciones particulares de salud, etc.
                            <br />
                            •	Datos bancarios, de pago e impositivos: cuentas bancarias como caja de ahorro o cuenta corriente, banco de pertenencia, CBU, tarjetas de crédito, tarjetas de débito, condición impositiva, identificación tributaria, etc.
                            <br />
                            •	Datos derivados de la navegación de los socio y/o usuarios en nuestros sitios web, aplicaciones móviles, o redes sociales: Información de los dispositivos o computadoras desde los que el usuario accede al sitio, tipo o versión del navegador o del sistema operativo y otras configuraciones, dirección IP de internet utilizada para conectarse a nuestros sitios web, eventos de los usuarios dentro de los sitios web como por ejemplo accesos a información publicada y operaciones realizadas, datos de geolocalización, datos que se recolectan a través del uso de cookies y otras tecnologías similares y otros parámetros relativos al sistema operativo y al ambiente informático utilizado, la fecha y hora de la visita y su duración, la fuente de referencia, incluso los servicios y las ofertas que te interesan. Cabe destacar que podríamos asociar esta información a tu cuenta. 
                            <br />
                            •	Datos de tus dispositivos: datos provenientes de celulares, tablets o computadoras personales, recolectando información sobre uso del dispositivo, consumos, e información vinculada a tu geolocalización. 
                            <br />
                            •	Aquellos datos personales que MEDICAR hubiera recolectado en forma previa a la aceptación de la presente Política de Privacidad mediante la utilización de los servicios prestados por las Empresas del Grupo MEDICAR y/o mediante la utilización de los Sitios y/o las Apps o plataformas por parte de los Usuarios.
                            <br />
                            <br /> 
                            En el caso de nuestros proveedores y prestadores, además, recolectamos datos vinculados a las condiciones del servicio y valores de contratación, con el objeto de dar cumplimiento a los contratos respectivos y mejorar nuestros servicios.
                            <br />
                            <br /> 
                            En ciertos casos, los datos los facilitás vos mismo, registrándote o proveyendo la información requerida al utilizar alguno de nuestros servicios de manera presencial o digital. En otros casos, los recolectamos de forma automática, al navegar por nuestras páginas web, y utilizar nuestros servicios. Para más información, consulte la <b>Sección Política de Cookies y otras tecnologías</b>
                            <br />
                            <br />
                            Además podemos recolectar datos de contacto brindados por terceros para realizar un acercamiento en respuesta a intereses manifestados por los mismos. Estos datos son obtenidos de los titulares en cada caso, a través de nuestros sitios web, aplicaciones móviles o redes sociales.
                            <br />
                            <br />
                            No tenés obligación de proporcionarnos los datos detallados más arriba, sin embargo, es un requisito esencial y necesario para contratar, y/o utilizar nuestros servicios, y/o tener cualquier tipo de relación con MEDICAR. De no contar con estos datos, no podemos brindarte nuestros servicios o nuestra capacidad para hacerlo puede ser significativamente afectada. 
                            <br />
                            <br />
                            La inexactitud o falsedad de los datos proporcionados podría causar la suspensión de los servicios. 
                            <br />
                            <br />
                            Asimismo, MEDICAR podrá suspender o inhabilitar a aquellos socios o usuarios que violen la presente Política de Privacidad.
                        </div>
                    )}

                    <div className='drop-text-4' onClick={() => toggleDropdown('dataUse')}>
                        ¿Para qué utilizamos los datos personales que recolectamos?
                    </div>
                    {dropdownOpen.dataUse && (
                        <div className="dropdown-content">
                            En MEDICAR recolectamos tus datos para brindarte acceso directo al servicio de salud con la eficiencia y calidad esperada, para que puedas realizar tus gestiones y trámites de manera rápida y segura,  ofrecerte servicios que se adapten mejor a tus necesidades reales, y mejorar nuestros servicios continuamente. 
                            <br />
                            <br />
                            MEDICAR no utilizará tus datos personales para aquellas finalidades que la normativa aplicable lo prohíba, como tampoco con propósitos distintos para los que fue recabado tu consentimiento.
                            <br />
                            <br />
                            MEDICAR podrá utilizar tus datos personales recolectados con las siguientes finalidades:
                            <br />
                            <br />
                            •	Brindar servicio a los socios, prestar asesoramiento sobre los servicios, gestionar sus operaciones y trámites, controles de calidad, 
                            <br />
                            •	Mejorar el servicio al socio, desarrollar nuevos servicios y ofrecer una mejor experiencia con MEDICAR. 
                            <br />
                            •	Analizar los datos personales con fines de evaluación y otorgamiento de los servicios de MEDICAR. 
                            <br />
                            •	Prevenir, detectar y tratar usos inapropiados del servicio o abusos del mismo. 
                            <br />
                            •	Cumplir con obligaciones legales y contractuales, y requerimientos de autoridades competentes. 
                            <br />
                            •	Prevenir, detectar y tratar incidentes que pongan en riesgo la seguridad de los datos y privacidad de los socios o terceros. 
                            <br />
                            •	Mejorar las funcionalidades del Sitio Web y las Apps, personalizar la experiencia del socio y permitirle operar en las plataformas digitales de MEDICAR. 
                            <br />
                            •	Para contactarte en el futuro, enviarte comunicaciones -entre ellas, comunicaciones de marketing-, informarte sobre los servicios que MEDICAR crea que pueden ser de su interés y otorgar beneficios adicionales a los socios.
                        </div>
                    )}

                    <div className='drop-text-5' onClick={() => toggleDropdown('dataSharing')}>
                        ¿Con quién compartimos tus Datos Personales?
                    </div>
                    {dropdownOpen.dataSharing && (
                        <div className="dropdown-content">
                            En MEDICAR no vendemos ni comercializamos datos personales de ningún tipo, ni bajo ninguna circunstancia. Tampoco compartimos o transferimos de ningún modo tus datos personales a terceros, salvo de la forma referida a continuación. 
                            <br />
                            <br />
                            <br />
                            MEDICAR podrá ceder, transmitir y/o transferir tu información personal a:
                            <br />
                            <br />
                            •	Prestadores y Proveedores: Los prestadores de servicios o empresas son terceros que contratamos a fin de que actúen en nombre de MEDICAR, prestando un servicio siguiendo nuestras instrucciones y de conformidad con lo establecido en la presente Política de Privacidad, en el país o en el exterior en los supuestos previstos. Los proveedores son los terceros que contribuyen a mejorar o facilitar nuestra actividad como, por ejemplo: a) transporte, logística, actividades administrativas, call center y mensajería; b) medios de pago, intermediarios en la gestión de pagos para obtener el pago por los servicios adquiridos; c) proveedores de sistemas informáticos, desarrollo, servicios de procesamiento de datos e información para el alojamiento de nuestra base de datos, y proveedores de servicios tecnológicos en general; d) empresas que manejen programas de fidelidad o lealtad, para otorgarte beneficios, agencias de publicidad o marketing; e) análisis de datos; f) empresas especializadas en riesgos. Los Prestadores y Proveedores sólo acceden a la información estrictamente necesaria para prestar los servicios acordados y no pueden usarlos para finalidades distintas a las que les encomiende MEDICAR.
                            <br />
                            •	Autoridades Públicas administrativas y judiciales en ejercicio de su competencia, y Organismos de Control: Con la finalidad de: a) dar cumplimiento a alguna normativa, legal aplicable, o a algún mandato de autoridad competente debidamente fundado y motivado; b) colaborar en la investigación y colaborar en la investigación y denunciar fraudes, piratería, violaciones de propiedad intelectual o industrial o cualquier otro ilícito, así como cualquier actividad o circunstancia que pudiera generarle responsabilidad legal a MEDICAR y/o a sus usuarios; y, c) salvaguardar de un interés público, la procuración o administración de justicia, el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial o administrativo, y/o la resolución de controversias.
                            <br />
                            •	Grupo MEDICAR: Para brindarte acceso directo al mejor servicio de salud con la eficiencia y calidad esperada, facilitar y agilizar la comunicación con los usuarios, y mejorar nuestros servicios continuamente.
                            <br />
                            •	Proceso de Auditoría: Durante un proceso de auditoría, con los auditores y sus mandantes, siempre sujetos a obligación de confidencialidad.
                            <br />
                            •	Intervinientes en disputas: autoridades, amigables componedores, tribunales o entidades que intervengan en solución de disputas con la finalidad de resolver las controversias que se llegaran a suscitar entre socios y cualquiera de las empresas del Grupo MEDICAR. 
                            <br />
                            <br />
                            Sí MEDICAR decidiese compartir tus datos personales con terceros distintos a los mencionados, solicitaremos tu consentimiento previo y expreso, siempre y cuando no exista una fundamentación, autorización u obligación legal que permita realizarlo sin tal consentimiento. 
                            <br />
                            <br />
                            Asimismo, prestás tu consentimiento expreso e informado para que MEDICAR ceda, transmita o transfiera tu información personal a los destinatarios detallados en la presente Política de Privacidad.
                            <br />
                            <br />
                            MEDICAR no será responsable por el uso indebido de tus datos personales que haga cualquier tercero cuando sean estos terceros quienes directamente recolecten y/o traten tu información personal.
                        </div>
                    )}

                    <div className='drop-text-6' onClick={() => toggleDropdown('storageTime')}>
                        Tiempo de almacenamiento
                    </div>
                    {dropdownOpen.storageTime && (
                        <div className="dropdown-content">
                        En MEDICAR solo almacenaremos tus datos personales durante el tiempo necesario para cumplir con el propósito que motivó su recolección, para cumplir con requisitos legales o reglamentarios, o durante el período de prescripción legal de posibles responsabilidades legales o contractuales.
                        </div>
                    )}

                    <div className='drop-text-7' onClick={() => toggleDropdown('dataConfidentiality')}>
                        Confidencialidad de los Datos Personales y Responsabilidad de los Usuarios
                    </div>
                    {dropdownOpen.dataConfidentiality && (
                        <div className="dropdown-content">
                            Los socios y usuarios son responsables de la información personal brindada, inclusive de cualquier error en la carga de la información. Asimismo, sos responsable de proporcionar datos exactos, veraces y actualizados, sean tuyos y/o de terceros que te han autorizado expresamente a brindarlos a MEDICAR. La inexactitud o falsedad de los datos proporcionados podría causar la suspensión de los servicios. 
                            <br />
                            <br />
                            Los socios y usuarios entienden que no están obligados/as a proporcionarnos sus datos personales, sin embargo, es un requisito esencial y necesario para contratar, y/o utilizar nuestros servicios, y/o tener cualquier tipo de relación con MEDICAR. De no contar con estos datos, no podemos brindar nuestros servicios o nuestra capacidad para hacerlo puede ser significativamente afectada. 
                            <br />
                            <br />
                            MEDICAR podrá suspender o inhabilitar a aquellos socios o usuarios que violen la presente Política de Privacidad.
                            <br />
                            <br />
                            Una vez que contrates nuestros servicios o estés registrado/a en el Sitio Web y/o en las Apps podrás disponer de un usuario, credencial y contraseña que te permitirá el acceso personalizado, confidencial y seguro a tus servicios. Los socios se obligan a mantener la confidencialidad de su clave de acceso, asumiendo la responsabilidad por el mantenimiento de la confidencialidad de sus claves y credenciales. El usuario, credencial y contraseña son de uso personal y su entrega a terceros no involucra responsabilidad de MEDICAR en caso de uso inapropiado. 
                            <br />
                            <br />
                            Te comprometes a notificar a MEDICAR en forma inmediata y por medio idóneo y fehaciente, cualquier uso no autorizado de tu credencial y/o en el Sitio web y/o en la App, así como el ingreso por terceros no autorizados a la misma.
                            <br />
                            <br />
                            En MEDICAR haremos todo lo que esté a nuestro alcance para proteger la privacidad y seguridad de tus datos personales.
                        </div>
                    )}

                    <div className='drop-text-8' onClick={() => toggleDropdown('dataRights')}>
                        ¿Cuáles son tus derechos sobre tus datos personales?
                    </div>
                    {dropdownOpen.dataRights && (
                        <div className="dropdown-content">
                            En cumplimiento con la normativa aplicable y vigente, posees ciertos derechos sobre tus datos personales. De esta forma, podrás solicitar:
                            <br />
                            <br />
                            •	Acceso a tu información personal: podrás solicitar conocer qué datos tiene MEDICAR sobre tu persona. 
                            <br />
                            •	Rectificación de tu información personal: podrás solicitar a MEDICAR corregir ciertos datos que MEDICAR posea sobre tu persona, en caso de que los mismos no fuesen íntegros o adecuados.
                            <br />
                            •	Actualización de tu información personal: podrás solicitar a MEDICAR la actualización o modificación de ciertos datos que MEDICAR posea sobre tu persona, en caso de que los mismos se encuentren desactualizados.
                            <br />
                            •	Supresión de tu información personal: podrás solicitar a MEDICAR la eliminación de ciertos datos que MEDICAR posea sobre tu persona, siempre y cuando no se configure ninguno de los siguientes supuestos: a) la supresión pudiese causar un perjuicio interés legítimo al titular o a terceros; b) Cuando hubiese una relación contractual vigente para cuyo desarrollo y gestión se precisen los datos; c) Cuando sea preciso su mantenimiento para gestionar intereses legítimos de cobro o de gestión de MEDICAR; d) Cuando por imposición de la legislación vigente exista obligación de conservar los datos.
                            <br />
                            •	Cese en el envío de publicidades, ofertas y promociones: podrás solicitar a MEDICAR el no envío de ciertos mensajes o contactos que contengan, ofertas, promociones o beneficios.
                            <br />
                            •	Revisión de decisiones automatizadas; podrás solicitar a MEDICAR la revisión de ciertas decisiones automatizadas sobre tu persona, de acuerdo a lo indicado en la Sección 9. Decisiones Automatizadas y Elaboración de Perfiles
                            <br />
                            <br />
                            Tus datos personales serán almacenados según lo informado en la <b>Sección Tiempo de Almacenamiento</b>. Una vez cumplido ese plazo, o solicitada su supresión y siempre que sea posible de acuerdo a la normativa, reglamentación u obligaciones vigentes, procederemos a eliminar o anonimizar tu información personal.
                        </div>
                    )}

                    <div className='drop-text-9' onClick={() => toggleDropdown('cookiesPolicy')}>
                        Política de Cookies y otras tecnologías
                    </div>
                    {dropdownOpen.cookiesPolicy && (
                        <div className="dropdown-content">
                            Reconocés y brindás tu consentimiento para que expresamente MEDICAR pueda utilizar un sistema de seguimiento de conducta mediante la utilización de "cookies" y/u otras  tecnologías similares de seguimiento.
                            <br />
                            <br />
                            Las cookies nos son útiles para entender qué secciones del sitio web son más visitadas, nos ayudan a evidenciar a qué páginas y funcionalidades tienen acceso los usuarios, sus búsquedas y el tiempo de permanencia en las páginas. Al analizar esta información, en MEDICAR podemos adaptar mejor nuestros sitios, proporcionarte una mejor experiencia y mejorar nuestros servicios. Las cookies también facilitan la navegación de los usuarios, proporcionando una mejor experiencia de navegación, identificando problemas, haciendo cumplir las condiciones de seguridad, obteniendo mediciones y estadísticas de uso y mostrarte publicidad relacionada con tus preferencias y necesidades reales a través del análisis del uso del sitio web y de otras páginas. Asimismo, almacenamos cookies para poder ofrecer una experiencia más interactiva en el sitio, basada en tus acciones como usuario.
                            <br />
                            <br />
                            Estas cookies estarán disponibles y serán utilizadas por MEDICAR y por las empresas del Grupo MEDICAR. Tus datos obtenidos a través de estas tecnologías no serán transferidos a terceros de una manera diferente a las descritas en la presente Política de Privacidad.
                            <br />
                            <br />
                            Al utilizar un explorador web para obtener acceso a nuestro sitio web y plataformas, podés configurar tu explorador para que acepte todas las cookies, rechace todas las cookies o le notifique cuando se envía una cookie. Cada explorador es diferente, de forma que te sugerimos revisar el menú "Ayuda" de tu explorador para obtener información sobre cómo cambiar las preferencias de las cookies. MEDICAR no se responsabiliza de las funcionalidades habilitadas de cada navegador. Tené en cuenta que el Sitio web y nuestras plataformas pueden estar diseñados para funcionar mediante cookies y que la desactivación de las cookies podría afectar la capacidad de utilizar el Sitio de forma total o parcial.
                            <br />
                            <br />
                            Asimismo, el sistema operativo de tu dispositivo puede contener controles adicionales para las cookies.
                        </div>
                    )}

                    <div className='drop-text-10' onClick={() => toggleDropdown('securityAndStorage')}>
                        Seguridad y almacenamiento de la información personal
                    </div>
                    {dropdownOpen.securityAndStorage && (
                        <div className="dropdown-content">
                            En MEDICAR damos cumplimiento a la normativa vigente en materia de protección de datos y hemos adoptado medidas técnicas, administrativas y de procesos, así como también estándares y mejores prácticas de la industria para proteger tus datos personales. 
                            <br />
                            <br />
                            Estas medidas tienen como objeto proteger la confidencialidad, integridad y disponibilidad de tus datos. A modo ejemplificativo, algunos de los controles implementados son los siguientes: 
                            <br />
                            <br />
                            •	Practicamos la privacidad y seguridad por diseño en las aplicaciones y desarrollos, ya sea desde el comienzo de un proyecto o en la mejora de procesos y/o sistemas.
                            <br />
                            •	Evaluamos los riesgos de los cambios o innovaciones en el tratamiento de datos con el objeto de mitigarlos hasta niveles aceptables.
                            <br />
                            •	Implementamos el criterio de “necesidad de saber” y “privilegio de acceso mínimo” a la hora de asignar permisos de acceso/modificación/eliminación de datos.
                            <br />
                            •	Realizamos concientización y capacitación interna en materia de protección de datos y privacidad.
                            <br />
                            •	Implementamos controles de acceso a los sistemas y los datos donde éstos se encuentren de acuerdo a su criticidad, incluyendo políticas de contraseñas, múltiples factores de autenticación, esquemas de autorización, entre otros.
                            <br />
                            •	Ciframos los datos en reposo y en tránsito con el objeto de que no sean inteligibles por terceros no autorizados.
                            <br />
                            •	No utilizamos datos reales en ambientes no productivos como por ejemplo ambientes de prueba.
                            <br />
                            •	Implementamos controles de detección y prevención de fuga de datos de acuerdo a políticas establecidas.
                            <br />
                            •	Resguardamos los datos con copias de seguridad adecuadamente protegidas.
                            <br />
                            •	Implementamos controles de acceso físico a los datos en los centros de procesamiento y oficinas.
                            <br />
                            •	Contamos con un proceso de gestión de incidentes de seguridad, dar respuesta rápida a los mismos y proceder a su remediación minimizando efectos adversos. Dicha gestión contempla la información a terceros afectados en caso de compromiso de sus datos.
                            <br />
                            <br />
                            En la medida en que MEDICAR haya cumplido con las normas y adoptado las medidas mencionadas en el apartado anterior, no se hace responsable por interceptaciones ilegales o violaciones de sus sistemas o bases de datos, ni por su utilización por parte de personas no autorizadas. MEDICAR tampoco se hace responsable por la indebida utilización de la información obtenida por esos medios.
                        </div>
                    )}

                    <div className='drop-text-11' onClick={() => toggleDropdown('policyChanges')}>
                        Cambios en nuestra Política de Privacidad
                    </div>
                    {dropdownOpen.policyChanges && (
                        <div className="dropdown-content">
                            MEDICAR realiza actualizaciones periódicas sobre la presente Política de Privacidad para reflejar los cambios constantes y la mejora en los servicios que ofrecemos. Estas actualizaciones reflejarán de manera transparente la forma en que la información personal es tratada. Te notificaremos de estos cambios por nuestros canales habituales, como el correo electrónico o mensajes a través de las aplicaciones. En los casos que corresponda, recabaremos tu consentimiento expreso e informado.
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