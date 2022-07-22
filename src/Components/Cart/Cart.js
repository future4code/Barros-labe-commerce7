import React from 'react'


const Cart = (props) => {
  const listCart = props.cart.map((product) => {

    let sum = product.amount * product.price

    return (
      <div>
        <p>{product.amount}x  {product.price}
        <div>{sum}</div>
        </p>
        <button onClick={() => props.removeProduct(product.id)}>Remover</button>
      </div>
    )
  })

  let sum2 = 0
  for (let i of props.cart) {
    sum2 += i.amount * i.price
  }

  return (
    <div>
      <h3>Carrinho:</h3>
      {listCart}
      <p>Total: R${sum2}</p>
    </div>
  )
}

export default Cart