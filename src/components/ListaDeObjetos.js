import React from "react"
import Death from "./Img/death.jpg"
import James from "./Img/jmw.webp"
import Lsaber from "./Img/lgsaber.jpg"
import Milano from "./Img/milano.jpg"
import ViaL from "./Img/milkwaymap.png"
import Planetario from "./Img/planetario.jpg"



const Produtos = [
   {id:1,
    image:Death,
   nome:"Death Star",
   preco:"R$ 2000,00"
   },
   {id:2,
    image:James,
   nome:"James web",
   preco:"R$ 3000,00"
   },
   {id:3,
    image:Lsaber,
   nome:"Lightsaber",
   preco:"R$ 1000,00"
   },
   {id:4,
    image:Milano,
   nome:"Milano Falcon",
   preco:"R$ 5000,00"
   },
   {id:5,
    image:ViaL,
   nome:"Via lactea",
   preco:"R$ 7000,00"
   },
   {id:6,
    image:Planetario,
   nome:"Planetario",
   preco:"R$ 3500"
   },


];



   
 function ListaDeProdutos({item}) {
   
   
   return (
<div>
    
    <h2>Produtos de fora da terra</h2>
    
   
    {Produtos.map((val,key)=>(
  
        <span>
       
       <img src={val.image} alt="" width="100"/>
        <h2 key={key}>{val.nome}</h2>
        <h3 key={key}>{val.preco}</h3>
        <button>adicionar ao carrinho</button>
        </span>
 
        
        
    ))}
</div>
    
        )}
    

export default ListaDeProdutos


    


