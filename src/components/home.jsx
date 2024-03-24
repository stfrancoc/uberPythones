import React from "react";
import Cards from "./Cards";

const Home = () => {
    const integrantes = [
        { name: "Jeison", email: "jeison.1702018443@ucaldas.edu.co", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiS2iLeFtYorbY-uDsRd9R1nowj_qZWtmRfen-gmdDQo07oJrgEGrbOI6ZYlkydnPm4jBeCMNnkEV4APsmXvg22Hk0VU-6pStUXPSOtLxFu41FFaLwBpvFB4fNU4TzePIj1XYDpYR8hAaOm/s1600/3795030896_3484dd3434.jpg" },
        { name: "Jhonier", email: "jhonier.1701814263@ucaldas.edu.co", img: "https://images3.wikia.nocookie.net/__cb20091016143805/phineasandferb/images/6/61/Hey_Ferb.png" },
        { name: "Arcenio", email: "arcenio.1701625174@ucaldas.edu.co", img: "https://images.wikia.com/phineasandferb/images/3/39/Baljeet_studying.png" },
        { name: "Vanessa", email: "vanessa.1702011634@ucaldas.edu.co", img: "https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_vwTOv6NauzEWqiWuEL80mQl5tQ7rVywvo0yp0d0ad9JCj0Ku2uKZ-exYpkRnvlPFSlqPWbEHD9wJlMHJXZwPWk3_z5-OEGvHZ3Z5pHqVnblNFBOGQnJNh-2F2S1q0T9j_nPMbRid4bJWUj=s0-d" },
        { name: "Pablo", email: "juan.valencia29169@ucaldas.edu.co", img: "https://images.wikia.com/phineasandferb/images/c/c4/Buford_Van_Stomm.png" }
    ]

    return (
        <>
            <h1 className="text-4xl ml-10 font-semibold text-center mt-10">integrantes</h1>
            <div className="flex w-screen justify-around flex-wrap lg:justify-center lg:gap-10">
                {integrantes.map((integrante) => (
                    <Cards name={integrante.name} email={integrante.email} img={integrante.img} />
                ))}
            </div>
            <div>
                <div className="flex flex-col justify-center mt-10 text-center">
                    <h2 className="text-3xl ml-10 font-semibold">Introduccion</h2>
                    <p className="mt-7 ml-10 mr-10 sm:mr-32 text-justify">En este espacio digital, nos sumergimos profundamente en el corazón de Uber, una aplicación que ha revolucionado la forma en que nos movemos de un lugar a otro. Nuestro objetivo es desentrañar los cimientos sobre los cuales se construye esta innovadora plataforma, centrándonos específicamente en el proceso de elicitación de requisitos que ha permitido a Uber destacarse en el mundo de las aplicaciones de movilidad.<br /><br />
                        <b>Home: Nuestro Equipo y Misión</b> <br />
                        En nuestra página de inicio, conocerás al equipo dedicado que ha estado involucrado en este análisis exhaustivo. Desde ingenieros de software hasta diseñadores de experiencia del usuario, cada persona ha aportado su expertise para comprender mejor cómo Uber satisface y supera las expectativas de sus usuarios. Acompañándonos en este viaje, encontrarás una introducción que esboza nuestros objetivos y cómo planeamos alcanzarlos.
                        <br /><br />
                        <b>Requirements: Requisitos Funcionales y No Funcionales</b><br />
                        Adentrándonos en el núcleo de Uber, dedicamos una sección especial a los requisitos funcionales y no funcionales de la aplicación. Estos criterios son esenciales para entender qué hace que Uber funcione tan fluidamente y cómo se diferencia de otras ofertas en el mercado. Al final de esta sección, encontrarás una nota especial de nuestro profesor junto con el formulario que utilizamos para la elicitación de requisitos, ofreciéndote una mirada interna al proceso metodológico que seguimos.
                        <br /><br />
                        <b>About: La Historia de Uber</b><br />
                        Para aquellos interesados en la evolución de Uber, hemos dedicado una página completa a su historia. A través de fotografías cautivadoras y análisis detallados, exploramos cambios en la navegabilidad, el diseño del logotipo y la interfaz de usuario a lo largo de los años. Esta retrospectiva no solo celebra el crecimiento de Uber sino que también destaca las decisiones de diseño que han contribuido a su éxito.
                        <br /><br />
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;