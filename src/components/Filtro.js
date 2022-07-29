import React from 'react'
import {} from '../Styled'
function Filtro(props) {
    return( 
        <div>
    <h2>Filtros</h2>
    <label>Nome do produto:
        <input 
        type="text"
         placeholder="Filtrar por nome"
       value={props.busca}
       onChange={(ev)=>{props.setBusca(ev.target.value)}}
        />
        </label>
        <label> Valores:
         <input 
         placeholder="Filtrar valor minimo"
         type="number"
         value={props.minPrice}
         onChange={(ev)=>{props.setMinPrice(ev.target.value)}}
        />
        
        
         <input
         placeholder="Filtrar valor maximo"
         type="number"
         value={props.maxPrice}
         onChange={(ev)=>{props.setMaxPrice(ev.target.value)}}
        />
        </label>
        
         <label for="ordenar">Ordenar por:</label>
            <select name="ordenar" value={props.ordenar}
            onChange={(ev)=>{props.setOrdenar(ev.target.value)}}>
           
            <option value={"nome"}>Nome</option>
            <option value={"preco"}>Preço</option>
       
            </select>        
           
            <select name="crs-dcs" value={props.ascender}
            onChange={(ev)=>{props.setAscender(ev.target.value)}}>
           
            <option value={"asc"}>Do menor valor</option>
            <option value={"desc"}>Do maior valor</option>
       
            </select>        
           
            
    </div>

    )
    
  
        
          
    
}
export default Filtro