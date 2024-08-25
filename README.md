# MedicAR

Descripción del Proyecto: 

Aplicación de Búsqueda y Visualización de Profesionales Médicos.

Este proyecto se centra en desarrollar una aplicación web para la búsqueda y visualización de profesionales médicos basada en React JS, Node.js, y Leaflet para mapas interactivos. La aplicación está diseñada para dos tipos de usuarios: usuarios finales que buscan profesionales médicos y profesionales médicos que gestionan sus perfiles.

Tecnologías Utilizadas:

Frontend: React JS con estilos SCSS para la interfaz de usuario. FontAwesome para iconos personalizados.
Backend: Node.js con Express para la API RESTful.
Base de Datos: SQLite para almacenar perfiles de profesionales médicos.
Mapas Interactivos: Leaflet para visualizar la ubicación de los profesionales en un mapa interactivo.
Componentes Clave:

Frontend:

Inicio de Sesión y Perfiles: Utiliza React Router para la navegación entre páginas como el inicio de sesión y los perfiles de usuario.
Búsqueda de Profesionales: Un formulario interactivo permite a los usuarios buscar médicos por especialidad y obra social, mostrando resultados dinámicamente en una tabla.
Perfiles de Profesionales: Los profesionales médicos pueden gestionar su perfil, actualizando información como especialidad, obra social y dirección, almacenados en la base de datos SQLite.

Backend:

API RESTful: Implementada con Node.js y Express para gestionar la autenticación de usuarios mediante tokens JWT y el almacenamiento de perfiles de profesionales.
Persistencia de Datos: Utiliza SQLite como base de datos relacional para almacenar y recuperar perfiles de profesionales médicos y sesiones de usuario.
Mapas Interactivos:

Leaflet: Integrado para mostrar ubicaciones de profesionales médicos en un mapa interactivo. Los marcadores están personalizados con iconos FontAwesome que representan la especialidad de cada médico.
Funcionalidades Adicionales:

Gestión de sesiones de usuario y roles mediante tokens JWT para acceso seguro a las funciones del usuario.
Integración de estilos SCSS para mejorar la interfaz de usuario y hacerla más atractiva y accesible.
Implementación de marcadores fijos y dinámicos en el mapa para mostrar ubicaciones de profesionales médicos, permitiendo a los usuarios hacer doble clic en el mapa para añadir marcadores dinámicos.
Objetivos del Proyecto:

Proporcionar a los usuarios finales una plataforma intuitiva para buscar y encontrar profesionales médicos según sus necesidades específicas.
Facilitar a los profesionales médicos la gestión y actualización de sus perfiles profesionales para mejorar su visibilidad y accesibilidad para los pacientes.
Integrar tecnologías modernas y buenas prácticas de desarrollo para garantizar la escalabilidad, seguridad y eficiencia del sistema.

### `npm run start:both`

Corre la aplicación en (http://localhost:3000) en el navegador e inicia el servidor del backend en (PORT:5000)
Simplifica el uso de `npm start` y `node server.js` en un solo comando. 
