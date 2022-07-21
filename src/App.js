import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppHeader, Menu, MenuOpcoes,Home, MenuProdutos, MenuSobre, MenuContato, TituloLoja, SearchLoginCart, Search, SearchItem, Login, Cart, CartItens, CartCartao, Body, Container, Main, Linha, GradeProdutos6, Produto01,Produto02, Produto03, Produto04, Produto05, Produto06, Produtos} from "./styled";


function App() {
  return (
    <AppHeader>
      <Menu>
        <MenuOpcoes></MenuOpcoes>
          <Home>HOME</Home>
          <MenuProdutos>PRODUTOS</MenuProdutos>
          <MenuSobre>SOBRE</MenuSobre>
          <MenuContato>CONTATO</MenuContato>
        <SearchLoginCart></SearchLoginCart>
        <Search>
          <SearchItem>🔍 LUPA-Busca (f002)</SearchItem>
        </Search>
        <Cart>
          <CartCartao>🚗Carrinho
            <CartItens>
              produtos adicionados?
            </CartItens>
          </CartCartao>
        </Cart>
        

        
     
      </Menu>

      <TituloLoja>
        <p>TITULO DA LOJA LabCommerce</p>
      </TituloLoja>
      
      <Main>MAINNN </Main>
      
      
      <Container>
        
      CONTAINER PRODUTOS
      <Body>
      BODY
      
      <Produtos>produtos
        
      <GradeProdutos6>GRADE DE PRODUTOS
      <Linha>
      <Produto01>IMAGEM-PRODUTO01</Produto01>
      <Produto02>IMAGEM-PRODUTO02</Produto02>
      <Produto03>IMAGEM-PRODUTO03</Produto03>
      <Produto04>IMAGEM-PRODUTO04</Produto04>
      <Produto05>IMAGEM-PRODUTO05</Produto05>
      <Produto06>IMAGEM-PRODUTO06</Produto06>
      </Linha>
      </GradeProdutos6>
      </Produtos>
      </Body>
      </Container>
      




        HEADER
      </AppHeader>
      


  );
}

export default App;
