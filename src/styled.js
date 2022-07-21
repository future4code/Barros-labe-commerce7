import styled from "styled-components";


export const AppHeader=styled.div `
background: linear-gradient(90deg, rgba(2,0,39,1) 0%, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 1%, rgba(3,96,115,1) 100%);
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

export const Body=styled.div `
margin: 0;
font-family: "Nunito", sans-serif;
font-size: 0.9rem;
font-weight: 400;
line-height: 1.6;
color: #212529;
text-align: left;
background-color: #f8fafc;
`;

export const TituloLoja=styled.div `
text-align: center;
color: white;
height: 60vh;
justify-content: center;
align-items: center;
font-family: 'Nunito Sans', sans-serif;
display: flex;
flex-direction: column;
`;

export const Container=styled.div ` 
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
`;

export const Main=styled.div `
display: block;
`;

export const Produtos=styled.div `
padding: 5%;
background-color: rgba(0, 126, 206, 0.1);
text-align: center;
display: flex;
justify-content: center;
flex-direction: column;
`;

export const Linha=styled.div `
display: flex;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
`;

export const GradeProdutos6=styled.div `
padding: 50px 0;
`;

export const Produto01=styled.div `
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
`;

export const Produto02=styled.div `
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
`;

export const Produto03=styled.div `
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
`;

export const Produto04=styled.div `
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
`;

export const Produto05=styled.div `
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
`;

export const Produto06=styled.div `
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
`;

export const MenuContainer=styled.div `
flex-wrap: nowrap;
`;

export const Menu=styled.div `
display: flex !important;
flex-basis: auto;
flex-grow: 1;
align-items: center;
`;

export const MenuOpcoes=styled.div `
    display: flex;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-left: auto:  !important;
    margin-right: auto:  !important;
    margin top: 0;
    box-sizing: border-box;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

export const Home=styled.div `
    position: relative;
    display: list-item;
    text-align: -webkit-match-parent;
    box-sizing: border-box;
    padding: 40px;
`;

export const MenuProdutos=styled.div `
    position: relative;
    display: list-item;
    text-align: -webkit-match-parent;
    padding: 40px;
`;

export const MenuSobre=styled.div `
    position: relative;
    display: list-item;
    text-align: -webkit-match-parent;
    padding: 40px;
`;

export const MenuContato=styled.div `
    position: relative;
    display: list-item;
    text-align: -webkit-match-parent;
    padding: 40px;
`;

export const SearchLoginCart=styled.div `
align-items: center: !important;
flex-direction: row!important;
display: flex: !important;
box-sizing: border-box;
`;

export const Search=styled.div `
    font-size: 1.1em;
    margin: 0 10px;
    text-decoration: none;
    cursor: pointer;
    box-sizing: border-box;
    display: block;
`;

export const SearchItem=styled.div `
text-rendering: auto;
-webkit-font-smoothing: antialiased;
text-decoration: none;
box-sizing: border-box;
display: inline-block;
font-size: inherit;
font: normal normal normal 14px/1 FontAwesome; // Preciso Importar
content: "\f002"; //Ícone de busca Unicode
`;

export const Cart = styled.div `
font-size: 1.1em;
position: relative;
`;

export const CartItens=styled.div ` //Aqui entra o evento do carrinho
display: none;
border: none !important;
content: '\f107'; //icone - instalar fonte
vertical-align: baseline;
font-family: 'FontAwesome';
margin-left: 0;
margin: 0 10px;
text-decoration: none;
cursor: pointer;
font-size: 1.2em;
background: red; //mudar para none, red é só um test
outline: red; //mudar para none, red é só um test
border-radius: 0;
`;

export const CartCartao=styled.div `
content: "\f07a";
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
font-size: inherit;
text-rendering: auto;
text-decoration: none;
box-sizing: border-box;
cursor: pointer;
white-space: nowrap; //toggle
transition: all 0.3s; // verificar se é para o link do produto - ver se tá quebrado
`;




