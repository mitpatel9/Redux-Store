import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {add } from '../store/CartSlice'
import { featchProduct } from "../store/ProductSlice";
import { STATUSES } from "../store/ProductSlice";


const Product = () => {
  const dispatch=useDispatch();
  const {data, status}=useSelector(state=>state.product)
  useEffect(() => {
    dispatch(featchProduct())

    // const featchProduct = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products")
    //     const data= await res.json()
    //     setProduct(data);
    // };
    // featchProduct();
  }, []);

  if(status=== STATUSES.LOADING){
    return <h2>Loading...</h2>
  }
  if(status=== STATUSES.ERROR){
    return <h2>try again later</h2>
  }


  const handaladd=(item)=>{
    console.log(item)
        dispatch(add(item))
  }
  return <div className="productsWrapper">
    {data.map((item)=>(
        <div className="card" key={item.id}>
        <img src={item.image} alt="" />
        <h4>{item.title}</h4>
        <h5>Price: {item.price}</h5>
        <button className="btn" onClick={() => handaladd(item)} >Add to Cart</button>
     </div>
    ))}

  </div>;
};

export default Product;
