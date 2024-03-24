import React from "react";
import Cards from "./Cards";

const Home = () => {
    const integrantes = [
        {name:"Jeison" ,email:"jeison.1702018443@ucaldas.edu.co" ,img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiS2iLeFtYorbY-uDsRd9R1nowj_qZWtmRfen-gmdDQo07oJrgEGrbOI6ZYlkydnPm4jBeCMNnkEV4APsmXvg22Hk0VU-6pStUXPSOtLxFu41FFaLwBpvFB4fNU4TzePIj1XYDpYR8hAaOm/s1600/3795030896_3484dd3434.jpg"},
        {name:"Jhonier" ,email:"jhonier.1701814263@ucaldas.edu.co" ,img:"https://images3.wikia.nocookie.net/__cb20091016143805/phineasandferb/images/6/61/Hey_Ferb.png"},
        {name:"Arcenio" ,email:"arcenio.1701625174@ucaldas.edu.co" ,img:"https://images.wikia.com/phineasandferb/images/3/39/Baljeet_studying.png"},
        {name:"Vanessa" ,email:"vanessa.1702011634@ucaldas.edu.co" ,img:"https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_vwTOv6NauzEWqiWuEL80mQl5tQ7rVywvo0yp0d0ad9JCj0Ku2uKZ-exYpkRnvlPFSlqPWbEHD9wJlMHJXZwPWk3_z5-OEGvHZ3Z5pHqVnblNFBOGQnJNh-2F2S1q0T9j_nPMbRid4bJWUj=s0-d"},
        {name:"Pablo" ,email:"juan.valencia29169@ucaldas.edu.co" ,img:"https://images.wikia.com/phineasandferb/images/c/c4/Buford_Van_Stomm.png"}
    ]


    return (
        <>
        <div className="flex w-screen justify-around flex-wrap">
            {integrantes.map((integrante)=>(
                <Cards name={integrante.name} email={integrante.email} img={integrante.img}/>
            ))}
        </div>
        
        </>
    );
}

export default Home;