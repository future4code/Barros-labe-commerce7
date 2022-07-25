import styled from "styled-components";

//Alteração para mergear
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
height: 40vh;
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

export const LinhaProduto=styled.div `
display: flex;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
box-sizing: border-box;
`;

//NOTE CARD PRODUTO 01

export const CardProduto01 = styled.div`
flex: 0 0 25%;
max-width: 25%;
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-bottom: 30px;
box-sizing: border-box;
display: block;
`;

export const CardProduto01Interno1=styled.div `
margin-bottom: 30px;
box-sizing: border-box;
display: block;
`;


export const CardProduto01Interno2 = styled.div ` //Aqui entra a imagem do Produto 01
background: #f5f5f5;
position: relative;
padding: 20px;
height: 230px;
align-items: center !important;
justify-content: center !important;
display: flex !important;
box-sizing: border-box;
`;

export const CardImagem01=styled.div `
max-width: 170px;
height: auto;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
`;

//NOTE CARD PRODUTO 02

export const CardProduto02 = styled.div`
flex: 0 0 25%;
max-width: 25%;
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;
box-sizing: border-box;
display: block;
`;

export const CardProduto02Interno1=styled.div `
margin-bottom: 30px;
box-sizing: border-box;
display: block;
`;

export const CardProduto01Titulo=styled.div `
paddind: 15px 0;
box-sizing: border-box;
display: block;
`;

export const CardH3=styled.div ` //Título do Card
font-family: "Poppins", sans-serif;
    font-weight: 800;
    line-height: 1.1;
    display: block;
    text-transform: uppercase!important;
    margin-bottom: 0 !important;
    margin-top: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    
`;

export const Preço01=styled.div `
color: #6c757d!important;
display: inline-block;
    text-decoration: none;
    box-sizing: border-box;
`;

export const BotaoAdicionarTexto=styled.div `
    appearance: auto;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-align: center;
    text-shadow: none;
    display: inline-block;
    align-items: flex-start;
    
    
    
`;

export const BotaoAdicionar=styled.div `
width: 15%;
text-align: center;
margin: 5rem 0rem;
background-color: whitesmoke;
border-radius: black;
border-width: initial;
border-style: solid;
border-color: rebeccapurple;
border-radius: 10px;
apparence: none;
display: inline-block;
padding: 0.3rem 2rem 0.2rem 3.5rem;
text-transform: uppercase;
text-decoration: none;
color: inherit;
outline: none;
color: black;
  cursor: pointer;
  transition: color 300ms;
    transition-property: color;
    transition-duration: 300ms;
    transition-timing-function: ease;
    transition-delay: 0s;
`;


export const CardProduto02Interno2 = styled.div ` //Aqui entra a imagem do Produto 01
background: #f5f5f5;
position: relative;
padding: 20px;
height: 230px;
align-items: center !important;
justify-content: center !important;
display: flex !important;
box-sizing: border-box;
`;

export const CardImagem02=styled.div `
max-width: 170px;
height: auto;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
`;

//NOTE CARD PRODUTO 03


// FINAL CARD PRODUTO 03




export const GradeProdutos6=styled.span `
padding: 25px 0;
display:grid;
grid-template-columns:repeat(3,3fr);
grid-template-rows:1fr 1fr;
button{background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  

};
img{
    max-width: 100%;
    max-height: 100%;
}
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
    margin-left: auto !important;
    margin-right: auto  !important;
    margin-top: 0;
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
align-items: center !important;
flex-direction: row!important;
display: flex !important;
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

//ANCHOR FOOTER

export const Footer=styled.div `
background: linear-gradient(90deg, rgba(2,0,39,1) 0%, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 1%, rgba(3,96,115,1) 100%);
min-height: 50vh;
width:100%;
display: flex;
flex-direction: row;
justify-content: space-around;
padding-bottom: 8rem;
padding-top: 2rem;
font-size: calc(10px + 2vmin);
color: white;
`;

    export const FooterItem01=styled.div `
    font-size: 0.9rem;
    `;

export const FooterItem02=styled.div `
font-size: 0.9rem;
`;

export const FooterItem03=styled.div `
font-size: 0.9rem;
`;

export const FooterItem04=styled.div `
font-size: 0.9rem;
`;

export const FooterTitulo01=styled.div `
font-size: 1rem;
padding: 1rem 0;
`;
export const SpanProdutos = styled.span`
display:grid;
image{
   max-width:fit-content;
   max-height:fit-content;
    
}
button{
    



  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  border: none;

  color: #fff;
  background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
   background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}


`