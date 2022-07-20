import React, { useState } from "react";
import ListaDeProdutos from "./ListaDeObjetos";
function Filtro() {
    const [busca,setBusca] = useState("")
    return(
        <div>
            <input type="text"
            placeholder="Buscar por nome"
            onChange={(event) => 
            {setBusca(event.target.value)}}/>
            {ListaDeProdutos.filter((val)=>{
                
            if (busca==="") {
                return val}
                else if 
                (val.nome.toLowercase().includes(busca.toLocaleLowerCase())) { 
                    return val
                    
              }
                
            })}
        </div>
    )
    
}
export default Filtro