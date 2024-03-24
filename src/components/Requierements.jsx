import React from "react";
import RUber from '../assets/RUber.png';

const Requirements = () => {
    return (
        <>
            <div className="w-screen overflow-hidden" style={{ height: '60vh' }}>
                <img className="w-full h-full object-fill object-center md:object-cover md:object-left-top" src={RUber} alt="Pov of app" />
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
                <h2 className="text-3xl ml-10 font-semibold">Requisitos Funcionales</h2>
                <ol class="list-inside list-decimal p-10 text-lg font-medium lg:px-40">
                    <li class="mb-4 text-left leading-loose">
                        El sistema permitirá que los usuarios se registren en la plataforma proporcionando información básica como nombre, dirección de correo electrónico, número de teléfono, etc.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        El sistema permitirá a los usuarios solicitar un servicio de transporte especificando su ubicación actual y su destino.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        El sistema utilizará servicios de geolocalización para rastrear la ubicación del usuario y de los conductores cercanos.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        El sistema debe asignar automáticamente un conductor disponible más cercano al usuario que solicitó el servicio.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Proporcionar a los usuarios y a los conductores la capacidad de seguir el progreso del viaje en tiempo real a través de un mapa.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        El sistema facilita el pago del servicio a través de múltiples métodos de pago, como tarjetas de crédito, PayPal, efectivo, etc.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        El sistema permitirá a los usuarios solicitar vehículos específicos según sus necesidades, como vehículos con capacidad para sillas de ruedas o vehículos de lujo.
                    </li>
                </ol>
            </div>
            <div class="flex flex-col justify-center items-center mt-10">
                <h2 className="text-3xl ml-10 font-semibold">Ventajas</h2>
                <ol class="list-inside list-decimal p-10 text-lg font-medium lg:px-40">
                    <li class="mb-4 text-left leading-loose">
                        Comodidad: Uber ofrece una forma cómoda y fácil de reservar viajes. Los usuarios pueden solicitar un viaje con unos pocos toques en sus teléfonos inteligentes, eliminando la necesidad de llamar a un taxi o esperar al transporte público.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Disponibilidad: Uber opera en muchas ciudades y regiones, proporcionando a los usuarios acceso a opciones de transporte incluso en zonas donde los taxis tradicionales pueden escasear.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Rentable: En algunos casos, los viajes en Uber pueden ser más rentables que los servicios de taxi tradicionales, especialmente cuando no se aplican los precios por sobrecarga. Suele ofrecer precios por adelantado, para que los pasajeros sepan el coste antes de reservar.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Transacciones sin efectivo: Las transacciones de Uber no requieren dinero en efectivo, ya que los pagos se realizan a través de la aplicación con tarjetas de crédito o monederos digitales, lo que elimina la necesidad de efectivo físico.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Valoración de conductores: Uber permite a los usuarios puntuar a los conductores y dar su opinión, lo que puede mejorar la calidad del servicio y la responsabilidad de los conductores.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Funciones de seguridad: La app de Uber ofrece funciones como el seguimiento en tiempo real de los viajes, información sobre el conductor y la posibilidad de compartir los detalles del viaje con contactos de confianza para mayor seguridad.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Diversas opciones de vehículos: Uber ofrece varias opciones de vehículos, incluyendo viajes estándar, vehículos más grandes (UberXL), coches de lujo (Uber Black), y más, atendiendo a diferentes preferencias y necesidades.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Ingresos del conductor: Uber ofrece oportunidades de ingresos flexibles para los conductores, que pueden elegir cuándo y cuánto quieren trabajar.
                    </li>
                </ol>
            </div>
            <div class="flex flex-col justify-center items-center mt-10">
                <h2 className="text-3xl ml-10 font-semibold">Desventajas</h2>
                <ol class="list-inside list-decimal p-10 text-lg font-medium lg:px-40">
                    <li class="mb-4 text-left leading-loose">
                        Aumento de precios: Durante las horas punta o de alta demanda, Uber puede aplicar precios de sobrecarga, aumentando significativamente el costo de los viajes, lo que puede ser frustrante para los pasajeros.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Preocupaciones por la seguridad: Aunque Uber ha implementado funciones de seguridad, se han producido incidentes relacionados con la seguridad de los usuarios y los conductores, lo que suscita preocupación sobre la selección y supervisión de los conductores.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Cuestiones normativas: Uber se ha enfrentado a desafíos regulatorios en muchas ciudades, lo que ha dado lugar a disputas legales y, a veces, a prohibiciones absolutas. Esto puede crear inseguridad tanto para los conductores como para los pasajeros.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Remuneración del conductor: Algunos conductores se declaran insatisfechos con sus ingresos, especialmente si se tienen en cuenta gastos como el combustible, el mantenimiento y el seguro.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Servicio incoherente: La calidad del servicio puede variar mucho según el conductor y la ubicación. Algunos pasajeros pueden tener buenas experiencias, mientras que otros pueden encontrar problemas.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Falta de beneficios para empleados: Uber clasifica a sus conductores como contratistas independientes, lo que significa que no reciben prestaciones como seguro médico, cotizaciones para la jubilación o tiempo libre remunerado.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Accesibilidad: Uber puede no ser accesible para todo el mundo, sobre todo para quienes no tienen smartphones o acceso a internet.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Impacto medioambiental: La proliferación de servicios de transporte compartido como Uber ha suscitado preocupación por el aumento de la congestión del tráfico y las emisiones de carbono en algunas ciudades.
                    </li>
                </ol>
            </div>
            <div class="flex flex-col justify-center items-center mt-10">
                <h2 className="text-3xl ml-10 font-semibold">Requisitos Funcionales Basados en las Desventajas</h2>
                <ol class="list-inside list-decimal p-10 text-lg font-medium lg:px-40">
                    <li class="mb-4 text-left leading-loose">
                        Seguridad:
                        Implementar un botón de emergencia en la aplicación para que los usuarios puedan solicitar ayuda en caso de emergencia.
                        Realizar una verificación de antecedentes más exhaustiva a los conductores, incluyendo pruebas de drogas y alcohol.
                        Proporcionar notificaciones en tiempo real sobre la ubicación y el progreso del viaje a los usuarios y a los contactos de emergencia.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Precios:
                        Mostrar una estimación clara del costo del viaje antes de que el usuario lo solicite, incluyendo el desglose de los cargos por distancia, tiempo y demanda.
                        Ofrecer opciones de tarifas fijas para viajes predefinidos o recurrentes.
                        Notificar a los usuarios sobre los precios de sobrecarga durante las horas punta y permitirles cancelar el viaje sin penalización si lo desean.
                    </li>
                </ol>
            </div>
            <div class="flex flex-col justify-center items-center mt-10">
                <h2 className="text-3xl ml-10 font-semibold">Requisitos No Funcionales</h2>
                <ol class="list-inside list-decimal p-10 text-lg font-medium lg:px-40">
                    <li class="mb-4 text-left leading-loose">
                        Escalabilidad y rendimiento:
                        El sistema debe ser capaz de manejar un gran volumen de usuarios y solicitudes simultáneas sin degradación del rendimiento.
                        El sistema debe ser capaz de escalar horizontalmente para aumentar la capacidad según sea necesario.
                        El sistema debe monitorizar y optimizar el rendimiento para garantizar una experiencia fluida para los usuarios.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Disponibilidad:
                        El sistema debe estar disponible las 24 horas del día, los 7 días de la semana.
                        El sistema debe tener un plan de recuperación ante desastres para minimizar el tiempo de inactividad en caso de fallo.
                        El sistema debe monitorizar la disponibilidad y la latencia para garantizar un servicio fiable.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Compatibilidad:
                        La aplicación debe ser compatible con una amplia gama de dispositivos y plataformas, incluyendo dispositivos móviles (iOS, Android) y navegadores web.
                        La aplicación debe ser fácil de usar y navegar en diferentes dispositivos.
                        La aplicación debe adaptarse a diferentes tamaños de pantalla y resoluciones.
                    </li>
                    <li class="mb-4 text-left leading-loose">
                        Manejo de picos de demanda:
                        El sistema debe ser capaz de manejar picos de demanda sin experimentar fallos o tiempos de inactividad.
                        El sistema debe tener mecanismos de autoescalado para aumentar la capacidad automáticamente durante los picos de demanda.
                        El sistema debe monitorizar el rendimiento y la capacidad para detectar y solucionar problemas de forma proactiva.
                    </li>
                </ol>
            </div>
            <div className="flex flex-col items-center font-semibold bg-gray-100 p-5">
                <p className="mt-5 ml-10 mr-10 sm:mr-32 text-justify">
                El siguiente cuestionario se diseñó con el fin de recabar información relevante para el desarrollo del proyecto de elicitación de requerimientos para la plataforma Uber.
                </p>
                <a className="text-stone-800 mt-5" href="https://forms.gle/oyv91f4iPbJ5eh6LA" target="_blank" rel="noopener noreferrer">CUESTIONARIO UBER</a>
            </div>

        </>
    );
};

export default Requirements;