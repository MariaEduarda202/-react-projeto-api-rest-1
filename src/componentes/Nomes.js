import React, { useState } from "react";
import axios from "axios";



export default function Pessoas() {
    const [info, setInfo] = useState([]);
    const [person, setPerson] = useState([]);


   

    function show(){
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(resposta => { 
        setInfo(resposta.data.results.slice(0, 5));
        setPerson(resposta.data.results.slice(5, 10));
        }).catch((e) => {
        console.log("Erro.")
    })
    }


    return(
        <div>
            <h1>Pessoas Cadastradas</h1>
            <button onClick={show}>Clique para visualizar novos rostos</button>
            <div id="container">
                <div id="left">
                    {info.map((informacao) =>{
                        return(
                            <div>
                                <img src={informacao.picture.large} alt=""/>
                                <h3>{informacao.name.first}</h3>
                            </div>
                        )
                    })}
                </div>
                { <div id="right">
                    {person.map((informacao) =>{
                        return(
                            <div>
                                <img src={informacao.picture.large} alt=""/>
                                <h3>{informacao.name.first}</h3>
                            </div>
                        )
                    })}
                </div>}
            </div>
        </div>
    );
};



   



