import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";

const Cart = () => {
 
  let totalprice=0;
  const cart = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();

  const handalremove = (item) => {
    //console.log(item)
    dispatch(remove(item));
  };
  return (
    <div>
      <h1>Cart Item</h1>
      
      {cart.length === 0  ? <h4>Cart is empty</h4>:
      <div className="productsWrapper">
      {cart.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
          <h5>Price: {item.price}</h5>
          <button className="btn" onClick={() => handalremove(item.id)}>
            Remove Cart
          </button>
          <div style={{display:"none"}}>
          {totalprice += item.price}
          </div>
         
        </div>
       
      ))}
      {totalprice === 0 ?  <span></span>: <h4>total price{totalprice}</h4>}
      </div>
      }
        
      
    </div>
  );
};

export default Cart;
