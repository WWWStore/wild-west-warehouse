import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import superagent from 'superagent';
import Footer from './fixed-footer';
import CategoriesList from './categories-list';

import '../styles/products-list.scss';

export default function Category(props) {
  let [products, setProducts] = useState(null)
  const { slug } = props.match.params;

  useEffect(() => {
    superagent
      .get(`https://wwwshop.herokuapp.com/products`)
      .then(res => {
        let results = res.body.results;
        let categorized = results.filter(product => product.categories.includes(slug));
        setProducts(categorized);
      })
  }, [slug])

  if (!products) {
    return (
      <>
        Loading...
      </>
    )
  }

  return (
    <>
      <CategoriesList />
      <ul className="products-list">
        {
          products.map(product => (
            <li key={product._id}><Link to={`/products/${product._id}`}>
              <h4 className="product-name">{product.name}</h4>
              <img className="product-image" src={product.image_url} alt={product.name}/>
              <h5 className="product-price">${product.price}</h5>
            </Link></li>
          ))
        }
      </ul>
      <Footer />
    </>
  )
};
