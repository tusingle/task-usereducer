import React, { useContext } from "react";
import { Cart } from "../Context";

function SingleProduct({ prod }) {

  const {cart, setCart} = useContext(Cart)

  return (
    <div className="products">
      <img src="https://reactjs.org/logo-og.png" alt="react logo" width='250px' />
      

      <div style={{ fontWeight: 400}} className="productDesc">
        <span>REACT{prod.REACT}</span>
        <span>RS-{prod.price}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default SingleProduct;
