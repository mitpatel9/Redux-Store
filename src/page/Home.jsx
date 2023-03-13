import React from 'react'

import Product from '../component/Product'

const Home = () => {
  return (
    <div>
     <div className="category">
      <label >Categories</label>
      <select name="" id="">
      <option value="all">Select</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>
      <button>Filter</button>
     </div>
      <section>
        <h3>product</h3>
        <Product/>
      </section>
    </div>
  )
}

export default Home
