import React, { useEffect, useState } from 'react';
import superagent from 'superagent';

export default function Category(props) {
  let [products, setProducts] = useState(null)
  console.log(products)
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
      <ul>
        {
          products.map(product => (
            <li key={product._id}>
              <h3>{product.name}</h3>
              <img src={product.image_url} alt={`${product.name}`} width={200} />
            </li>
          ))
        }
      </ul>
    </>
  )
};
