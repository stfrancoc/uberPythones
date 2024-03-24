import React from "react";

const Cards = (props) => {
    return (
        <>
        <div className="w-44 h-60 border-2 rounded-sm flex shadow-md flex-col items-center justify-around mt-10">
            <img className="w-40 h-32 rounded-full object-cover object-left-top" src={props.img} alt="integrante"/>
            <hr/>
            <p>{props.name}</p>
            <a href={`mailto:${props.email}?subject=Muy buen Trabajo&body=Hola, muy buen trabajo muchachos ya ganaron la materia.`} target="_blank" rel="noopener noreferrer">
                <img className="w-6 h-5" src="https://cdn-icons-png.flaticon.com/512/80/80599.png" alt="mail icon" />
            </a>
        </div>
        </>
    );
}

export default Cards;