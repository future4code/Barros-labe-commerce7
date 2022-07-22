import React, { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";

function App() {

  const [cart, setCart] = useState([])

  //--------------------- USEEFFECT ------------

  useEffect(
    ()=>{
        setCart(localStorage.getItem("carrinho"))           
    },[]
)
  
    if(cart){
      localStorage.setItem("carrinho",""+cart)       
  }
  

  const addProduct = (id) => {

    const index = cart.findIndex((product) => {
      return product.id === id;
    });
    // Adicionar o produto caso não esteja no carrinho
    if (index < 0) {
      const newProduct = {
        ...product.find((product) => product.id === id),
        amount: 1,
      };
      const updatedCart = [...cart, newProduct];
      setCart(updatedCart);
      // Caso já esteja no carrinho add +1
    } else {
      const updatedCart = cart.map(product => {
        if (product.id === id) {
          return { ...product, amount: product.amount + 1 };
        }
        return product;
      });
      setCart(updatedCart);
    }
  };
  const removeProduct = (id) => {
    const updatedCart = cart
      .map((product) => {
        if (product.id === id) {
          return { ...product, amount: product.amount - 1 };
        }
        return product;
      })
      .filter((product) => product.amount > 0);
    setCart(updatedCart);
  };





  return (
    <div>
         <Cart
          cart={cart}
          removeProduct={removeProduct}
        />
      </div>
    
  );
}

export default App;
