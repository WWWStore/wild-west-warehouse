import React, { useState, useEffect } from 'react';
import superagent from 'superagent';

export default function Product(props) {
  let [products, setProducts] = useState(null);
  
  useEffect(() => {
    superagent
      .get(`https://wwwshop.herokuapp.com/products`)
      .then(res => {
        setProducts(res.body.results);
      })
  }, [])

  if (!products) {
    return (
      <>
        Loading...
      </>
    )
  }

  return (
    <>
      <ul>
        {
          products.map(product => (
            // console.log(product)
            <li key={product._id}>{product.name} -- ${product.price}</li>
          ))
        }
      </ul>
    </>
  )
};
