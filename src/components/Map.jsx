import React, { useEffect, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHeartPulse, faBedPulse, faPersonHalfDress, faBone, faTooth, faEye, faEarListen, faVials } from '@fortawesome/free-solid-svg-icons';
import './Map.scss';

const Map = () => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            const map = L.map('map').setView([-34.600121, -58.4526834], 13);
            mapRef.current = map;

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            map.on('dblclick', handleMapDoubleClick);

            // Marcadores fijos
            const fixedMarkers = [
                { lat: -34.6040344, lng: -58.3867163, Specialty: 'Cardiología', Name:'Sofía', Surname:'González', SocialWork:'Osde', Address:'Av. Corrientes 1234, Ciudad Autónoma de Buenos Aires', Score:'4.5'  },
                { lat: -34.6023458, lng: -58.397178, Specialty: 'Obstetricia', Name:'Martín', Surname:'López', SocialWork:'Galeno', Address:'Av. Callao 567, Ciudad Autónoma de Buenos Aires', Score:'3'  },
                { lat: -34.5950856, lng: -58.3807901, Specialty: 'Ginecología', Name:'Lucía', Surname:'Martínez', SocialWork:'Varios', Address:'Av. Santa Fe 789, Ciudad Autónoma de Buenos Aires', Score:'4'  },
                { lat: -34.5853375, lng: -58.4018579, Specialty: 'Traumatología', Name:'Diego', Surname:'Rodríguez', SocialWork:'SanCorSalud', Address:'Av. Las Heras 2541, Ciudad Autónoma de Buenos Aires', Score:'4.5'  },
                { lat: -34.613752, lng: -58.429166, Specialty: 'Odontología', Name:'Carolina', Surname:'Fernández', SocialWork:'Ninguna', Address:'Av. Rivadavia 4321, Ciudad Autónoma de Buenos Aires', Score:'3.5'  },
                { lat: -34.5988173, lng: -58.3834931, Specialty: 'Cardiología', Name:'Juan', Surname:'Pérez', SocialWork:'Swiss Medical', Address:'Av. Córdoba 987, Ciudad Autónoma de Buenos Aires', Score:'5'  },
                { lat: -34.5924412, lng: -58.4323957, Specialty: 'Oftalmología', Name:'María', Surname:'Díaz', SocialWork:'Varios', Address:'Av. Scalabrini Ortiz 1356, Ciudad Autónoma de Buenos Aires', Score:'4'  },
                { lat: -34.59187, lng: -58.4423975, Specialty: 'Otorrinolaringología', Name:'Andrés', Surname:'Gómez', SocialWork:'Osde', Address:'Av. Juan B. Justo 2124, Ciudad Autónoma de Buenos Aires', Score:'4'  },
                { lat: -34.6063125, lng: -58.4082661, Specialty: 'Hematología', Name:'Laura', Surname:'Sánchez', SocialWork:'Galeno', Address:'Av. Pueyrredón 321, Ciudad Autónoma de Buenos Aires', Score:'4.5'  },
                { lat: -34.6036258, lng: -58.3810557, Specialty: 'Traumatología', Name:'Ignacio', Surname:'Torres', SocialWork:'Swiss Medical', Address:'Av. Corrientes 678, Ciudad Autónoma de Buenos Aires', Score:'3.5'  },   
            ];

            fixedMarkers.forEach(marker => {
                const { lat, lng, Specialty, Name, Surname, SocialWork, Address, Score } = marker;
                let icon;
                switch (Specialty) {
                    case 'Cardiología':
                        icon = faHeartPulse;
                        break;
                    case 'Obstetricia':
                        icon = faBedPulse;
                        break;
                    case 'Ginecología':
                        icon = faPersonHalfDress;
                        break;
                    case 'Traumatología':
                        icon = faBone;
                        break;
                    case 'Odontología':
                        icon = faTooth;
                        break;
                    case 'Oftalmología':
                        icon = faEye;
                        break;
                    case 'Otorrinolaringología':
                        icon = faEarListen;
                        break;
                    case 'Hematología':
                        icon = faVials;
                        break;
                    default:
                        icon = faLocationDot;
                }

                const customIcon = L.divIcon({
                    html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={icon} className='location-marker-icon' />),
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                    popupAnchor: [0, -32]
                });

                L.marker([lat, lng], { icon: customIcon })
                    .bindPopup(`<b>${'Especialidad: '+Specialty}</b><br />${'Dr/a. '+Surname+', '}${Name}<br />${'Obra Social: '+SocialWork}<br />${'Calificación: '+Score}<br />${Address}`)
                    .addTo(map);
            });
        }

        // Deshabilita el zoom cuando se hace doble click
        if (mapRef.current) {
            mapRef.current.doubleClickZoom.disable();
        }
    }, []);

    const handleMapDoubleClick = (e) => {
        // Obtener las coordenadas del evento de doble clic
        const { lat, lng } = e.latlng; 
        if (markerRef.current) {
            // Actualizar la posición del marcador
            markerRef.current.setLatLng([lat, lng]); 
        } else {
            // Crear un nuevo marcador personalizado con el icono de FontAwesome
            const icon = L.divIcon({
                html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faLocationDot} className='location-marker-icon' />),
                iconSize: [32, 32],
                iconAnchor: [16,32],
                popupAnchor: [0, -32]
            });
            markerRef.current = L.marker([lat, lng], { icon }).addTo(mapRef.current);
        }
    };

    return (
        <div id="map" className="map-container"></div>
    );
};

export default Map;
