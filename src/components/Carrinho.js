import React from 'react'


const Carrinho = (props) => {
  const criandoCarrinho = props.carrinho.map((e) => {
     
     

    return (
      <div>
        <p>{e.quantidade}x {e.nome}
        <div>{e.quantidade * e.preco},00</div>
        </p>
        <button onClick={() => props.removerProduto(e.id)}>Remover</button>
      </div>
    )
  })

  let soma2 = 0
  for (let i of props.carrinho) {
    soma2 += i.quantidade * i.preco
  }

  
    return (
    <div>
      
      <h3>Carrinho:</h3>
      {criandoCarrinho}
      <p>Valor total: R${soma2},00</p>
    </div>
  )
}

export default Carrinho