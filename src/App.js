import React, { useState, useEffect } from 'react';
import Filtro from './components/Filtro'
import { BlocoProdutos, BotaoCarrinho } from './Styled';
import Death from "./components/Img/death.jpg"
import James from "./components/Img/jmw.webp"
import Lsaber from "./components/Img/lgsaber.jpg"
import Milano from "./components/Img/milano.jpg"
import ViaL from "./components/Img/milkwaymap.png"
import Planetario from "./components/Img/planetario.jpg"
import Carrinho from './components/Carrinho';

// Lista não renderizada

const Produtos = [
   {id:1,
    image:Death,
   nome:"Death Star",
   preco:2600,
   },
   {id:2,
    image:James,
   nome:"James web",
   preco:3500,
   },
   {id:3,
    image:Lsaber,
   nome:"Lightsaber",
   preco:880,
   },
   {id:4,
    image:Milano,
   nome:"Milano Falcon",
   preco:7250,
   },
   {id:5,
    image:ViaL,
   nome:"Via lactea",
   preco:660,
   },
   {id:6,
    image:Planetario,
   nome:"Planetario",
   preco:3450,
   },


];

                
function App() {
  // const e useStates
const [busca,setBusca] = useState("")
const [minPrice,setMinPrice]= useState(-Infinity)
const [maxPrice,setMaxPrice] = useState(Infinity)
const [ordenar,setOrdenar] = useState("nome")
const [ascender, setAscender] = useState("asc")
const [carrinho, setCarrinho] = useState(() => {
  if (localStorage.getItem("carrinho")) {
    return JSON.parse(localStorage.getItem("carrinho"));
  }
  return [];
})

//Criando o carrinho
useEffect(() => {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]
)

//Adicionar Produtos
const addProdutos = (id) => {

  const index = carrinho.findIndex((produto) => {
    return produto.id === id;
  });
  // Adicionar o produto caso não esteja no carrinho
  if (index < 0) {
    const produtoAtualizado = {
      ...Produtos.find((produto) => produto.id === id),
      quantidade: 1,
    };
    const novoCarrinho = [...carrinho, produtoAtualizado];
    setCarrinho(novoCarrinho);
    // Caso já esteja no carrinho add +1
  } else {
    const novoCarrinho = carrinho.map(produto => {
      if (produto.id === id) {
        return { ...produto, quantidade: produto.quantidade + 1 };
      }
      return produto;
    });
    setCarrinho(novoCarrinho);
  }
};

//remover

const removerProduto = (id) => {
  const novoCarrinho = carrinho
    .map((produtos) => {
      if (produtos.id === id) {
        return { ...produtos, quantidade: produtos.quantidade - 1 };
      }
      return produtos;
    })
    .filter((produtos) => produtos.quantidade > 0);
  setCarrinho(novoCarrinho);
};

 
 
  return (
    
    <BlocoProdutos>
      <Carrinho
      carrinho={carrinho}
      removerProduto={removerProduto}           
      />
      <Filtro
      busca={busca}
      minPrice={minPrice}
      maxPrice={maxPrice}
      ordenar={ordenar}
      ascender={ascender}
      setBusca={setBusca}
      setMinPrice={setMinPrice}
      setMaxPrice={setMaxPrice}
      setOrdenar={setOrdenar}
      setAscender={setAscender}
      // Logicas 
      />
      
       {Produtos.filter
       ((Produtos)=>
       {return Produtos.nome.toLowerCase().includes(busca.toLocaleLowerCase())
      }).filter((Produtos)=>{
        return Produtos.preco >= minPrice || minPrice === ""
      }).filter((Produtos)=>{
        return Produtos.preco <= maxPrice || maxPrice === ""
      }).sort((primeiroValor,proximoValor)=>{
        switch (ordenar) {
          case "preco":
          return primeiroValor.preco - proximoValor.preco ;
          default: 
          return primeiroValor.nome.localeCompare(proximoValor.nome)
          
          
        }
      }).sort(()=>{
         if (ascender === "asc") 
         { return 0
        
      } else { return -1
        
      }
        
      }).map(val => {
       return(
    
 // Parte a ser renderizada
 <span>

<img key={Produtos.image} src={val.image} alt="img" width="100"/>
 <h2 key={Produtos.nome}>{val.nome}</h2>
 <h3 key={Produtos.preco}>R$:{val.preco},00</h3>
 <BotaoCarrinho onClick={addProdutos}>  adicionar ao carrinho</BotaoCarrinho>
 </span>
       )})}
         

         
    
  
      
       
      
      </BlocoProdutos>
      
      
 
  )};
        
    

export default App;