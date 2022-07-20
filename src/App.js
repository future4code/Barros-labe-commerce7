import React from 'react';
import Produtos from './components/ListaDeObjetos'
import './App.css';



import ListaDeProdutos from './components/ListaDeObjetos';
import Filtro from './components/Filtro';




function App() {
  return (
    
      <div className='App'>
       <Filtro></Filtro>
      <ListaDeProdutos item={Produtos}/>
  
      </div>
   
  );
}

export default App;