import React from 'react'
import {Search} from '../Styled'
function Filtro(props) {
    return( 
        <div>
    <Search>
        <input 
        type="text"
         placeholder="Filtrar por nome"
       value={props.busca}
       onChange={(ev)=>{props.setBusca(ev.target.value)}}
        />
        </Search>
        <Search>
         <input 
         placeholder="Filtrar valor minimo"
         type="number"
         value={props.minPrice}
         onChange={(ev)=>{props.setMinPrice(ev.target.value)}}
        />
        
        </Search>
        <Search>
         <input 
         placeholder="Filtrar valor maximo"
         type="number"
         value={props.maxPrice}
         onChange={(ev)=>{props.setMaxPrice(ev.target.value)}}
        />
        
        </Search>
        <Search>
         <label for="ordenar">Ordenar por:</label>
            <select name="ordenar" value={props.ordenar}
            onChange={(ev)=>{props.setOrdenar(ev.target.value)}}>
           
            <option value={"nome"}>Nome</option>
            <option value={"preco"}>Preço</option>
       
            </select>        
            </Search>
            <Search>
        
            <select name="crs-dcs" value={props.ascender}
            onChange={(ev)=>{props.setAscender(ev.target.value)}}>
           
            <option value={"menor"}>Do menor valor</option>
            <option value={"maior"}>Do maior valor</option>
       
            </select>        
            </Search>

    
    </div>

    )
    
  
        
          
    
}
export default Filtro