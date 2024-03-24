import React from "react";
import Banner from '../assets/banner.jpg';
import how1 from '../assets/howtouse1.png';
import how2 from '../assets/howtouse2.png';
import how3 from '../assets/howtouse3.png';


const About = () => {
    return (
        <>
            <div className="w-screen overflow-hidden" style={{ height: '60vh' }}>
                <img className="w-full h-full object-cover object-center md:object-cover md:object-left-top" src={Banner} alt="people smiling" />
            </div>
            <p className="text-6xl font-normal text-slate-500 relative z-10 -top-24 ml-10">Que es Uber?</p>
            <div className="flex flex-col justify-center">
                <h2 className="text-3xl ml-10 font-semibold">Como funciona?</h2>
                <p className="mt-7 ml-10 mr-10 sm:mr-32 text-justify">Uber es una aplicación de transporte que permite a los usuarios solicitar un viaje con solo unos pocos toques en sus teléfonos inteligentes. Los conductores registrados en la plataforma pueden aceptar estas solicitudes y recoger a los pasajeros en sus ubicaciones designadas, utilizando sus propios vehículos.</p>
            </div>
            <div className="flex flex-col lg:flex-row mt-16 items-center">
                <img className="w-96 h-60 md:w-2/3 md:h-80 md:object-cover"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1554854756/assets/74/0853d5-80e4-414a-91d7-6fd0b15a136d/original/UberIM_20250-medium-%282%29.jpg" alt="nature" />
                <div className="flex flex-col justify-center mt-7 md:mt-7">
                    <h2 className="text-3xl ml-10 font-semibold">Viajes y mucho más</h2>
                    <p className="mt-7 ml-10 mr-10 sm:mr-32 text-justify">Además de ayudar a los usuarios a encontrar una forma de movilidad, ayudamos a las personas a pedir comida de manera rápida y económica, ampliamos el acceso a la atención médica, creamos nuevas soluciones para solicitar transporte de carga y ayudamos a las empresas a simplificar los viajes para sus empleados. Y siempre ayudamos a los socios de la App a generar ganancias.</p>
                </div>
            </div>
            <img className="mt-10 sm:w-screen sm:h-96 sm:object-contain "
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_450,h_300/v1555540623/assets/cb/9b789f-167d-4a57-ac3a-c23060bfa9e8/original/170830_DaraAllHands_0I7A9940_R2.jpg" alt="uber"/>
            <div className="flex flex-col justify-center mt-8">
                <h2 className="text-3xl ml-10 font-semibold">Nuestra Historia</h2>
                <p className="mt-7 ml-10 mr-10 sm:mr-32 text-justify">Uber nació de la idea de su fundador, el ingeniero informático Travis Kalanick, de conseguir un medio de transporte pulsando un botón. La idea surgió en 2008, cuando salía de un evento tecnológico en París y al intentar encontrar un taxi sin mucho éxito, pensó en lo bueno que sería tener un medio de transporte disponible simplemente pulsando un botón, lo que dio origen a Uber en 2009.<br/><br/>
Al principio se llamó UberCab, ofreciendo vehículos premium en algunas zonas selectas de San Francisco, lo que en su momento resultaba muy costoso si lo comparamos con los precios de hoy en día. En 2011, Uber eliminó "Cab" de su nombre debido a problemas con el gremio de los taxistas en la ciudad. A pesar de esto y de su alto coste, se convirtió en un servicio popular y se expandió por toda la ciudad gracias a su facilidad y simplicidad. Para entonces, la compañía ya tenía un valor de 60 millones de dólares gracias a varios inversores.<br/><br/>
En el mismo año, gracias a inversores como Jeff Bezos, fundador de Amazon, lograron expandirse a ciudades como Nueva York e incluso internacionalizarse al establecerse en París. En 2012 se anunció UberX, un servicio más económico que inició con la asociación de conductores independientes que prestaban su servicio con su propio vehículo, lo que actualmente conocemos como el modelo de negocio de Uber y que contribuyó al éxito de la aplicación.<br/><br/>
Para 2013, Uber ya tenía presencia en países como India y en varios países del continente africano. En 2014, Uber comenzó a funcionar en China y lanzó un servicio de entrega de paquetería en bicicleta en la ciudad de Manhattan. Ese mismo año nació UberPool, un servicio que ofrecía la opción de compartir viaje y gastos si las personas se dirigían hacia el mismo lugar.<br/><br/>
En 2015, en Hong Kong se lanzó el servicio de UberCargo, que ofrecía el envío de grandes paquetes mediante furgonetas o la realización de pequeñas mudanzas. Ese mismo año se lanzó UberEats, un servicio de comida rápida a domicilio en Los Ángeles, Chicago, Nueva York y Barcelona. Además, en este periodo de tiempo se asociaron con el servicio de cartografía de deCarta con el ánimo de mejorar sus servicios y no depender de empresas ajenas como Google Maps.<br/><br/>
La historia de Uber no ha sido del todo buena, como lo atestiguan los diferentes inconvenientes que han tenido a lo largo de los años, como por mencionar algunos: en 2014 se enfrentaron a protestas por parte de los taxistas de Londres, París, Berlín, Madrid, donde se afirmaba que Uber era una competencia desleal, ya que evitaban el pago de licencias y también evadían muchas de las leyes locales, lo que llevó a que ese mismo año un juez español prohibiera el servicio de Uber en España. Sin embargo, en 2015, tras algunos acuerdos, Uber logró regresar a España. En 2016, en Londres, Uber fue juzgado, lo que impidió su servicio en el Reino Unido, pero tras conversaciones y acuerdos, Uber logró reintegrarse al mercado inglés en 2018.<br/><br/>
En 2017, los accionistas de Uber forzaron la renuncia de su CEO debido a diferentes problemas y escándalos, como acusaciones de acoso sexual, malas prácticas empresariales, discusiones sobre la bajada de tarifas con los conductores de la compañía y problemas relacionados con su activa vida social. Durante la pandemia, la empresa se vio gravemente afectada por la crisis del COVID-19 en varios aspectos, como la caída del uso del servicio en un 70 al 90% y la suspensión de su servicio UberPool para viajes compartidos.<br/><br/>
Pero no todo fue malo durante la pandemia, también se aumentó el uso de UberEats y UberFreight, creciendo un 52% y 55% respectivamente. A pesar de la pérdida de 2.946 millones de dólares y el despido de 3.700 empleados, Uber afirma que se ha ido recuperando poco a poco, aunque todavía sigue teniendo problemas con la legislación de varios países, y un juez de California los demandó por tener a los conductores clasificados como contratistas y no como empleados. Actualmente, Uber está presente en más de 70 países y 600 ciudades.<br/><br/></p>
            </div>
            <div className="w-10/12 mb-5">
            <img className="mt-12 scale-125 sm:scale-110 mb-8 sm:mb-1" src={how1} alt="how to use 1"/>
            <img className="scale-125 sm:scale-110"  src={how2} alt="how to use 2"/>
            <img className="scale-125 sm:scale-110"  src={how3} alt="how to use 3"/>        
            </div>
        </>
    );
}

export default About;