import React, { useState, useEffect } from 'react';
import superagent from 'superagent';

import '../styles/products-list.scss';

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
      <ul className="products-list">
        {
          products.map(product => (
            <a href={`/products/${product._id}`}><li key={product._id}>
              <h4 className="product-name">{product.name}</h4>
              <img className="product-image" src={product.image_url}/>
              <h5 className="product-price">${product.price}</h5>
            </li></a>
          ))
        }
      </ul>
    </>
  )
};
